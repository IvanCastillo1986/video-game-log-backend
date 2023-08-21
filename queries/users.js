const db = require("../db/dbConfig");



const getAllUsers = async () => {
    const allUsers = await db.any("Select * FROM users");
    return allUsers;
};

const createUser = async (user) => {
    const newUser = await db.one(
        "INSERT INTO users (email, uuid) VALUES ($1, $2) RETURNING *", 
        [user.email, user.uuid]
    );
    return newUser;
};

module.exports = { getAllUsers, createUser };