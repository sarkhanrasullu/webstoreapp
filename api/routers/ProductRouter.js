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

    const get_products_search = db.sequelize.query("call tshirtshop.catalog_search(:query_string, :all_words, :desc_length, :limit, :page)", 
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
    .all([get_count_for_search, get_products_search])
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
    let {page, limit, description_length} = req.query;
    page = page===undefined?1:parseInt(page);
    limit = limit===undefined?10:parseInt(limit);
    description_length = description_length===undefined?100:parseInt(description_length);
    const get_count_for_search = db.sequelize.query("call tshirtshop.catalog_count_products_on_department(:department_id)", 
                {
                    replacements: { 
                        department_id: req.params.department_id
                    },
                    mapToModel: true,
                    type: db.sequelize.QueryTypes.RAW
                }
        ) 

    const get_products_in_department = db.sequelize.query("SELECT DISTINCT p.product_id, p.name, IF(LENGTH(p.description) <= :description_length, p.description, CONCAT(LEFT(p.description, :description_length),'...')) AS description, p.price, p.discounted_price, p.thumbnail FROM product p INNER JOIN product_category pc ON p.product_id = pc.product_id INNER JOIN category c ON pc.category_id = c.category_id WHERE (p.display = 2 OR p.display = 3) AND c.department_id = :department_id LIMIT :page, :limit", 
    {
        replacements: { 
            department_id: req.params.department_id,
            description_length: description_length,
            page: page,
            limit: limit
        },
        type: db.sequelize.QueryTypes.SELECT
    })
    
    Promise
    .all([get_count_for_search, get_products_in_department])
    .then(responses => {
        const resp = {
            count: responses[0][0]['products_on_department_count'],
            raws: responses[1]
        }
        res.send(resp);
    }).catch(err => {
        console.log(err);
        res.send('error: '+err)
    });
})

router.get('/inCategory/:category_id', (req, res) => {
    let {page, limit, description_length} = req.query;
    page = page===undefined?1:parseInt(page);
    limit = limit===undefined?10:parseInt(limit);
    description_length = description_length===undefined?100:parseInt(description_length);
    const get_count_for_search = db.sequelize.query("call tshirtshop.catalog_count_products_in_category(:category_id)", 
                {
                    replacements: { 
                        category_id: req.params.category_id
                    },
                    type: db.sequelize.QueryTypes.RAW
                }
    )

    const get_products_in_category = db.sequelize.query("call tshirtshop.catalog_get_products_in_category(:category_id, :description_length, :limit, :page)", 
    {
        replacements: { 
            category_id: req.params.category_id,
            description_length: description_length,
            page: page,
            limit: limit
        },
        type: db.sequelize.QueryTypes.RAW
    })
    
    Promise
    .all([get_count_for_search, get_products_in_category])
    .then(responses => {
        console.log(responses[0]);
        const resp = {
            count: responses[0][0]['categories_count'],
            raws: responses[1]
        }
        res.send(resp);
    }).catch(err => {
        console.log(err);
        res.send('error: '+err)
    });
})
module.exports = router
