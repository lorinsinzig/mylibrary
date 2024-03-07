// 1.7 - Updating Data
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
