/** Amazon DE products checked on 2026-10-17. No prices/images copied from Amazon. */
export const amazonTrackingId = "rs-website-21"
export const productReviewDate = "2026-10-17"

export const products = {
  miniPc: {
    asin: "B0F9FS819H",
    name: "GMKtec G3 Pro · 16 GB RAM, 512 GB SSD",
    purpose: "Ein mögliches Ausgangsgerät für ein Dokumentenarchiv oder mehrere kleine Serverdienste.",
    note: "Intel Core i3-10110U. Betriebssystem, UEFI, Virtualisierung und Treiber vor dem Kauf für deinen Installationsweg prüfen. Kein von uns getestetes Komplettsystem; Einrichtung und Backup kommen hinzu.",
  },
  backupSsd: {
    asin: "B09SB38KMD",
    name: "Samsung T7 Shield · externe SSD, 1 TB",
    purpose: "Ein separater USB-Datenträger für Sicherungen deiner Dokumente und Dateien.",
    note: "Die benötigte Kapazität hängt von Datenmenge und Sicherungsständen ab. Eine angeschlossene SSD allein ist noch kein Backup: Sicherungsplan, Wiederherstellungstest und getrennte Aufbewahrung gehören dazu.",
  },
  energyPlug: {
    asin: "B0G1MW1FFF",
    name: "Shelly Plug S Gen3 · weiß, 2er-Pack",
    purpose: "Macht den Verbrauch einzelner angeschlossener Geräte sichtbar. Die Verbindung erfolgt über WLAN.",
    note: "Misst nicht den gesamten Hausverbrauch. Herstellergrenzen beachten: maximal 12 A beziehungsweise 2.500 W bei ohmscher Last. Einschaltstrom und Lastart prüfen; kein Ersatz für einen Abrechnungszähler.",
  },
  climateSensor: {
    asin: "B0CNS167ZG",
    name: "Shelly H&T Gen3 · Temperatur und Luftfeuchte",
    purpose: "Zeigt Temperatur und Luftfeuchtigkeit an und liefert Werte für deine Raumklima-Auswertung.",
    note: "WLAN-Modell mit Display, kein CO₂-Sensor. Stromversorgung und Meldeintervalle bei der Planung berücksichtigen. Für Home Assistant die Shelly-Integration einrichten; keine lückenlose Echtzeitmessung voraussetzen.",
  },
} as const

type ProductKey = keyof typeof products
type ProductSelection = { intro: string; items: readonly ProductKey[] }

// Deliberately explicit: no shopping blocks on unrelated website/business guides.
export const articleProducts: Record<string, ProductSelection> = {
  "homeserver-hardware": {
    intro: "Zwei konkrete Beispiele für das kleine Mehrzweckserver-Profil. Gleiche deine Anforderungen zuerst mit der Ausstattung ab — vorhandene geeignete Hardware musst du nicht ersetzen.",
    items: ["miniPc", "backupSsd"],
  },
  "homeserver-einrichten": {
    intro: "Falls noch kein geeigneter Zielrechner vorhanden ist, kannst du diese Hardware als Ausgangspunkt prüfen. Die Anleitung installiert Home Assistant OS direkt; die vorhandene Installation wird dabei ersetzt.",
    items: ["miniPc"],
  },
  "dokumente-wiederfinden": {
    intro: "Für ein eigenes Dokumentenarchiv brauchst du Rechenleistung und ein getrenntes Sicherungsziel. Diese Beispiele ersetzen keine Prüfung deiner Datenmenge oder des gewünschten Betriebs.",
    items: ["miniPc", "backupSsd"],
  },
  "wichtige-mails-archivieren": {
    intro: "Eine vorhandene Paperless-Installation genügt für den Einstieg. Für deren Dokumentensicherung kann ein separater Datenträger sinnvoll sein — ein weiterer Server ist nicht automatisch nötig.",
    items: ["backupSsd"],
  },
  "energiekosten-verstehen": {
    intro: "Als Ergänzung zu den Hauszählerdaten kannst du einzelne Verbraucher separat beobachten. Eine Messsteckdose ersetzt weder den Hauszähler noch die Daten deines Wechselrichters.",
    items: ["energyPlug"],
  },
  "raumklima-verstehen": {
    intro: "Für die Temperatur- und Feuchtemessung aus diesem Beitrag ist dieser Sensor ein mögliches Beispiel. Für eine CO₂-Auswertung brauchst du ein anderes Gerät mit entsprechender Messfunktion.",
    items: ["climateSensor"],
  },
  "smart-home-was-ist-sinnvoll": {
    intro: "Zwei mögliche Einstiege: einen auffälligen Stromverbrauch verstehen oder das Raumklima beobachten. Wähle den Baustein für dein konkretes Problem — du brauchst nicht beides.",
    items: ["energyPlug", "climateSensor"],
  },
  "cloud-ist-nicht-automatisch-backup": {
    intro: "Ein externer Datenträger kann die getrennte Sicherung aus der Anleitung aufnehmen. Prüfe zuerst, wie viel Speicher deine Dateien und mehrere Sicherungsstände brauchen.",
    items: ["backupSsd"],
  },
}

export function amazonProductUrl(asin: string) {
  if (!/^[A-Z0-9]{10}$/.test(asin)) throw new Error("Invalid Amazon product identifier")
  return `https://www.amazon.de/dp/${asin}/ref=nosim?tag=${amazonTrackingId}`
}

export function getArticleProducts(slug: string) {
  const selection = Object.hasOwn(articleProducts, slug) ? articleProducts[slug] : undefined
  return selection ? { intro: selection.intro, items: selection.items.map(key => products[key]) } : null
}
