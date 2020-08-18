console.log('Client-side code running');
// LOCAL USE:
// const myURL = "http://localhost:3000";

// STUDENT 04 use:
const myURL = "http://student04.cse.nd.edu:51020";

//Time out function to redirect after 5 seconds!
//Simulates a splash page
function splash(){
    setTimeout( function(){
        console.log("Trying to redirect...");
        location.href = "http://student04.cse.nd.edu:51020/home";
    }, 5000);
}

const zoomButton = document.getElementById('zoomButton');
zoomButton.addEventListener('click', function(e) {
  console.log('Zoom button was clicked');
  location.href = myURL.concat("/zoom")
});

const homeButton = document.getElementById('homeButton');
homeButton.addEventListener('click', function(e) {
  console.log('Home button was clicked');
  location.href = myURL.concat("/home");
  console.log("Pushing " + href);
  //document.getElementById("AnimalImage").src ="images/zoo.jpg"
  //document.getElementById("p2").innerHTML = "Welcome to the zoo.";
  //document.getElementById("p1").innerHTML = "Zoo Animals"; 
});

const amyButton = document.getElementById('amyButton');
amyButton.addEventListener('click', function(e) {
  console.log('Amy button was clicked');
  location.href = myURL.concat("/amy")
  //document.getElementById("AnimalImage").src ="images/camel.jpg"
  //document.getElementById("p2").innerHTML = "Camels are mammals with long legs, a big-lipped snout and a humped back.!";
  //document.getElementById("p1").innerHTML = "Cherry Camel"; 
});

const dougButton = document.getElementById('dougButton');
dougButton.addEventListener('click', function(e) {
  console.log('Doug button was clicked');
  location.href = myURL.concat("/doug")
  //document.getElementById("AnimalImage").src ="images/monkey.jpg";
  //document.getElementById("p2").innerHTML = "Monkeys live in trees, grasslands, mountains, forests, and on high plains. Each monkey has its own unique fingerprints.";
  //document.getElementById("p1").innerHTML = "Mindy Monkey"; 
});

const markButton = document.getElementById('markButton');
markButton.addEventListener('click', function(e) {
  console.log('Mark button was clicked');
  location.href = myURL.concat("/mark") ;
  //document.getElementById("AnimalImage").src ="images/crocodile.jpg";
  //document.getElementById("p2").innerHTML = "Crocodiles are repitles with sharp teeth.  They can run very fast over short distances.";
  //document.getElementById("p1").innerHTML = "Craig Crocodile"; 
});

const johnButton = document.getElementById('johnButton');
johnButton.addEventListener('click', function(e) {
  console.log('John button was clicked');
  location.href = myURL.concat("/john");
  //document.getElementById("AnimalImage").src ="images/cow.jpg"
  //document.getElementById("p2").innerHTML = "Cows are ruminants, which are cud chewing mammals. Sheep and camels also are ruminants. A cow chews her cud (regurgitated, partially digested food) for up to 8 hours each day.";
  //document.getElementById("p1").innerHTML = "Chloe Cow";  
});

const mapButton = document.getElementById('mapButton');
mapButton.addEventListener('click', function(e) {
  console.log('Map button was clicked');
  location.href = myURL.concat("/map");
});


var map;

function test(myMarker){
	console.log(myMarker);
}

function initMap() {
 //  console.log("in INIT");
   var GCUSA= {
     lat: 39.8283,
     lng: -98.5795
   };
   
   var map = new google.maps.Map(document.getElementById('map'), {
   center: GCUSA,
   zoom: 5,
   mapTypeId: 'roadmap'
   });

   var dougHQ = { //doug
     lat: 33.5186,
   	 lng: -86.8104
   };
   var amyHQ= { //amy
     lat: 38.0406,
   	 lng:  -84.5037
   };   
   var johnHQ= { //john
     lat: 39.7392,
   	 lng: -104.9903
   };   
   var markHQ = { //mark
     lat: 32.2226,
   	 lng: -110.9747
   };
   var marker = new google.maps.Marker({
	 position: dougHQ,
	 label: { color: '#f7f7f7', fontWeight: 'bold', fontSize: '12px', text: 'D. Jones'},
	 animation: google.maps.Animation.BOUNCE,
     map: map,
	 icon: { url: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png"}
   });
   var marker = new google.maps.Marker({
     position: amyHQ,
     label: { color: '#f7f7f7', fontWeight: 'bold', fontSize: '12px', text: 'A. McGrath' },
	 animation: google.maps.Animation.BOUNCE,
     map: map,
	 icon: { url: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png"}
   });
   var marker = new google.maps.Marker({
     position: johnHQ,
     label: { color: '#f7f7f7', fontWeight: 'bold', fontSize: '12px', text: 'J. Hickenlooper' },
	 animation: google.maps.Animation.BOUNCE,
     map: map,
	 icon: { url: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png"}
   });
   var marker = new google.maps.Marker({
     position: markHQ,
     label: { color: '#f7f7f7', fontWeight: 'bold', fontSize: '12px', text: 'M. Kelly' },
	 animation: google.maps.Animation.BOUNCE,
     map: map,
	 icon: { url: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png"}
   });
//}


}
