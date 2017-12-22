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

var xhr = new XMLHttpRequest();
xhr.open("GET", "https://www.codecademy.com/files/samples/javascript_learn_apis.xml", false);
xhr.setRequestHeader('Content-Type', 'text/xml');
xhr.send();
xmlDocument = xhr.responseXML;
console.log(xmlDocument.childNodes['0'].textContent);

var calculateDistance = function(lat1, lon1, lat2, lon2) {
    var R = 6371; // km
    var dLat = (lat2-lat1).toRad();
    var dLon = (lon2-lon1).toRad();
  lat1 = lat1.toRad();
  lat2 = lat2.toRad();

    var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
            Math.sin(dLon/2) * Math.sin(dLon/2) * Math.cos(lat1) * Math.cos(lat2); 
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
    var d = R * c;
    return d;
};

var _getMeta = function () {
  // $http.get('https://gwfl-256d.restdb.io/rest/_meta?apikey=5821f61550e9b39131fe1b6f')
  // $http.get('https://gwfl-256d.restdb.io/rest/scores/_meta?apikey=5821f61550e9b39131fe1b6f')
  // $http.get('https://gwfl-256d.restdb.io/rest/gsc/_meta?apikey=5821f61550e9b39131fe1b6f') 
  
  $http.get('https://api.airtable.com/v0/app0hohtq4b1nM0Kb/Courses?api_key=key66fQg5IghIIQmb')   
   .success(function (jsonData) {
     $rootScope.getMeta = jsonData;
   });
};

})  // end UserService

.controller('AccordionDemoCtrl', function ($scope) {
  $scope.oneAtATime = true;

  $scope.groups = [
    {
      title: 'Dynamic Group Header - 1',
      content: 'Dynamic Group Body - 1'
    },
    {
      title: 'Dynamic Group Header - 2',
      content: 'Dynamic Group Body - 2'
    }
  ];

  $scope.items = ['Item 1', 'Item 2', 'Item 3'];

  $scope.addItem = function() {
    var newItemNo = $scope.items.length + 1;
    $scope.items.push('Item ' + newItemNo);
  };

  $scope.status = {
    isCustomHeaderOpen: false,
    isFirstOpen: true,
    isFirstDisabled: false
  };
})   // end Accordion Ctrl
 
 .controller('ExampleController', ['$scope', '$interval', '$timeout', '$http', function($scope, $interval, $timeout, $http) {
// http.get('courses.json').success(function(data) { $scope.courses = data });

    var gameClock;
    $scope.minutes = 10;  $scope.seconds = 0;
    $scope.inGame = function() {
      // Don't start a new clock if already running
      if ( angular.isDefined(gameClock) ) return;
      gameClock = $interval(function() {
        $scope.seconds--;
        if ($scope.seconds < 0) {
          $scope.minutes--;
          $scope.seconds = 59;
        }
      }, 1000);
    };

    $scope.stopGame = function() {
      if (angular.isDefined(gameClock)) {
        $interval.cancel(gameClock);
        gameClock = undefined;
      }
    };

    $scope.resetGame = function() {
      $scope.stopGame();
      $scope.minutes = 10;
      $scope.seconds = 0;
    };

    $scope.$on('$destroy', function() {
      // Make sure that the interval is destroyed too
      $scope.stopGame();
    });

     $scope.master= {};

     $scope.update = function(user) {
       // Example with 1 argument
       $scope.master= angular.copy(user);
     };

     $scope.reset = function() {
       // Example with 2 arguments
       angular.copy($scope.master, $scope.user);
       $scope.content00 = false;
     };
     $scope.reset();

      $scope.color = {
        name: 'blue'
      };
      $scope.specialValue = {
        "id": "12345",
        "value": "green"
      };


//  ** GeoLocation  Coords **  
//<br><br>
//<pre>GPS = {{GPSlat}}, {{GPSlon}}</pre>
//<br><br>

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

navigator.geolocation.getCurrentPosition(GPSsuccess, GPSerror, GPSoptions);



    $scope.example = {
      value: 12, tnull: null
    };
      
    $scope.payBill = [
                    { bill: "Tution", paid:true },
                    { bill: "Electricity", paid: false },
                    { bill: "Internet", paid: false},
                    { bill: "Income Tax", paid: false },
                    { bill: "Subway Pass", paid: true },
                    { bill: "Library", paid: false }];
                    
    $scope.toggle00 = function () {
      $scope.content00 = !$scope.content00; 
      $scope.inGame();
      $scope.example.tnull = 43;
    };
        
   }])  // end ExampleController 

 .controller('PromiseCtrl', ['$scope', '$interval', '$http', function($scope, $interval, $http) {
    $scope.example1 = $http.get('/echo/json');
    
    $http.get('players.json').then(function(value) {
        $scope.example2 = value.status;
    });
    
    $http.get('players.json/error').then(null, function(value) {
        $scope.example3 = value.status;
    });
    
    $http.get('players.json').success(function(data, status, headers, config) {
        $scope.example4 = status + " " + data.length;
        for (ii = 0; ii < data.length; ii++) {
          $scope.example4 += data[ii].Nm + " ";
          $scope.example4 += data[ii].Nu;
        }
    });
    
    $http.get('players.json/error').error(function(data, status, headers, config) {
        $scope.example5 = status;
    });
    
    $http.get('players.json/error').catch(function(value) {
        $scope.example6 = value.status;
    });
    
    $http.get('players.json').then(function(value) {
        $scope.example7 = value.status;
    }).finally(function() {
        $scope.example7 += " (Finally called)";
    });
    
    $http.get('players.json/error').then(null, function(value) {
        $scope.example8 = value.status;
    }).finally(function() {
        $scope.example8 += " (Finally called)";
    });

}])  // end PromiseCtrl

.factory('$xhrFactory', function() {
  return function createXhr(method, url) {
    return new window.XMLHttpRequest({mozSystem: true});
  };
})  // end xhrFactory

.directive('coolStuff', function() {
    return function(scope) {
      var setFalse = function(val, link, active) {
        active[link] = false;
      };
      scope.active = {};
      scope.select = function(link) {
        _.each(scope.active, setFalse); // lodash used for brevity
          scope.active[link] = true;
      };
    }
})  // end coolStuff directive

.directive('appInfo', function() { 
  return { 
    restrict: 'E', 
    scope: { info: '=' }, 
    templateUrl: 'js/directives/appInfo.html' 
  }; 
})  // end directive appInfo

; // module copyExample
