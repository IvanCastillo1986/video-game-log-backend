const express = require("express");
const snesGames = express.Router();
const snesGamesArray = require("../models/snesGames");


// Index
snesGames.get("/", (req, res) => {
    try {
        res.status(200).json({ data: snesGamesArray });
    } catch(err) {
        res.status(500).json({ error: err.message });
    }
});

// Show  /snesGames/1
snesGames.get("/:idx", (req, res) => {
    try {
        const {idx} = req.params;
        const game = snesGamesArray[idx];

        if (game) {
            res.status(200).json({ data: game });
        } else {
            res.status(404).json({ error: `could not find game at index ${idx}` });
        }
    } catch(err) {
        res.status(500).json({ error: message.err })
    }
});



module.exports = snesGames;