const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const answerSchema = new Schema ({
  answer1: {type: String, required: true},
  answer2: {type: String, required: true},
  answer3: {type: String, required: true},
  answer4: {type: String, required: true},
  correct: {type: String, required: true},
  image: {data: Buffer, contentType: String },
 
})

module.exports = mongoose.model('answer', answerSchema); 
