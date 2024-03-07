// 1.8 - Deleting Data
db.kunden.deleteOne({ "name": "NeuerName" });

db.buecher.deleteOne({ "titel": "Geändertes Buch" });

db.autoren.deleteOne({ "name": "NeuerName" });

db.sprachen.deleteOne({ "sprache": "Spanisch" });

db.genres.deleteOne({ "name": "Krimi" });
