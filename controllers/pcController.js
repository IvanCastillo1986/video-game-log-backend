const express = require("express");
const pcGames = express.Router();

const { getAllGames } = require("../queries/pcGames");


// Index (returns array of all pc games)
pcGames.get("/", async (req, res) => {
    try {
        const allGames = await getAllGames();
        res.status(200).json(allGames);
    } catch(err) {
        res.status(500).json({ error: err });
    }
});



module.exports = pcGames;