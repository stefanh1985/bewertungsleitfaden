# Bewertungsleitfaden – PÄDAGOGIKA Fachschule für Sozialwesen

GitHub-Pages-kompatible Webfassung des Bewertungsleitfadens (Stand September 2026).

## Enthalten

- `index.html` – Startseite und Inhaltsverzeichnis
- `grundlagen.html` – Vorwort, Teil I und Teil II
- `content/` – 35 Leistungs- und Prüfungsformate plus Blankovorlage
- `gesamtleitfaden.html` – komplette Druck-/Gesamtansicht
- `literatur.html`, `anhang.html`, `impressum.html`
- `mitwirken.html` – Workflow für Ergänzungen und Link zum KI-Assistenten
- `css/style.css` – responsives Layout und Druck-CSS
- `js/site.js` – Link kopieren, Word-kompatibler Seitenexport, Suche
- Abbildungen aus der Word-Fassung sind direkt in den HTML-Dateien eingebettet (keine separaten Mediendateien nötig).
- `downloads/Bewertungsleitfaden_PAEDAGOGIKA.docx` – aktuelle Word-Ausgangsfassung

## Veröffentlichung auf GitHub Pages

1. ZIP lokal entpacken.
2. Im Repository `stefanh1985/bewertungsleitfaden` **Add file → Upload files** wählen.
3. Den **Inhalt des entpackten Ordners** (Dateien und Unterordner) in das Upload-Fenster ziehen.
4. Vorhandene Dateien ersetzen/überschreiben lassen und Commit ausführen.
5. GitHub Pages bleibt auf `main` / `/ (root)` eingestellt.

> GitHub entpackt eine hochgeladene ZIP-Datei nicht automatisch. Deshalb die ZIP zuerst lokal entpacken und anschließend den gesamten Ordnerinhalt gemeinsam hochladen.

## Pflege

Neue Prüfungsformen können auf Basis von `content/_vorlage-neue-pruefungsform.html` angelegt werden. Anschließend muss ein Link auf `index.html` ergänzt werden.

Lizenz: CC BY 4.0 (siehe Originaldokument und Impressum).
