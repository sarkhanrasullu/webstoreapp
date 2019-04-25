const express = require("express")
const jwt = require("jsonwebtoken")
const Customer = require("../models/Customer")
const customerRouter = express.Router();

process.env.SECRET_KEY = 'secret'

customerRouter.post('/register', (req, res) => {
    const today = new Date()
    const userData = {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        password: req.body.password,
        created: today
    }

    Customer.findOne({
        where: {
            email: req.body.email
        }
    })
        .then(user => {
            if (!user) {
                bcrypt.hash(req.body.password, 10, (err, hash) => {
                    userData.password = hash
                    Customer.create(userData)
                        .then(user => {
                            res.json({ status: user.email + ' registered' })
                        })
                        .catch(err => {
                            res.send('error: ' + err)
                        })
                })
            } else {
                res.json({ error: "User already exists" })
            }
        })
        .catch(err => {
            res.send('error: ' + err)
        })
})

customerRouter.post('/login', (req, res) => {
    Customer.findOne({
        where: {
            email: req.body.email
        }
    })
        .then(customer => {
            if (customer) {
                if (customer.password.localeCompare(req.body.password)===0) {
                    let token = jwt.sign(customer.dataValues, process.env.SECRET_KEY, {
                        expiresIn: 1440
                    })
                    res.send(token);
                }
            } else {
                res.status(400).json({ error: 'User does not exist' });
            }
        })
        .catch(err => {
            res.status(400).json({ error: err })
        })
})

module.exports = customerRouter
