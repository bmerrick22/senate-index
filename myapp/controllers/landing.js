//Land on the home page
exports.get_landing= function(req, res, next) {
  res.render('landing', { about: 'Welcome' , name:
 'Candidates'});
}

//Render the zoom page
exports.zoom = function(req, res, next) {
  res.render('zoom', {about:'Zoom Time'});
}

//Render the home page
exports.home = function(req, res, next) {
   res.render('index', { about: 'Home Page', name:'Home'}); 
}

//Render AMY
exports.amy = function(req, res, next) {
   console.log("Clicked on Amy button");
   const fs = require('fs');
   fs.readFile('controllers/votes.json', (err,data) => {
      if (err) throw err;
      
      var obj = JSON.parse(data);
      var numlikes = obj.amy;
      //console.log("pre render");
      res.render('amy', { prelike: 'Number of Likes: ', likes: numlikes, about: 'Amy McGrath is a retired US Marin Corps Lieutenant Colonel raised in Kentucky.She is running for US Senate to fix Washington and give Kentuckians back their voice. She is running against the angel of darkness, Mitch McConnell.', name:'Amy'});
   })
}


//Render MARK
exports.mark = function(req, res, next) {
   console.log("Clicked on Mark button")
   const fs = require('fs')
   fs.readFile('controllers/votes.json', (err,data) => {
      if (err) throw err;
      
      var obj = JSON.parse(data);
      var numlikes = obj.mark;

   res.render('mark', { prelike: 'Number of Likes: ', likes:numlikes, about: 'Mark Kelly is a former engineer and Astronaut, he is also the husband of Gabby Giffords, who was tragically shot in the head while serving in Congress herself. He is running to represent Arizona and does not take money from corporate PACs. He is running against Martha McSally.' , name:'Mark'}); 
   })
}

//Render JOHN
exports.john= function(req, res, next) {
   console.log("Clicked on John button")
  
   const fs = require('fs')
   fs.readFile('controllers/votes.json', (err,data) => {
      if (err) throw err;
      
      var obj = JSON.parse(data);
      var numlikes = obj.john;


   res.render('john', { prelike: 'Number of Likes: ', likes:numlikes, about: 'John Hickenlooper is the former Governor of Colorado and Mayor of Denver. Prior to his career in politics he was a geologist and small business owner. He is a passionate about climate change, health care and gun violence. He is running against Cory Gardner.' , name:'John'}); 
   })
}

//Render DOUG
exports.doug = function(req, res, next) {
   console.log("Clicked on Doug Button")

   const fs = require('fs')
   fs.readFile('controllers/votes.json', (err,data) => {
      if (err) throw err;
      
      var obj = JSON.parse(data);
      var numlikes = obj.doug;


   res.render('doug', { prelike: 'Number of Likes: ', likes:numlikes, about: 'Doug Jones is the incumbent Senator for Alabama. He won in a special after former AG Sessions ceded his seat. He is also the former US Attorney for the Northern District of Alabama. He is extremely vulnerable given Alabama being a deeply red state.' , name:'Doug'}); 
   })
}

//Update and redirect on DOUG like
exports.doug_like = function(req, res, next) {
   console.log("Somebody liked Doug");
   const fs = require('fs')

   fs.readFile('controllers/votes.json', (err, data) => {
      if(err) throw err;

      console.log(data.toString());

      var obj = JSON.parse(data);
      obj.doug++;
      var numlikes = obj.doug;

      let newdata = JSON.stringify(obj);

      fs.writeFile('controllers/votes.json', newdata, (err) => {
         if(err) throw err;
      })
      res.render('doug', { prelike: 'Number of Likes: ', likes: numlikes, about: ' Doug Jones is the incumbent Senator for Alabama. He won in a special after former AG Sessions ceded his seat. He is also the former US Attorney for the Northern District of Alabama. He is extremely vulnerable given Alabama being a deeply red state. ', name:'Doug'});

   })
}

//Update and redirect on AMY like
exports.amy_like = function(req, res, next) {
   console.log("Somebody liked Amy");

   const fs = require('fs')

   fs.readFile('controllers/votes.json', (err, data) => {
      if(err) throw err;

      console.log(data.toString());

      var obj = JSON.parse(data);
      obj.amy++;
      var numlikes = obj.amy;

      let newdata = JSON.stringify(obj);

      fs.writeFile('controllers/votes.json', newdata, (err) => {
         if(err) throw err;
      })
      res.render('amy', { prelike: 'Number of Likes: ', likes: numlikes, about: 'Amy McGrath is a retired US Marin Corps Lieutenant Colonel raised in Kentucky.She is running for US Senate to fix Washington and give Kentuckians back their voice. She is running against the angel of darkness, Mitch McConnell.', name:'Amy'});

   })
}


//Update and redirect on MARK like
exports.mark_like = function(req, res, next) {
   console.log("Somebody liked Mark");
   const fs = require('fs')

   fs.readFile('controllers/votes.json', (err, data) => {
      if(err) throw err;

      console.log(data.toString());

      var obj = JSON.parse(data);
      obj.mark++;
      var numlikes = obj.mark;

      let newdata = JSON.stringify(obj);

      fs.writeFile('controllers/votes.json', newdata, (err) => {
         if(err) throw err;
      })
      res.render('mark', { prelike: 'Number of Likes: ', likes: numlikes, about: 'Mark Kelly is a former engineer and Astronaut, he is also the husband of Gabby Giffords, who was tragically shot in the head while serving in Congress herself. He is running to represent Arizona and does not take money from corporate PACs. He is running against Martha McSally. ', name:'Mark'});

   })


}

//Update and redirect on JOHN like
exports.john_like = function(req, res, next) {
   console.log("Somebody liked John");
   const fs = require('fs')

   fs.readFile('controllers/votes.json', (err, data) => {
      if(err) throw err;

      console.log(data.toString());

      var obj = JSON.parse(data);
      obj.john++;
      var numlikes = obj.john;

      let newdata = JSON.stringify(obj);

      fs.writeFile('controllers/votes.json', newdata, (err) => {
         if(err) throw err;
      })
      res.render('john', { prelike: 'Number of Likes: ', likes: numlikes, about: 'John Hickenlooper is the former Governor of Colorado and Mayor of Denver. Prior to his career in politics he was a geologist and small business owner. He is a passionate about climate change, health care and gun violence. He is running against Cory Gardner. ',name:'John'});

   })


}

//Render the MAP page
exports.map = function(req, res, next) {
	console.log("Clicked Map Button");
	res.render('map', { markers: 'Markers will go here.'});
}


