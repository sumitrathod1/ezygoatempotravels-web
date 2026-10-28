"use client";

import Link from "next/link";
import { ChevronDown } from "lucide-react";
import {
  useId,
  useRef,
  useState,
  useSyncExternalStore,
  type ChangeEvent,
  type FormEvent,
  type ReactNode,
  type SelectHTMLAttributes,
} from "react";
import {
  PASSENGER_RANGES,
  PLACE_SUGGESTIONS,
  TRIP_TYPES,
  VEHICLE_OPTIONS,
  labelFor,
  normaliseIndianMobile,
  suggestionHint,
  urbaniaFor,
  type TripType,
  type VehicleChoice,
} from "@/lib/booking";
import { pushEvent } from "@/lib/track";
import { bookingMessage, waHref } from "@/lib/whatsapp";
import { WhatsAppIcon } from "@/components/ui/Icons";

type FieldName =
  | "tripType"
  | "date"
  | "time"
  | "pickup"
  | "drop"
  | "passengers"
  | "vehicle"
  | "name"
  | "phone"
  | "message";

type Values = Record<FieldName, string>;
type Errors = Partial<Record<FieldName, string>>;

/** Required fields, in on-screen order, so the first error can be focused. */
const REQUIRED_ORDER: FieldName[] = ["tripType", "date", "passengers", "name", "phone"];

function todayIso(): string {
  const d = new Date();
  const pad = (n: number) => String(n).padStart(2, "0");
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
}

const subscribe = () => () => {};

function validate(v: Values, today: string): Errors {
  const errors: Errors = {};
  if (!v.tripType) errors.tripType = "Choose a trip type.";
  if (!v.date) errors.date = "Choose your pickup date.";
  else if (today && v.date < today) errors.date = "The pickup date can't be in the past.";
  if (!v.passengers) errors.passengers = "Choose your group size.";
  if (!v.name.trim()) errors.name = "Enter your name.";
  if (!v.phone.trim()) errors.phone = "Enter your mobile number.";
  else if (!normaliseIndianMobile(v.phone)) errors.phone = "Enter a 10-digit Indian mobile number.";
  return errors;
}

/** "2026-11-14" → "Sat, 14 Nov 2026" */
function formatDate(iso: string): string {
  const d = new Date(`${iso}T00:00:00`);
  const part = (opts: Intl.DateTimeFormatOptions) => d.toLocaleDateString("en-IN", opts);
  return `${part({ weekday: "short" })}, ${d.getDate()} ${part({ month: "short" })} ${d.getFullYear()}`;
}

function formatTime(hhmm: string): string {
  if (!hhmm) return "";
  const [h, m] = hhmm.split(":").map(Number);
  return `${((h + 11) % 12) + 1}:${String(m).padStart(2, "0")} ${h < 12 ? "am" : "pm"}`;
}

const controlClass =
  "block min-h-12 w-full rounded-xl border border-line bg-white px-3.5 py-2.5 text-base text-ink placeholder:text-muted/70 focus:border-forest focus:ring-2 focus:ring-forest/25 focus:outline-none aria-[invalid=true]:border-danger";

interface FieldProps {
  id: string;
  label: string;
  required?: boolean;
  error?: string;
  hint?: string;
  className?: string;
  children: ReactNode;
}

function Field({ id, label, required, error, hint, className = "", children }: FieldProps) {
  return (
    <div className={className}>
      <label htmlFor={id} className="mb-1.5 block text-[0.95rem] font-semibold text-ink">
        {label}
        {required ? (
          <span className="text-danger" aria-hidden="true">
            {" "}
            *
          </span>
        ) : (
          <span className="font-normal text-muted"> (optional)</span>
        )}
      </label>
      {children}
      {hint && !error && (
        <p id={`${id}-hint`} className="mt-1 text-sm text-muted">
          {hint}
        </p>
      )}
      {error && (
        <p id={`${id}-error`} className="mt-1 text-sm font-medium text-danger">
          {error}
        </p>
      )}
    </div>
  );
}

function SelectBox(props: SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <div className="relative">
      <select {...props} className={`${controlClass} appearance-none pr-10`} />
      <ChevronDown
        className="pointer-events-none absolute top-1/2 right-3 size-5 -translate-y-1/2 text-muted"
        aria-hidden="true"
      />
    </div>
  );
}

function Step({ n, title, children }: { n: number; title: string; children: ReactNode }) {
  return (
    <fieldset className="min-w-0">
      <legend className="mb-4 flex items-center gap-2.5 font-display text-lg font-bold text-forest">
        <span className="grid size-7 place-items-center rounded-full bg-sun text-sm text-night">{n}</span>
        {title}
      </legend>
      <div className="grid gap-4 sm:grid-cols-2">{children}</div>
    </fieldset>
  );
}

export interface BookingFormProps {
  /** "compact" tucks the optional fields away; used beside the home page hero. */
  variant?: "full" | "compact";
  defaultTripType?: TripType;
  defaultVehicle?: VehicleChoice;
  /** Tour name added to the WhatsApp message, e.g. "North Goa Sightseeing". */
  subject?: string;
}

export function BookingForm({ variant = "full", defaultTripType, defaultVehicle, subject }: BookingFormProps) {
  const uid = useId();
  const id = (name: FieldName) => `${uid}-${name}`;
  const formRef = useRef<HTMLFormElement>(null);
  const today = useSyncExternalStore(subscribe, todayIso, () => "");

  const [values, setValues] = useState<Values>({
    tripType: defaultTripType ?? "",
    date: "",
    time: "",
    pickup: "",
    drop: "",
    passengers: "",
    vehicle: defaultVehicle ?? "",
    name: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState<Errors>({});
  // Once someone picks a vehicle themselves, group size stops overriding it.
  const [vehicleChosen, setVehicleChosen] = useState(Boolean(defaultVehicle));
  const [vehicleSuggested, setVehicleSuggested] = useState(false);
  const [sentUrl, setSentUrl] = useState<string | null>(null);

  function update(name: FieldName, value: string) {
    setValues((v) => ({ ...v, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  }

  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    update(e.target.name as FieldName, e.target.value);

  function onPassengersChange(e: ChangeEvent<HTMLSelectElement>) {
    update("passengers", e.target.value);
    const suggestion = PASSENGER_RANGES.find((r) => r.value === e.target.value)?.vehicle;
    if (!vehicleChosen && suggestion) {
      update("vehicle", suggestion);
      setVehicleSuggested(true);
    }
  }

  function onVehicleChange(e: ChangeEvent<HTMLSelectElement>) {
    update("vehicle", e.target.value);
    setVehicleChosen(true);
    setVehicleSuggested(false);
  }

  /** Props that wire a control to its label, error and hint. */
  const a11y = (name: FieldName, hint = false) => ({
    id: id(name),
    name,
    "aria-invalid": errors[name] ? true : undefined,
    "aria-describedby": errors[name] ? `${id(name)}-error` : hint ? `${id(name)}-hint` : undefined,
  });

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const found = validate(values, today);
    setErrors(found);
    const firstError = REQUIRED_ORDER.find((f) => found[f]);
    if (firstError) {
      formRef.current?.querySelector<HTMLElement>(`[name="${firstError}"]`)?.focus();
      return;
    }

    const phone = normaliseIndianMobile(values.phone) as string;
    const choice = values.vehicle || "not_sure";
    // The Urbania resolves to its 12 or 17 seater variant from the group size.
    const urbania = choice === "urbania" ? urbaniaFor(values.passengers) : null;

    // No personal data in the event: only option codes.
    pushEvent({
      event: "booking_form_submit",
      trip_type: values.tripType,
      vehicle: urbania?.code ?? choice,
      passengers: values.passengers,
    });

    const url = waHref(
      bookingMessage({
        subject,
        tripType: labelFor(TRIP_TYPES, values.tripType),
        vehicle: urbania?.label ?? labelFor(VEHICLE_OPTIONS, choice),
        passengers: labelFor(PASSENGER_RANGES, values.passengers),
        date: formatDate(values.date),
        time: formatTime(values.time),
        pickup: values.pickup.trim(),
        drop: values.drop.trim(),
        name: values.name.trim(),
        phone: `+91 ${phone.slice(0, 5)} ${phone.slice(5)}`,
        message: values.message.trim(),
      }),
    );
    setSentUrl(url);

    // Opened from code, not a link, so the click listener never adds a whatsapp_click.
    const win = window.open(url, "_blank");
    if (win) win.opener = null;
    else window.location.href = url;
  }

  // Urbania gets its own hint (which variant, or that the group is too big for it), whether the
  // vehicle was picked by hand or not. Otherwise the hint explains an automatic suggestion.
  const vehicleHint =
    values.vehicle === "urbania"
      ? urbaniaFor(values.passengers).hint
      : vehicleSuggested && values.vehicle
        ? suggestionHint(values.vehicle as VehicleChoice)
        : undefined;

  const compact = variant === "compact";
  const listId = `${uid}-places`;

  const timeField = (
    <Field id={id("time")} label="Pickup time">
      <input type="time" value={values.time} onChange={onChange} className={controlClass} {...a11y("time")} />
    </Field>
  );
  const dropField = (
    <Field id={id("drop")} label="Drop location">
      <input
        type="text"
        list={listId}
        autoComplete="off"
        maxLength={120}
        placeholder="Hotel, venue or area"
        value={values.drop}
        onChange={onChange}
        className={controlClass}
        {...a11y("drop")}
      />
    </Field>
  );
  const messageField = (
    <Field id={id("message")} label="Anything else we should know?" className="sm:col-span-2">
      <textarea
        rows={3}
        maxLength={500}
        placeholder="Flight number, number of suitcases, extra stops, return trip…"
        value={values.message}
        onChange={onChange}
        className={`${controlClass} resize-y`}
        {...a11y("message")}
      />
    </Field>
  );

  return (
    <form ref={formRef} onSubmit={handleSubmit} noValidate className={compact ? "space-y-6" : "space-y-8"}>
      <datalist id={listId}>
        {PLACE_SUGGESTIONS.map((place) => (
          <option key={place} value={place} />
        ))}
      </datalist>

      <Step n={1} title="Your trip">
        <Field id={id("tripType")} label="Trip type" required error={errors.tripType}>
          <SelectBox value={values.tripType} onChange={onChange} {...a11y("tripType")}>
            <option value="">Select trip type</option>
            {TRIP_TYPES.map((t) => (
              <option key={t.value} value={t.value}>
                {t.label}
              </option>
            ))}
          </SelectBox>
        </Field>
        <Field id={id("date")} label="Pickup date" required error={errors.date}>
          <input
            type="date"
            min={today || undefined}
            value={values.date}
            onChange={onChange}
            className={controlClass}
            {...a11y("date")}
          />
        </Field>
        {!compact && timeField}
        <Field id={id("pickup")} label="Pickup location" className={compact ? "sm:col-span-2" : ""}>
          <input
            type="text"
            list={listId}
            autoComplete="off"
            maxLength={120}
            placeholder="Airport, hotel or area"
            value={values.pickup}
            onChange={onChange}
            className={controlClass}
            {...a11y("pickup")}
          />
        </Field>
        {!compact && dropField}
      </Step>

      <Step n={2} title="Group and vehicle">
        <Field id={id("passengers")} label="Group size" required error={errors.passengers}>
          <SelectBox value={values.passengers} onChange={onPassengersChange} {...a11y("passengers")}>
            <option value="">How many people?</option>
            {PASSENGER_RANGES.map((r) => (
              <option key={r.value} value={r.value}>
                {r.label}
              </option>
            ))}
          </SelectBox>
        </Field>
        <Field id={id("vehicle")} label="Vehicle" hint={vehicleHint}>
          <SelectBox value={values.vehicle} onChange={onVehicleChange} {...a11y("vehicle", Boolean(vehicleHint))}>
            <option value="">Choose a vehicle</option>
            {VEHICLE_OPTIONS.map((v) => (
              <option key={v.value} value={v.value}>
                {v.label}
              </option>
            ))}
          </SelectBox>
        </Field>
      </Step>

      <Step n={3} title="Your details">
        <Field id={id("name")} label="Your name" required error={errors.name}>
          <input
            type="text"
            autoComplete="name"
            maxLength={80}
            value={values.name}
            onChange={onChange}
            className={controlClass}
            {...a11y("name")}
          />
        </Field>
        <Field id={id("phone")} label="Mobile number" required error={errors.phone}>
          <div className="flex">
            <span className="grid min-h-12 place-items-center rounded-l-xl border border-r-0 border-line bg-sand px-3 font-semibold text-muted">
              +91
            </span>
            <input
              type="tel"
              inputMode="tel"
              autoComplete="tel-national"
              maxLength={16}
              placeholder="10-digit mobile number"
              value={values.phone}
              onChange={onChange}
              className={`${controlClass} rounded-l-none`}
              {...a11y("phone")}
            />
          </div>
        </Field>
        {!compact && messageField}
      </Step>

      {compact && (
        <details className="group rounded-xl border border-line bg-white/60 px-4 py-3">
          <summary className="flex min-h-8 cursor-pointer list-none items-center justify-between font-semibold text-forest">
            Add pickup time, drop and a note
            <ChevronDown className="size-5 transition-transform group-open:rotate-180" aria-hidden="true" />
          </summary>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            {timeField}
            {dropField}
            {messageField}
          </div>
        </details>
      )}

      <div>
        {sentUrl && (
          <div role="status" className="mb-4 rounded-xl bg-mint p-4 text-[0.95rem]" data-no-track>
            WhatsApp should now be open with your details. Press send there to reach us. If it didn&apos;t
            open,{" "}
            <a href={sentUrl} target="_blank" rel="noopener noreferrer" className="font-semibold text-forest underline">
              open WhatsApp again
            </a>
            .
          </div>
        )}
        <button type="submit" className="btn btn-forest w-full text-lg">
          <WhatsAppIcon className="size-5" />
          Get a quote on WhatsApp
        </button>
        <p className="mt-3 text-sm text-muted">
          Sending opens WhatsApp with these details filled in. Nothing is stored on this website. See our{" "}
          <Link href="/privacy-policy/" className="font-medium text-forest underline">
            privacy policy
          </Link>
          .
        </p>
      </div>
    </form>
  );
}
