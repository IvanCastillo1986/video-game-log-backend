const express = require("express");
const games = express.Router();
const { checkTitle, checkNumber } = require("../validations/checkGame")
const { getAllGames, getGame, createGame, deleteGame, updateGame, getGamesByPlatformId } = require("../queries/games");



// try/catch is the controller's responsibility. Otherwise, our query's try/catch sends us back an error object, which the controller percieves as
// a good query, a 200 status.

// 400 status errors is for things that are the client's fault
// 500 is our fault (developers)



// Index / Query by Platform
// ${api}/games?platformId=2
games.get("/", async (req, res) => {

    try {
        const { platformId } = req.query;
        if (platformId) {
            const gamesByPlatformId = await getGamesByPlatformId(platformId);
            res.status(200).json(gamesByPlatformId);
        }
        else {
            const allGames = await getAllGames();
            res.status(200).json(allGames);
        }
    } catch(err) {
        res.status(500).json({ error: err.message });
    }
});

// Show
games.get("/:id", async (req, res) => {
    const { id } = req.params;
    const oneGame = await getGame(id);

    try {

        if (oneGame) {
            res.status(200).json(oneGame);
        } else {
            res.status(404).json({error: "could not find game with this id"});
        }
    } catch (err) {
        res.status(500).json({ error: err.mesage });
    }
});

// Create
games.post("/", checkTitle, checkNumber, async (req, res) => {
    
    try {
        const newGame = await createGame(req.body);
        res.status(200).json(newGame);
    } catch (err) {
        res.status(500).json({ error: err });
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
        res.status(500).json({ error: err });
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
        res.status(500).json({error: err});
    }
});




module.exports = games;