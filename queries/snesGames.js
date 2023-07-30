const db = require("../db/dbConfig.js");

const getAllGames = async () => {
    try {
        const allGames = await db.any("SELECT * FROM snes_games");
        return allGames;
    } catch(err) {
        return err;
    }
};


module.exports = {getAllGames};