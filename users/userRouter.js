const express = 'express';

const router = express.Router();

const db = require("./userDb");

router.post('/', (req, res) => {

});

router.post('/:id/posts', (req, res) => {

});

router.get('/', (req, res) => {

});

router.get('/:id', (req, res) => {

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
        res.status(500).json({ errorMessage: "Internal server error", error })
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
    
};

module.exports = router;
