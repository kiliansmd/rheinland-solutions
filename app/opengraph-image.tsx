import { ImageResponse } from "next/og"

export const alt = "Rheinland Solutions – Digitalisierung, die wirkt."
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default function OpenGraphImage() {
  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", background: "#f4f5fa", color: "#10123f", display: "flex", flexDirection: "column", padding: "60px 72px", borderTop: "14px solid #f1e613", justifyContent: "space-between" }}>
      <div style={{ display: "flex", fontSize: 26, letterSpacing: 4 }}>RHEINLAND SOLUTIONS</div>
      <div style={{ display: "flex", flexDirection: "column", fontSize: 82, fontWeight: 700, lineHeight: 1.1 }}>
        <span>Digitalisierung,</span>
        <span>die wirkt.</span>
      </div>
      <div style={{ display: "flex", fontSize: 27 }}>Beratung · Unternehmenssoftware · Digitale Werkzeuge</div>
      <div style={{ display: "flex", fontSize: 22, color: "#555978" }}>www.rheinland-solutions.de</div>
    </div>,
    size,
  )
}
