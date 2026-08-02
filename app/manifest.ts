import type { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Rheinland Solutions",
    short_name: "Rheinland",
    description: "Digitalisierung, Prozess-Beratung und Schulungen für Unternehmen.",
    start_url: "/",
    display: "standalone",
    background_color: "#f8f8f2",
    theme_color: "#e8f51c",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
      {
        src: "/apple-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  }
}
