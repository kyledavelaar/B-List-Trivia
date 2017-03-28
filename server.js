const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

mongoose.connect('mongodb/localhost/answers');
mongoose.connection.once('open', () => {
  console.log('Connected to Database');
});



app.listen(3001, () => console.log('listening at port 3000'));