var friendData = require("app/data/friends");


app.get("/api/friends", function (req, res) {
    return res.json(friends);
});