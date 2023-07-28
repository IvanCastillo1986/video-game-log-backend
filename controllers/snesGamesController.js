const express = require("express");
const snesGames = express.Router();
const snesGamesArray = require("../models/snesGames");


// Index
snesGames.get("/", (req, res) => {
    try {
        res.status(200).json({ snesGamesArray });
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
            res.status(200).json({ game });
        } else {
            res.status(404).json({ error: `could not find game at index ${idx}` });
        }
    } catch(err) {
        res.status(500).json({ error: message.err })
    }
});

// Create
snesGames.post("/", (req, res) => {
    const game = req.body;
    snesGamesArray.push(game);

    res.json(snesGamesArray[snesGamesArray.length - 1]);
});

// Delete
snesGames.delete("/:idx", (req, res) => {
    const {idx} = req.params;

    if (snesGamesArray[idx]) {
        console.log('delete index: ', idx);
        const deletedBookmark = snesGamesArray.splice(idx, 1);
        res.status(200).json(deletedBookmark);
    } else {
        res.status(404).json({error: 'index not found'});
    }
});

// Update
snesGames.put("/:idx", (req, res) => {
    const {idx} = req.params;

    if (snesGamesArray[idx]) {
        const newGame = snesGamesArray[idx] = req.body
        res.status(200).json(newGame)
    } else {
        res.status(404).json({error: 'index not found'});
    }
});




module.exports = snesGames;