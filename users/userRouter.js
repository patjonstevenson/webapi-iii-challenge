const express = 'express';

const router = require("express").Router();

const db = require("./userDb");

router.post('/', (req, res) => {

});

router.post('/:id/posts', (req, res) => {

});

router.get('/', async (req, res) => {
    try {
        const users = await db.get();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: "Internal server error", error });
    }
});

router.get('/:id', validateUserId, async (req, res) => {
    const { id } = req.params;
    try {
        const user = await db.getById(id);
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: "Internal server error", error });
    }
});

router.get('/:id/posts', (req, res) => {

});

router.delete('/:id', (req, res) => {

});

router.put('/:id', (req, res) => {

});

//custom middleware

async function validateUserId(req, res, next) {
    const { id } = req.params;
    try {
        const user = await db.getById(id);
        if (!user) {
            res.status(400).json({ message: "invalid user id" });
        }
        req.user = user;
        next();
    } catch (error) {
        res.status(500).json({ message: "Internal server error", error })
    }
};

function validateUser(req, res, next) {
    const body = req.body;
    if (!body) {
        res.status(400).json({ message: "missing user data" });
    }
    if (!body.name) {
        res.status(400).json({ message: "missing required name field" });
    }
    next();
};

function validatePost(req, res, next) {
    const body = req.body;
    if (!body) {
        res.status(400).json({ message: "missing post data" });
    }
    if (!body.text) {
        res.status(400).json({ message: "missing required text field" });
    }
    next();
};

module.exports = router;
