const express = require('express');
const app = express();
const mongoose = require('mongoose');
const http = require('http');
const bodyParser = require('body-parser');
const answerController = require('./AnswerController');
const answer = require('./AnswerModel');

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, {'Content-Type': 'json/application'}, Accept");
  res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET'); 
  //next handles program flow so req and res are set properly for each function 
  next();
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost/answers');

//mongoose.connect('mongodb://student:ilovetesting@ds157247.mlab.com:57247/week-4-assessment');

mongoose.connection.once('open', () => {
  console.log('CONNECTED TO DATABASE');
});

// answer.image.data = fs.readFileSync('./images/end');
// answer.image.contentType = 'image/jpg';
// answer.save((err, a) => {
//   if (err) throw err
// })


app.post('/', answerController.createAnswers);


app.get('/', answerController.getAnswer);



app.listen(4000, () => console.log('LISTENING AT 4000'));












// const server = http.createServer(app);

// server.listen(3000, () => {
//   console.log('SERVER LISTENING');
// })
// module.exports = server;