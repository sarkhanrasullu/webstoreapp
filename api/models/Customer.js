const Sequelize = require("sequelize")
const db = require("../db")

module.exports = db.sequelize.define(
    'customer',
    {
        customer_id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: Sequelize.STRING
        },
        email: {
            type: Sequelize.STRING,
            validate: {
                isEmail: {
                    msg: JSON.stringify({
                        "error": {
                          "status": 400,
                          "code": "USR_03",
                          "message": "The email is invalid.",
                          "field": "email"
                        }
                      })
                },
                notEmpty: {
                    msg: JSON.stringify({
                        "error": {
                          "status": 400,
                          "code": "USR_03",
                          "message": "The email is invalid.",
                          "field": "email"
                        }
                      })
                }
            }
        },
        password: {
            type: Sequelize.STRING,
            validate: {
                notEmpty: {
                    msg: JSON.stringify({
                        "error": {
                          "status": 400,
                          "code": "USR_03",
                          "message": "Password can not be empty.",
                          "field": "password"
                        }
                      })
                }
            }
        }
    },
    {
        freezeTableName: true,
        timestamps: false
    }
)