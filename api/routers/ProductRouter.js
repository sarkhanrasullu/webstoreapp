const express = require("express")
// const model = require("../models/Product")
const db = require("../db")
const router = express.Router();  

router.get('/search', (req, res) => {//?query_string=string&all_words=onoff&page=int&limit=int&description_length=int
    let {query_string, all_words, page, limit, description_length} = req.query;
    all_words = all_words==='undefined'?'off':all_words;
    page = page==='undefined'?1:page;
    limit = limit==='undefined'?10:limit;
    description_length = description_length==='undefined'?100:description_length;

    limit = parseInt(limit);
    page = parseInt(page)-1;
    page = page * limit;

    const get_count_for_search = db.sequelize.query("call tshirtshop.catalog_count_search_result(:query_string, :all_words)", 
                {
                    replacements: { 
                        query_string: query_string,
                        all_words: all_words
                    },
                    type: db.sequelize.QueryTypes.RAW
                }
        ) 

    const get_products_on_category = db.sequelize.query("call tshirtshop.catalog_search(:query_string, :all_words, :desc_length, :limit, :page)", 
    {
        replacements: { 
            desc_length: description_length,
            query_string: query_string,
            page: page,
            limit: limit,
            all_words: all_words
        },
        type: db.sequelize.QueryTypes.RAW
    })
    
    Promise
    .all([get_count_for_search, get_products_on_category])
    .then(responses => {
        const resp = {
            count: responses[0][0]['count(*)'],
            raws: responses[1]
        }
        res.send(resp);
    }).catch(err => {
        console.log(err);
        res.send('error: '+err)
    });
})

router.get('/inDepartment/:department_id', (req, res) => {
    db.sequelize.query('SELECT DISTINCT p.* FROM product p INNER JOIN product_category pc ON p.product_id = pc.product_id INNER JOIN category c ON pc.category_id = c.category_id WHERE (p.display = 2 OR p.display = 3) AND c.department_id = :department_id ORDER BY p.display DESC LIMIT 1, 10', 
                {
                    replacements: { 
                        department_id: req.params.department_id
                    },
                    type: db.sequelize.QueryTypes.SELECT
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
            type: db.sequelize.QueryTypes.SELECT
        }
    ).then(all => {
        res.send(all);
    })
    .catch(err => {
        res.send('error: ' + err)
    })
})
module.exports = router
