// Benutzer erstellen
db.createUser({
  user: "admin",
  pwd: "sml12345",
  roles: [{ role: "userAdminAnyDatabase", db: "admin" }]
});


// Rolle für Lesen und Schreiben in einer bestimmten Sammlung erstellen
db.createRole({
  role: "readWriteCustomCollection",
  privileges: [
    { resource: { db: "mylibary", collection: "customCollection" }, actions: ["find", "insert", "update", "remove"] }
  ],
  roles: []
});