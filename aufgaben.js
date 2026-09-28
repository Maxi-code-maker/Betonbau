/* Alle Aufgaben hier bearbeiten. Anleitung: README.md.
   loesung muss genau einem Text in auswahl entsprechen. */
window.LERNBEREICHE = [
  {
    "id": "druckfestigkeit",
    "titel": "Druckfestigkeitsklassen",
    "beschreibung": "Klassen lesen. Prüfwerte verstehen. Druckfestigkeit berechnen.",
    "kurz": "Wie viel Druck hält Beton aus?",
    "beispiel": true,
    "aufgaben": [
      {
        "typ": "Multiple Choice",
        "frage": "Auf einem Plan steht C25/30. Welche Aussage beschreibt diese Druckfestigkeitsklasse richtig?",
        "kontext": "Achte auf die Reihenfolge der beiden Zahlen.",
        "auswahl": [
          "Zylinder: 30 N/mm² · Würfel: 25 N/mm²",
          "Zylinder: 25 N/mm² · Würfel: 30 N/mm²",
          "Zement: 25 N/mm² · Beton: 30 N/mm²",
          "Beton erreicht je nach Wassermenge 25 bis 30 N/mm²"
        ],
        "loesung": "Zylinder: 25 N/mm² · Würfel: 30 N/mm²",
        "erklaerung": "Die erste Zahl gehört zum Zylinder, die zweite zum Würfel. C steht für concrete, also Beton. Die Werte beschreiben die charakteristische Druckfestigkeit nach 28 Tagen.",
        "quelle": "4.2 Druckfestigkeit / Informationsblatt.pdf, Seite 1; Aufgabenblatt Lösung.pdf, Seite 1"
      },
      {
        "typ": "Richtig/Falsch",
        "frage": "Ein Prüflabor darf den Würfelwert direkt mit dem Zylinderwert vergleichen. Die Form des Probekörpers spielt dabei keine Rolle. Richtig oder falsch?",
        "kontext": "Beide Probekörper bestehen aus derselben Betonmischung.",
        "auswahl": [
          "Richtig",
          "Falsch"
        ],
        "loesung": "Falsch",
        "erklaerung": "Die Probekörperform beeinflusst das Prüfergebnis. Deshalb gibt es zwei zugehörige Werte. Bei C25/30 sind es 25 N/mm² am Zylinder und 30 N/mm² am Würfel.",
        "quelle": "4.2 Druckfestigkeit / Informationsblatt.pdf, Seite 1; Aufgabenblatt Lösung.pdf, Aufgabe 3c"
      },
      {
        "typ": "Lückentext",
        "frage": "Wähle das passende Wortpaar für die Lücken.",
        "kontext": "Für die übliche Prüfung wird der Beton nach ___ Tagen belastet. Die Kraft wird bis zum ___ des Probekörpers erhöht.",
        "auswahl": [
          "7 · Bruch",
          "28 · Bruch",
          "28 · Erstarren",
          "7 · Erstarren"
        ],
        "loesung": "28 · Bruch",
        "erklaerung": "Das übliche Prüfalter beträgt 28 Tage. Die Presse erhöht die Kraft bis zum Bruch. Aus der Bruchkraft und der belasteten Fläche wird die Druckfestigkeit berechnet.",
        "quelle": "4.2 Druckfestigkeit / Informationsblatt.pdf, Seiten 1–2; Aufgabenblatt Lösung.pdf, Aufgabe 3"
      },
      {
        "typ": "Rechenaufgabe",
        "frage": "Ein Würfel mit 150 mm Kantenlänge bricht bei 675 kN. Welche Druckfestigkeit ergibt sich?",
        "kontext": "Druckfestigkeit = Kraft ÷ belastete Fläche. 1 kN = 1.000 N. Rechne zuerst selbst, wähle dann dein Ergebnis.",
        "auswahl": [
          "4,5 N/mm²",
          "30 N/mm²",
          "45 N/mm²",
          "0,03 N/mm²"
        ],
        "loesung": "30 N/mm²",
        "erklaerung": "675 kN = 675.000 N. Die Fläche beträgt 150 × 150 = 22.500 mm². Also: 675.000 ÷ 22.500 = 30 N/mm². Ein einzelner Messwert reicht noch nicht aus, um eine Betonlieferung einer Klasse zuzuordnen.",
        "quelle": "4.2 Druckfestigkeit / Aufgabenblatt Lösung.pdf, Aufgabe 7"
      },
      {
        "typ": "Praxisentscheidung",
        "frage": "Geplant ist C30/37. Auf dem Lieferschein steht C25/30. Wie entscheidest du vor dem Einbau?",
        "kontext": "Prüfe hier nur die Druckfestigkeitsklasse. Weitere Bestellangaben behandelt der Lernbereich Betonbestellung.",
        "auswahl": [
          "Einbauen: Die Zahl 30 kommt in beiden Klassen vor.",
          "Einbauen: Entscheidend ist nur, dass die Bezeichnung mit C beginnt.",
          "Einbau zurückstellen und die Abweichung mit der verantwortlichen Person klären.",
          "Wasser zugeben, um die geforderte Klasse zu erreichen."
        ],
        "loesung": "Einbau zurückstellen und die Abweichung mit der verantwortlichen Person klären.",
        "erklaerung": "C25/30 hat niedrigere Klassenwerte als C30/37: 25 statt 30 am Zylinder und 30 statt 37 am Würfel. Die Lieferung entspricht damit nicht der geplanten Klasse. Wasserzugabe stellt die geforderte Festigkeit nicht her.",
        "quelle": "Eigene didaktische Anwendung zu 4.2 Druckfestigkeit / Informationsblatt.pdf, Seite 1"
      },
      {
        "typ": "Multiple Choice",
        "frage": "Welche drei Größen beeinflussen die Druckfestigkeit wesentlich?",
        "kontext": "Vergleiche die fachlichen Angaben, nicht die Organisation der Lieferung.",
        "auswahl": [
          "Zementfestigkeitsklasse, w/z-Wert und Kornzusammensetzung",
          "Liefertag, Fahrzeuggröße und Farbe des Zements",
          "Nur die Zementmenge und das Bauteilvolumen",
          "Ausbreitmaß, Lieferscheinnummer und Schalungsfarbe"
        ],
        "loesung": "Zementfestigkeitsklasse, w/z-Wert und Kornzusammensetzung",
        "erklaerung": "Zementfestigkeitsklasse, w/z-Wert und Zusammensetzung der Gesteinskörnung sind wesentliche Einflussgrößen. Auch Herstellung und Nachbehandlung müssen stimmen.",
        "quelle": "4.2 Druckfestigkeit / Informationsblatt.pdf, Seiten 1–2"
      },
      {
        "typ": "Rechenaufgabe",
        "frage": "Welche Bruchkraft gehört zu einer Würfeldruckfestigkeit von 40 N/mm²?",
        "kontext": "Die belastete Fläche beträgt 150 × 150 mm. Gesucht ist die Kraft in kN.",
        "auswahl": [
          "6 kN",
          "90 kN",
          "900 kN",
          "9.000 kN"
        ],
        "loesung": "900 kN",
        "erklaerung": "F = Druckfestigkeit × Fläche. 40 × 22.500 = 900.000 N = 900 kN. Die Fläche muss in mm² eingesetzt werden.",
        "quelle": "4.2 Druckfestigkeit / Informationsblatt.pdf, Seiten 1–2; eigene Umkehraufgabe"
      },
      {
        "typ": "Praxisentscheidung",
        "frage": "Zwei Prüfberichte nennen 37 N/mm². Welcher Bericht lässt sich dem Würfelwert von C30/37 zuordnen?",
        "kontext": "Verglichen wird nur die Art des Prüfwerts. Ein einzelner Wert bestätigt noch keine ganze Lieferung.",
        "auswahl": [
          "Zylinder, 150 mm Durchmesser, nach 7 Tagen",
          "Würfel, 150 mm Kantenlänge, nach 28 Tagen",
          "Zylinder, 150 mm Durchmesser, nach 28 Tagen",
          "Würfel, 150 mm Kantenlänge, direkt nach dem Mischen"
        ],
        "loesung": "Würfel, 150 mm Kantenlänge, nach 28 Tagen",
        "erklaerung": "Die zweite Zahl in C30/37 ist der Würfelwert nach 28 Tagen. Deshalb passt der Bericht mit dem 150-mm-Würfel und diesem Prüfalter.",
        "quelle": "4.2 Druckfestigkeit / Informationsblatt.pdf, Seiten 1–2"
      }
    ]
  },
  {
    "id": "exposition",
    "titel": "Expositionsklassen",
    "kurz": "Welche Umgebung greift Beton an?",
    "aufgaben": [
      {
        "typ": "Praxisentscheidung",
        "frage": "Eine Stahlbetonstütze wird durch Karbonatisierung gefährdet. Welche Klassengruppe ist zu prüfen?",
        "kontext": "Gesucht ist die Gruppe, noch keine Unterklasse.",
        "auswahl": [
          "XF",
          "XA",
          "XC",
          "XM"
        ],
        "loesung": "XC",
        "erklaerung": "XC bezeichnet Bewehrungskorrosion durch Karbonatisierung. XF, XA und XM beschreiben dagegen Angriffe auf den Beton.",
        "quelle": "4.3 Expositionsklassen / Infoblatt Expositionsklassen Lösung.pdf, Seite 1"
      },
      {
        "typ": "Multiple Choice",
        "frage": "Welche Zuordnung der Chloridquelle stimmt?",
        "kontext": "Unterscheide Meerwasser und Tausalz.",
        "auswahl": [
          "XD: Meerwasser · XS: Tausalz",
          "XD: Tausalz · XS: Meerwasser",
          "XC: Tausalz · XF: Meerwasser",
          "XA: Tausalz · XM: Meerwasser"
        ],
        "loesung": "XD: Tausalz · XS: Meerwasser",
        "erklaerung": "XD erfasst Chloride, die nicht aus Meerwasser stammen, etwa Tausalz. XS steht für Chloride aus Meerwasser.",
        "quelle": "4.3 Expositionsklassen / Infoblatt Expositionsklassen Lösung.pdf, Seite 1"
      },
      {
        "typ": "Lückentext",
        "frage": "Ergänze die beiden Klassengruppen.",
        "kontext": "Frostangriff wird mit ___ bezeichnet. Chemischer Angriff wird mit ___ bezeichnet.",
        "auswahl": [
          "XM · XC",
          "XD · XS",
          "XA · XF",
          "XF · XA"
        ],
        "loesung": "XF · XA",
        "erklaerung": "XF steht für Frostangriff mit oder ohne Taumittel. XA steht für chemischen Angriff auf Beton.",
        "quelle": "4.3 Expositionsklassen / Infoblatt Expositionsklassen Lösung.pdf, Seite 1"
      },
      {
        "typ": "Praxisentscheidung",
        "frage": "Eine Betonfläche wird durch rollende Lasten stark abgerieben. Welche Gruppe beschreibt diesen Angriff?",
        "kontext": "Betrachte hier ausschließlich den mechanischen Verschleiß.",
        "auswahl": [
          "XM",
          "XS",
          "XC",
          "XD"
        ],
        "loesung": "XM",
        "erklaerung": "XM beschreibt Verschleißbeanspruchung. Die genaue Unterklasse hängt von der tatsächlichen Beanspruchung ab.",
        "quelle": "4.3 Expositionsklassen / Infoblatt Expositionsklassen Lösung.pdf, Seite 1"
      },
      {
        "typ": "Richtig/Falsch",
        "frage": "Für ein Bauteil darf immer nur eine einzige Expositionsklasse festgelegt werden.",
        "kontext": "Denke an eine befahrene Außenfläche mit Frost und Tausalz.",
        "auswahl": [
          "Richtig",
          "Falsch"
        ],
        "loesung": "Falsch",
        "erklaerung": "Ein Bauteil kann mehreren Angriffen ausgesetzt sein. Dann sind mehrere Klassen nötig. Für jede Anforderung zählt die jeweils strengste Vorgabe.",
        "quelle": "4.3 Expositionsklassen / Infoblatt Expositionsklassen Lösung.pdf, Seite 1"
      },
      {
        "typ": "Rechenaufgabe",
        "frage": "Welche Kombination erfüllt beide vorgegebenen Anforderungssätze?",
        "kontext": "Übungswerte: Satz A fordert w/z ≤ 0,60 und Zement ≥ 280 kg/m³. Satz B fordert w/z ≤ 0,50 und Zement ≥ 320 kg/m³.",
        "auswahl": [
          "w/z 0,55 · 300 kg/m³",
          "w/z 0,60 · 320 kg/m³",
          "w/z 0,50 · 320 kg/m³",
          "w/z 0,50 · 280 kg/m³"
        ],
        "loesung": "w/z 0,50 · 320 kg/m³",
        "erklaerung": "Der kleinere zulässige w/z-Wert ist strenger: 0,50. Beim Mindestzementgehalt ist der größere Wert strenger: 320 kg/m³. Beide Bedingungen müssen erfüllt sein.",
        "quelle": "4.3 Expositionsklassen / Infoblatt Expositionsklassen Lösung.pdf, Seite 1; frei vorgegebene Übungswerte, keine Normtabelle"
      },
      {
        "typ": "Multiple Choice",
        "frage": "Welche Festlegungen können sich aus Expositionsklassen ergeben?",
        "kontext": "Gesucht sind Anforderungen an die Dauerhaftigkeit.",
        "auswahl": [
          "Nur Liefermenge und Lieferzeit",
          "Nur die Farbe des erhärteten Betons",
          "Nur die Druckfestigkeit, nie die Betondeckung",
          "Mindestfestigkeit, maximaler w/z-Wert, Mindestzementgehalt und Betondeckung"
        ],
        "loesung": "Mindestfestigkeit, maximaler w/z-Wert, Mindestzementgehalt und Betondeckung",
        "erklaerung": "Die Expositionsklassen beeinflussen unter anderem diese vier Festlegungen. Sie helfen, Beton und Bewehrung gegen die Umgebungseinflüsse zu schützen.",
        "quelle": "4.3 Expositionsklassen / Infoblatt Expositionsklassen Lösung.pdf, Seite 1"
      },
      {
        "typ": "Praxisentscheidung",
        "frage": "Eine Außenfläche ist nass, friert und kommt mit Tausalz in Kontakt. Reicht die Angabe „C30/37“ zur Beschreibung der Umgebungseinflüsse?",
        "kontext": "Es soll noch keine genaue Expositions-Unterklasse ausgewählt werden.",
        "auswahl": [
          "Nein. Die zutreffenden Expositionsklassen müssen zusätzlich festgelegt werden.",
          "Ja. C30/37 bedeutet automatisch frost- und tausalzbeständig.",
          "Ja. Bei hoher Druckfestigkeit ist jede Umgebung gleich.",
          "Nein. Stattdessen genügt allein die Konsistenzklasse."
        ],
        "loesung": "Nein. Die zutreffenden Expositionsklassen müssen zusätzlich festgelegt werden.",
        "erklaerung": "Eine Druckfestigkeitsklasse beschreibt die Festigkeit. Sie nennt die Umgebungseinflüsse nicht. Frost und gegebenenfalls Chloridangriff auf die Bewehrung müssen zusätzlich berücksichtigt werden.",
        "quelle": "4.3 Expositionsklassen / Infoblatt Expositionsklassen Lösung.pdf, Seite 1; didaktische Anwendung"
      }
    ],
    "beispiel": true
  },
  {
    "id": "wz",
    "titel": "w/z-Wert",
    "kurz": "Wasser und Zement im richtigen Verhältnis.",
    "aufgaben": [
      {
        "typ": "Lückentext",
        "frage": "Ergänze die Definition des w/z-Werts.",
        "kontext": "Der w/z-Wert ist die Masse des ___ geteilt durch die Masse des ___.",
        "auswahl": [
          "Zements · Wassers",
          "Wassers · Zements",
          "Wassers · gesamten Betons",
          "Zements · Gesteins"
        ],
        "loesung": "Wassers · Zements",
        "erklaerung": "Der w/z-Wert ist das Massenverhältnis Wasser zu Zement. Er hat keine Einheit. In diesen Aufgaben gilt näherungsweise: 1 Liter Wasser = 1 Kilogramm.",
        "quelle": "4.4 WZ_Wert / Infoblatt w-z-Wert.pdf, Seiten 1–2"
      },
      {
        "typ": "Rechenaufgabe",
        "frage": "Wie groß ist der w/z-Wert der Mischung?",
        "kontext": "300 kg Zement und insgesamt 165 Liter Wasser.",
        "auswahl": [
          "0,45",
          "1,82",
          "0,55",
          "0,65"
        ],
        "loesung": "0,55",
        "erklaerung": "165 kg Wasser ÷ 300 kg Zement = 0,55. Die Masse der Gesteinskörnung steht nicht im Nenner.",
        "quelle": "4.4 WZ_Wert / Übungsaufgaben Rechnen w-z-Wert Lösung.pdf, Aufgabe 3"
      },
      {
        "typ": "Rechenaufgabe",
        "frage": "Wie viel Wasser darf die Mischung insgesamt enthalten?",
        "kontext": "300 kg Zement. Vorgegebener w/z-Wert: 0,45.",
        "auswahl": [
          "135 Liter",
          "300 Liter",
          "150 Liter",
          "667 Liter"
        ],
        "loesung": "135 Liter",
        "erklaerung": "Gesamtwasser = 0,45 × 300 = 135 kg, also etwa 135 Liter. Wasser aus der Oberflächenfeuchte zählt dazu.",
        "quelle": "4.4 WZ_Wert / Übungsaufgaben Rechnen w-z-Wert Lösung.pdf, Aufgabe 2"
      },
      {
        "typ": "Rechenaufgabe",
        "frage": "Wie viel Zugabewasser ist erforderlich?",
        "kontext": "Gesamtwasserbedarf: 135 Liter. 1.870 kg trockene Gesteinskörnung bringen zusätzlich 3 % anrechenbare Oberflächenfeuchte mit.",
        "auswahl": [
          "191,1 Liter",
          "135 Liter",
          "56,1 Liter",
          "78,9 Liter"
        ],
        "loesung": "78,9 Liter",
        "erklaerung": "Die Körnung bringt 0,03 × 1.870 = 56,1 Liter Wasser mit. Zugabewasser = 135 − 56,1 = 78,9 Liter. Die Prozentangabe bezieht sich hier auf die Trockenmasse.",
        "quelle": "4.4 WZ_Wert / Übungsaufgaben Rechnen w-z-Wert Lösung.pdf, Aufgabe 2; Feuchtebezug präzisiert"
      },
      {
        "typ": "Richtig/Falsch",
        "frage": "Wasser an der Oberfläche der Gesteinskörnung muss beim w/z-Wert mitgerechnet werden.",
        "kontext": "Es ist für die Mischung wirksames Wasser.",
        "auswahl": [
          "Richtig",
          "Falsch"
        ],
        "loesung": "Richtig",
        "erklaerung": "Der Wassergehalt umfasst das Zugabewasser und die anrechenbare Oberflächenfeuchte. Wer sie vergisst, gibt zu viel Wasser zu.",
        "quelle": "4.4 WZ_Wert / Infoblatt w-z-Wert.pdf, Seiten 1–2"
      },
      {
        "typ": "Praxisentscheidung",
        "frage": "Ein Beton ist schwer zu verarbeiten. Ein Kollege möchte ohne Abstimmung Wasser nachgießen. Wie reagierst du?",
        "kontext": "Die festgelegte Rezeptur und der w/z-Wert sollen eingehalten werden.",
        "auswahl": [
          "Wasser beliebig zugeben, solange der Beton weicher wird.",
          "Nicht eigenmächtig ändern; die zulässige Anpassung mit der verantwortlichen Person klären.",
          "Die Gesteinskörnung entfernen und unverändert weiterarbeiten.",
          "Wasser zugeben und den w/z-Wert unverändert aufschreiben."
        ],
        "loesung": "Nicht eigenmächtig ändern; die zulässige Anpassung mit der verantwortlichen Person klären.",
        "erklaerung": "Zusätzliches Wasser erhöht bei gleicher Zementmenge den w/z-Wert. Es kann Festigkeit und Dauerhaftigkeit verringern. Die Rezeptur darf nicht beliebig verändert werden.",
        "quelle": "4.4 WZ_Wert / Infoblatt w-z-Wert.pdf, Seiten 1–2; didaktische Anwendung"
      },
      {
        "typ": "Multiple Choice",
        "frage": "Warum kann ein hoher w/z-Wert die Festigkeit verringern?",
        "kontext": "Betrachte das Wasser, das nicht gebunden wird.",
        "auswahl": [
          "Weil dadurch alle Gesteinskörner größer werden.",
          "Weil Wasser den Zement vollständig ersetzt.",
          "Weil Überschusswasser Kapillarporen hinterlassen kann.",
          "Weil Beton mit viel Wasser keine Masse mehr hat."
        ],
        "loesung": "Weil Überschusswasser Kapillarporen hinterlassen kann.",
        "erklaerung": "Überschusswasser kann beim Verdunsten Kapillarporen hinterlassen. Diese Hohlräume schwächen den Zementstein und erhöhen die Wassersaugfähigkeit.",
        "quelle": "4.4 WZ_Wert / Infoblatt w-z-Wert.pdf, Seiten 1–2"
      },
      {
        "typ": "Rechenaufgabe",
        "frage": "Wie verändert sich der w/z-Wert durch die zusätzliche Wasserzugabe?",
        "kontext": "Pro m³: 280 kg Zement und bisher 135 Liter Gesamtwasser. Zu 6 m³ werden insgesamt 120 Liter Wasser zusätzlich gegeben. Runde auf drei Nachkommastellen.",
        "auswahl": [
          "Von 0,482 auf 0,554",
          "Von 0,482 auf 0,911",
          "Von 0,482 auf 0,502",
          "Er bleibt bei 0,482"
        ],
        "loesung": "Von 0,482 auf 0,554",
        "erklaerung": "120 ÷ 6 = 20 Liter zusätzlich pro m³. Der neue Wassergehalt beträgt 155 Liter pro m³. Alt: 135 ÷ 280 = 0,482. Neu: 155 ÷ 280 = 0,554.",
        "quelle": "4.4 WZ_Wert / Übungsaufgaben Rechnen w-z-Wert Lösung.pdf, Aufgabe 4"
      }
    ],
    "beispiel": true
  },
  {
    "id": "konsistenz",
    "titel": "Betonkonsistenz",
    "kurz": "Wie lässt sich Frischbeton verarbeiten?",
    "aufgaben": [
      {
        "typ": "Praxisentscheidung",
        "frage": "Wann überprüfst du bei einer Transportbetonlieferung die Konsistenz?",
        "kontext": "Die Eigenschaft soll zum Einbau passen.",
        "auswahl": [
          "Erst nach 28 Tagen",
          "Nur bei der Planung, nie an der Lieferung",
          "Erst nach dem Erhärten",
          "Bei der Frischbetonlieferung"
        ],
        "loesung": "Bei der Frischbetonlieferung",
        "erklaerung": "Die Konsistenz wird bei Transportbeton zum Zeitpunkt der Frischbetonlieferung geprüft. Sie beschreibt eine Eigenschaft des frischen Betons.",
        "quelle": "4.5 Konsistenz / Informationsblatt.pdf, Seiten 1–2"
      },
      {
        "typ": "Multiple Choice",
        "frage": "Welcher Ablauf gehört zum Ausbreitversuch?",
        "kontext": "Wähle das passende Verfahren zur Ermittlung des Ausbreitmaßes.",
        "auswahl": [
          "Würfel in einer Presse bis zum Bruch belasten.",
          "Kegelstumpfform abziehen, Tisch 15-mal anheben und fallen lassen, zwei Durchmesser messen.",
          "Beton sieben und Siebrückstände wiegen.",
          "Beton 28 Tage lagern und anschließend seine Länge messen."
        ],
        "loesung": "Kegelstumpfform abziehen, Tisch 15-mal anheben und fallen lassen, zwei Durchmesser messen.",
        "erklaerung": "Nach dem Abziehen der Form wird die Tischplatte 15-mal angehoben und fallen gelassen. Zwei rechtwinklige Durchmesser liefern den Mittelwert des Ausbreitmaßes.",
        "quelle": "4.5 Konsistenz / Informationsblatt.pdf, Seiten 1–2"
      },
      {
        "typ": "Rechenaufgabe",
        "frage": "Welches Ausbreitmaß und welche Klasse ergeben sich?",
        "kontext": "Gemessene Durchmesser: 511 mm und 535 mm. Für diese Aufgabe: F3 = 420–480 mm, F4 = 490–550 mm, F5 = 560–620 mm.",
        "auswahl": [
          "511 mm · F4",
          "535 mm · F5",
          "523 mm · F4",
          "1.046 mm · F5"
        ],
        "loesung": "523 mm · F4",
        "erklaerung": "Der Mittelwert ist (511 + 535) ÷ 2 = 523 mm. Er liegt zwischen 490 und 550 mm und gehört damit zu F4, also „sehr weich“.",
        "quelle": "4.5 Konsistenz / Informationsblatt.pdf, Seiten 1–2; Aufgabenblatt Lösung.pdf, Aufgabe 3"
      },
      {
        "typ": "Lückentext",
        "frage": "Ergänze die Bezeichnungen der Prüfgrößen.",
        "kontext": "Beim Ausbreitversuch bestimmt man das ___. Beim Verdichtungsversuch bestimmt man das ___.",
        "auswahl": [
          "Ausbreitmaß · Verdichtungsmaß",
          "Verdichtungsmaß · Ausbreitmaß",
          "Bruchmaß · Siebmaß",
          "w/z-Verhältnis · Größtkorn"
        ],
        "loesung": "Ausbreitmaß · Verdichtungsmaß",
        "erklaerung": "Das Ausbreitmaß gehört zu den F-Klassen. Das Verdichtungsmaß gehört zu den C-Konsistenzklassen. Diese C-Klassen sind keine Druckfestigkeitsklassen wie C25/30.",
        "quelle": "4.5 Konsistenz / Informationsblatt.pdf, Seiten 1–2"
      },
      {
        "typ": "Rechenaufgabe",
        "frage": "Wie groß ist das Verdichtungsmaß?",
        "kontext": "Behälterhöhe: 40 cm. Mittleres Absinkmaß: 6,4 cm. Verdichtungsmaß = Behälterhöhe ÷ Füllhöhe nach dem Verdichten. Runde auf zwei Nachkommastellen.",
        "auswahl": [
          "0,84",
          "6,25",
          "1,12",
          "1,19"
        ],
        "loesung": "1,19",
        "erklaerung": "Die Füllhöhe ist 40 − 6,4 = 33,6 cm. Das Verdichtungsmaß beträgt 40 ÷ 33,6 ≈ 1,19. Die Einheit kürzt sich heraus.",
        "quelle": "4.5 Konsistenz / Informationsblatt.pdf, Seiten 1–2; Aufgabenblatt Lösung.pdf, Aufgabe 2 (Nenner-Tippfehler berichtigt)"
      },
      {
        "typ": "Multiple Choice",
        "frage": "Welche Konsistenzklasse passt zu einem Verdichtungsmaß von 1,19?",
        "kontext": "Gegebene Bereiche: C1 = 1,26–1,45; C2 = 1,11–1,25; C3 = 1,04–1,10.",
        "auswahl": [
          "C1 · steif",
          "C2 · plastisch",
          "C3 · weich",
          "C25/30 · druckfest"
        ],
        "loesung": "C2 · plastisch",
        "erklaerung": "1,19 liegt zwischen 1,11 und 1,25. Das ist C2, also plastischer Beton. C25/30 beschreibt dagegen die Druckfestigkeit.",
        "quelle": "4.5 Konsistenz / Informationsblatt.pdf, Seiten 1–2"
      },
      {
        "typ": "Richtig/Falsch",
        "frage": "Gleiche Konsistenz bedeutet automatisch gleiche Druckfestigkeit.",
        "kontext": "Zwei Mischungen können gleich gut fließen, aber unterschiedlich zusammengesetzt sein.",
        "auswahl": [
          "Richtig",
          "Falsch"
        ],
        "loesung": "Falsch",
        "erklaerung": "Konsistenz beschreibt die Steifigkeit des Frischbetons. Druckfestigkeit ist eine Eigenschaft des erhärteten Betons. Gleiche Konsistenz belegt daher keine gleiche Festigkeit.",
        "quelle": "4.5 Konsistenz / Informationsblatt.pdf, Seiten 1–2; 4.2 Druckfestigkeit / Informationsblatt.pdf"
      },
      {
        "typ": "Praxisentscheidung",
        "frage": "Welche Aussage beschreibt eine geeignete Konsistenz?",
        "kontext": "Beton soll in eine Schalung eingebaut und verdichtet werden.",
        "auswahl": [
          "Sie muss zum Einbau und zur Verdichtung passen, ohne dass der Beton sich entmischt.",
          "Sie muss immer möglichst flüssig sein, unabhängig vom Bauteil.",
          "Sie wird ausschließlich durch die Farbe beurteilt.",
          "Sie lässt sich nur nach dem Erhärten feststellen."
        ],
        "loesung": "Sie muss zum Einbau und zur Verdichtung passen, ohne dass der Beton sich entmischt.",
        "erklaerung": "Die Konsistenz ist so zu wählen, dass Befördern, Einbauen und Verdichten unter den jeweiligen Bedingungen möglich sind. Dabei soll sich der Beton nicht entmischen.",
        "quelle": "4.5 Konsistenz / Informationsblatt.pdf, Seiten 1–2"
      }
    ],
    "beispiel": true
  },
  {
    "id": "gestein",
    "titel": "Gesteinskörnung",
    "kurz": "Was macht eine gute Körnung aus?",
    "aufgaben": [
      {
        "typ": "Praxisentscheidung",
        "frage": "Eine Körnung enthält Holzreste, Laub und Humus. Wie gehst du damit um?",
        "kontext": "Sie soll für eine Betonmischung eingesetzt werden.",
        "auswahl": [
          "Ohne Prüfung verwenden, weil Zement alles ausgleicht.",
          "Mehr Wasser zugeben, damit die Fremdstoffe schwimmen.",
          "Nicht ungeprüft einsetzen; saubere, geeignete Körnung bereitstellen lassen.",
          "Nur die Zementmenge halbieren."
        ],
        "loesung": "Nicht ungeprüft einsetzen; saubere, geeignete Körnung bereitstellen lassen.",
        "erklaerung": "Die Unterlagen fordern saubere Körnung ohne Holz, Laub oder Humus. Außerdem braucht sie ausreichende Festigkeit und die erforderliche Frostbeständigkeit.",
        "quelle": "4.6 Gesteinskörnung / Infoblatt Lösung.pdf, Seite 1"
      },
      {
        "typ": "Multiple Choice",
        "frage": "Welche Kornform erleichtert nach dem Infoblatt die Verdichtung?",
        "kontext": "Vergleiche die Form der Gesteinskörner.",
        "auswahl": [
          "Sehr längliche, nadelige Körner",
          "Rundliche, gedrungene Körner",
          "Möglichst flache Plättchen",
          "Die Kornform hat grundsätzlich keinen Einfluss"
        ],
        "loesung": "Rundliche, gedrungene Körner",
        "erklaerung": "Rundliche, gedrungene Körner lassen sich günstiger anordnen und erleichtern die Verdichtung. Stark längliche oder plattige Formen sind dafür ungünstiger.",
        "quelle": "4.6 Gesteinskörnung / Infoblatt Lösung.pdf, Seite 1"
      },
      {
        "typ": "Lückentext",
        "frage": "Ergänze den Zusammenhang bei einer gut abgestimmten Mischkörnung.",
        "kontext": "Kleine Körner füllen Zwischenräume zwischen großen Körnern. Dadurch gibt es ___ Hohlräume und meist einen ___ Bindemittelbedarf.",
        "auswahl": [
          "mehr · geringeren",
          "weniger · höheren",
          "mehr · höheren",
          "weniger · geringeren"
        ],
        "loesung": "weniger · geringeren",
        "erklaerung": "Eine geeignete Abstufung der Korngrößen verringert die Hohlräume. Weniger Zwischenraum muss mit Zementleim gefüllt werden.",
        "quelle": "4.6 Gesteinskörnung / Infoblatt Lösung.pdf, Seiten 1–2"
      },
      {
        "typ": "Richtig/Falsch",
        "frage": "Nur sehr feine Körner sind immer die beste Wahl, weil sie am wenigsten Zementleim benötigen.",
        "kontext": "Vergleiche die Oberfläche vieler kleiner Körner mit der einer gröberen, abgestimmten Mischung.",
        "auswahl": [
          "Richtig",
          "Falsch"
        ],
        "loesung": "Falsch",
        "erklaerung": "Viele feine Körner besitzen eine große Gesamtoberfläche. Diese muss benetzt werden. Eine abgestimmte Mischkörnung ist deshalb günstiger als ausschließlich feines Einkorn.",
        "quelle": "4.6 Gesteinskörnung / Infoblatt Lösung.pdf, Seiten 1–2"
      },
      {
        "typ": "Multiple Choice",
        "frage": "Was zeigt eine Sieblinie?",
        "kontext": "Die Probe wird durch einen Prüfsiebsatz gesiebt.",
        "auswahl": [
          "Die Verteilung der Korngrößen anhand der prozentualen Siebdurchgänge",
          "Die Druckkraft beim Bruch eines Betonwürfels",
          "Die Erhärtungsdauer des Zements in Stunden",
          "Nur das Gesamtgewicht eines Betonfahrzeugs"
        ],
        "loesung": "Die Verteilung der Korngrößen anhand der prozentualen Siebdurchgänge",
        "erklaerung": "Eine Sieblinie zeigt, welche Anteile der Gesamtprobe durch die jeweiligen Siebe gehen. So lässt sich die Kornzusammensetzung beurteilen.",
        "quelle": "4.6 Gesteinskörnung / Infoblatt Lösung.pdf, Seite 2"
      },
      {
        "typ": "Rechenaufgabe",
        "frage": "Wie groß ist der Durchgang durch das 2-mm-Sieb?",
        "kontext": "Gesamtprobe: 5.000 g. Auf dem 2-mm-Sieb und den gröberen Sieben bleiben zusammen 3.709 g liegen. Runde auf eine Nachkommastelle.",
        "auswahl": [
          "74,2 %",
          "37,1 %",
          "25,8 %",
          "62,9 %"
        ],
        "loesung": "25,8 %",
        "erklaerung": "Der aufsummierte Rückstand beträgt 3.709 ÷ 5.000 × 100 = 74,18 %. Durchgang = 100 − 74,18 = 25,82 %, gerundet 25,8 %.",
        "quelle": "4.6 Gesteinskörnung / Infoblatt Lösung.pdf, Seite 3"
      },
      {
        "typ": "Rechenaufgabe",
        "frage": "Welche Masse geht durch ein Sieb, wenn der Durchgang 40 % beträgt?",
        "kontext": "Die Gesamtprobe wiegt 5.000 g.",
        "auswahl": [
          "3.000 g",
          "2.000 g",
          "400 g",
          "4.000 g"
        ],
        "loesung": "2.000 g",
        "erklaerung": "40 % von 5.000 g sind 0,40 × 5.000 = 2.000 g. Die übrigen 3.000 g bleiben auf diesem oder gröberen Sieben zurück.",
        "quelle": "4.6 Gesteinskörnung / Infoblatt Lösung.pdf, Seiten 2–3; eigene Rechenvariante"
      },
      {
        "typ": "Praxisentscheidung",
        "frage": "Zwei Körnungen stehen zur Wahl. Welche ist nach dem Prinzip des Infoblatts günstiger?",
        "kontext": "Beide sind sauber und ausreichend fest. Gesucht ist ein geringer Zementleimbedarf.",
        "auswahl": [
          "Nur Körner einer einzigen groben Größe",
          "Nur sehr feine Körner mit großer Gesamtoberfläche",
          "Eine Mischung mit möglichst vielen Hohlräumen",
          "Eine abgestimmte Mischkörnung mit wenigen Hohlräumen"
        ],
        "loesung": "Eine abgestimmte Mischkörnung mit wenigen Hohlräumen",
        "erklaerung": "Eine abgestimmte Mischkörnung kann den Zementleimbedarf reduzieren. Weniger Zementleim hilft auch, das Schwinden und die Gefahr von Schwindrissen zu begrenzen.",
        "quelle": "4.6 Gesteinskörnung / Infoblatt Lösung.pdf, Seiten 1–2"
      }
    ],
    "beispiel": true
  },
  {
    "id": "mischung",
    "titel": "Betonbestellung & Betonmischung",
    "kurz": "Mengen berechnen und passend bestellen.",
    "aufgaben": [
      {
        "typ": "Rechenaufgabe",
        "frage": "Welches Betonvolumen hat ein gerades Streifenfundament?",
        "kontext": "Länge 8,00 m, Breite 0,45 m, Höhe 0,60 m. Ohne Überschneidungen und ohne Zuschlag rechnen.",
        "auswahl": [
          "2,16 m³",
          "3,60 m³",
          "4,80 m³",
          "21,60 m³"
        ],
        "loesung": "2,16 m³",
        "erklaerung": "Volumen = Länge × Breite × Höhe = 8,00 × 0,45 × 0,60 = 2,16 m³. Alle Maße müssen in derselben Längeneinheit stehen.",
        "quelle": "4.7 Betonmischung, Betonbestellung / Aufgabe Betonmischung Fundament Lösung.pdf, Seite 3; eigene Maße"
      },
      {
        "typ": "Rechenaufgabe",
        "frage": "Welche Menge ergibt sich einschließlich des vorgegebenen Zuschlags?",
        "kontext": "Berechnetes Volumen: 14,83 m³. Für diese Übung werden 5 % Zuschlag vereinbart. Runde auf zwei Nachkommastellen.",
        "auswahl": [
          "14,88 m³",
          "15,33 m³",
          "15,57 m³",
          "19,83 m³"
        ],
        "loesung": "15,57 m³",
        "erklaerung": "14,83 × 1,05 = 15,5715 m³, gerundet 15,57 m³. Die 5 % sind eine Vorgabe dieser Übung, kein allgemeingültiger Bestellzuschlag.",
        "quelle": "4.7 Betonmischung, Betonbestellung / Aufgabe Betonmischung Fundament Lösung.pdf, Seite 3; eigene Zuschlagsvariante"
      },
      {
        "typ": "Rechenaufgabe",
        "frage": "Wie viel Zement wird für 14,83 m³ benötigt?",
        "kontext": "Übungsrezeptur aus dem Blatt: 380 kg Zement je m³. Runde auf ganze Kilogramm.",
        "auswahl": [
          "380 kg",
          "5.635 kg",
          "3.903 kg",
          "56.354 kg"
        ],
        "loesung": "5.635 kg",
        "erklaerung": "380 × 14,83 = 5.635,4 kg, gerundet 5.635 kg. Der Bedarf pro m³ wird mit dem gesamten Volumen multipliziert.",
        "quelle": "4.7 Betonmischung, Betonbestellung / Aufgabe Betonmischung Fundament Lösung.pdf, Seiten 2–3"
      },
      {
        "typ": "Rechenaufgabe",
        "frage": "Wie groß ist der gesamte Wasserbedarf für 14,83 m³?",
        "kontext": "Die vorgegebene Rezeptur enthält insgesamt 180 Liter Wasser je m³. Runde auf ganze Liter.",
        "auswahl": [
          "180 Liter",
          "824 Liter",
          "26.694 Liter",
          "2.669 Liter"
        ],
        "loesung": "2.669 Liter",
        "erklaerung": "180 × 14,83 = 2.669,4 Liter, gerundet 2.669 Liter. Das ist das Gesamtwasser, noch nicht die Menge des Zugabewassers.",
        "quelle": "4.7 Betonmischung, Betonbestellung / Aufgabe Betonmischung Fundament Lösung.pdf, Seiten 2–3"
      },
      {
        "typ": "Rechenaufgabe",
        "frage": "Wie viel Wasser muss zusätzlich zugegeben werden?",
        "kontext": "Für die ganze Charge: 2.669 Liter Gesamtwasser. Die Gesteinskörnung bringt bereits 537 Liter anrechenbare Oberflächenfeuchte mit.",
        "auswahl": [
          "2.132 Liter",
          "3.206 Liter",
          "2.669 Liter",
          "537 Liter"
        ],
        "loesung": "2.132 Liter",
        "erklaerung": "Zugabewasser = Gesamtwasser − Wasser aus der Körnung. Also 2.669 − 537 = 2.132 Liter. Die Feuchte darf nicht doppelt berücksichtigt werden.",
        "quelle": "4.7 Betonmischung, Betonbestellung / Aufgabe Betonmischung Fundament Lösung.pdf, Seite 3"
      },
      {
        "typ": "Lückentext",
        "frage": "Ergänze die Bedeutung der Bestellangaben.",
        "kontext": "C30/37 bezeichnet die ___. F3 bezeichnet die ___.",
        "auswahl": [
          "Konsistenzklasse · Expositionsklasse",
          "Gesteinskörnung · Zementart",
          "Druckfestigkeitsklasse · Konsistenzklasse",
          "Expositionsklasse · Druckfestigkeitsklasse"
        ],
        "loesung": "Druckfestigkeitsklasse · Konsistenzklasse",
        "erklaerung": "C30/37 beschreibt die Druckfestigkeit. F3 steht für eine Konsistenzklasse aus dem Ausbreitversuch. Die Angaben erfüllen verschiedene Aufgaben und ersetzen einander nicht.",
        "quelle": "4.7 Betonmischung, Betonbestellung / Aufgabe Betonmischung Fundament Lösung.pdf, Seite 2; 4.2 und 4.5 Informationsblätter; eigene Anwendung"
      },
      {
        "typ": "Richtig/Falsch",
        "frage": "Bei feuchter Körnung darf der gesamte Wasserbedarf zusätzlich in den Mischer gegeben werden.",
        "kontext": "Die Oberflächenfeuchte ist anrechenbares Wasser der Mischung.",
        "auswahl": [
          "Richtig",
          "Falsch"
        ],
        "loesung": "Falsch",
        "erklaerung": "Dann wäre zu viel Wasser in der Mischung. Die Oberflächenfeuchte wird vom Gesamtwasserbedarf abgezogen, um das richtige Zugabewasser zu erhalten.",
        "quelle": "4.7 Betonmischung, Betonbestellung / Aufgabe Betonmischung Fundament Lösung.pdf, Seite 3"
      },
      {
        "typ": "Praxisentscheidung",
        "frage": "Welche Aussage zur Bestellung ist richtig?",
        "kontext": "Für die Übung sind C30/37, F3 und ein Gesamtvolumen vorgegeben. Weitere Anforderungen stehen noch nicht fest.",
        "auswahl": [
          "Die Druckfestigkeitsklasse allein reicht immer als vollständige Bestellung.",
          "Die Konsistenzklasse ersetzt die Angabe der Menge.",
          "Die Expositionsklassen können beliebig gewählt werden, wenn F3 angegeben ist.",
          "Menge und vorgegebene Eigenschaften übernehmen; fehlende Anforderungen vor der Bestellung klären."
        ],
        "loesung": "Menge und vorgegebene Eigenschaften übernehmen; fehlende Anforderungen vor der Bestellung klären.",
        "erklaerung": "Die Bestellung muss zur Planung passen. Druckfestigkeit, Konsistenz und Menge haben unterschiedliche Bedeutungen. Weitere Anforderungen, etwa Expositionsklassen und Größtkorn, müssen geklärt werden.",
        "quelle": "4.7 Betonmischung, Betonbestellung / Aufgabe Betonmischung Fundament Lösung.pdf, Aufgaben b–g; didaktische Anwendung"
      }
    ],
    "beispiel": true
  }
];
