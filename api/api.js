require('dotenv/config')

const express = require("express")
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors())

//registering routers
app.use('/customers',require('./routers/CustomerRouter'));
app.use('/departments',require('./routers/DepartmentRouter'));
app.use('/categories',require('./routers/CategoryRouter'));
app.use('/products',require('./routers/ProductRouter'));
app.use('/attributes',require('./routers/AttributeRouter'));
app.use('/shoppingcart',require('./routers/ShoppingCartReouter'));

 
// const PORT = 80;
app.listen(process.env.PORT);

module.exports = app