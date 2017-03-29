//res.query is for ? in the url
//res.params is for :text in the get url


const answer = require('./AnswerModel');

const answerController = {
  // Create a new answer in the Database
  // Their information will be sent in the request body
  // This should send the created answer
  createAnswers(req, res) {
    console.log('createAnswer');
    answer.create({
      answer1: 'Elizabeth', 
      answer2: 'Ellie',
      answer3: 'Emily',
      answer4: 'Erin',
      correct: 'Ellie',
      image: './ellie.jpg'}, (err, data) => {
      if (err) {
        return res.send(418, {err: err});
      } else {
        return res.status(200).json(data);
      }
    })
  },

  // Get a answer from the database and send it in the response
  // Their first name will be in the request parameter 'name'
  // This should send the found answer
  getAnswer(req, res) {
    answer.find({}, function (err, result) {
      if (err) {
        return res.send(418, {err: err});
      } else {
        return res.status(200).json(result);
      }
    })
  },

  // Get a answer from the database and update the answer
  // The answer's first name will be in the request parameter 'name'
  // The answer's new first name will be in the request body
  updateanswer(req, res) {
    answer.findOneAndUpdate({firstName: req.params.name}, req.body, (err, result) => {
      if (err) {
        return res.send(418, {err: err});
      } else {
        return res.status(200).json(result);
      }
    })
  },

  // Delete a answer from the database
  // The answer's first name will be sent in the request parameter 'name'
  // This should send a success status code
  deleteanswer(req, res) {
    answer.findOneAndRemove({firstName: req.params.name}, req.body, (err, result) => {
      if (err) {
        return res.send(418, {err: err});
      } else {
        return res.status(200).json(result);
      }
    })
  },
};

module.exports = answerController;
