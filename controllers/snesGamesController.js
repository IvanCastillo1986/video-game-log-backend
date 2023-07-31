const express = require("express");
const snesGames = express.Router();
const snesGamesArray = require("../models/snesGames");
const { checkTitle, checkNumber } = require("../validations/checkGame")
const { getAllGames, getGame, createGame } = require("../queries/snesGames");


// Index
snesGames.get("/", async (req, res) => {
    const allGames = await getAllGames();

    if (allGames[0]) {
        res.status(200).json(allGames);
    } else {
        res.status(500).json({ error: "server error" })
    }
});

// snesGames.get("/", (req, res) => {
//     try {
//         res.status(200).json({ snesGamesArray });
//     } catch(err) {
//         res.status(500).json({ error: err.message });
//     }
// });


// Show  /snesGames/1
snesGames.get("/:id", async (req, res) => {
    const {id} = req.params;
    const oneGame = await getGame(id);

    if (oneGame) {
        res.status(200).json(oneGame);
    } else {
        res.status(404).json({error: "could not find game with this id"});
    }
});

// snesGames.get("/:idx", (req, res) => {
//     try {
//         const {idx} = req.params;
//         const game = snesGamesArray[idx];

//         if (game) {
//             res.status(200).json({ game });
//         } else {
//             res.status(404).json({ error: `could not find game at index ${idx}` });
//         }
//     } catch(err) {
//         res.status(500).json({ error: message.err });
//     }
// });

// Create
snesGames.post("/", checkTitle, checkNumber, async (req, res) => {
    
    try {
        const newGame = createGame(req.body);
        res.status(200).json(newGame);
    } catch (err) {
        res.status(400).json({ error: err });
    }
});

// snesGames.post("/", (req, res) => {
//     const game = req.body;
//     snesGamesArray.push(game);

//     res.json(snesGamesArray[snesGamesArray.length - 1]);
// });

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
        const newGame = snesGamesArray[idx] = req.body;
        res.status(200).json(newGame);
    } else {
        res.status(404).json({error: 'index not found'});
    }
});




module.exports = snesGames;