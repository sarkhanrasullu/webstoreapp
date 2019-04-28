const Sequelize = require("sequelize")
const db = require("../db")

module.exports = db.sequelize.define(
    'attribute_value',
    {
        attribute_value_id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
        },
        attribute_name: Sequelize.STRING,
        attribute_value: Sequelize.STRING,
    },
    {
        freezeTableName: true,
        timestamps: false
    }
)