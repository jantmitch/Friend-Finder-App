var friendData = require("app/data/friends.js");


app.get("/api/friends", function (req, res) {
    return res.json(friends);
});