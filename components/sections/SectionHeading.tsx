import type { ReactNode } from "react";

export function SectionHeading({
  eyebrow,
  title,
  intro,
  id,
  center = false,
}: {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  id?: string;
  center?: boolean;
}) {
  return (
    <div className={`mb-8 max-w-3xl ${center ? "mx-auto text-center" : ""}`}>
      {eyebrow && <p className="eyebrow mb-2">{eyebrow}</p>}
      <h2 id={id} className="text-3xl font-extrabold text-forest sm:text-4xl">
        {title}
      </h2>
      {intro && <p className="mt-3 text-lg text-muted">{intro}</p>}
    </div>
  );
}
