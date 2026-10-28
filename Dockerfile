# Ezy Goa Tempo Travels: Next.js standalone build for Easypanel.

# ---------- Build ----------
FROM node:22-alpine AS builder
WORKDIR /app
ENV NEXT_TELEMETRY_DISABLED=1

COPY package.json package-lock.json ./
RUN npm ci

COPY . .

# NEXT_PUBLIC_* values are baked into the JavaScript at build time, so they must be set here,
# not only as runtime environment variables. The defaults mean Easypanel needs no build settings.
ARG NEXT_PUBLIC_SITE_URL=https://www.ezygoatempotravels.com
ARG NEXT_PUBLIC_GTM_ID=GTM-MBMT9VR7
ENV NEXT_PUBLIC_SITE_URL=$NEXT_PUBLIC_SITE_URL \
    NEXT_PUBLIC_GTM_ID=$NEXT_PUBLIC_GTM_ID

RUN npm run build

# ---------- Run ----------
FROM node:22-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production \
    NEXT_TELEMETRY_DISABLED=1 \
    PORT=3000 \
    HOSTNAME=0.0.0.0

# Standalone server, then the static assets and public files it doesn't include itself.
COPY --from=builder --chown=node:node /app/.next/standalone ./
COPY --from=builder --chown=node:node /app/.next/static ./.next/static
COPY --from=builder --chown=node:node /app/public ./public
# sharp (image optimisation) with its native binaries for this platform, so next/image
# works without warnings in the standalone output.
COPY --from=builder --chown=node:node /app/node_modules/sharp ./node_modules/sharp
COPY --from=builder --chown=node:node /app/node_modules/@img ./node_modules/@img

USER node
EXPOSE 3000
CMD ["node", "server.js"]
