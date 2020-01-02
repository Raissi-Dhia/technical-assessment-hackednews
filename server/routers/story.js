var express = require('express');
var storyController = require('../../db/models/story.js');

var storyModel = storyController.StoryModel;
var router = express.Router();
var mongoose = require('mongoose');

router.route('/').get(function(req, res) {
  res.send(
    storyController.findAll(function(err, res){
      if(err){
        console.log('none')
      }else {
        console.log('full')
         }
    })
  )
  // storyModel.find({}, function(err, result){
  //   result.sort(['score' ,-1]);
  //   let toptenn = result.slice(0, 10);
  //   res.json(toptenn);
  //   res.end(toptenn); 
  
  })
     // TODO: Replace this with stories you've retrieved from the database
    // var data = [
    //    {
    //      author: 'ocdtrekkie',
    //      title: 'Switch – New Video Game System [video]',
    //      score: 536
    //    },
    //    {
    //      author: 'mhb',
    //      title: 'Video Games Are Changing the Way Soccer Is Played',
    //      score: 100
    //    }
    //  ]
    //  res.json(data);
  
    // storyController.findAll(function(err, res){
    //   if(err){
    //     console.log('error')
    //   }
    //   var topten = result.splice(0,10)
    //   res.json(topten);
    // })
 
// router.route('/api/stories').get((req, res) => {
//   console.log('anything')
//   storyController.findTopTen((err, result) => {
//     if(err){
//       throw err;
//     }
//     res.json(result);
//     console.log('neither here')
//   })
// })


// Here we use express's route params
router.route('/:id')
  .get(function(req, res) {});

module.exports = router;
