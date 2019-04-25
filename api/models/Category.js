const Sequelize = require("sequelize")
const db = require("../db")

module.exports = db.sequelize.define(
    'category',
    {
        category_id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
        },
        department_id: Sequelize.INTEGER,
        name: Sequelize.STRING,
        description: Sequelize.STRING
    },
    {
        freezeTableName: true,
        timestamps: false
    }
)