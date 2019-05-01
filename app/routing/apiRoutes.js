// Load data
let friends = require("../data/friends");

module.exports = function(app) {
    // GETs all options
    app.get("/api/friends", function(req, res) {
        res.json(friends);
    });
    
    // POSTs new additions
    app.post("/api/friends", function(req, res) {
        // Set up variables
        let newFriendScores = req.body.scores;
        let scoresArr = [];
        let bestMatch = 0;
        let minDiff = 50;

        // push the new submission into the friends array
        friends.push(req.body);

        // Loops through current list of friends
        for (let i = 0; i < friends.length; i++) {
            let totalDifference = 0;
            // Nested loop to compare friends against each other
            for (let j = 0; j < scoresArr.length; j++) {
                totalDifference += (Math.abs(parseInt(friends[i].scores[j]) - parseInt(newFriendScores[j])));
            }
            
            // Push that math into scoresArr
            scoresArr.push(totalDifference);
        }

        // After everyone's been compared, find the best match
        for (let k = 0; k < scoresArr.length; k++) {
            if (scoresArr[k] <= scoresArr[bestMatch]) {
                bestMatch = k;
            }
        }

        // Return bestMatch data
        let bff = friends[bestMatch];
        return res.json(bff);
    });
};

