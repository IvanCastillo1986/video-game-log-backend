const express = require("express");
const users = express.Router();
const { getAllUsers, getUser, createUser, deleteUser } = require("../queries/users");


// Index
users.get("/", async (req, res) => {

    try {
        const allUsers = await getAllUsers();
        res.status(200).json(allUsers);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }

});

// Show
users.get("/:id", async (req, res) => {
    const { id } = req.params;
    
    // This isn't returning 'user not found' error. It's going straight to catch block. How to fix this?
    try {
        const oneUser = await getUser(id);

        if (oneUser.email) {
            res.status(200).json(oneUser);
        } else {
            res.status(404).json({ error: `User with id of ${id} not found` });
        }
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Create
users.post("/", async (req, res) => {
    const user = req.body;

    try {
        const newUser = await createUser(user);
        res.status(200).json(newUser);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// Delete
users.delete("/:id", async (req, res) => {
    const { id } = req.params;
    
    try {
        const deletedUser = await deleteUser(id);

        if (deletedUser.id) {
            res.status(200).json(deletedUser);
        } else {
            res.status(200).json(deletedUser);
        }
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});


module.exports = users;