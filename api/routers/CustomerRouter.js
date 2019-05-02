const express = require("express")
const jwt = require("jsonwebtoken")
const Customer = require("../models/Customer")
const customerRouter = express.Router();

process.env.SECRET_KEY = 'secret'

customerRouter.post('/', (req, res) => {
    console.log(JSON.stringify(req.body));
    // console.log(JSON.stringify(req.params));
    const userData = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        shipping_region_id : 1,
    }

    Customer.findOne({
        where: {
            email: req.body.email
        }
    })
        .then(user => {
            if (!user) {
                    Customer.create(userData)
                        .then(user => {
                            res.json({ status: user.email + ' registered' })
                        })
                        .catch(err => {
                            console.log(JSON.stringify(err));
                            const errors = err.errors;
                            
                            res.status(500).json(JSON.parse(errors[0].message))
                        })
            } else {
                res.status(409).json(
                    {
                        "error": {
                            "status": 409,
                            "code": "USR_03",
                            "message": "User already exists",
                            "field": "email"
                          }
                    }
                )
            }
        })
        .catch(err => {
            res.status(500).json({error: err})
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
