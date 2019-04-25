const customerRouter = require('./routers/CustomerRouter')
const express = require("express")
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors())

//registering routers
app.use('/customers',customerRouter);
 
const PORT = 5000;
app.listen(PORT);

module.exports = app