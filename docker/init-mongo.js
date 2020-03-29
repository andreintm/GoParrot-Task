db.createUser({
    user: "admin",
    pwd: "password",
    roles: [ { role: "readWrite", db: "goparrot" } ]
});

db.goparrot.insert({
    name: "user"
});