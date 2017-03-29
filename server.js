const express = require('express');
const app = express();
const mongoose = require('mongoose');
const http = require('http');
const bodyParser = require('body-parser');
const answerController = require('./AnswerController');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost/answers');

//mongoose.connect('mongodb://student:ilovetesting@ds157247.mlab.com:57247/week-4-assessment');

mongoose.connection.once('open', () => {
  console.log('CONNECTED TO DATABASE');
});


const answerRouter = express.Router();

// Create a student in the database
// localhost://3000/student
//answerRouter.post('/', answerController.createAnswers);
app.post('/', answerController.createAnswers);

// Get an answerlist from the database
// localhost://3000/answer/"name"
app.get('/', answerController.getAnswer);


//app.use('/student', answerRouter);

app.listen(4000, () => console.log('LISTENING AT 4000'));












// const server = http.createServer(app);

// server.listen(3000, () => {
//   console.log('SERVER LISTENING');
// })
// module.exports = server;