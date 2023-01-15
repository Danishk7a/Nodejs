const express = require('express')
const app = express()
const HomeRoute = require('./Routes/HomeRoute');
const UserRoute = require('./Routes/UserRoute');
const AdminRoute = require('./Routes/AdminRoute');
const connection = require('./Connection');
const bodyParser = require('body-parser');
const path = require('path')
var cors = require('cors')
const cookieParser = require('cookie-parser')
const Authjwt = require('./Middlewares/Authjwt')


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
// app.use(bodyParser.urlencoded({extended:true}));
app.use(cors())

app.use(cookieParser());
app.use('/api/static',express.static(__dirname + '/Public'))

const port = 8800


app.use('/api',HomeRoute)
app.use('/api',UserRoute)
app.use('/api',AdminRoute)



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})