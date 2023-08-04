const db = require("../db/dbConfig");


const getAllGames = async () => {
    try {
        const allGames = await db.any("SELECT * FROM pc_games");
        return allGames;
    } catch(err) {
        return err;
    }
};


module.exports = { getAllGames };