const express = require('express');
const router = express.Router();

const User = require('../../models/Users');

// @GET api/users
// @Get all users
// {order: [['updatedAt', 'DESC']]}
router.get('/', (req, res) => {
    User.findAll()
        .then(users => {
            res.json(users)
        })
})

module.exports = router;