var data = require('./seed_data.js');
var mongoose = require('mongoose');
var Stories = require('./db/models/story.js');

mongoose.connect('mongodb://localhost/hackednews');
  var newStory = Stories.StoryModel;
var seedDb = function(data) {
  // your code here!
  // for (var i = 0; i < data.length; i++)
  // var id = data[i].id;
  // var by = data[i].by.id;
  // var score = data[i].score;
  // var title = data[i].title ;
  // var story = new storyModel ({
  //   id: id,
  //   by: by,
  //   title: title,
  //   author: author
  // });
  // story.save(function(err,story){
  //   if (err) {
  //    console.log('error')
  //   }
  //   console.log(story)
  // })

  
    data.map(element => {
      var  d1 = new newStory({
         id = element.id,
         by = element.by.id,
         score = element.score,
         title = element.title 
      })
      d1.save(function(err, result){
        if(err){
          console.log("err")
        }else{
          console.log('saved')
        }
      })
    })
  }

// };

seedDb(data);
