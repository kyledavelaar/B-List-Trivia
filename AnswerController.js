//const answerData = require('./answersData.js');
const answer = require('./AnswerModel');

const answers = [
    {
      answer1: 'Elizabeth', 
      answer2: 'Ellie',
      answer3: 'Emily',
      answer4: 'Erin',
      correct: 'Ellie',
      image:'http://www.trbimg.com/img-556500a5/turbine/redeye-ellie-kemper-chicago-comedy-20150526',
    },
    {
      answer1: 'Thomas', 
      answer2: 'John',
      answer3: 'Michael',
      answer4: 'Aaron',
      correct: 'Aaron',
      image:'https://s-media-cache-ak0.pinimg.com/originals/06/e1/00/06e100c5878bf3dae3975910288fad51.jpg',
    },
    {
      answer1: 'Carlos', 
      answer2: 'Michael',
      answer3: 'Wentworth',
      answer4: 'Marshall',
      correct: 'Wentworth',
      image: 'http://blog.hdwallsource.com/wp-content/uploads/2016/03/wentworth-miller-desktop-wallpaper-50711-52403-hd-wallpapers.jpg',
    },
    {
      answer1: 'Anthony', 
      answer2: 'Nate',
      answer3: 'Sam',
      answer4: 'Charles',
      correct: 'Anthony',
      image: 'http://atlantablackstar.com/wp-content/uploads/2015/10/anthony-mackie-empire-exclusive-photo.jpg',
    },
    {
      answer1: 'Maggie', 
      answer2: 'Julie',
      answer3: 'Jane',
      answer4: 'Felicity',
      correct: 'Felicity',
      image: 'https://s-media-cache-ak0.pinimg.com/originals/53/ee/ba/53eeba47cf69f2a69196adc0a6eb0dfb.jpg',
    },
    {
      answer1: 'thank', 
      answer2: 'you',
      answer3: 'for',
      answer4: 'playing',
      correct: 'piggy',
      image: 'http://gclipart.com/wp-content/uploads/2016/12/The-end-movie-clipart.jpg'
    },
  ]


const answers2 = [
    {
      answer1: 'Benny', 
      answer2: 'Idris',
      answer3: 'Michael',
      answer4: 'Aaron',
      correct: 'Idris',
      image:'http://www.trbimg.com/img-56722027/turbine/la-et-st-idris-elba-luther-20151217',
    },
    {
      answer1: 'Maggie', 
      answer2: 'Mikela',
      answer3: 'Kerry',
      answer4: 'Cara',
      correct: 'Cara',
      image:'http://free4kwallpaper.com/wp-content/uploads/2016/02/2017-Cara-Delevingne-4K-Wallpaper.jpg',
    },
    {
      answer1: 'Stephen', 
      answer2: 'Charles',
      answer3: 'Billy',
      answer4: 'Will',
      correct: 'Stephen',
      image: 'http://cdn.inquisitr.com/wp-content/uploads/2016/01/Arrow_Stephen-Amell_Richard-Shotwell_Invision_AP.jpg',
    },
    {
      answer1: 'Anthony', 
      answer2: 'Chadwick',
      answer3: 'Leonard',
      answer4: 'Charles',
      correct: 'Chadwick',
      image: 'http://www.thevisibilityproject.com/wp-content/uploads/2014/10/boseman1-the-black-panther-chadwick-boseman-speaks.jpeg',
    },
    {
      answer1: 'Christopher', 
      answer2: 'Richard',
      answer3: 'Daniel',
      answer4: 'Liev',
      correct: 'Liev',
      image: 'http://s3.india.com/wp-content/uploads/2015/12/CV4HxvMU4AAdn_P.jpg',
    },
    {
      answer1: 'thank', 
      answer2: 'you',
      answer3: 'for',
      answer4: 'playing',
      correct: 'piggy',
      image: 'http://gclipart.com/wp-content/uploads/2016/12/The-end-movie-clipart.jpg'
    },
  ]

const answerController = {
  // Create a new answer in the Database
  // Their information will be sent in the request body
  // This should send the created answer
  
  createAnswers(req, res) {
    answer.create(answers2, (err, data) => {
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
  updateanswer(req, res) {
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
  deleteanswer(req, res) {
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
