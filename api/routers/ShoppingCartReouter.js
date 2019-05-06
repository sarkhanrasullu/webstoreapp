const express = require("express")
const router = express.Router();
const db = require("../db")

router.get('/:cart_id', (req, res) => {
    db.sequelize.query("call shopping_cart_get_products(:cart_id)", 
                {
                    replacements: { 
                        cart_id: req.params.cart_id
                    },
                    mapToModel: true,
                    type: db.sequelize.QueryTypes.RAW
                }
        ).then(data => {
            if(data && data.length!==0)
                res.send(data);
            else res.status(400).send({
                "code": "USR_02",
                "message": "The field example is empty.",
                "field": "example"
              })
        }).catch(err => {
            console.log(err);
            res.status(500).send({error:err})
        });
})


module.exports = router
