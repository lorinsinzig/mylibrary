/////////////////////
// 1.6
///////////////////

// Populate Kunde collection
db.kunden.insertMany([
  {
    "_id": ObjectId("65e03b1a1aa6382bf1eed24e"),
    "name": "Muster",
    "vorname": "Max",
    "email": "max.muster@example.com",
    "geburtsdatum": ISODate("1988-03-15"),
    "geschlecht": "männlich",
    "strasse": "Eichenweg 7",
    "ort": "Stadt",
    "plz": "34567",
    "land": "Deutschland",
    "telefon": "+49876543210"
  },
  {
    "_id": ObjectId("65e03b3b1aa6382bf1eed24f"),
    "name": "Meier",
    "vorname": "Anna",
    "email": "anna.meier@example.com",
    "geburtsdatum": ISODate("1992-09-25"),
    "geschlecht": "weiblich",
    "strasse": "Ahornstraße 14",
    "ort": "Dorf",
    "plz": "45678",
    "land": "Deutschland",
    "bemerkung": "Stammkunde"
  },
  {
    "_id": ObjectId("65e03b4a1aa6382bf1eed250"),
    "name": "Schmidt",
    "vorname": "Michael",
    "email": "michael.schmidt@example.com",
    "geburtsdatum": ISODate("1975-11-03"),
    "geschlecht": "männlich",
    "strasse": "Lindenallee 21",
    "ort": "Stadt",
    "plz": "56789",
    "land": "Deutschland"
  },
  {
    "_id": ObjectId("65e03b561aa6382bf1eed251"),
    "name": "Becker",
    "vorname": "Julia",
    "email": "julia.becker@example.com",
    "geburtsdatum": ISODate("1980-07-12"),
    "geschlecht": "weiblich",
    "strasse": "Birkenweg 5",
    "ort": "Dorf",
    "plz": "67890",
    "land": "Deutschland"
  },
  {
    "_id": ObjectId("65e03b5e1aa6382bf1eed252"),
    "name": "Hoffmann",
    "vorname": "Andreas",
    "email": "andreas.hoffmann@example.com",
    "geburtsdatum": ISODate("1995-05-20"),
    "geschlecht": "männlich",
    "strasse": "Fichtenstraße 3",
    "ort": "Stadt",
    "plz": "78901",
    "land": "Deutschland"
  },
  {
    "_id": ObjectId("65e03b651aa6382bf1eed253"),
    "name": "Koch",
    "vorname": "Sarah",
    "email": "sarah.koch@example.com",
    "geburtsdatum": ISODate("1987-02-10"),
    "geschlecht": "weiblich",
    "strasse": "Kastanienweg 12",
    "ort": "Dorf",
    "plz": "89012",
    "land": "Deutschland"
  },
  {
    "_id": ObjectId("65e03b6d1aa6382bf1eed254"),
    "name": "Schwarz",
    "vorname": "Kevin",
    "email": "kevin.schwarz@example.com",
    "geburtsdatum": ISODate("1978-08-05"),
    "geschlecht": "männlich",
    "strasse": "Buchenstraße 8",
    "ort": "Stadt",
    "plz": "90123",
    "land": "Deutschland"
  },
  {
    "_id": ObjectId("65e03b771aa6382bf1eed255"),
    "name": "Bauer",
    "vorname": "Laura",
    "email": "laura.bauer@example.com",
    "geburtsdatum": ISODate("1990-06-30"),
    "geschlecht": "weiblich",
    "strasse": "Eschenweg 19",
    "ort": "Dorf",
    "plz": "12345",
    "land": "Deutschland"
  },
  {
    "_id": ObjectId("65e03b821aa6382bf1eed256"),
    "name": "Schneider",
    "vorname": "Markus",
    "email": "markus.schneider@example.com",
    "geburtsdatum": ISODate("1983-12-18"),
    "geschlecht": "männlich",
    "strasse": "Ahornweg 6",
    "ort": "Stadt",
    "plz": "23456",
    "land": "Deutschland"
  },
  {
    "_id": ObjectId("65e03b901aa6382bf1eed257"),
    "name": "Fischer",
    "vorname": "Christine",
    "email": "christine.fischer@example.com",
    "geburtsdatum": ISODate("1970-04-22"),
    "geschlecht": "weiblich",
    "strasse": "Lindenstraße 31",
    "ort": "Dorf",
    "plz": "34567",
    "land": "Deutschland"
  },
  {
    "_id": ObjectId("65e03b9c1aa6382bf1eed258"),
    "name": "Meyer",
    "vorname": "Stefan",
    "email": "stefan.meyer@example.com",
    "geburtsdatum": ISODate("1989-08-14"),
    "geschlecht": "männlich",
    "strasse": "Erlenweg 10",
    "ort": "Stadt",
    "plz": "45678",
    "land": "Deutschland"
  },
  {
    "_id": ObjectId("65e03baa1aa6382bf1eed259"),
    "name": "Wagner",
    "vorname": "Nicole",
    "email": "nicole.wagner@example.com",
    "geburtsdatum": ISODate("1993-03-08"),
    "geschlecht": "weiblich",
    "strasse": "Buchenweg 7",
    "ort": "Dorf",
    "plz": "56789",
    "land": "Deutschland"
  },
  {
    "_id": ObjectId("65e03bb81aa6382bf1eed25a"),
    "name": "Beck",
    "vorname": "Alexander",
    "email": "alexander.beck@example.com",
    "geburtsdatum": ISODate("1982-11-27"),
    "geschlecht": "männlich",
    "strasse": "Fichtenweg 15",
    "ort": "Stadt",
    "plz": "67890",
    "land": "Deutschland"
  },
  {
    "_id": ObjectId("65e03bc41aa6382bf1eed25b"),
    "name": "Lange",
    "vorname": "Kathrin",
    "email": "kathrin.lange@example.com",
    "geburtsdatum": ISODate("1986-05-17"),
    "geschlecht": "weiblich",
    "strasse": "Tannenweg 4",
    "ort": "Dorf",
    "plz": "78901",
    "land": "Deutschland"
  },
  {
    "_id": ObjectId("65e03bd01aa6382bf1eed25c"),
    "name": "Hartmann",
    "vorname": "Daniel",
    "email": "daniel.hartmann@example.com",
    "geburtsdatum": ISODate("1977-09-09"),
    "geschlecht": "männlich",
    "strasse": "Ahornweg 22",
    "ort": "Stadt",
    "plz": "89012",
    "land": "Deutschland"
  },
  {
    "_id": ObjectId("65e03bdc1aa6382bf1eed25d"),
    "name": "Schmitt",
    "vorname": "Lisa",
    "email": "lisa.schmitt@example.com",
    "geburtsdatum": ISODate("1991-12-04"),
    "geschlecht": "weiblich",
    "strasse": "Erlenstraße 8",
    "ort": "Dorf",
    "plz": "90123",
    "land": "Deutschland"
  },
  {
    "_id": ObjectId("65e03be91aa6382bf1eed25e"),
    "name": "Werner",
    "vorname": "Tim",
    "email": "tim.werner@example.com",
    "geburtsdatum": ISODate("1984-08-28"),
    "geschlecht": "männlich",
    "strasse": "Feldweg 17",
    "ort": "Stadt",
    "plz": "12345",
    "land": "Deutschland"
  },
  {
    "_id": ObjectId("65e03bf61aa6382bf1eed25f"),
    "name": "Krause",
    "vorname": "Jessica",
    "email": "jessica.krause@example.com",
    "geburtsdatum": ISODate("1989-02-19"),
    "geschlecht": "weiblich",
    "strasse": "Drosselweg 6",
    "ort": "Dorf",
    "plz": "23456",
    "land": "Deutschland"
  },
  {
    "_id": ObjectId("65e03c011aa6382bf1eed260"),
    "name": "Scholz",
    "vorname": "Martin",
    "email": "martin.scholz@example.com",
    "geburtsdatum": ISODate("1973-06-23"),
    "geschlecht": "männlich",
    "strasse": "Birkenallee 9",
    "ort": "Stadt",
    "plz": "34567",
    "land": "Deutschland"
  },
  {
    "_id": ObjectId("65e03c0f1aa6382bf1eed261"),
    "name": "Zimmermann",
    "vorname": "Sabine",
    "email": "sabine.zimmermann@example.com",
    "geburtsdatum": ISODate("1982-03-12"),
    "geschlecht": "weiblich",
    "strasse": "Eichenstraße 11",
    "ort": "Dorf",
    "plz": "45678",
    "land": "Deutschland"
  }
]);


// Populate Buch collection
db.buecher.insertMany([
  {
    "_id": ObjectId("65e0437c99e2aa41003bf4de"),
    "iban": "978-3-210-12345-6",
    "titel": "Die Verwandlung",
    "autor_id": ObjectId("65e03b5389a9a5a25f2ba28b"),
    "genre_id": ObjectId("65e03f52d3923867b055a0a9"),
    "sprache_id": ObjectId("65e03fef0e1130e4f52e737f"),
    "seitenanzahl": 208,
    "veröffentlichkeitsdatum": ISODate("1915-10-15")
  },
  {
    "_id": ObjectId("65e0438499e2aa41003bf4df"),
    "iban": "978-3-310-23456-7",
    "titel": "Faust I",
    "autor_id": ObjectId("65e043a799e2aa41003bf4e0"),
    "genre_id": ObjectId("65e03f52d3923867b055a0a9"),
    "sprache_id": ObjectId("65e03fef0e1130e4f52e737f"),
    "seitenanzahl": 218,
    "veröffentlichkeitsdatum": ISODate("1808-09-01")
  },
  {
    "_id": ObjectId("65e0438e99e2aa41003bf4e1"),
    "iban": "978-3-410-34567-8",
    "titel": "Effi Briest",
    "autor_id": ObjectId("65e043a799e2aa41003bf4e0"),
    "genre_id": ObjectId("65e03f52d3923867b055a0a9"),
    "sprache_id": ObjectId("65e03fef0e1130e4f52e737f"),
    "seitenanzahl": 366,
    "veröffentlichkeitsdatum": ISODate("1895-03-15")
  },
  {
    "_id": ObjectId("65e0439599e2aa41003bf4e2"),
    "iban": "978-3-510-45678-9",
    "titel": "Die Blechtrommel",
    "autor_id": ObjectId("65e043a799e2aa41003bf4e0"),
    "genre_id": ObjectId("65e03f52d3923867b055a0a9"),
    "sprache_id": ObjectId(),
    "seitenanzahl": 576,
    "veröffentlichkeitsdatum": ISODate("1959-08-01")
  },
  {
    "_id": ObjectId("65e0439f99e2aa41003bf4e3"),
    "iban": "978-3-610-56789-0",
    "titel": "Der Steppenwolf",
    "autor_id": ObjectId("65e043a799e2aa41003bf4e0"),
    "genre_id": ObjectId("65e03f52d3923867b055a0a9"),
    "sprache_id": ObjectId(),
    "seitenanzahl": 320,
    "veröffentlichkeitsdatum": ISODate("1927-09-15")
  },
  {
    "_id": ObjectId("65e043a799e2aa41003bf4e4"),
    "iban": "978-3-710-67890-1",
    "titel": "Siddhartha",
    "autor_id": ObjectId("65e043a799e2aa41003bf4e0"),
    "genre_id": ObjectId("65e03f52d3923867b055a0a9"),
    "sprache_id": ObjectId(),
    "seitenanzahl": 160,
    "veröffentlichkeitsdatum": ISODate("1922-12-01")
  },
  {
    "_id": ObjectId("65e043b299e2aa41003bf4e5"),
    "iban": "978-3-810-78901-2",
    "titel": "Der Zauberberg",
    "autor_id": ObjectId("65e043a799e2aa41003bf4e0"),
    "genre_id": ObjectId("65e03f52d3923867b055a0a9"),
    "sprache_id": ObjectId(),
    "seitenanzahl": 912,
    "veröffentlichkeitsdatum": ISODate("1924-10-01")
  },
  {
    "_id": ObjectId("65e043be99e2aa41003bf4e6"),
    "iban": "978-3-910-89012-3",
    "titel": "Die Räuber",
    "autor_id": ObjectId("65e043a799e2aa41003bf4e0"),
    "genre_id": ObjectId("65e03f52d3923867b055a0a9"),
    "sprache_id": ObjectId(),
    "seitenanzahl": 208,
    "veröffentlichkeitsdatum": ISODate("1781-01-13")
  },
  {
    "_id": ObjectId("65e043c799e2aa41003bf4e7"),
    "iban": "978-3-020-90123-4",
    "titel": "Nathan der Weise",
    "autor_id": ObjectId("65e043a799e2aa41003bf4e0"),
    "genre_id": ObjectId("65e03f52d3923867b055a0a9"),
    "sprache_id": ObjectId(),
    "seitenanzahl": 128,
    "veröffentlichkeitsdatum": ISODate("1779-12-14")
  },
  {
    "_id": ObjectId("65e043cf99e2aa41003bf4e8"),
    "iban": "978-3-120-12345-5",
    "titel": "Der Tod in Venedig",
    "autor_id": ObjectId("65e043a799e2aa41003bf4e0"),
    "genre_id": ObjectId("65e03f52d3923867b055a0a9"),
    "sprache_id": ObjectId(),
    "seitenanzahl": 136,
    "veröffentlichkeitsdatum": ISODate("1912-10-15")
  },
  {
    "_id": ObjectId("65e043d799e2aa41003bf4e9"),
    "iban": "978-3-320-23456-6",
    "titel": "Der Prozess",
    "autor_id": ObjectId("65e043a799e2aa41003bf4e0"),
    "genre_id": ObjectId("65e03f52d3923867b055a0a9"),
    "sprache_id": ObjectId(),
    "seitenanzahl": 352,
    "veröffentlichkeitsdatum": ISODate("1925-04-26")
  },
  {
    "_id": ObjectId("65e043e199e2aa41003bf4ea"),
    "iban": "978-3-420-34567-7",
    "titel": "Die Leiden des jungen Werther",
    "autor_id": ObjectId("65e043a799e2aa41003bf4e0"),
    "genre_id": ObjectId("65e03f52d3923867b055a0a9"),
    "sprache_id": ObjectId(),
    "seitenanzahl": 160,
    "veröffentlichkeitsdatum": ISODate("1774-09-14")
  },
  {
    "_id": ObjectId("65e043eb99e2aa41003bf4eb"),
    "iban": "978-3-520-45678-8",
    "titel": "Die Elixiere des Teufels",
    "autor_id": ObjectId("65e043a799e2aa41003bf4e0"),
    "genre_id": ObjectId("65e03f52d3923867b055a0a9"),
    "sprache_id": ObjectId(),
    "seitenanzahl": 246,
    "veröffentlichkeitsdatum": ISODate("1815-05-07")
  },
  {
    "_id": ObjectId("65e043f299e2aa41003bf4ec"),
    "iban": "978-3-620-56789-9",
    "titel": "Berlin Alexanderplatz",
    "autor_id": ObjectId("65e043a799e2aa41003bf4e0"),
    "genre_id": ObjectId("65e03f52d3923867b055a0a9"),
    "sprache_id": ObjectId(),
    "seitenanzahl": 320,
    "veröffentlichkeitsdatum": ISODate("1929-10-01")
  },
  {
    "_id": ObjectId("65e043f899e2aa41003bf4ed"),
    "iban": "978-3-720-67890-0",
    "titel": "Die unendliche Geschichte",
    "autor_id": ObjectId("65e043a799e2aa41003bf4e0"),
    "genre_id": ObjectId("65e03f52d3923867b055a0a9"),
    "sprache_id": ObjectId(),
    "seitenanzahl": 448,
    "veröffentlichkeitsdatum": ISODate("1979-09-01")
  },
  {
    "_id": ObjectId("65e043ff99e2aa41003bf4ee"),
    "iban": "978-3-820-78901-1",
    "titel": "Der goldene Topf",
    "autor_id": ObjectId("65e043a799e2aa41003bf4e0"),
    "genre_id": ObjectId("65e03f52d3923867b055a0a9"),
    "sprache_id": ObjectId(),
    "seitenanzahl": 192,
    "veröffentlichkeitsdatum": ISODate("1814-12-14")
  },
  {
    "_id": ObjectId("65e0440699e2aa41003bf4ef"),
    "iban": "978-3-920-89012-2",
    "titel": "Die Entdeckung der Langsamkeit",
    "autor_id": ObjectId("65e043a799e2aa41003bf4e0"),
    "genre_id": ObjectId("65e03f52d3923867b055a0a9"),
    "sprache_id": ObjectId(),
    "seitenanzahl": 544,
    "veröffentlichkeitsdatum": ISODate("1983-08-01")
  },
  {
    "_id": ObjectId("65e0440c99e2aa41003bf4f0"),
    "iban": "978-3-030-90123-3",
    "titel": "Der Spiegel im Spiegel",
    "autor_id": ObjectId("65e043a799e2aa41003bf4e0"),
    "genre_id": ObjectId("65e03f52d3923867b055a0a9"),
    "sprache_id": ObjectId(),
    "seitenanzahl": 176,
    "veröffentlichkeitsdatum": ISODate("1977-09-15")
  },
  {
    "_id": ObjectId("65e0441499e2aa41003bf4f1"),
    "iban": "978-3-130-12345-4",
    "titel": "Der Besuch der alten Dame",
    "autor_id": ObjectId("65e043a799e2aa41003bf4e0"),
    "genre_id": ObjectId("65e03f52d3923867b055a0a9"),
    "sprache_id": ObjectId(),
    "seitenanzahl": 128,
    "veröffentlichkeitsdatum": ISODate("1956-01-01")
  },
  {
    "_id": ObjectId("65e0441a99e2aa41003bf4f2"),
    "iban": "978-3-230-23456-5",
    "titel": "Der Vorleser",
    "autor_id": ObjectId("65e043a799e2aa41003bf4e0"),
    "genre_id": ObjectId("65e03f52d3923867b055a0a9"),
    "sprache_id": ObjectId(),
    "seitenanzahl": 240,
    "veröffentlichkeitsdatum": ISODate("1995-09-01")
  }
]);


// Populate Autor collection
db.autoren.insertMany([
  {
    "_id": ObjectId("65e043a799e2aa41003bf4e0"),
    "name": "Goethe",
    "vorname": "Johann Wolfgang von",
    "geburtsjahr": 1749,
    "land": "Deutschland"
  },
  {
    "_id": ObjectId("65e043a799e2aa41003bf4e1"),
    "name": "Hesse",
    "vorname": "Hermann",
    "geburtsjahr": 1877,
    "land": "Deutschland"
  },
  {
    "_id": ObjectId("65e043a799e2aa41003bf4e2"),
    "name": "Mann",
    "vorname": "Thomas",
    "geburtsjahr": 1875,
    "land": "Deutschland"
  },
  {
    "_id": ObjectId("65e043a799e2aa41003bf4e3"),
    "name": "Kafka",
    "vorname": "Franz",
    "geburtsjahr": 1883,
    "land": "Österreich-Ungarn"
  },
  {
    "_id": ObjectId("65e043a799e2aa41003bf4e4"),
    "name": "Tolstoi",
    "vorname": "Leo",
    "geburtsjahr": 1828,
    "land": "Russland"
  },
  {
    "_id": ObjectId("65e043a799e2aa41003bf4e5"),
    "name": "Dostojewski",
    "vorname": "Fjodor",
    "geburtsjahr": 1821,
    "land": "Russland"
  },
  {
    "_id": ObjectId("65e043a799e2aa41003bf4e6"),
    "name": "Orwell",
    "vorname": "George",
    "geburtsjahr": 1903,
    "land": "Vereinigtes Königreich"
  },
  {
    "_id": ObjectId("65e043a799e2aa41003bf4e7"),
    "name": "Camus",
    "vorname": "Albert",
    "geburtsjahr": 1913,
    "land": "Frankreich"
  },
  {
    "_id": ObjectId("65e043a799e2aa41003bf4e8"),
    "name": "Hemingway",
    "vorname": "Ernest",
    "geburtsjahr": 1899,
    "land": "Vereinigte Staaten"
  },
  {
    "_id": ObjectId("65e043a799e2aa41003bf4e9"),
    "name": "Steinbeck",
    "vorname": "John",
    "geburtsjahr": 1902,
    "land": "Vereinigte Staaten"
  },
  {
    "_id": ObjectId("65e043a799e2aa41003bf4ea"),
    "name": "Dickens",
    "vorname": "Charles",
    "geburtsjahr": 1812,
    "land": "Vereinigtes Königreich"
  },
  {
    "_id": ObjectId("65e043a799e2aa41003bf4eb"),
    "name": "Verne",
    "vorname": "Jules",
    "geburtsjahr": 1828,
    "land": "Frankreich"
  },
  {
    "_id": ObjectId("65e043a799e2aa41003bf4ec"),
    "name": "Dumas",
    "vorname": "Alexandre",
    "geburtsjahr": 1802,
    "land": "Frankreich"
  },
  {
    "_id": ObjectId("65e043a799e2aa41003bf4ed"),
    "name": "Wilde",
    "vorname": "Oscar",
    "geburtsjahr": 1854,
    "land": "Irland"
  },
  {
    "_id": ObjectId("65e043a799e2aa41003bf4ee"),
    "name": "Borges",
    "vorname": "Jorge Luis",
    "geburtsjahr": 1899,
    "land": "Argentinien"
  },
  {
    "_id": ObjectId("65e043a799e2aa41003bf4ef"),
    "name": "Poe",
    "vorname": "Edgar Allan",
    "geburtsjahr": 1809,
    "land": "Vereinigte Staaten"
  },
  {
    "_id": ObjectId("65e043a799e2aa41003bf4f0"),
    "name": "Twain",
    "vorname": "Mark",
    "geburtsjahr": 1835,
    "land": "Vereinigte Staaten"
  },
  {
    "_id": ObjectId("65e043a799e2aa41003bf4f1"),
    "name": "Hugo",
    "vorname": "Victor",
    "geburtsjahr": 1802,
    "land": "Frankreich"
  },
  {
    "_id": ObjectId("65e043a799e2aa41003bf4f2"),
    "name": "Shakespeare",
    "vorname": "William",
    "geburtsjahr": 1564,
    "land": "Vereinigtes Königreich"
  },
  {
    "_id": ObjectId("65e043a799e2aa41003bf4f3"),
    "name": "Homer",
    "vorname": "",
    "geburtsjahr": "ca. 8. Jh. v. Chr.",
    "land": "Griechenland"
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
