import type { Article } from "./types"

export const businessArticles: Article[] = [
  {
    number: 9, slug: "informationen-mit-formularen-erfassen", category: "Im Betrieb",
    title: "Schluss mit Informationen aus fünf E-Mails: ein Formular, ein klarer Ablauf.",
    description: "Entwirf einen strukturierten Anfrageprozess und teste Formular, Benutzerzugang, Datenansicht und Export mit fiktiven Angaben.",
    lead: "Eine Anfrage kommt per Mail, die Ergänzung per Messenger und die entscheidende Angabe erst auf Nachfrage. Ein gutes Formular verkürzt diese Schleife. Entscheidend ist nicht, möglichst viele Felder einzubauen, sondern die Informationen abzufragen, mit denen der nächste Arbeitsschritt wirklich beginnen kann.",
    result: "Ein getesteter Formularablauf für fiktive Serviceanfragen – von der Feldplanung über einen Benutzerzugang bis zum Export.",
    level: "Praxisanleitung · Prozess & Formular",
    prerequisites: ["Ein klar abgegrenzter interner Ablauf und ein verantwortlicher Ansprechpartner", "Für den beschriebenen Produkttest ein freigeschalteter Secure-Data-Adminzugang; kein kostenloses Essentials-Werkzeug", "Zwei getrennte Testkonten und ausschließlich fiktive Angaben", "Vor Echtbetrieb geklärte Berechtigungen, Speicherfristen und Verarbeitungsvorgaben"],
    sections: [
      { id: "fragen", title: "Vom gewünschten Ergebnis rückwärts planen.", paragraphs: ["Unser Beispiel ist eine interne Serviceanfrage. Der Bearbeiter muss wissen: Worum geht es, welche Einheit ist betroffen und wie kann er Rückfragen stellen? Er benötigt nicht automatisch Geburtsdatum, private Anschrift oder beliebige Anhänge. Für jedes Feld formulierst du deshalb einen Satz: „Diese Angabe wird benötigt, damit …“ Fehlt eine überzeugende Ergänzung, lass das Feld zunächst weg.", "Lege fünf Felder an: Betreff als kurzer Text, Kategorie als Auswahlliste, Beschreibung als langer Text, Rückkontakt als E-Mail und optional einen gewünschten Termin als Datum. Verwende künstliche Kategorien wie „Gerät“, „Zugang“ und „Sonstiges“. Das Beispiel ist frei anpassbar und keine vorgeschriebene Vorlage."] },
      { id: "bauen", title: "Den Ablauf in Secure Data nachbauen.", steps: ["Melde dich als Admin an und wähle „Formular erstellen“. Vergib einen eindeutigen Titel und erkläre kurz, wofür die Angaben verwendet werden.", "Erstelle die fünf geplanten Felder. Markiere nur die tatsächlich erforderlichen Angaben als Pflichtfelder; den Wunschtermin lässt du optional.", "Wenn Feldkennungen verlangt werden, verwende eindeutige technische Namen wie betreff, kategorie und rueckkontakt. Ändere sie nach einer angebundenen Weiterverarbeitung nicht ohne abgestimmte Zuordnung.", "Speichere das Formular und öffne seine Verwaltung. Prüfe die Einstellungen und den angezeigten Betriebsmodus. Für dieses Beispiel ist vereinbarte Speicherung vorgesehen, keine ungeprüfte Übertragung an ein Fremdsystem.", "Erstelle unter „Benutzer & Einladungen“ einen Testzugang. Gib den persönlichen Aktivierungslink gezielt an den vorgesehenen Tester weiter, nicht an einen öffentlichen Verteiler.", "Öffne anschließend den individuellen Formularlink in einer getrennten Browsersitzung und melde dich mit dem Benutzerkonto an. Ein Adminzugang und ein Formularbenutzer erfüllen unterschiedliche Aufgaben."] },
      { id: "testen", title: "Nicht nur die erfolgreiche Eingabe prüfen.", steps: ["Sende eine vollständig ausgefüllte fiktive Anfrage. Öffne als Admin die Datenansicht und gleiche alle Werte mit der Eingabe ab.", "Lass ein Pflichtfeld leer und verwende eine offensichtlich unvollständige E-Mail-Adresse. Prüfe, ob verständliche Rückmeldungen erscheinen und kein falscher Erfolgszustand angezeigt wird.", "Erfasse drei unterschiedliche Testanfragen. Suche nach einem Begriff, begrenze die Ansicht mit einem passenden Filter und vergleiche Karten- und Tabellenansicht.", "Exportiere die gefilterten Ergebnisse als CSV. Öffne die Datei mit korrekter Zeichenkodierung und vergleiche Zeilenanzahl, Umlaute und Feldwerte.", "Prüfe mit einem nicht eingeladenen beziehungsweise abgemeldeten Nutzer, dass der Formularlink allein keinen Zugriff auf Eingabe oder Verwaltungsdaten gewährt."], paragraphs: ["Notiere den Zeitpunkt jeder Eingabe und ihr Ergebnis. So erkennst du, ob ein Problem am Ausfüllen, Speichern, Filtern oder Exportieren entsteht. Eine heruntergeladene Datei ist eine zusätzliche Kopie und braucht eigene Zugriffs- und Löschregeln."] },
      { id: "weiterverarbeitung", title: "Der nächste Schritt muss ebenso klar sein wie das Formular.", paragraphs: ["Bestimme, wer neue Eingaben prüft und wohin bestätigte Angaben anschließend gehören. Für eine Anbindung an ein anderes System braucht es abgestimmte Feldzuordnungen, einen berechtigten technischen Zugang und einen überprüfbaren Empfang. Ein abgesendeter Netzwerkaufruf allein beweist noch keine erfolgreiche fachliche Verarbeitung.", "Secure Data ist ein betreuter Business Service. Der dokumentierte Stand umfasst einen Pilotbetrieb; Hostingumzug und Microsoft-Anmeldung sind nicht als abgeschlossen zu verstehen. Nutze die Anleitung deshalb zunächst mit Testdaten. Der Produktivstart benötigt eine gesonderte Freigabe der konkreten Betriebs- und Sicherheitsbedingungen."], source: { title: "Secure Data Collection: Leistungsumfang und Anfrage", url: "https://www.rheinland-solutions.de/secure-data-collection" } },
    ],
    checklist: ["Jedes Feld hat einen nachvollziehbaren Zweck.", "Admin und Formularbenutzer wurden getrennt getestet.", "Eingabe, Filteransicht und Export stimmen überein.", "Speicherung und Weiterverarbeitung sind ausdrücklich vereinbart."],
    limits: "Keine anonyme öffentliche Datensammlung und keine automatische Freigabe für sensible Echtinformationen. Ein Produktzugang allein ersetzt keine abgestimmte Betriebsvereinbarung.",
    service: "Wir entwickeln mit dir den kompletten Informationsweg: vom passenden Formular über die Zugänge bis zur abgestimmten Ablage oder Übergabe an dein Zielsystem.",
    related: ["betriebliche-startseite", "bueroaufgaben-automatisieren", "selber-machen-oder-machen-lassen"],
  },
  {
    number: 10, slug: "betriebliche-startseite", category: "Im Betrieb",
    title: "Eine Startseite für deinen Betrieb – alles Wichtige an einem Ort.",
    description: "Baue eine kleine interne Werkzeugübersicht und teste sie im Team, bevor daraus ein großes Intranet wird.",
    lead: "Wo liegt das Formular? Welcher Link führt zur richtigen Anwendung? Wen frage ich bei einem Problem? Eine betriebliche Startseite beantwortet diese Fragen, ohne dass jemand alle Systeme ersetzen muss. Ihr Nutzen entsteht durch Orientierung, nicht durch möglichst viele Kacheln.",
    result: "Eine lokal nutzbare HTML-Startseite mit eindeutig beschrifteten Links und klarer Zuständigkeit – ohne Server, Anmeldung oder Tracking.",
    level: "Einstieg · Kleine HTML-Anleitung",
    prerequisites: ["Texteditor, Browser und die geprüften Zieladressen deiner Werkzeuge", "Eine kleine Gruppe von Testnutzern", "Keine Passwörter, persönlichen Einladungslinks oder vertraulichen Informationen in der HTML-Datei"],
    sections: [
      { id: "inventar", title: "Was muss jemand am Montagmorgen schnell finden?", paragraphs: ["Sammle zunächst höchstens neun häufig benötigte Ziele. Sortiere nach Aufgabe: Informationen erfassen, Unterlagen finden, gemeinsam arbeiten. Beschrifte jeden Link mit einem Verb und einem verständlichen Gegenstand. „Serviceanfrage erfassen“ hilft mehr als der interne Name einer Datenbank.", "Ergänze zu jedem Ziel eine kurze Erklärung und eine verantwortliche Rolle. Entferne veraltete Doppelwege. Wenn zwei Links denselben Zweck erfüllen, kläre zuerst den gültigen Ablauf. Eine neue Startseite löst keinen ungeklärten Prozess, sie würde ihn nur hübscher verteilen."] },
      { id: "bauen", title: "Eine erste Version direkt im Browser öffnen.", paragraphs: ["Kopiere den folgenden Inhalt in einen Texteditor und speichere ihn als start.html in UTF-8, nicht als start.html.txt. Öffne die Datei per Doppelklick im Browser. Die Beispiel-Links führen ausschließlich zu öffentlichen Rheinland-Seiten. Ersetze sie bei Bedarf durch geprüfte Zieladressen; ein lokaler Prototyp braucht noch keine Veröffentlichung."], code: `<!doctype html>
<html lang="de">
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>Unser Werkzeugkasten</title>
<style>
body{font:18px/1.6 system-ui;margin:40px auto;padding:0 20px;
max-width:850px;color:#10123f;background:#fff}
nav{display:grid;gap:16px}
a{display:block;padding:20px;border:1px solid #dfe2eb;
border-left:5px solid #f1e613;color:inherit}
a:focus-visible{outline:3px solid #3155c6;outline-offset:4px}
small{display:block}
</style>
<h1>Unser Werkzeugkasten</h1>
<p>Der kurze Weg zur richtigen Aufgabe.</p>
<nav aria-label="Werkzeuge">
 <a href="https://essentials.rheinland-solutions.de/pdf">
 PDFs bearbeiten<small>Für kleine Aufgaben mit Dokumenten.</small></a>
 <a href="https://essentials.rheinland-solutions.de/qr">
 QR-Code erstellen<small>Eine geprüfte Zieladresse teilen.</small></a>
 <a href="https://www.rheinland-solutions.de/business-solutions">
 Unternehmenslösungen ansehen<small>Betreute Services kennenlernen.</small></a>
</nav>
<p>Stand: 10.10.2026 · Verantwortlich: intern festlegen</p>
</html>`, source: { title: "MDN: verständliche Links und Navigation", url: "https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/Creating_links" } },
      { id: "teamtest", title: "Teste Aufgaben, nicht die eigene Erinnerung.", steps: ["Gib einer Person, die die Seite noch nicht kennt, eine konkrete Aufgabe: „Finde das Werkzeug zum Bearbeiten einer PDF.“ Erkläre vorher nicht, wo sie klicken soll.", "Beobachte, ob Beschriftung und Reihenfolge eindeutig sind. Frage anschließend, welche Begriffe unklar waren.", "Öffne jeden Link mit einem normalen Benutzerkonto. Ein Ziel, das nur bei dir als Administrator funktioniert, ist kein funktionierender Teamzugang.", "Prüfe die Datei auf einem schmalen Bildschirm und ausschließlich mit der Tabulatortaste. Alle Ziele müssen erreichbar und der Fokus sichtbar sein.", "Bestimme eine verantwortliche Person und einen monatlichen Linkcheck. Notiere Änderungen und entferne alte Versionen aus der allgemeinen Verteilung." ] },
      { id: "ausbau", title: "Wann aus der Linkliste ein Intranet wird.", paragraphs: ["Der Prototyp enthält keine Zugangskontrolle. Der Schutz liegt weiterhin bei den verlinkten Anwendungen. Sobald vertrauliche Inhalte, individuelle Statusanzeigen oder unterschiedliche Rollen auf der Startseite selbst erscheinen sollen, braucht sie einen eigenen geschützten Betrieb. Ein unbekannter Link oder ein robots-Eintrag ist kein Zugriffsschutz.", "Erweitere erst nach dem Teamtest: Zuständigkeiten, kurze Arbeitsanweisungen oder Statusmeldungen können sinnvoll sein. Jede Erweiterung sollte eine konkrete Such- oder Rückfrageschleife verkürzen. Ein ruhiger Einstieg mit wenigen zuverlässig gepflegten Zielen ist wertvoller als ein großes Dashboard, das niemand aktuell hält."] },
    ],
    checklist: ["Die häufigsten Aufgaben sind ohne Erklärung auffindbar.", "Alle Links funktionieren mit normalen Nutzerrechten.", "Die Datei enthält keine Geheimnisse oder vertraulichen Inhalte.", "Pflegeverantwortung und Versionsstand sind sichtbar."],
    limits: "Der lokale Prototyp bietet weder Anmeldung noch Datenbankzugriff oder automatische Statusabfragen. Diese Funktionen müssen bei einem späteren Ausbau separat geplant werden.",
    service: "Wir machen aus verstreuten Werkzeugen einen verständlichen Einstieg für dein Team – bei Bedarf mit geschütztem Zugang, passenden Rollen und angebundenen Informationen.",
    related: ["informationen-mit-formularen-erfassen", "bueroaufgaben-automatisieren", "selber-machen-oder-machen-lassen"],
  },
  {
    number: 11, slug: "bueroaufgaben-automatisieren", category: "Im Betrieb",
    title: "Diese kleinen Büroaufgaben musst du nicht jedes Mal von Hand erledigen.",
    description: "Beginne mit einer lesenden Automation: Ein Dateieingang wird zur Prüfliste, ohne Dateien zu verschieben oder zu löschen.",
    lead: "Automatisierung muss nicht mit einem komplizierten Gesamtsystem beginnen. Schon eine verlässliche Liste kann wiederkehrende Kontrolle erleichtern. Der entscheidende Schritt ist, eine kleine Aufgabe eindeutig zu beschreiben – einschließlich der Fälle, die weiterhin ein Mensch beurteilt.",
    result: "Ein Python-Skript, das die Dateien eines Testordners als CSV-Prüfliste ausgibt. Quelldateien bleiben unverändert.",
    level: "Fortgeschrittener Einstieg · Kleines Skript",
    prerequisites: ["Python 3 und ein Terminal; keine zusätzlichen Python-Pakete", "Eigener Testordner mit künstlichen Dateien, kein vertrauliches Produktivverzeichnis", "Texteditor zum Speichern als eingang_pruefen.py", "Tabellenprogramm für die erzeugte CSV-Datei"],
    sections: [
      { id: "kandidaten", title: "Drei kleine Aufgaben mit klaren Grenzen.", paragraphs: ["Ein Dateieingang lässt sich regelmäßig auf neue Unterlagen prüfen. Wiederkehrende Messwerte lassen sich zu einer Tagesübersicht zusammenfassen. Ein fertiger Export lässt sich auf fehlende Pflichtangaben kontrollieren. Gemeinsam ist diesen Aufgaben: Eingang, Regel und erwartetes Ergebnis lassen sich beschreiben.", "Weniger geeignet für den ersten Versuch sind Entscheidungen über Zahlungen, vertrauliche Freigaben oder unklare Fristen. Automatisiere zunächst das Zusammenstellen und Kennzeichnen, nicht die endgültige fachliche Entscheidung. Unser Beispiel unterscheidet deshalb nur Dateitypen. Es behauptet nicht, den Inhalt eines Dokuments verstanden zu haben."] },
      { id: "skript", title: "Eine Prüfliste ohne Änderungen an den Quellen.", paragraphs: ["Speichere den folgenden Code als eingang_pruefen.py außerhalb des Eingangsordners. Das Skript betrachtet nur Dateien unmittelbar in diesem Ordner, nicht dessen Unterordner. Es überspringt symbolische Verknüpfungen und verweigert das Überschreiben einer vorhandenen Ausgabedatei. Dateinamen werden für die Anzeige in Tabellen vorsorglich als Text entschärft."], code: `import csv
import sys
from pathlib import Path

if len(sys.argv) != 3:
    raise SystemExit('Aufruf: python3 eingang_pruefen.py EINGANG AUSGABE.csv')
quelle = Path(sys.argv[1]).resolve(strict=True)
ziel = Path(sys.argv[2]).resolve()
if not quelle.is_dir():
    raise SystemExit('Der Eingang muss ein Ordner sein.')
if ziel == quelle or quelle in ziel.parents:
    raise SystemExit('Ausgabe außerhalb des Eingangsordners wählen.')

def tabellentext(text):
    return "'" + text if text.lstrip().startswith(('=', '+', '-', '@')) else text

zeilen = []
for datei in sorted(quelle.iterdir()):
    if datei.is_symlink() or not datei.is_file():
        continue
    typ = datei.suffix.lower()
    status = 'Inhalt prüfen' if typ == '.pdf' else 'Dateityp prüfen'
    zeilen.append([tabellentext(datei.name), datei.stat().st_size, status])

with ziel.open('x', encoding='utf-8-sig', newline='') as ausgabe:
    csv.writer(ausgabe, delimiter=';').writerows(
        [['Dateiname', 'Bytes', 'Prüfstatus'], *zeilen])
print(f'{len(zeilen)} Dateien erfasst. Quellen unverändert.')`, source: { title: "Python: CSV-Dateien mit der Standardbibliothek", url: "https://docs.python.org/3/library/csv.html" } },
      { id: "ausfuehren", title: "Ausführen und Ergebnis kontrollieren.", steps: ["Erstelle einen Testordner mit zwei PDFs, einer Textdatei und einem leeren Unterordner. Verwende keine echten Kundendaten.", "Prüfe mit „python3 --version“, ob Python verfügbar ist. Unter Windows kann der entsprechende Aufruf „py -3“ lauten.", "Starte im Terminal „python3 eingang_pruefen.py /voller/pfad/eingang /voller/pfad/pruefliste.csv“. Ersetze beide Beispielpfade und setze Pfade mit Leerzeichen in Anführungszeichen.", "Öffne die CSV mit UTF-8 und Semikolon als Trennzeichen. Erwartet werden drei Datenzeilen; der leere Unterordner ist absichtlich nicht enthalten.", "Starte denselben Aufruf erneut: Eine bereits vorhandene Ausgabe muss zum Abbruch führen. Verwende für den nächsten Lauf bewusst einen neuen Dateinamen.", "Kontrolliere den Quellordner: Namen, Inhalte und Anzahl der Dateien müssen unverändert sein. Prüfe auch den Fall eines leeren Eingangs." ] },
      { id: "betrieb", title: "Erst danach regelmäßig laufen lassen.", paragraphs: ["Ein geplanter Lauf benötigt einen festen Benutzer, absolute Pfade und eine nachvollziehbare Fehlermeldung. Er darf nicht unbemerkt in einem anderen Arbeitsverzeichnis landen. Bevor du einen Zeitplan einrichtest, lege fest, wie neue Ausgabedateien benannt werden und wer Fehler bemerkt. Dieses Beispiel erzeugt bewusst keinen versteckten Hintergrunddienst.", "Messe den tatsächlichen Nutzen: Wie häufig war die manuelle Kontrolle nötig, wie lange dauert die Restprüfung, und welche Fehler verhindert die Liste? Erweitere nur, wenn die Antwort überzeugt. Verschieben, Löschen, Mailversand oder automatische Freigaben sind neue Funktionen mit eigenen Tests – kein beiläufiger Zusatz."] },
    ],
    checklist: ["Die Ausgabe enthält die erwartete Anzahl Dateien.", "Quelldateien bleiben unverändert.", "Ein vorhandener Bericht wird nicht überschrieben.", "Fehler sind sichtbar; die fachliche Prüfung bleibt zugeordnet."],
    limits: "Das Skript liest keine Dokumentinhalte und erkennt weder Rechnungen noch Fristen. Auch eine Dateiendung .pdf beweist keinen gültigen PDF-Inhalt. Nutze es zuerst ausschließlich in einem Testverzeichnis.",
    service: "Wir identifizieren passende Routinen, verbinden sie mit deinen bestehenden Systemen und ergänzen Protokollierung, Fehlerbehandlung und klare Verantwortlichkeiten.",
    related: ["wichtige-mails-archivieren", "betriebliche-startseite", "informationen-mit-formularen-erfassen"],
  },
  {
    number: 12, slug: "selber-machen-oder-machen-lassen", category: "Im Betrieb",
    title: "Selber machen oder machen lassen? So findest du den passenden Weg.",
    description: "Eine ehrliche Entscheidungshilfe für Eigenbau, Unterstützung und betreute Umsetzung – mit einer Vorlage für dein Projektbriefing.",
    lead: "Die ersten Schritte selbst umzusetzen kann Spaß machen und sehr sinnvoll sein. Nicht jeder möchte anschließend aber Updates prüfen, Störungen eingrenzen und Sicherungen testen. Entscheidend ist deshalb nicht nur, wer eine Lösung aufbaut, sondern wer sie später zuverlässig betreiben kann.",
    result: "Ein kurzes, versandfertiges Projektbriefing und eine begründete Entscheidung über den gewünschten Unterstützungsumfang.",
    level: "Einstieg · Entscheidung & Projektplanung",
    prerequisites: ["Ein konkretes Problem aus deinem Alltag oder Betrieb", "Eine ehrliche Einschätzung deiner verfügbaren Zeit", "Überblick über Daten, Nutzer und akzeptable Ausfallzeiten"],
    sections: [
      { id: "eigenbau", title: "Wann Eigenbau gut passt.", paragraphs: ["Du möchtest das System verstehen, kannst in Ruhe testen und ein Ausfall verursacht keine gravierenden Folgen? Dann ist ein kleiner Eigenbau ein guter Lernweg. Beginne mit fiktiven Daten oder einer unkritischen Anwendung. Definiere vorab, wann du den Versuch als erfolgreich oder als vorläufig beendet betrachtest.", "Ein überschaubares Ziel ist beispielsweise eine durchsuchbare Sammlung künstlicher Dokumente oder eine einzelne Lichtroutine. Ein vollständiger Unternehmensbetrieb mit mehreren Zugriffsrollen ist eine andere Größenordnung. Nicht weil jeder einzelne Klick kompliziert wäre, sondern weil viele Entscheidungen und Fehlerfälle zusammenkommen."] },
      { id: "einschaetzen", title: "Fünf Fragen für eine ehrliche Einschätzung.", steps: ["Nutzen: Welcher wiederkehrende Aufwand verschwindet konkret? Notiere den heutigen Ablauf und ein prüfbares Ziel.", "Risiko: Was passiert bei Ausfall, falscher Zuordnung oder unberechtigtem Zugriff? Trenne Unbequemlichkeit von ernsthaften Auswirkungen.", "Zeit: Kannst du nicht nur die Einrichtung, sondern auch Tests, Dokumentation und spätere Pflege übernehmen? Plane einen tatsächlichen Zeitblock statt eines unbestimmten „irgendwann“.", "Wiederanlauf: Weißt du, wo die Sicherung liegt und wie du daraus zurückkommst? Ein vorhandenes Backup ohne zugänglichen Schlüssel oder getesteten Ablauf reicht nicht als Antwort.", "Verantwortung: Wer entscheidet über Änderungen, wer hilft bei Problemen und wer darf auf die Daten zugreifen? Eine technische Verbindung beantwortet diese organisatorischen Fragen nicht." ] },
      { id: "wege", title: "Es muss nicht alles oder nichts sein.", paragraphs: ["Beim Eigenbau übernimmst du Planung und Betrieb selbst. Punktuelle Unterstützung passt, wenn du ein Konzept prüfen lassen oder eine konkrete Hürde lösen möchtest. Eine gemeinsame Umsetzung kann den technischen Start mit einer verständlichen Übergabe verbinden. Bei einem betreuten Service werden Aufgaben für Betrieb und Unterstützung ausdrücklich vereinbart.", "Wichtig ist die Abgrenzung: Eine einmalige Einrichtung ist keine unbegrenzte Wartung. Ein Servicevertrag bedeutet nicht automatisch Rund-um-die-Uhr-Bereitschaft. Halte fest, welche Leistungen enthalten sind, welche Reaktionswege bestehen und wie zusätzliche Änderungen beauftragt werden. Gute Unterstützung macht diese Grenzen vor dem Start transparent."] },
      { id: "briefing", title: "Diese Vorlage reicht für ein erstes sinnvolles Gespräch.", paragraphs: ["Kopiere die folgende Vorlage und fülle sie in Alltagssprache aus. Du musst keine bestimmte Software auswählen. Eine genaue Beschreibung des Problems ist wertvoller als eine vorschnelle Festlegung auf eine Technik. Sende zunächst keine Passwörter, vollständigen Datenbestände oder vertraulichen Kundenunterlagen mit."], code: `Unser heutiger Ablauf:
Was uns daran Zeit kostet oder stört:
Das gewünschte Ergebnis:
Wer die Lösung nutzen soll:
Vorhandene Geräte und Systeme:
Welche Arten von Daten betroffen sind:
Was bei einem Ausfall weiter funktionieren muss:
Was wir selbst übernehmen möchten:
Wo wir Unterstützung wünschen:
Budgetrahmen und gewünschter Zeitpunkt:
So würden wir den Erfolg überprüfen:` },
      { id: "abnahme", title: "Woran du eine brauchbare Übergabe erkennst.", paragraphs: ["Lass dir den vereinbarten Alltagsablauf mit Testdaten zeigen. Prüfe anschließend einen Fehlerfall, etwa eine unterbrochene Verbindung oder einen Nutzer ohne Berechtigung. Bitte um eine kurze verständliche Dokumentation, eine Übersicht der laufenden Kosten und einen klaren Weg für spätere Fragen.", "Du solltest wissen, welche Zugänge dir gehören, wo Daten liegen und wie du sie wieder exportieren kannst. Entscheidend ist nicht, ob du jeden technischen Begriff kennst. Entscheidend ist, ob du das Ergebnis benutzen und eine informierte Entscheidung über seinen weiteren Betrieb treffen kannst."] },
    ],
    checklist: ["Problem und Ziel sind konkret beschrieben.", "Einrichtung und laufender Betrieb werden getrennt betrachtet.", "Datenzugriff, Sicherung und Ausfallverhalten sind besprochen.", "Unterstützungsumfang und Abnahmetest sind schriftlich festgehalten."],
    limits: "Die passende Betriebsform hängt von deinem konkreten Risiko und Bedarf ab. Weder Eigenbau noch Beauftragung machen eine Lösung automatisch wartungsfrei oder für jeden Einsatzzweck geeignet.",
    service: "Du entscheidest, wie viel du selbst übernehmen möchtest. Wir können bei Planung und einzelnen Schritten unterstützen oder einen klar abgegrenzten Aufbau mit dir umsetzen.",
    related: ["homeserver-mehrwert", "homeserver-hardware", "informationen-mit-formularen-erfassen"],
  },
]
