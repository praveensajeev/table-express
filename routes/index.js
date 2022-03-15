var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  let student=[
     {Rollno:"1",
     name:"Arun",
     place:"Pathanamthitta",
     Domain:"MERN"
    }, 
    {Rollno:"2",
     name:"Praveen",
     place:"Thrissur",
     Domain:"MERN"
    },
    {Rollno:"3",
     name:"Rohit",
     place:"Alapuzha",
     Domain:"Flutter"
         },
    {Rollno:"4",
     name:"Anandu",
     place:"Thiruvananthapuram",
     Domain:"Python"
    } 


  ]
  res.render('index', {student});
});

module.exports = router;
