/////////////////////
// 1.6
///////////////////

// Populate Kunde collection
db.kunden.insertMany([
  {
    "_id": ObjectId("65e03b1a1aa6382bf1eed24e"),
    "Name": "Muster",
    "Vorname": "Max",
    "Email": "max.muster@example.com",
    "Geburtsdatum": ISODate("1988-03-15"),
    "Strasse": "Eichenweg 7",
    "Ort": "Stadt",
    "PLZ": "34567",
    "Land": "Deutschland",
    "Telefonnummer": "+49876543210"
  },
  {
    "_id": ObjectId("65e03b3b1aa6382bf1eed24f"),
    "Name": "Meier",
    "Vorname": "Anna",
    "Email": "anna.meier@example.com",
    "Geburtsdatum": ISODate("1992-09-25"),
    "Strasse": "Ahornstraße 14",
    "Ort": "Dorf",
    "PLZ": "45678",
    "Bemerkung": "Stammkunde"
  },
  {
    "_id": ObjectId("65e03b4a1aa6382bf1eed250"),
    "Name": "Schmidt",
    "Vorname": "Michael",
    "Email": "michael.schmidt@example.com",
    "Geburtsdatum": ISODate("1975-11-03"),
    "Strasse": "Lindenallee 21",
    "Ort": "Stadt",
    "PLZ": "56789",
    "Land": "Deutschland"
  },
  {
    "_id": ObjectId("65e03b561aa6382bf1eed251"),
    "Name": "Becker",
    "Vorname": "Julia",
    "Email": "julia.becker@example.com",
    "Geburtsdatum": ISODate("1980-07-12"),
    "Strasse": "Birkenweg 5",
    "Ort": "Dorf",
    "PLZ": "67890",
    "Land": "Deutschland",
    "Beruf": "Informatiker"
  },
  {
    "_id": ObjectId("65e03b5e1aa6382bf1eed252"),
    "Name": "Hoffmann",
    "Vorname": "Andreas",
    "Email": "andreas.hoffmann@example.com",
    "Geburtsdatum": ISODate("1995-05-20"),
    "Strasse": "Fichtenstraße 3",
    "Ort": "Stadt",
    "PLZ": "78901",
    "Land": "Deutschland",
    "Telefonnummer": "+0987654321"
  },
  {
    "_id": ObjectId("65e03b651aa6382bf1eed253"),
    "Name": "Koch",
    "Email": "sarah.koch@example.com",
    "Geburtsdatum": ISODate("1987-02-10"),
    "Strasse": "Kastanienweg 12",
    "Ort": "Dorf",
    "PLZ": "89012",
    "Land": "Deutschland"
  },
  {
    "_id": ObjectId("65e03b6d1aa6382bf1eed254"),
    "Name": "Schwarz",
    "Vorname": "Kevin",
    "Email": "kevin.schwarz@example.com",
    "Geburtsdatum": ISODate("1978-08-05"),
    "Strasse": "Buchenstraße 8",
  },
  {
    "_id": ObjectId("65e03b771aa6382bf1eed255"),
    "Name": "Bauer",
    "Vorname": "Laura",
    "Email": "laura.bauer@example.com",
    "Geburtsdatum": ISODate("1990-06-30"),
    "Strasse": "Eschenweg 19",
    "Ort": "Dorf",
    "PLZ": "12345",
    "Land": "Deutschland",
    "Bemerkung": "Schlechte Zahlungsmoral"
  },
  {
    "_id": ObjectId("65e03b821aa6382bf1eed256"),
    "Name": "Schneider",
    "Vorname": "Markus",
    "Email": "markus.schneider@example.com",
    "Geburtsdatum": ISODate("1983-12-18"),
    "Ort": "Stadt",
    "PLZ": "23456",
    "Land": "Deutschland"
  },
  {
    "_id": ObjectId("65e03b901aa6382bf1eed257"),
    "Name": "Fischer",
    "Vorname": "Christine",
    "Email": "christine.fischer@example.com",
    "Geburtsdatum": ISODate("1970-04-22"),
    "Strasse": "Lindenstraße 31",
    "Ort": "Dorf",
    "PLZ": "34567",
    "Land": "Deutschland"
  },
  {
    "_id": ObjectId("65e03b9c1aa6382bf1eed258"),
    "Name": "Meyer",
    "Vorname": "Stefan",
    "Email": "stefan.meyer@example.com",
    "Geburtsdatum": ISODate("1989-08-14"),
    "Strasse": "Erlenweg 10",
    "Ort": "Stadt",
    "PLZ": "45678",
    "Land": "Deutschland"
  },
  {
    "_id": ObjectId("65e03baa1aa6382bf1eed259"),
    "Name": "Wagner",
    "Vorname": "Nicole",
    "Email": "nicole.wagner@example.com",
    "Geburtsdatum": ISODate("1993-03-08"),
    "Strasse": "Buchenweg 7",
    "Ort": "Dorf",
    "PLZ": "56789",
    "Land": "Deutschland"
  },
  {
    "_id": ObjectId("65e03bb81aa6382bf1eed25a"),
    "Vorname": "Alexander",
    "Email": "alexander.beck@example.com",
    "Geburtsdatum": ISODate("1982-11-27"),
    "Strasse": "Fichtenweg 15",
    "Ort": "Stadt",
    "PLZ": "67890",
    "Land": "Deutschland"
  },
  {
    "_id": ObjectId("65e03bc41aa6382bf1eed25b"),
    "Name": "Lange",
    "Vorname": "Kathrin",
    "Email": "kathrin.lange@example.com",
    "Geburtsdatum": ISODate("1986-05-17"),
    "Strasse": "Tannenweg 4",
    "Ort": "Dorf",
    "PLZ": "78901",
    "Land": "Deutschland",
    "Mahnung": "2023-07-21"
  },
  {
    "_id": ObjectId("65e03bd01aa6382bf1eed25c"),
    "Name": "Hartmann",
    "Vorname": "Daniel",
    "Email": "daniel.hartmann@example.com",
    "Geburtsdatum": ISODate("1977-09-09"),
    "Strasse": "Ahornweg 22",
    "Ort": "Stadt",
    "PLZ": "89012",
    "Land": "Deutschland",
    "Vorbestrafung": "Betrunken Autofahren"
  },
  {
    "_id": ObjectId("65e03bdc1aa6382bf1eed25d"),
    "Name": "Schmitt",
    "Vorname": "Lisa",
    "Email": "lisa.schmitt@example.com",
    "Geburtsdatum": ISODate("1991-12-04"),
    "Strasse": "Erlenstraße 8",
    "Ort": "Dorf",
    "PLZ": "90123",
    "Land": "Deutschland"
  },
  {
    "_id": ObjectId("65e03be91aa6382bf1eed25e"),
    "Name": "Werner",
    "Vorname": "Tim",
    "Email": "tim.werner@example.com",
    "Geburtsdatum": ISODate("1984-08-28"),
    "Strasse": "Feldweg 17",
    "Ort": "Stadt",
    "PLZ": "12345",
    "Land": "Deutschland"
  },
  {
    "_id": ObjectId("65e03bf61aa6382bf1eed25f"),
    "Name": "Krause",
    "Vorname": "Jessica",
    "Email": "jessica.krause@example.com",
    "Geburtsdatum": ISODate("1989-02-19"),
    "Strasse": "Drosselweg 6",
    "Ort": "Dorf",
    "PLZ": "23456",
    "Land": "Deutschland"
  },
  {
    "_id": ObjectId("65e03c011aa6382bf1eed260"),
    "Name": "Scholz",
    "Vorname": "Martin",
    "Email": "martin.scholz@example.com",
    "Geburtsdatum": ISODate("1973-06-23"),
    "Strasse": "Birkenallee 9",
    "Ort": "Stadt",
    "PLZ": "34567",
    "Land": "Deutschland"
  },
  {
    "_id": ObjectId("65e03c0f1aa6382bf1eed261"),
    "Name": "Zimmermann",
    "Vorname": "Sabine",
    "Email": "sabine.zimmermann@example.com",
    "Geburtsdatum": ISODate("1982-03-12"),
    "Strasse": "Eichenstraße 11",
    "Ort": "Dorf",
    "PLZ": "45678",
    "Land": "Deutschland"
  }
]);

// Populate Buch collection
db.buecher.insertMany([
  {
    "_id": ObjectId("65e0437c99e2aa41003bf4de"),
    "IBAN": "978-3-210-12345-6",
    "Titel": "Die Verwandlung",
    "Autor_Id": ObjectId("65e03b5389a9a5a25f2ba28b"),
    "Genre_Id": ObjectId("65e03f52d3923867b055a0a9"),
    "Sprache_Id": ObjectId("65e03fef0e1130e4f52e737f"),
    "Seitenanzahl": 208,
    "Veröffentlichkeitsdatum": ISODate("1915-10-15"),
    "Bewertung": 4.5
  },
  {
    "_id": ObjectId("65e0438499e2aa41003bf4df"),
    "IBAN": "978-3-310-23456-7",
    "Titel": "Faust I",
    "Autor_Id": ObjectId("65e043a799e2aa41003bf4e0"),
    "Genre_Id": ObjectId("65e03f52d3923867b055a0a9"),
    "Sprache_Id": ObjectId("65e03fef0e1130e4f52e737f"),
    "Seitenanzahl": 218,
    "Veröffentlichkeitsdatum": ISODate("1808-09-01"),
    "Bewertung": 4.8,
    "Verlag": "Reclam"
  },
  {
    "_id": ObjectId("65e0438e99e2aa41003bf4e1"),
    "IBAN": "978-3-410-34567-8",
    "Titel": "Effi Briest",
    "Autor_Id": ObjectId("65e043a799e2aa41003bf4e0"),
    "Genre_Id": ObjectId("65e03f52d3923867b055a0a9"),
    "Sprache_Id": ObjectId("65e03fef0e1130e4f52e737f"),
    "Seitenanzahl": 366,
    "Veröffentlichkeitsdatum": ISODate("1895-03-15"),
    "Verlag": "Rowohlt"
  },
  {
    "_id": ObjectId("65e0439599e2aa41003bf4e2"),
    "IBAN": "978-3-510-45678-9",
    "Titel": "Die Blechtrommel",
    "Autor_Id": ObjectId("65e043a799e2aa41003bf4e0"),
    "Genre_Id": ObjectId("65e03f52d3923867b055a0a9"),
    "Sprache_Id": ObjectId(),
    "Seitenanzahl": 576,
    "Veröffentlichkeitsdatum": ISODate("1959-08-01"),
    "Bewertung": 4.2
  },
  {
    "_id": ObjectId("65e0439f99e2aa41003bf4e3"),
    "IBAN": "978-3-610-56789-0",
    "Titel": "Der Steppenwolf",
    "Autor_Id": ObjectId("65e043a799e2aa41003bf4e0"),
    "Genre_Id": ObjectId("65e03f52d3923867b055a0a9"),
    "Sprache_Id": ObjectId(),
    "Seitenanzahl": 320,
    "Veröffentlichkeitsdatum": ISODate("1927-09-15"),
    "Verlag": "Fischer"
  },
  {
    "_id": ObjectId("65e043a799e2aa41003bf4e4"),
    "IBAN": "978-3-710-67890-1",
    "Titel": "Siddhartha",
    "Autor_Id": ObjectId("65e043a799e2aa41003bf4e0"),
    "Genre_Id": ObjectId("65e03f52d3923867b055a0a9"),
    "Sprache_Id": ObjectId(),
    "Seitenanzahl": 160,
    "Veröffentlichkeitsdatum": ISODate("1922-12-01"),
    "Verlag": "Suhrkamp"
  },
  {
    "_id": ObjectId("65e043b299e2aa41003bf4e5"),
    "IBAN": "978-3-810-78901-2",
    "Titel": "Der Zauberberg",
    "Autor_Id": ObjectId("65e043a799e2aa41003bf4e0"),
    "Genre_Id": ObjectId("65e03f52d3923867b055a0a9"),
    "Sprache_Id": ObjectId(),
    "Seitenanzahl": 912,
    "Veröffentlichkeitsdatum": ISODate("1924-10-01"),
    "Bewertung": 4.7,
    "Verlag": "Fischer"
  },
  {
    "_id": ObjectId("65e043be99e2aa41003bf4e6"),
    "IBAN": "978-3-910-89012-3",
    "Titel": "Die Räuber",
    "Autor_Id": ObjectId("65e043a799e2aa41003bf4e0"),
    "Genre_Id": ObjectId("65e03f52d3923867b055a0a9"),
    "Seitenanzahl": 208,
    "Veröffentlichkeitsdatum": ISODate("1781-01-13"),
    "Verlag": "Piper"
  },
  {
    "_id": ObjectId("65e043c799e2aa41003bf4e7"),
    "IBAN": "978-3-020-90123-4",
    "Titel": "Nathan der Weise",
    "Autor_Id": ObjectId("65e043a799e2aa41003bf4e0"),
    "Genre_Id": ObjectId("65e03f52d3923867b055a0a9"),
    "Sprache_Id": ObjectId(),
    "Seitenanzahl": 128,
    "Veröffentlichkeitsdatum": ISODate("1779-12-14"),
    "Bewertung": 4.6
  },
  {
    "_id": ObjectId("65e043cf99e2aa41003bf4e8"),
    "IBAN": "978-3-120-12345-5",
    "Titel": "Der Tod in Venedig",
    "Autor_Id": ObjectId("65e043a799e2aa41003bf4e0"),
    "Genre_Id": ObjectId("65e03f52d3923867b055a0a9"),
    "Sprache_Id": ObjectId(),
    "Seitenanzahl": 136,
    "Veröffentlichkeitsdatum": ISODate("1912-10-15"),
    "Verlag": "Rowohlt"
  },
  {
    "_id": ObjectId("65e043d799e2aa41003bf4e9"),
    "IBAN": "978-3-320-23456-6",
    "Titel": "Der Prozess",
    "Autor_Id": ObjectId("65e043a799e2aa41003bf4e0"),
    "Genre_Id": ObjectId("65e03f52d3923867b055a0a9"),
    "Sprache_Id": ObjectId(),
    "Seitenanzahl": 352,
    "Veröffentlichkeitsdatum": ISODate("1925-04-26"),
    "Bewertung": 4.4,
    "Verlag": "Reclam"
  },
  {
    "_id": ObjectId("65e043e199e2aa41003bf4ea"),
    "IBAN": "978-3-420-34567-7",
    "Titel": "Die Leiden des jungen Werther",
    "Autor_Id": ObjectId("65e043a799e2aa41003bf4e0"),
    "Genre_Id": ObjectId("65e03f52d3923867b055a0a9"),
    "Sprache_Id": ObjectId(),
    "Seitenanzahl": 160,
    "Veröffentlichkeitsdatum": ISODate("1774-09-14"),
    "Bewertung": 4.3
  },
  {
    "_id": ObjectId("65e043eb99e2aa41003bf4eb"),
    "IBAN": "978-3-520-45678-8",
    "Titel": "Die Elixiere des Teufels",
    "Autor_Id": ObjectId("65e043a799e2aa41003bf4e0"),
    "Genre_Id": ObjectId("65e03f52d3923867b055a0a9"),
    "Sprache_Id": ObjectId(),
    "Seitenanzahl": 246,
    "Veröffentlichkeitsdatum": ISODate("1815-05-07"),
    "Bewertung": 4.2,
    "Verlag": "Suhrkamp"
  },
  {
    "_id": ObjectId("65e043f299e2aa41003bf4ec"),
    "IBAN": "978-3-620-56789-9",
    "Titel": "Berlin Alexanderplatz",
    "Autor_Id": ObjectId("65e043a799e2aa41003bf4e0"),
    "Genre_Id": ObjectId("65e03f52d3923867b055a0a9"),
    "Sprache_Id": ObjectId(),
    "Seitenanzahl": 320,
    "Veröffentlichkeitsdatum": ISODate("1929-10-01"),
    "Verlag": "Fischer"
  },
  {
    "_id": ObjectId("65e043f899e2aa41003bf4ed"),
    "IBAN": "978-3-720-67890-0",
    "Titel": "Die unendliche Geschichte",
    "Autor_Id": ObjectId("65e043a799e2aa41003bf4e0"),
    "Genre_Id": ObjectId("65e03f52d3923867b055a0a9"),
    "Sprache_Id": ObjectId(),
    "Seitenanzahl": 448,
    "Veröffentlichkeitsdatum": ISODate("1979-09-01"),
    "Verlag": "Thienemann"
  },
  {
    "_id": ObjectId("65e043ff99e2aa41003bf4ee"),
    "IBAN": "978-3-820-78901-1",
    "Titel": "Der goldene Topf",
    "Autor_Id": ObjectId("65e043a799e2aa41003bf4e0"),
    "Genre_Id": ObjectId("65e03f52d3923867b055a0a9"),
    "Sprache_Id": ObjectId(),
    "Seitenanzahl": 192,
    "Veröffentlichkeitsdatum": ISODate("1814-12-14"),
    "Bewertung": 4.6,
    "Verlag": "Insel"
  },
  {
    "_id": ObjectId("65e0440699e2aa41003bf4ef"),
    "IBAN": "978-3-920-89012-2",
    "Titel": "Die Entdeckung der Langsamkeit",
    "Autor_Id": ObjectId("65e043a799e2aa41003bf4e0"),
    "Genre_Id": ObjectId("65e03f52d3923867b055a0a9"),
    "Sprache_Id": ObjectId(),
    "Seitenanzahl": 544,
    "Veröffentlichkeitsdatum": ISODate("1983-08-01"),
    "Bewertung": 4.5,
    "Verlag": "dtv"
  },
  {
    "_id": ObjectId("65e0440c99e2aa41003bf4f0"),
    "IBAN": "978-3-030-90123-3",
    "Titel": "Der Spiegel im Spiegel",
    "Autor_Id": ObjectId("65e043a799e2aa41003bf4e0"),
    "Genre_Id": ObjectId("65e03f52d3923867b055a0a9"),
    "Sprache_Id": ObjectId(),
    "Seitenanzahl": 176,
    "Veröffentlichkeitsdatum": ISODate("1977-09-15"),
    "Bewertung": 4.7,
    "Verlag": "Suhrkamp"
  },
  {
    "_id": ObjectId("65e0441499e2aa41003bf4f1"),
    "IBAN": "978-3-130-12345-4",
    "Titel": "Der Besuch der alten Dame",
    "Autor_Id": ObjectId("65e043a799e2aa41003bf4e0"),
    "Genre_Id": ObjectId("65e03f52d3923867b055a0a9"),
    "Sprache_Id": ObjectId(),
    "Seitenanzahl": 128,
    "Veröffentlichkeitsdatum": ISODate("1956-01-01"),
    "Verlag": "Rowohlt"
  },
  {
    "_id": ObjectId("65e0441a99e2aa41003bf4f2"),
    "IBAN": "978-3-230-23456-5",
    "Titel": "Der Vorleser",
    "Autor_Id": ObjectId("65e043a799e2aa41003bf4e0"),
    "Genre_Id": ObjectId("65e03f52d3923867b055a0a9"),
    "Sprache_Id": ObjectId(),
    "Seitenanzahl": 240,
    "Veröffentlichkeitsdatum": ISODate("1995-09-01"),
    "Bewertung": 4.4,
    "Verlag": "Diogenes"
  },
  {
    "_id": ObjectId("65e0442199e2aa41003bf4f3"),
    "IBAN": "978-3-430-34567-4",
    "Titel": "Parzival",
    "Autor_Id": ObjectId("65e043a799e2aa41003bf4e0"),
    "Genre_Id": ObjectId("65e03f52d3923867b055a0a9"),
    "Seitenanzahl": 384,
    "Veröffentlichkeitsdatum": ISODate("1205-01-01"),
    "Verlag": "Reclam"
  },
  {
    "_id": ObjectId("65e0442699e2aa41003bf4f4"),
    "IBAN": "978-3-530-45678-3",
    "Titel": "Erec",
    "Autor_Id": ObjectId("65e043a799e2aa41003bf4e0"),
    "Genre_Id": ObjectId("65e03f52d3923867b055a0a9"),
    "Seitenanzahl": 376,
    "Veröffentlichkeitsdatum": ISODate("1170-01-01"),
    "Verlag": "Piper"
  }
]);

// Populate Autor collection
[
  {
    "_id": ObjectId("65e043a799e2aa41003bf4e0"),
    "Name": "Goethe",
    "Vorname": "Johann Wolfgang von",
    "Geburtsjahr": 1749,
    "Land": "Deutschland",
    "Werke": ["Faust I", "Faust II", "Die Leiden des jungen Werther", "Iphigenie auf Tauris"]
  },
  {
    "_id": ObjectId("65e043a799e2aa41003bf4e1"),
    "Name": "Hesse",
    "Vorname": "Hermann",
    "Geburtsjahr": 1877,
    "Land": "Deutschland",
    "Werke": ["Der Steppenwolf", "Siddhartha", "Der Glasperlenspieler"]
  },
  {
    "_id": ObjectId("65e043a799e2aa41003bf4e2"),
    "Name": "Mann",
    "Vorname": "Thomas",
    "Geburtsjahr": 1875,
    "Land": "Deutschland",
    "Werke": ["Buddenbrooks", "Der Zauberberg", "Der Tod in Venedig"]
  },
  {
    "_id": ObjectId("65e043a799e2aa41003bf4e3"),
    "Name": "Kafka",
    "Vorname": "Franz",
    "Geburtsjahr": 1883,
    "Land": "Österreich-Ungarn",
    "Werke": ["Der Prozess", "Die Verwandlung", "Das Schloss"]
  },
  {
    "_id": ObjectId("65e043a799e2aa41003bf4e4"),
    "Name": "Tolstoi",
    "Vorname": "Leo",
    "Geburtsjahr": 1828,
    "Land": "Russland",
    "Werke": ["Krieg und Frieden", "Anna Karenina", "Auferstehung"],
    "Preise": ["Nobelpreis für Literatur (1904)"]
  },
  {
    "_id": ObjectId("65e043a799e2aa41003bf4e5"),
    "Name": "Dostojewski",
    "Vorname": "Fjodor",
    "Geburtsjahr": 1821,
    "Land": "Russland",
    "Werke": ["Schuld und Sühne", "Die Brüder Karamasow", "Der Idiot"],
    "Preise": ["Nobelpreis für Literatur (nicht erhalten)"]
  },
  {
    "_id": ObjectId("65e043a799e2aa41003bf4e6"),
    "Name": "Orwell",
    "Vorname": "George",
    "Geburtsjahr": 1903,
    "Land": "Vereinigtes Königreich",
    "Werke": ["1984", "Farm der Tiere", "Eine Pfarrerstochter"],
    "Preise": ["Order of the British Empire"]
  },
  {
    "_id": ObjectId("65e043a799e2aa41003bf4e7"),
    "Name": "Camus",
    "Vorname": "Albert",
    "Geburtsjahr": 1913,
    "Land": "Frankreich",
    "Werke": ["Der Fremde", "Die Pest", "Der Mythos von Sisyphos"],
    "Preise": ["Nobelpreis für Literatur (1957)"]
  },
  {
    "_id": ObjectId("65e043a799e2aa41003bf4e8"),
    "Name": "Hemingway",
    "Vorname": "Ernest",
    "Geburtsjahr": 1899,
    "Land": "Vereinigte Staaten",
    "Werke": ["Der alte Mann und das Meer", "Fiesta", "In einem anderen Land"],
    "Preise": ["Nobelpreis für Literatur (1954)"]
  },
  {
    "_id": ObjectId("65e043a799e2aa41003bf4e9"),
    "Name": "Steinbeck",
    "Vorname": "John",
    "Geburtsjahr": 1902,
    "Land": "Vereinigte Staaten",
    "Werke": ["Die Früchte des Zorns", "Von Mäusen und Menschen", "Jenseits von Eden"]
  },
  {
    "_id": ObjectId("65e043a799e2aa41003bf4ea"),
    "Name": "Dickens",
    "Vorname": "Charles",
    "Geburtsjahr": 1812,
    "Land": "Vereinigtes Königreich",
    "Werke": ["Eine Weihnachtsgeschichte", "David Copperfield", "Oliver Twist"],
    "Preise": ["n/a"]
  },
  {
    "_id": ObjectId("65e043a799e2aa41003bf4eb"),
    "Name": "Verne",
    "Vorname": "Jules",
    "Geburtsjahr": 1828,
    "Land": "Frankreich",
    "Werke": ["Reise um die Erde in 80 Tagen", "20.000 Meilen unter dem Meer", "Die Reise zum Mittelpunkt der Erde"],
    "Preise": ["n/a"]
  },
  {
    "_id": ObjectId("65e043a799e2aa41003bf4ec"),
    "Name": "Dumas",
    "Vorname": "Alexandre",
    "Geburtsjahr": 1802,
    "Land": "Frankreich",
    "Werke": ["Die drei Musketiere", "Der Graf von Monte Christo", "Die Kameliendame"],
    "Preise": ["n/a"]
  },
  {
    "_id": ObjectId("65e043a799e2aa41003bf4ed"),
    "Name": "Wilde",
    "Vorname": "Oscar",
    "Geburtsjahr": 1854,
    "Land": "Irland",
    "Werke": ["Das Bildnis des Dorian Gray", "Der glückliche Prinz", "Ein Idealist"],
    "Preise": ["n/a"]
  },
  {
    "_id": ObjectId("65e043a799e2aa41003bf4ee"),
    "Name": "Borges",
    "Vorname": "Jorge Luis",
    "Geburtsjahr": 1899,
    "Land": "Argentinien",
    "Werke": ["Fiktionen", "Der Aleph", "Die Biblothek von Babel"],
    "Preise": ["n/a"]
  },
  {
    "_id": ObjectId("65e043a799e2aa41003bf4ef"),
    "Name": "Poe",
    "Vorname": "Edgar Allan",
    "Geburtsjahr": 1809,
    "Land": "Vereinigte Staaten",
    "Werke": ["Der Rabe", "Die Maske des Roten Todes", "Das verräterische Herz"]
  }
]);

// Populate Autor-Buch collection
db.autor_buch.insertMany([
  {
    "_id": ObjectId(),
    "autor_id": ObjectId("65e03b5389a9a5a25f2ba28b"),
    "buch_id": ObjectId("65e0437c99e2aa41003bf4de") // Reference to "Die Verwandlung"
  },
  {
    "_id": ObjectId(),
    "autor_id": ObjectId("65e03b5389a9a5a25f2ba28b"),
    "buch_id": ObjectId("65e0438499e2aa41003bf4df") // Reference to "Faust I"
  },
  {
    "_id": ObjectId(),
    "autor_id": ObjectId("65e03b5389a9a5a25f2ba28b"),
    "buch_id": ObjectId("65e0438e99e2aa41003bf4e1") // Reference to "Effi Briest"
  },
  {
    "_id": ObjectId(),
    "autor_id": ObjectId("65e03b5389a9a5a25f2ba28b"),
    "buch_id": ObjectId("65e0439599e2aa41003bf4e2") // Reference to "Die Blechtrommel"
  },
  {
    "_id": ObjectId(),
    "autor_id": ObjectId("65e03b5389a9a5a25f2ba28b"),
    "buch_id": ObjectId("65e0439f99e2aa41003bf4e3") // Reference to "Der Steppenwolf"
  },
  {
    "_id": ObjectId(),
    "autor_id": ObjectId("65e03b5389a9a5a25f2ba28b"),
    "buch_id": ObjectId("65e043a799e2aa41003bf4e4") // Reference to "Siddhartha"
  },
  {
    "_id": ObjectId(),
    "autor_id": ObjectId("65e03b5389a9a5a25f2ba28b"),
    "buch_id": ObjectId("65e043b299e2aa41003bf4e5") // Reference to "Der Zauberberg"
  },
  {
    "_id": ObjectId(),
    "autor_id": ObjectId("65e03b5389a9a5a25f2ba28b"),
    "buch_id": ObjectId("65e043be99e2aa41003bf4e6") // Reference to "Die Räuber"
  },
  {
    "_id": ObjectId(),
    "autor_id": ObjectId("65e03b5389a9a5a25f2ba28b"),
    "buch_id": ObjectId("65e043c799e2aa41003bf4e7") // Reference to "Nathan der Weise"
  },
  {
    "_id": ObjectId(),
    "autor_id": ObjectId("65e03b5389a9a5a25f2ba28b"),
    "buch_id": ObjectId("65e043cf99e2aa41003bf4e8") // Reference to "Der Tod in Venedig"
  },
  {
    "_id": ObjectId(),
    "autor_id": ObjectId("65e03b5389a9a5a25f2ba28b"),
    "buch_id": ObjectId("65e043d799e2aa41003bf4e9") // Reference to "Der Prozess"
  },
  {
    "_id": ObjectId(),
    "autor_id": ObjectId("65e03b5389a9a5a25f2ba28b"),
    "buch_id": ObjectId("65e043e199e2aa41003bf4ea") // Reference to "Die Leiden des jungen Werther"
  },
  {
    "_id": ObjectId(),
    "autor_id": ObjectId("65e03b5389a9a5a25f2ba28b"),
    "buch_id": ObjectId("65e043eb99e2aa41003bf4eb") // Reference to "Die Elixiere des Teufels"
  },
  {
    "_id": ObjectId(),
    "autor_id": ObjectId("65e03b5389a9a5a25f2ba28b"),
    "buch_id": ObjectId("65e043f299e2aa41003bf4ec") // Reference to "Berlin Alexanderplatz"
  },
  {
    "_id": ObjectId(),
    "autor_id": ObjectId("65e03b5389a9a5a25f2ba28b"),
    "buch_id": ObjectId("65e043f899e2aa41003bf4ed") // Reference to "Die unendliche Geschichte"
  },
  {
    "_id": ObjectId(),
    "autor_id": ObjectId("65e03b5389a9a5a25f2ba28b"),
    "buch_id": ObjectId("65e043ff99e2aa41003bf4ee") // Reference to "Der goldene Topf"
  },
  {
    "_id": ObjectId(),
    "autor_id": ObjectId("65e03b5389a9a5a25f2ba28b"),
    "buch_id": ObjectId("65e0440699e2aa41003bf4ef") // Reference to "Die Entdeckung der Langsamkeit"
  },
  {
    "_id": ObjectId(),
    "autor_id": ObjectId("65e03b5389a9a5a25f2ba28b"),
    "buch_id": ObjectId("65e0440c99e2aa41003bf4f0") // Reference to "Der Spiegel im Spiegel"
  },
  {
    "_id": ObjectId(),
    "autor_id": ObjectId("65e03b5389a9a5a25f2ba28b"),
    "buch_id": ObjectId("65e0441499e2aa41003bf4f1") // Reference to "Der Besuch der alten Dame"
  },
  {
    "_id": ObjectId(),
    "autor_id": ObjectId("65e03b5389a9a5a25f2ba28b"),
    "buch_id": ObjectId("65e0441a99e2aa41003bf4f2") // Reference to "Der Vorleser"
  }
]);


// Populate Kunde-Buch collection
db.kunde_buch.insertMany([
  {
    "_id": ObjectId(),
    "kunde_id": ObjectId("65e03b5389a9a5a25f2ba28b"),
    "buch_id": ObjectId("65e0437c99e2aa41003bf4de") // Reference to "Die Verwandlung"
  },
  {
    "_id": ObjectId(),
    "kunde_id": ObjectId("65e03b5389a9a5a25f2ba28b"),
    "buch_id": ObjectId("65e0438499e2aa41003bf4df") // Reference to "Faust I"
  },
  {
    "_id": ObjectId(),
    "kunde_id": ObjectId("65e03b5389a9a5a25f2ba28b"),
    "buch_id": ObjectId("65e0438e99e2aa41003bf4e1") // Reference to "Effi Briest"
  },
  {
    "_id": ObjectId(),
    "kunde_id": ObjectId("65e03b5389a9a5a25f2ba28b"),
    "buch_id": ObjectId("65e0439599e2aa41003bf4e2") // Reference to "Die Blechtrommel"
  },
  {
    "_id": ObjectId(),
    "kunde_id": ObjectId("65e03b5389a9a5a25f2ba28b"),
    "buch_id": ObjectId("65e0439f99e2aa41003bf4e3") // Reference to "Der Steppenwolf"
  },
  {
    "_id": ObjectId(),
    "kunde_id": ObjectId("65e03b5389a9a5a25f2ba28b"),
    "buch_id": ObjectId("65e043a799e2aa41003bf4e4") // Reference to "Siddhartha"
  },
  {
    "_id": ObjectId(),
    "kunde_id": ObjectId("65e03b5389a9a5a25f2ba28b"),
    "buch_id": ObjectId("65e043b299e2aa41003bf4e5") // Reference to "Der Zauberberg"
  },
  {
    "_id": ObjectId(),
    "kunde_id": ObjectId("65e03b5389a9a5a25f2ba28b"),
    "buch_id": ObjectId("65e043be99e2aa41003bf4e6") // Reference to "Die Räuber"
  },
  {
    "_id": ObjectId(),
    "kunde_id": ObjectId("65e03b5389a9a5a25f2ba28b"),
    "buch_id": ObjectId("65e043c799e2aa41003bf4e7") // Reference to "Nathan der Weise"
  },
  {
    "_id": ObjectId(),
    "kunde_id": ObjectId("65e03b5389a9a5a25f2ba28b"),
    "buch_id": ObjectId("65e043cf99e2aa41003bf4e8") // Reference to "Der Tod in Venedig"
  },
  {
    "_id": ObjectId(),
    "kunde_id": ObjectId("65e03b5389a9a5a25f2ba28b"),
    "buch_id": ObjectId("65e043d799e2aa41003bf4e9") // Reference to "Der Prozess"
  },
  {
    "_id": ObjectId(),
    "kunde_id": ObjectId("65e03b5389a9a5a25f2ba28b"),
    "buch_id": ObjectId("65e043e199e2aa41003bf4ea") // Reference to "Die Leiden des jungen Werther"
  },
  {
    "_id": ObjectId(),
    "kunde_id": ObjectId("65e03b5389a9a5a25f2ba28b"),
    "buch_id": ObjectId("65e043eb99e2aa41003bf4eb") // Reference to "Die Elixiere des Teufels"
  },
  {
    "_id": ObjectId(),
    "kunde_id": ObjectId("65e03b5389a9a5a25f2ba28b"),
    "buch_id": ObjectId("65e043f299e2aa41003bf4ec") // Reference to "Berlin Alexanderplatz"
  },
  {
    "_id": ObjectId(),
    "kunde_id": ObjectId("65e03b5389a9a5a25f2ba28b"),
    "buch_id": ObjectId("65e043f899e2aa41003bf4ed") // Reference to "Die unendliche Geschichte"
  },
  {
    "_id": ObjectId(),
    "kunde_id": ObjectId("65e03b5389a9a5a25f2ba28b"),
    "buch_id": ObjectId("65e043ff99e2aa41003bf4ee") // Reference to "Der goldene Topf"
  },
  {
    "_id": ObjectId(),
    "kunde_id": ObjectId("65e03b5389a9a5a25f2ba28b"),
    "buch_id": ObjectId("65e0440699e2aa41003bf4ef") // Reference to "Die Entdeckung der Langsamkeit"
  },
  {
    "_id": ObjectId(),
    "kunde_id": ObjectId("65e03b5389a9a5a25f2ba28b"),
    "buch_id": ObjectId("65e0440c99e2aa41003bf4f0") // Reference to "Der Spiegel im Spiegel"
  },
  {
    "_id": ObjectId(),
    "kunde_id": ObjectId("65e03b5389a9a5a25f2ba28b"),
    "buch_id": ObjectId("65e0441499e2aa41003bf4f1") // Reference to "Der Besuch der alten Dame"
  },
  {
    "_id": ObjectId(),
    "kunde_id": ObjectId("65e03b5389a9a5a25f2ba28b"),
    "buch_id": ObjectId("65e0441a99e2aa41003bf4f2") // Reference to "Der Vorleser"
  }
]);
