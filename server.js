require("dotenv").config({ path: "./config.env" });

const express = require('express');
const app = express();
const cors = require('cors');
//const socket = require('socket.io');
const mongoose = require('mongoose');
const path = require('path');
const connectDB = require("./config/db");

// connects our backend code with the database
connectDB();

// import routes
const coinsRoutes = require('./routes/coins.routes');
const spotRoutes = require('./routes/spot.routes');
const commentsRoutes = require('./routes/comments.routes');
const ordersRoutes = require('./routes/orders.routes');

//use in app
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//connect routes

app.use('/api', coinsRoutes);
app.use('/api/', commentsRoutes);
app.use('/api/', ordersRoutes);
app.use('/api/spot', spotRoutes);
if(process.env.NODE_ENV === "production"){

  // Serve static files from the React app
  app.use(express.static(path.join(__dirname, 'client', 'build')));
  app.use(express.static(path.join(__dirname, 'public')));
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
  });
  
  //not valid endpoints
  app.use((req, res) => {
    res.status(404).json({ message: 'Not found...' });
  });
}else{
  app.get('/', (req, res)=> {
    res.send("Api running");
  });
}

//runserver on port 8000
const server = app.listen(process.env.PORT || 8000, () => {
  console.log('Server is running on Port:', 8000)
});

module.exports = server;
