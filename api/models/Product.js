const Sequelize = require("sequelize")
const db = require("../db")

module.exports = db.sequelize.define(
    'product',
    {
        product_id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
        },
      name: Sequelize.STRING,
      description: Sequelize.STRING,
      price: Sequelize.DECIMAL,
      discounted_price: Sequelize.DECIMAL,
      thumbnail: Sequelize.STRING,
      display: Sequelize.INTEGER
    },
    {
        freezeTableName: true,
        timestamps: false
    }
)