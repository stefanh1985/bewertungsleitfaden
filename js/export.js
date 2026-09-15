function downloadWord() {
  const content = `
    <html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'>
    <head><meta charset='utf-8'><title>Bewertungsleitfaden</title></head>
    <body>
      <h1>Bewertungsleitfaden – PÄDAGOGIKA Fachschule für Sozialwesen</h1>
      <p><strong>Stand:</strong> September 2026</p>
      <p><strong>Lizenz:</strong> CC BY 4.0 · Stefan Hierholzer</p>
      <h2>Inhalt</h2>
      <p>Dieser Leitfaden enthält 35 Prüfungsformen mit DQR-6-Kompetenzprofilen, Anleitungen, Bewertungs- und Kompetenzrastern.</p>
      <p><em>Die vollständige Version mit allen 35 Prüfungsformen ist online verfügbar unter: https://stefanh1985.github.io/bewertungsleitfaden/</em></p>
      <h2>Verfügbare Prüfungsformen</h2>
      <ol>
        <li>(Audio-)Podcast</li><li>Bildungs- und Lerngeschichten</li><li>E-Book</li><li>E-Portfolio</li>
        <li>Edu Breakout</li><li>Essay</li><li>Film</li><li>Flyer / Faltblatt</li>
        <li>Gruppenarbeit / Projekt</li><li>Handout</li><li>Hausarbeit</li><li>Instagram Post</li>
        <li>Instagram Reel</li><li>Kamishibai</li><li>Kasuistik</li><li>(Kinder-)Buch</li>
        <li>Klausur / Test</li><li>Kolloquium</li><li>Lernjournal</li><li>Lernplattform</li>
        <li>Lernpfad</li><li>MOOC</li><li>Mündliche Mitarbeit</li><li>Newsletter</li>
        <li>Plakat</li><li>PowerPoint</li><li>Präsentation</li><li>Protokoll</li>
        <li>Reflexion</li><li>Rezension</li><li>Rollenspiel</li><li>Schoolbook to Soundtrack</li>
        <li>Spielleitung</li><li>Steckbrief</li><li>Stellungnahme</li>
      </ol>
      <p><strong>Hinweis:</strong> Für die vollständigen Bewertungsraster und Kompetenzraster besuchen Sie bitte die Online-Version. Jede Prüfungsform enthält ein DQR-6-Kompetenzprofil, eine Anleitung, ein Bewertungsraster (++, +, 0, -, --) und ein Kompetenzraster (Stufen A–D).</p>
      <p><strong>KI-Chatbot:</strong> https://chatgpt.com/g/g-67a9df9f191481919c700e9da4f4143e-bewertungs-und-kompetenzraster</p>
    </body></html>
  `;
  const blob = new Blob(['\ufeff', content], { type: 'application/msword' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = 'Bewertungsleitfaden_Pädagogika.doc';
  link.click();
  URL.revokeObjectURL(url);
}
