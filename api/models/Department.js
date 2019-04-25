const Sequelize = require("sequelize")
const db = require("../db")

module.exports = db.sequelize.define(
    'department',
    {
        department_id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: Sequelize.STRING,
        description: Sequelize.STRING
    },
    {
        freezeTableName: true,
        timestamps: false
    }
)