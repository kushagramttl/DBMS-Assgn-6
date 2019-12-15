const expressJs = require('express');
const application = expressJs();
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
const cors = require('cors');
const routes = require('./routes');
require('dotenv').config();

// mongodb+srv://admin:<password>@assignment6-tthrt.mongodb.net/test?retryWrites=true&w=majority
// mongoose.connect("mongodb://localhost:27017/assignment-6");
mongoose.connect("mongodb+srv://admin:admin@assignment6-tthrt.mongodb.net/test?retryWrites=true&w=majority");

mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// mongoose.Promise = global.promise;
application.use(bodyparser.json());
application.use(bodyparser.urlencoded({extended: true}));

application.use(cors());
// application.use('/assgn6/actors');
application.use(routes);
application.options("*", cors());

application.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

const port = process.env.SERVER_PORT || 3002;
application.listen(port);
