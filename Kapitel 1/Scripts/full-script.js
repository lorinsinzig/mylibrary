/////////////////////
// 1.5
///////////////////

use mylibrary

/////////////////////
// 1.6
///////////////////

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
    "land": "Deutschland",
    "telefon": "+1234567890" // Added telefon attribute
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
    "land": "Deutschland",
    "bemerkung": "Mehrmals negative Erfahrungen" // Added bemerkung attribute
  },
  {
    "_id": ObjectId(),
    "name": "Müller",
    "vorname": "Max",
    "email": "max.mueller@example.com",
    "geburtsdatum": ISODate("1978-09-20"),
    "geschlecht": "männlich",
    "strasse": "Am See 7",
    "ort": "Dorf",
    "plz": "98765",
    "land": "Deutschland"
  },
  {
    "_id": ObjectId(),
    "name": "Schulz",
    "vorname": "Anna",
    "email": "anna.schulz@example.com",
    "geburtsdatum": ISODate("1995-03-10"),
    "geschlecht": "weiblich",
    "strasse": "Buchenweg 15",
    "ort": "Stadt",
    "plz": "23456",
    "land": "Deutschland"
  }
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
  {
    "_id": ObjectId(),
    "iban": "978-3-456-78910-1",
    "titel": "Harry Potter und der Stein der Weisen",
    "autor_id": ObjectId("65e03b5389a9a5a25f2ba28b"),
    "genre_id": ObjectId("65e03f52d3923867b055a0a9"),
    "sprache_id": ObjectId("65e03fef0e1130e4f52e737f"),
    "seitenanzahl": 336,
    "veröffentlichkeitsdatum": ISODate("1997-06-26")
  },
  {
    "_id": ObjectId(),
    "iban": "978-3-789-10111-2",
    "titel": "The Catcher in the Rye",
    "autor_id": ObjectId("65e03b5389a9a5a25f2ba28b"),
    "genre_id": ObjectId("65e03f52d3923867b055a0a9"),
    "sprache_id": ObjectId("65e03fef0e1130e4f52e737f"),
    "seitenanzahl": 277,
    "veröffentlichkeitsdatum": ISODate("1951-07-16")
  },
  {
    "_id": ObjectId(),
    "iban": "978-3-456-78910-3",
    "titel": "To Kill a Mockingbird",
    "autor_id": ObjectId(), // New author
    "genre_id": ObjectId("65e03f52d3923867b055a0a9"),
    "sprache_id": ObjectId("65e03fef0e1130e4f52e737f"),
    "seitenanzahl": 324,
    "veröffentlichkeitsdatum": ISODate("1960-07-11")
  }
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
  {
    "_id": ObjectId(),
    "name": "Salinger",
    "vorname": "J.D.",
    "geburtsjahr": 1919,
    "land": "USA"
  }
]);

// Populate Sprache collection
db.sprachen.insertMany([
  {
    "_id": ObjectId("65e03fef0e1130e4f52e737f"),
    "sprache": "Deutsch"
  },
  {
    "_id": ObjectId(),
    "sprache": "Englisch"
  }
]);

// Populate Genre collection
db.genres.insertMany([
  {
    "_id": ObjectId("65e03f52d3923867b055a0a9"),
    "name": "Fiction"
  },
  {
    "_id": ObjectId(),
    "name": "Non-Fiction"
  }
]);

// Populate Autor-Buch collection
db.autor_buch.insertMany([
  {
    "_id": ObjectId(),
    "autor_id": ObjectId("65e03b5389a9a5a25f2ba28b"),
    "buch_id": ObjectId("65e03b31eef4cf59ec2e7c29")
  },
  {
    "_id": ObjectId(),
    "autor_id": ObjectId("65e03b5389a9a5a25f2ba28b"),
    "buch_id": ObjectId() // Reference to Harry Potter
  },
  {
    "_id": ObjectId(),
    "autor_id": ObjectId("65e03b5389a9a5a25f2ba28b"), // Reference to Fitzgerald
    "buch_id": ObjectId()
  },
  {
    "_id": ObjectId(),
    "autor_id": ObjectId(), // Reference to Salinger
    "buch_id": ObjectId()
  }
]);

// Populate Kunde-Buch collection
db.kunde_buch.insertMany([
  {
    "_id": ObjectId(),
    "kunde_id": ObjectId("65e03b1a1aa6382bf1eed24e"),
    "buch_id": ObjectId("65e03b31eef4cf59ec2e7c29"),
    "ausleihedatum": ISODate("2024-02-29")
  }
]);



/////////////////////
// 1.7
///////////////////

db.kunden.updateOne(
  { "name": "Mustermann" },
  { $set: { "name": "NeuerName" } }
);

db.buecher.updateOne(
  { "titel": "Neues Buch" },
  { $set: { "titel": "Geändertes Buch" } }
);

db.autoren.updateOne(
  { "name": "Müller" },
  { $set: { "name": "NeuerName" } }
);

db.sprachen.updateOne(
  { "sprache": "Englisch" },
  { $set: { "sprache": "Spanisch" } }
);

db.genres.updateOne(
  { "name": "Thriller" },
  { $set: { "name": "Krimi" } }
);


/////////////////////
// 1.8
///////////////////


db.kunden.deleteOne({ "name": "NeuerName" });

db.buecher.deleteOne({ "titel": "Geändertes Buch" });

db.autoren.deleteOne({ "name": "NeuerName" });

db.sprachen.deleteOne({ "sprache": "Spanisch" });

db.genres.deleteOne({ "name": "Krimi" });


/////////////////////
// 1.09
///////////////////
//Entität 1
db.kunden.findOne({"telefon": "+1234567890"});
//Entität 2
db.kunden.findOne({"bemerkung": "Mehrmals negative Erfahrungen"})


/////////////////////
// 1.10
///////////////////

db.kunden.findOne({"name": "Doe"})

db.buecher.findOne({"titel": "Der große Gatsby"})

db.autoren.findOne({"name": "Fitzgerald"})

db.sprachen.findOne({"sprache": "Deutsch"})

db.genres.findOne({"name": "Fiction"})


db.kunden.find()

db.buecher.find()

db.autoren.find()

db.sprachen.find()

db.genres.find()

// Book by autor
db.buecher.find({"autor_id": ObjectId("65e03b5389a9a5a25f2ba28b")})

// Book age > 30
db.kunden.find({"geburtsdatum": {$lt: new Date("1994-02-29")}})

// Book after 2000
db.buecher.find({"veröffentlichkeitsdatum": {$gt: new ISODate("2000-01-01")}})

// Book sorted by number of pages
db.buecher.find().sort({"seitenanzahl": -1})
