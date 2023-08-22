const db = require("../db/dbConfig");



const getAllUsers = async () => {
    const allUsers = await db.any("SELECT * FROM users");
    return allUsers;
};

const getUser = async (id) => {
    const oneUser = await db.one("SELECT * FROM users WHERE id = $1", id);
    return oneUser;
};

const createUser = async (user) => {
    const newUser = await db.one(
        "INSERT INTO users (email, uuid) VALUES ($1, $2) RETURNING *", 
        [user.email, user.uuid]
    );
    return newUser;
};

const deleteUser = async (id) => {
    const deletedGame = await db.one("DELETE FROM users WHERE id = $1 RETURNING *", id);
    return deletedGame;
};


module.exports = { getAllUsers, getUser, createUser, deleteUser };