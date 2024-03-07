// 1.6 - Einfügen von Daten

// Populate Kunde collection
db.kunden.insertMany([
  {
    "_id": ObjectId("65e03b1a1aa6382bf1eed24e"),
    "name": "Doe",
    "vorname": "John",
    "email": "john.doe@example.com",
    "geburtsdatum": ISODate("1990-01-01"),
    "geschlecht": "männlich",
    "strasse": "Musterstraße 123",
    "ort": "Musterstadt",
    "plz": "12345",
    "land": "Deutschland"
  },
  {
    "_id": ObjectId(),
    "name": "Smith",
    "vorname": "Jane",
    "email": "jane.smith@example.com",
    "geburtsdatum": ISODate("1985-05-15"),
    "geschlecht": "weiblich",
    "strasse": "Hauptstraße 456",
    "ort": "Stadt",
    "plz": "54321",
    "land": "Deutschland"
  },
  // Add more kunden data if needed
]);

// Populate Buch collection
db.buecher.insertMany([
  {
    "_id": ObjectId("65e03b31eef4cf59ec2e7c29"),
    "iban": "978-3-123-45678-9",
    "titel": "Der große Gatsby",
    "autor_id": ObjectId("65e03b5389a9a5a25f2ba28b"),
    "genre_id": ObjectId("65e03f52d3923867b055a0a9"),
    "sprache_id": ObjectId("65e03fef0e1130e4f52e737f"),
    "seitenanzahl": 320,
    "veröffentlichkeitsdatum": ISODate("1925-04-10")
  },
  // Add more buecher data if needed
]);

// Populate Autor collection
db.autoren.insertMany([
  {
    "_id": ObjectId("65e03b5389a9a5a25f2ba28b"),
    "name": "Fitzgerald",
    "vorname": "F. Scott",
    "geburtsjahr": 1896,
    "land": "USA"
  },
  // Add more autoren data if needed
]);

// Populate Sprache collection
db.sprachen.insertMany([
  {
    "_id": ObjectId("65e03fef0e1130e4f52e737f"),
    "sprache": "Deutsch"
  },
  // Add more sprachen data if needed
]);

// Populate Genre collection
db.genres.insertMany([
  {
    "_id": ObjectId("65e03f52d3923867b055a0a9"),
    "name": "Fiction"
  },
  // Add more genres data if needed
]);

// Populate Autor-Buch collection
db.autor_buch.insertMany([
  {
    "_id": ObjectId(),
    "autor_id": ObjectId("65e03b5389a9a5a25f2ba28b"),
    "buch_id": ObjectId("65e03b31eef4cf59ec2e7c29")
  },
  // Add more autor_buch data if needed
]);

// Populate Kunde-Buch collection
db.kunde_buch.insertMany([
  {
    "_id": ObjectId(),
    "kunde_id": ObjectId("65e03b1a1aa6382bf1eed24e"),
    "buch_id": ObjectId("65e03b31eef4cf59ec2e7c29"),
    "ausleihedatum": ISODate("2024-02-29")
  },
  // Add more kunde_buch data if needed
]);
