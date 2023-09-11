const express = require("express");
const games = express.Router();
const { checkTitle, checkNumber } = require("../validations/checkGame")
const { getAllGames, getGame, createGame, deleteGame, updateGame, 
    getGamesByPlatformId, getGamesByUserIdForPlatform } = require("../queries/games");



// try/catch is the controller's responsibility. Otherwise, our query's try/catch sends us back an error object, which the controller percieves as
// a good query, a 200 status.

// 400 status errors is for things that are the client's fault
// 500 is our fault (developers)



// Index / Query by Platform
// ${api}/games?platformId=2
// ${api}/games?platformId=2&uuid  (with uuid)
games.get("/", async (req, res) => {

    try {
        const { platformId, uuid } = req.query;

        if (platformId && uuid) {
            const gamesByUserIdForPlatform = await getGamesByUserIdForPlatform(platformId, uuid);
            res.status(200).json(gamesByUserIdForPlatform);
        }
        else if (platformId) {
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
    
    // This isn't returning 'user not found' error. It's going straight to catch block. How to fix this?
    try {
        const oneGame = await getGame(id);

        if (oneGame.id) {
            res.status(200).json(oneGame);
        } else {
            res.status(404).json({ error: "could not find game with this id" });
        }
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Create
games.post("/", checkTitle, checkNumber, async (req, res) => {
    
    try {
        console.log('trying to add game')
        console.log('req.body', req.body)
        const newGame = await createGame(req.body);
        res.status(200).json(newGame);
    } catch (err) {
        res.status(500).json({ error: err.message });
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
        res.status(500).json({ error: err.message });
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