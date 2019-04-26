const express = require("express")
// const model = require("../models/Product")
const db = require("../db")
const router = express.Router();  

router.get('/inDepartment/:department_id', (req, res) => {
    db.sequelize.query('SELECT DISTINCT p.* FROM product p INNER JOIN product_category pc ON p.product_id = pc.product_id INNER JOIN category c ON pc.category_id = c.category_id WHERE (p.display = 2 OR p.display = 3) AND c.department_id = :department_id ORDER BY p.display DESC LIMIT 1, 10', 
                {
                    replacements: { 
                        department_id: req.params.department_id
                    },
                    type: db.Sequelize.QueryTypes.SELECT
                }
                
        ).then(all => {
            res.send(all);
        })
        .catch(err => {
            res.send('error: ' + err)
        })
})

 
router.get('/inCategory/:category_id', (req, res) => {
    db.sequelize.query('SELECT p.* FROM product p INNER JOIN product_category pc ON p.product_id = pc.product_id WHERE pc.category_id = :category_id ORDER BY p.display DESC LIMIT 1,10', 
        {
            replacements: { 
                category_id: req.params.category_id
            },
            type: db.Sequelize.QueryTypes.SELECT
        }
    ).then(all => {
        res.send(all);
    })
    .catch(err => {
        res.send('error: ' + err)
    })
})
module.exports = router
