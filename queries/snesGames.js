const db = require("../db/dbConfig.js");


{/*
    db.any(), db.all() returns an array
    db.one() returns an object
*/}

const getAllGames = async () => {
    try {
        const allGames = await db.any("SELECT * FROM snes_games");
        return allGames;
    } catch(err) {
        return err;
    }
};

const getGame = async (id) => {
    try {
        const game = await db.one("SELECT * FROM snes_games WHERE id=$1", id);
        // you may also pass in arguments to your SQL query using an objetc with named keys like so:
        // await db.one("SELECT * FROM snes_games WHERE id=[$id]", { id: id });
        return game;
    } catch (err) {
        return err;
    }
};

const createGame = async (game) => {
    try {
        const newGame = db.one(
            "INSERT INTO snes_games (title, region, year_released) VALUES ($1, $2, $3) RETURNING *",
            [game.title, game.region, game.year_released]
        );
        return newGame;
    } catch(err) {
        return `Error in createGame: ${err}`;
    }
};


module.exports = { getAllGames, getGame, createGame };