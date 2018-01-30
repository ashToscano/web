angular.module('copyExample', [])

 .factory("UserService", function($scope, $http) {
 // var hh, mm, ss, ms = 0;
  
/* <h1><time>00:10:00</time></h1>
<button id="start">start</button>
<button id="stop">stop</button>
<button id="clear">clear</button>
<br><br> */
var h1 = document.getElementsByTagName('time')[0],
    start = document.getElementById('start'),
    stop = document.getElementById('stop'),
    clear = document.getElementById('clear'),
    seconds = 60, minutes = 9, hours = 0,
    t;

function countdown() {
    seconds--;
    if (seconds === 0) {
        seconds = 60;
        minutes--;
        if (minutes === 0) {
            minutes = 59;
            hours--;
        }
    }
    
    h1.textContent = (hours ? (hours > 9 ? hours : "0" + hours) : "00") + ":" + (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") + ":" + (seconds > 9 ? seconds : "0" + seconds);

    timer();
}
function timer() {
    t = setTimeout(countdown, 1000);
}
timer();

/* Start button */
start.onclick = timer;

/* Stop button */
stop.onclick = function() {
    clearTimeout(t);
};

/* Clear button */
clear.onclick = function() {
    h1.textContent = "00:10:00";
    seconds = 60; minutes = 9; hours = 0;
};

})  // end UserService

 
 .controller('ExampleController', ['$scope', '$interval', '$timeout', '$http', function($scope, $interval, $timeout, $http) {
   
 var dNow = Date.now() +   $scope.GPSlat +  $scope.GPSlon;
 $scope.data =   JSON.stringify({"name":"gwfLEEdb!!","rawScore":10,"idx":dNow,"type":"rbyb-2" });
$http.put('https://gwfl-256d.restdb.io/rest/scores/5a6b9e9da07bee72000109a7?apikey=5821f61550e9b39131fe1b6f', $scope.data);
  
//  ** GeoLocation  Coords **  
//<br><br>
//<pre>GPS = {{GPSlat}},<br> {{GPSlon}}<br> {{calcD}}</pre>
//<br><br>

navigator.geolocation.getCurrentPosition(GPSsuccess, GPSerror, GPSoptions);

$scope.calcD = getDistanceFromLatLonInKm(33.8516291, -118.3805814, $scope.GPSlat, $scope.GPSlon); // .toFixed(2);

function getDistanceFromLatLonInKm(lat1,lon1,lat2,lon2) {
  var R = 6371000; // Radius of the earth in km
  var dLat = deg2rad(lat2-lat1);  // deg2rad below
  var dLon = deg2rad(lon2-lon1); 
  var a = 
    Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * 
    Math.sin(dLon/2) * Math.sin(dLon/2)
    ; 
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
  var d = R * c; // Distance in km
  return d;

function deg2rad(deg) {
  return deg * (Math.PI/180);
}
}
  
var GPSoptions = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0
};

function GPSsuccess(pos) {
  var crd = pos.coords;

  $scope.GPSlat = crd.latitude;
  $scope.GPSlon = crd.longitude;
  
} //  asdfjasdf

function GPSerror(err) {
  console.warn(`ERROR(${err.code}): ${err.message}`);
} // asdfjadsf
      
   }])  // end ExampleController 

; // module copyExample
