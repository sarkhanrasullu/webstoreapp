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
        email: {
            type: Sequelize.STRING
        },
        password: {
            type: Sequelize.STRING
        }
    },
    {
        freezeTableName: true,
        timestamps: false
    }
)