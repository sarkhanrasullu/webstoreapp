const express = require("express")
const Department = require("../models/Department")
const router = express.Router();

router.get('/', (req, res) => {
    Department.findAll()
        .then(all => {
             res.send(all);
        })
        .catch(err => {
            res.status(400).json({ error: err })
        })
})

module.exports = router
