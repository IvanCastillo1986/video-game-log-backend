const db = require("../db/dbConfig.js");


{/*
    db.any(), db.all() returns an array
    db.one() returns one object
*/}


const getAllGames = async () => {
    const allGames = await db.any("SELECT * FROM games");
    return allGames;
};

const getGame = async (id) => {
    const game = await db.one("SELECT * FROM games WHERE id = $1", id);
    // you may also pass in arguments to your SQL query using an object with named keys like so:
    // await db.one("SELECT * FROM snes_games WHERE id=[$id]", { id: id });
    return game;
};

// platform_id, user_id, title, region, year_released, developer, publisher, producer, artist, composer, genre, mode
const createGame = async (game) => {
    const newGame = await db.one(
        "INSERT INTO games (\
            platform_id, user_id, title, region, year_released, developer,\
            publisher, director, producer, artist, composer, genre, mode\
        ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13)\
        RETURNING *",
        [game.platform_id, game.user_id, game.title, game.region, game.year_released, game.developer, 
        game.publisher, game.director, game.producer, game.artist, game.composer, game.genre, game.mode]
    );
    return newGame;
};

const deleteGame = async (id) => {
    const deletedGame = await db.one(
        "DELETE FROM games WHERE id = $1 RETURNING *", id
    );
    return deletedGame;
};

const updateGame = async (id, game) => {
    const updatedGame = await db.one(
        "UPDATE games SET title=$1, region=$2, year_released=$3 WHERE id=$4 RETURNING *",
        [game.title, game.region, game.year_released, id]
    );
    return updatedGame;
};

const getGamesByPlatformId = async (platformId) => {
    const games = await db.any(
        "SELECT games.* \
        FROM games LEFT JOIN platforms ON games.platform_id = platforms.id \
        WHERE games.platform_id=$1",
    platformId);
    return games;
};

const getGamesByUserIdForPlatform = async (platformId, uuid) => {
    const games = await db.any(
        "SELECT games.* FROM games \
        LEFT JOIN platforms ON games.platform_id = platforms.id \
        WHERE games.platform_id=$1 AND games.user_id=$2",
        [platformId, uuid]
    );
    return games;
};


module.exports = { getAllGames, getGame, createGame, deleteGame, updateGame, getGamesByPlatformId, getGamesByUserIdForPlatform };