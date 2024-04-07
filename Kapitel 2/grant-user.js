// Benutzer der zuvor erstellten Rolle zuweisen
db.grantRolesToUser("adminUser", [{ role: "readWriteCustomCollection", db: "mylibary" }]);

// Benutzer eine zusätzliche Rolle zuweisen
db.grantRolesToUser("admin", [{ role: "dbAdmin", db: "mylibary" }]);