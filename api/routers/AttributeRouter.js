const express = require("express")
const db = require("../db")
const router = express.Router();  

router.get('/inProduct/:product_id', (req, res) => {
    db.sequelize.query("call tshirtshop.catalog_get_product_attributes(:product_id)", 
    {
        replacements: { 
            product_id: req.params.product_id
        },
        type: db.sequelize.QueryTypes.RAW
    })
    .then(data => {
        res.send(data);
    }).catch(err => {
        console.log(err);
        res.send('error: '+err)
    });
})
 
module.exports = router
