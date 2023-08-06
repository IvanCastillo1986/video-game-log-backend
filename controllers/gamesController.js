const express = require("express");
const games = express.Router();
const { checkTitle, checkNumber } = require("../validations/checkGame")
const { getAllGames, getGame, createGame, deleteGame, updateGame, getGamesByPlatformId } = require("../queries/games");


// Query by Platform
games.get("/query?", async (req, res) => {

    const { platformId } = req.query;

    try {
        const gamesByPlatformId = await getGamesByPlatformId(platformId);
        res.status(200).json(gamesByPlatformId);
    } catch (err) {
        res.status(400).json({ error: err });
    }
});

// Index
games.get("/", async (req, res) => {
    const allGames = await getAllGames();

    if (allGames[0]) {
        res.status(200).json(allGames);
    } else {
        res.status(500).json({ error: "server error" })
    }
});

// Show
games.get("/:id", async (req, res) => {
    const { id } = req.params;
    const oneGame = await getGame(id);

    if (oneGame) {
        res.status(200).json(oneGame);
    } else {
        res.status(404).json({error: "could not find game with this id"});
    }
});

// Create
games.post("/", checkTitle, checkNumber, async (req, res) => {
    
    try {
        const newGame = await createGame(req.body);
        res.status(200).json(newGame);
    } catch (err) {
        res.status(400).json({ error: err });
    }
});

// Delete
games.delete("/:id", async (req, res) => {
    const { id } = req.params;
    
    try {
        const deletedGame = await deleteGame(id);
        if (deletedGame.id) {
            res.status(200).json(deletedGame);
        } else {
            res.status(404).json({error: "Game not found"})
        }
    } catch(err) {
        res.status(400).json({ error: err });
    }
});

// Update
games.put("/:id", async (req, res) => {
    
    const { id } = req.params;
    const game = req.body;

    try {
        const updatedGame = await updateGame(id, game);
        res.status(200).json(updatedGame);
    } catch(err) {
        res.status(400).json({error: err});
    }
});



 
module.exports = games;