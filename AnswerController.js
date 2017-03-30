//const answerData = require('./answersData.js');
const answer = require('./AnswerModel');
const answers1 = require ('./answersData1');
const answers2 = require ('./answersData2');


const answerController = {
  // Create a new answer in the Database
  // Their information will be sent in the request body
  // This should send the created answer
  
  createAnswers(req, res) {
    answer.create(answers1.answers1, (err, data) => {
        if (err) {
          return res.status(418).send(err);
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
        return res.status(418).send(err);
      } else {
        return res.status(200).json(result);
      }
    })
  },

  // Get a answer from the database and update the answer
  // The answer's first name will be in the request parameter 'name'
  // The answer's new first name will be in the request body
  updateAnswer(req, res) {
    answer.findOneAndUpdate({firstName: req.params.name}, req.body, (err, result) => {
      if (err) {
        return res.status(418).send(err);
      } else {
        return res.status(200).json(result);
      }
    })
  },

  // Delete a answer from the database
  // The answer's first name will be sent in the request parameter 'name'
  // This should send a success status code
  deleteAnswer(req, res) {
    answer.findOneAndRemove({first: req.params.name}, req.body, (err, result) => {
      if (err) {
        return res.status(418).send(err);
      } else {
        return res.status(200).json(result);
      }
    })
  },
};

module.exports = answerController;
