import type { MetadataRoute } from "next";
import { BUSINESS } from "@/lib/business";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: BUSINESS.name,
    short_name: "Ezy Goa",
    description: "Tempo traveller, Urbania and mini bus hire in Goa.",
    start_url: "/",
    display: "standalone",
    background_color: "#fbf7ee",
    theme_color: "#0e4d3c",
    icons: [
      { src: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
  };
}
