// import modules
const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

// controllers
const getData = require('./controllers/getUsers');
const createUser = require('./controllers/createUser');

// app 
const app = express();

// db 
mongoose
.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('db connected'))
.catch((err) => console.log("DB CONNECTION ERROR", err));

// middleware
app.use(morgan('dev'));
app.use(cors({ origin: true, credentials:true }))
app.use(bodyParser.json())

// routes
app.get("/", getData.handleGetUsers)
app.post("/create-user", createUser.handleCreateUser)

// port
const port = process.env.PORT || 8080;

// listener
const server = app.listen(port, () => 
    console.log('server is running on port '+ port)
);