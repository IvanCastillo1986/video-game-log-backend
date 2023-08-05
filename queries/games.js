const db = require("../db/dbConfig.js");


{/*
    db.any(), db.all() returns an array
    db.one() returns one object
*/}


const getAllGames = async () => {
    try {
        const allGames = await db.any("SELECT * FROM games");
        return allGames;
    } catch(err) {
        return err;
    }
};

const getGame = async (id) => {
    try {
        const game = await db.one("SELECT * FROM games WHERE id=$1", id);
        // you may also pass in arguments to your SQL query using an objetc with named keys like so:
        // await db.one("SELECT * FROM snes_games WHERE id=[$id]", { id: id });
        return game;
    } catch (err) {
        return err;
    }
};

const createGame = async (game) => {
    try {
        const newGame = await db.one(
            "INSERT INTO games (title, region, year_released) VALUES ($1, $2, $3) RETURNING *",
            [game.title, game.region, game.year_released]
        );
        return newGame;
    } catch(err) {
        return err;
    }
};

const deleteGame = async (id) => {
    try {
        const deletedGame = await db.one(
            "DELETE FROM games WHERE id = $1 RETURNING *", id
        );
        return deletedGame;
    } catch(err) {
        return err;
    }
};

const updateGame = async (id, game) => {
    try {
        const updatedGame = await db.one(
            "UPDATE games SET title=$1, region=$2, year_released=$3 WHERE id=$4 RETURNING *",
            [game.title, game.region, game.year_released, id]
        );
        return updatedGame;
    } catch(err) {
        return err;
    }
};

const getGamesByPlatformId = async (platformId) => {

    try {
        const games = await db.any(
            "SELECT games.id, games.title, games.region, games.year_released FROM games LEFT JOIN platforms ON games.platform_id = platforms.id WHERE games.platform_id=$1", 
        platformId);
        return games;
    } catch (err) {
        return err;
    }
};



module.exports = { getAllGames, getGame, createGame, deleteGame, updateGame, getGamesByPlatformId };