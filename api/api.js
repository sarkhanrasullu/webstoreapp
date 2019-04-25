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
 
const PORT = 5000;
app.listen(PORT);

module.exports = app