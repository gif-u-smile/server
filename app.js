require('dotenv').config()

const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const mongoose = require('mongoose')
const cors = require('cors')
const routes = require('./routes/index')

// mongoose.connect('mongodb://localhost/gif-you-smile', { useNewUrlParser: true });
// mongoose.connect('mongodb://<reshalem>:<gifsmile3>@ds125953.mlab.com:25953/gif-you-smile', { useNewUrlParser: true });

var mongodbUri ='mongodb://@ds125953.mlab.com:25953/gif-you-smile';
mongoose.connect(mongodbUri, {
    useNewUrlParser: true,
    auth: {
        user: 'ali',
        password: 'gifsmile3'
    }
})

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'mongo failed to connect:'));
db.once('open', function() {
  console.log('mongo connected')
});

app.use(cors())
app.use(express.urlencoded({extended : false}))
app.use(express.json())

//ROUTES
app.use('/', routes)

app.listen(port, function(){
    console.log('Listening on port', port)
})