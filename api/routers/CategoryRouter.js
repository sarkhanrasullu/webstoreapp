const express = require("express")
const model = require("../models/Category")
const router = express.Router();

router.get('/inDepartment/:department_id', (req, res) => {
    console.log('here');
    model.findAll({
        where: {
            department_id: req.params.department_id
        }
    })
        .then(all => {
            res.send(all);
        })
        .catch(err => {
            res.send('error: ' + err)
        })
})
 

module.exports = router
