# Beton – ganz einfach

Statische Lernwebsite für Bau- und Bauzeichnerklassen. Ohne externe Bibliotheken, Schriftanbieter, Anmeldung oder Analysewerkzeuge. Keine Übertragung oder dauerhafte Speicherung von Antworten. Punkte bleiben nur im Arbeitsspeicher der geöffneten Seite. Ein Neuladen setzt den Lernstand zurück. Ein Wechsel zur Themenübersicht erhält den laufenden Lernstand.

## Fertiger Umfang

Alle sechs Lernbereiche sind verfügbar, mit jeweils acht Aufgaben auf mittlerem Niveau: insgesamt 48 Fragen. Enthalten sind Multiple Choice, Richtig/Falsch, Lückentexte mit Wortauswahl, Rechenaufgaben und Praxisentscheidungen. Nach jeder Antwort erscheinen eine Rückmeldung und eine Erklärung. Falsche Antworten zeigen zusätzlich die richtige Lösung. Jeder Block endet mit einer Punktzahl und kann wiederholt werden.

| Lernbereich | Aufgaben |
| --- | ---: |
| Druckfestigkeitsklassen | 8 |
| Expositionsklassen | 8 |
| w/z-Wert | 8 |
| Betonkonsistenz | 8 |
| Gesteinskörnung | 8 |
| Betonbestellung & Betonmischung | 8 |

Beim Wechsel zwischen Lernbereichen bleiben deren Antworten und Ergebnisse in dieser geöffneten Seite erhalten. Abgeschlossene Bereiche bieten „Ergebnis ansehen“ an. Beim Neuladen werden alle Lernstände gelöscht. Es gibt keine Speicherung in Cookies oder im Local Storage.

## Direkt öffnen

Den gesamten Ordner entpacken. `index.html` doppelt anklicken. Alle Dateien müssen zusammenbleiben. Ein Server, Installation oder Internetzugang sind für die Nutzung nicht nötig. JavaScript muss im Browser aktiviert sein.

## Dateien

- `index.html`: Grundaufbau und Titel.
- `style.css`: Farben, Schrift und Darstellung auf verschiedenen Bildschirmgrößen.
- `script.js`: Navigation, Rückmeldungen und Auswertung.
- `aufgaben.js`: Alle Lernbereiche und Aufgaben; nur diese Datei für Inhalte bearbeiten.
- `README.md`: Diese Anleitung.

## Aufgaben ändern

1. Eine Sicherungskopie von `aufgaben.js` anlegen.
2. Die Datei in einem Texteditor öffnen, etwa Editor oder Visual Studio Code. Nicht Word verwenden.
3. Die Texte zwischen den Anführungszeichen ändern. Kommas, eckige und geschweifte Klammern beibehalten.
4. Als UTF-8 speichern und `index.html` im Browser neu laden.

Die Felder einer Aufgabe:

| Feld | Bedeutung |
| --- | --- |
| `typ` | Sichtbare Aufgabenart, etwa „Multiple Choice“, „Richtig/Falsch“, „Lückentext“, „Praxisentscheidung“ |
| `frage` | Die Frage in kurzen Sätzen |
| `kontext` | Hintergrund, Lückentext oder Rechenangaben |
| `auswahl` | Liste der anklickbaren Antworten |
| `loesung` | Genau eine Antwort; wortgleich aus `auswahl` übernehmen |
| `erklaerung` | Begründung, die nach jeder Antwort erscheint |
| `quelle` | Fundstelle für die fachliche Prüfung; wird nicht im Schülerbereich angezeigt |

Es gibt immer genau eine richtige Auswahl. Bei Richtig/Falsch zwei Antworten anlegen. Bei einem Lückentext den Satz mit `___` in `kontext` schreiben und die einzusetzenden Wörter oder Wortpaare unter `auswahl` eintragen. Jede Aufgabe zählt einen Punkt. Mehrfachklicks vergeben keine weiteren Punkte.

## Eine weitere Aufgabe ergänzen

Im gewünschten Lernbereich innerhalb von `aufgaben: [ ... ]` einen vorhandenen Aufgabenblock kopieren und nach einem Komma einfügen. Dieses Muster ist eine Vorlage, keine freigegebene Fachaufgabe:

```javascript
{
  typ: "Multiple Choice",
  frage: "Hier steht deine Frage.",
  kontext: "Hier stehen weitere Angaben.",
  auswahl: ["Antwort A", "Antwort B", "Antwort C"],
  loesung: "Antwort B",
  erklaerung: "Hier erklärst du, warum Antwort B richtig ist.",
  quelle: "Materialname und Seite"
}
```

Die Anzahl der Aufgaben, Fortschritt und maximale Punktzahl werden automatisch berechnet. Die vorhandenen sechs Lernbereiche enthalten jeweils acht Aufgaben. Weitere Aufgaben einfach in deren Listen ergänzen. Optional `beispiel: true` ergänzen, um den Prüfhinweis dort anzuzeigen. IDs nicht verändern und innerhalb der Aufgaben keine doppelten Antworttexte verwenden. Anführungszeichen im Text entweder als `\"` schreiben oder deutsche Anführungszeichen „…“ verwenden.

## Fachliche Prüfung vor dem Unterricht

Die Aufgaben basieren auf den bereitgestellten Informations- und Lösungsblättern der Bereiche 4.2 bis 4.7. Jede Aufgabe enthält eine Fundstelle im Feld `quelle`. Praxisfälle und Zahlenvarianten sind teilweise eigene didaktische Anwendungen. Sie bleiben wie gewünscht zur fachlichen Prüfung vor dem Unterricht gekennzeichnet.

Berücksichtigte fachliche Präzisierungen:

- Festigkeitsklassen beziehen sich auf charakteristische Festigkeiten. Ein einzelner Probekörper bestätigt nicht die Konformität einer Lieferung.
- Die missverständliche Gleichsetzung von Normalbeton mit einem bestimmten Festigkeitsbereich wurde nicht übernommen.
- Im Konsistenz-Lösungsblatt steht im Nenner einmal 35,6 cm. Richtig sind 40 − 6,4 = 33,6 cm; das Verdichtungsmaß ist 40 / 33,6 ≈ 1,19.
- Feuchteangaben in Rechenaufgaben sind als anrechenbare Oberflächenfeuchte definiert. Wo Prozentwerte genutzt werden, ist die Bezugsmasse genannt.
- Die Expositionsaufgaben üben Angriffstypen und das Zusammenführen von Anforderungen. Frei vorgegebene Zahlen sind als Übungswerte gekennzeichnet, nicht als aktuelle Normgrenzwerte.
- Die 5 % Mengenzuschlag sind eine ausdrückliche Aufgabenannahme, keine allgemeine Bestellregel. Rezepturmengen aus dem Fundamentblatt sind Übungsdaten, keine universelle Betonrezeptur.

Die Prüfhinweise können nach deiner Freigabe in `script.js` (Variable `notice` und deren Ausgabe auf der Startseite) sowie über `beispiel: false` beim Lernbereich angepasst werden. Die Original-PDFs sind nicht im Website-Paket enthalten und werden nicht veröffentlicht.

## Auf GitHub Pages veröffentlichen

1. Mit deinem Lehrkraft-Konto bei GitHub ein neues Repository anlegen, etwa `beton-ganz-einfach`. Für die einfache kostenlose Pages-Veröffentlichung ein öffentliches Repository verwenden. Die Schüler benötigen kein Konto.
2. Über „Add file“ → „Upload files“ die fünf Dateien aus diesem Ordner hochladen. `index.html` muss direkt im Hauptverzeichnis liegen, nicht in einem weiteren Unterordner.
3. Die Dateien mit „Commit changes“ speichern.
4. Unter „Settings“ → „Pages“ bei „Build and deployment“ die Quelle „Deploy from a branch“ wählen.
5. Branch `main`, Ordner `/(root)` auswählen und speichern.
6. Nach der Bereitstellung steht die Adresse unter „Pages“. Sie hat üblicherweise die Form `https://DEIN-NAME.github.io/beton-ganz-einfach/`.
7. Die Adresse auf dem Smartphone öffnen und erst danach an die Klasse weitergeben.

Änderungen an `aufgaben.js` erneut hochladen und speichern. GitHub Pages veröffentlicht sie anschließend erneut. Die Website verwendet ausschließlich relative Dateipfade und funktioniert auch in einem Repository-Unterverzeichnis.

Offizielle Anleitung: https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

GitHub Pages liefert die Dateien über das Internet aus. Der Hostinganbieter verarbeitet dabei technisch erforderliche Zugriffsdaten wie IP-Adressen. Die Lernwebsite selbst erhebt keine personenbezogenen Daten und überträgt keine Antworten oder Punktzahlen. Für vollständig netzunabhängige Nutzung die Dateien lokal öffnen.

## Kurzer Funktionstest nach Änderungen

- Einmal bewusst falsch antworten: richtige Lösung und Erklärung müssen erscheinen.
- Eine Aufgabe richtig lösen: genau ein Punkt muss hinzukommen.
- Zur Übersicht und zurück wechseln: aktuelle Aufgabe und Antwort bleiben erhalten.
- Alle Aufgaben beenden: Punktzahl kontrollieren und Lösungen aufklappen.
- „Noch einmal üben“ wählen: Start bei Aufgabe 1 und 0 Punkten.
- Seite neu laden: Ergebnisse müssen gelöscht sein.
- Smartphone und Tastatur testen. Mit Tab navigieren; mit Enter oder Leertaste eine Antwort aktivieren.

Die vollständige Version wurde automatisiert bei 320, 375, 768 und 1280 Pixel Breite sowie mit 200 % Textgröße geprüft. Alle 48 Aufgaben wurden jeweils richtig und falsch beantwortet (96 Antwortabläufe). Für jeden Block wurden 0/8 und 8/8 Punkte sowie zusätzlich ein gemischtes Ergebnis von 4/8 getestet. Auch Tastaturbedienung, Wiederholung, Wechsel zwischen allen Lernbereichen und das Zurücksetzen beim Neuladen wurden geprüft. Dabei traten keine JavaScript-Fehler oder externen Netzwerkanfragen auf. Das ersetzt keine vollständige Barrierefreiheitsprüfung.
