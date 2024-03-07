// 1.10 - Querying Data
db.kunden.findOne({"name": "Doe"});

db.buecher.findOne({"titel": "Der große Gatsby"});

db.autoren.findOne({"name": "Fitzgerald"});

db.sprachen.findOne({"sprache": "Deutsch"});

db.genres.findOne({"name": "Fiction"});

db.kunden.find();

db.buecher.find();

db.autoren.find();

db.sprachen.find();

db.genres.find();

// Book by autor
db.buecher.find({"autor_id": ObjectId("65e03b5389a9a5a25f2ba28b")});

// Book age > 30
db.kunden.find({"geburtsdatum": {$lt: new Date("1994-02-29")}});

// Book after 2000
db.buecher.find({"veröffentlichkeitsdatum": {$gt: new ISODate("2000-01-01")}});

// Book sorted by number of pages
db.buecher.find().sort({"seitenanzahl": -1});
