const express = require("express");
const snesGames = express.Router();
const snesGamesArray = require("../models/snesGames");


// Index
snesGames.get("/", (req, res) => {
    res.send(snesGamesArray);
});

module.exports = snesGames;