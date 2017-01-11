
var restapp = angular.module('restdbH', ['ionic', 'ngResource']);

restapp.config(function ($httpProvider, $stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: "/app",
    abstract: true,
    templateUrl: "menu.html",
    controller: 'AppCtrl'
  })
  .state('app.main', {
    url: "/main",
    views: {
      'menuContent': {
        templateUrl: "main.html",
        controller: 'AppCtrl'
      }
    }
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/main');

  var apikey = "5821f61550e9b39131fe1b6f"; // gwfl-256d.restdb.io/rest/_meta
  // var apikey = "569a2b87566759cf4b984a50";   // rdb-simpledb.restdb.io/rest/_meta
  $httpProvider.defaults.headers.common = {
    'x-apikey': apikey
  };

});

// create a new factory
restapp.factory ('DBservice', function ($rootScope, $http, $resource) {

var _getAll = function () {
  $http.get('https://gwfl-256d.restdb.io/rest/gsc')
   .success(function (jsonData) {
     $rootScope.prod = jsonData;
  });
};

var _getContact = function () {
  $http.get('https://gwfl-256d.restdb.io/rest/gsc?max=3&sort=_id&dir=-1 ')
   .success(function (jsonData) {
     $rootScope.contact = jsonData;
  });
};

var _getMeta = function () {
  $http.get('https://gwfl-256d.restdb.io/rest/_meta')
   .success(function (jsonData) {
     $rootScope.getMeta = jsonData;
   });
};

var _ngrContact = function () {
  return $resource('https://gwfl-256d.restdb.io/rest/gsc/:id',
  { id: '@_id' }, {
    update: {
      method: 'PUT' // this method issues a PUT request
    }
  });
};

var _ngrProduct = function () {
  return $resource('https://gwfl-256d.restdb.io/rest/gsc/:id',
  { id: '@_id' }, {
    update: {
      method: 'PUT' // this method issues a PUT request
    }
  });
};


 var rdbContact = $resource('https://gwfl-256d.restdb.io/rest/gsc/:id');

//create a todo
var todo1 = new rdbContact();
todo1.foo = 'bar';
todo1.something = 123;
// todo1.$save();

 // var todo1 = rdbContact.get({id: '5875445d7b9ba006000005f5'});
// todo1.foo = 'bar';
// todo1.something = 123;
// todo1.$save();

//   todo1.$delete({id: '5875993a8b02984800000f33'});

 // var todo2 =  rdbContact.get({id: '58523daf88d3cc0800004e01'});
 // todo2.comment += '!lee';
 // todo2.$save();

/* 

//create a todo
var todo1 = new rdbContact();
todo1.foo = 'bar';
todo1.something = 123;
todo1.$save();

 todo2.$delete({id: '587539dc7b9ba00600000467'});
 todo2.$delete({id: '587539d47b9ba00600000466'});
 todo2.$delete({id: '587539ac7b9ba00600000458'});
 todo2.$delete({id: '587539bd7b9ba0060000045c'});
 
*/
 
  return {
    //  getAll: _getAll,  //   _ngrProduct().query(),   
    getMeta: _getMeta,
    getContact: _getContact,
    getAll: _ngrProduct().query(),  
    ngrContact: _ngrContact().query() // get({id: '587539877b9ba00600000455'})
  };
});

restapp.run( function ($ionicPlatform, $rootScope, DBservice) {
   $rootScope.getMeta  = DBservice.getMeta();
   $rootScope.contact = DBservice.getContact();
   $rootScope.ngrContact = DBservice.ngrContact;
   $rootScope.prod = DBservice.getAll;

    $ionicPlatform.ready(function() {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      //  if(window.cordova && window.cordova.plugins.Keyboard) {
      //    cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      //  }
      if (window.StatusBar) {
        StatusBar.styleDefault();
      }
    });

    function storageAvailable(type) {
      try {
        var storage = window[type],
          x = '__storage_test__';
        storage.setItem(x, x);
        storage.clear();
        return true;
      } catch (e) {
        return false;
      }
    }
    $rootScope.appLog = "Sorry, No Storage Here.";
    if (storageAvailable('sessionStorage')) {
      // Yippee! We can use localStorage awesomeness
      $rootScope.appLog = " ";
    }

    $rootScope.vGm00 = {
      vGH: {
        pp: 0,
        ff: 0,
        tt: 0
      },
      vGV: {
        pp: 0,
        ff: 0,
        tt: 0
      },
      vP: [{
        "Nm": "Damien",
        "Nu": "4",
        "onc": false,
        "pp": 0,
        "pf": 0,
        "rrfg": 0,
        "rr3p": 0,
        "rrft": 0,
        "inG": 0,
        "outG": 0,
        "totPss": 0,
        "y2p": 0,
        "x2p": 0,
        "y3p": 0,
        "x3p": 0,
        "yft": 0,
        "xft": 0,
        "ast": 0,
        "stl": 0,
        "drb": 0,
        "orb": 0,
        "tov": 0,
        "blk": 0,
        "tf": 0
      }, {
        "Nm": "Brandon",
        "Nu": "3",
        "onc": false,
        "pp": 0,
        "pf": 0,
        "rrfg": 0,
        "rr3p": 0,
        "rrft": 0,
        "inG": 0,
        "outG": 0,
        "totPss": 0,
        "y2p": 0,
        "x2p": 0,
        "y3p": 0,
        "x3p": 0,
        "yft": 0,
        "xft": 0,
        "ast": 0,
        "stl": 0,
        "drb": 0,
        "orb": 0,
        "tov": 0,
        "blk": 0,
        "tf": 0
      }, {
        "Nm": "Sky",
        "Nu": "2",
        "onc": false,
        "pp": 0,
        "pf": 0,
        "rrfg": 0,
        "rr3p": 0,
        "rrft": 0,
        "inG": 0,
        "outG": 0,
        "totPss": 0,
        "y2p": 0,
        "x2p": 0,
        "y3p": 0,
        "x3p": 0,
        "yft": 0,
        "xft": 0,
        "ast": 0,
        "stl": 0,
        "drb": 0,
        "orb": 0,
        "tov": 0,
        "blk": 0,
        "tf": 0
      }, {
        "Nm": "Mason",
        "Nu": "11",
        "onc": false,
        "pp": 0,
        "pf": 0,
        "rrfg": 0,
        "rr3p": 0,
        "rrft": 0,
        "inG": 0,
        "outG": 0,
        "totPss": 0,
        "y2p": 0,
        "x2p": 0,
        "y3p": 0,
        "x3p": 0,
        "yft": 0,
        "xft": 0,
        "ast": 0,
        "stl": 0,
        "drb": 0,
        "orb": 0,
        "tov": 0,
        "blk": 0,
        "tf": 0
      }, {
        "Nm": "Aidan",
        "Nu": "10",
        "onc": false,
        "pp": 0,
        "pf": 0,
        "rrfg": 0,
        "rr3p": 0,
        "rrft": 0,
        "inG": 0,
        "outG": 0,
        "totPss": 0,
        "y2p": 0,
        "x2p": 0,
        "y3p": 0,
        "x3p": 0,
        "yft": 0,
        "xft": 0,
        "ast": 0,
        "stl": 0,
        "drb": 0,
        "orb": 0,
        "tov": 0,
        "blk": 0,
        "tf": 0
      }, {
        "Nm": "Chace",
        "Nu": "1",
        "onc": false,
        "pp": 0,
        "pf": 0,
        "rrfg": 0,
        "rr3p": 0,
        "rrft": 0,
        "inG": 0,
        "outG": 0,
        "totPss": 0,
        "y2p": 0,
        "x2p": 0,
        "y3p": 0,
        "x3p": 0,
        "yft": 0,
        "xft": 0,
        "ast": 0,
        "stl": 0,
        "drb": 0,
        "orb": 0,
        "tov": 0,
        "blk": 0,
        "tf": 0
      }, {
        "Nm": "Miguel",
        "Nu": "12",
        "onc": false,
        "pp": 0,
        "pf": 0,
        "rrfg": 0,
        "rr3p": 0,
        "rrft": 0,
        "inG": 0,
        "outG": 0,
        "totPss": 0,
        "y2p": 0,
        "x2p": 0,
        "y3p": 0,
        "x3p": 0,
        "yft": 0,
        "xft": 0,
        "ast": 0,
        "stl": 0,
        "drb": 0,
        "orb": 0,
        "tov": 0,
        "blk": 0,
        "tf": 0
      }, {
        "Nm": "Cody",
        "Nu": "5",
        "onc": false,
        "pp": 0,
        "pf": 0,
        "rrfg": 0,
        "rr3p": 0,
        "rrft": 0,
        "inG": 0,
        "outG": 0,
        "totPss": 0,
        "y2p": 0,
        "x2p": 0,
        "y3p": 0,
        "x3p": 0,
        "yft": 0,
        "xft": 0,
        "ast": 0,
        "stl": 0,
        "drb": 0,
        "orb": 0,
        "tov": 0,
        "blk": 0,
        "tf": 0
      }, {
        "Nm": "Gabe",
        "Nu": "00",
        "onc": false,
        "pp": 0,
        "pf": 0,
        "rrfg": 0,
        "rr3p": 0,
        "rrft": 0,
        "inG": 0,
        "outG": 0,
        "totPss": 0,
        "y2p": 0,
        "x2p": 0,
        "y3p": 0,
        "x3p": 0,
        "yft": 0,
        "xft": 0,
        "ast": 0,
        "stl": 0,
        "drb": 0,
        "orb": 0,
        "tov": 0,
        "blk": 0,
        "tf": 0
      }]
    };
    localStorage.setItem('vGm00', JSON.stringify($rootScope.vGm00));

    if (localStorage.getItem('vGm') !== null) {
      $rootScope.vGm = JSON.parse(localStorage.getItem('vGm'));
    } else {
      $rootScope.vGm = JSON.parse(localStorage.getItem('vGm00'));
    }

    localStorage.setItem('vGm', JSON.stringify($rootScope.vGm));
//    $rootScope.appLog += ".run";

}); //  end .run
  
restapp.controller('AppCtrl', function($scope, $rootScope) {

// $scope.rs$ = $rootScope;
//  $rootScope.appLog += ".AppC";

  $scope.tglundoCB = function() {
    $scope.undoCB = !$scope.undoCB;
  };

  $scope.pTally = function(tt, xx) {

    if ($scope.undoCB) {
      undo = -1;
    } else {
      undo = 1;
    }

    if (xx < 0) {
      $scope.ttIdx = tt;
      $rootScope.appLog += " .h:" + tt;
    } else {
      $rootScope.vGm.vP[xx].onc2 = false;
      $scope.undoCB = false;
      $scope.ttIdx = '.';
      $rootScope.appLog = ' >' + tt +  $rootScope.vGm.vP[xx].Nu + ':  ' + $rootScope.appLog; //  
      $rootScope.appLog = $rootScope.appLog.substring(0, 20);
    }

    switch (tt) {
      case 'y2p':
        if (xx < 0) {
          $rootScope.vGm.vGH.pp += 2 * undo;
        } else {
          $rootScope.vGm.vP[xx].pp += 2 * undo;
          $rootScope.vGm.vP[xx].y2p += 1 * undo;
          $rootScope.vGm.vP[xx].rrfg = Math.round(($rootScope.vGm.vP[xx].y2p / ($rootScope.vGm.vP[xx].x2p + $rootScope.vGm.vP[xx].y2p)) * 100);
        }
        break;
      case 'x2p':
        if (xx < 0) {
          // $rootScope.vGm.vGH.pp += 0 * undo; 
        } else {
          $rootScope.vGm.vP[xx].x2p += 1 * undo;
          $rootScope.vGm.vP[xx].rrfg = Math.round(($rootScope.vGm.vP[xx].y2p / ($rootScope.vGm.vP[xx].x2p + $rootScope.vGm.vP[xx].y2p)) * 100);
        }
        break;
      case 'y3p':
        if (xx < 0) {
          $rootScope.vGm.vGH.pp += 3 * undo;
        } else {
          $rootScope.vGm.vP[xx].pp += 3 * undo;
          $rootScope.vGm.vP[xx].y3p += 1 * undo;
          $rootScope.vGm.vP[xx].rr3p = Math.round(($rootScope.vGm.vP[xx].y3p / ($rootScope.vGm.vP[xx].x3p + $rootScope.vGm.vP[xx].y3p)) * 100);
        }
        break;
      case 'x3p':
        if (xx < 0) {
          // $rootScope.vGm.vGH.pp += 0 * undo; 
        } else {
          $rootScope.vGm.vP[xx].x3p += 1 * undo;
          $rootScope.vGm.vP[xx].rr3p = Math.round(($rootScope.vGm.vP[xx].y3p / ($rootScope.vGm.vP[xx].x3p + $rootScope.vGm.vP[xx].y3p)) * 100);
        }
        break;
      case 'yft':
        if (xx < 0) {
          $rootScope.vGm.vGH.pp += 1 * undo;
        } else {
          $rootScope.vGm.vP[xx].pp += 1 * undo;
          $rootScope.vGm.vP[xx].yft += 1 * undo;
          $rootScope.vGm.vP[xx].rrft = Math.round(($rootScope.vGm.vP[xx].yft / ($rootScope.vGm.vP[xx].xft + $rootScope.vGm.vP[xx].yft)) * 100);
        }
        break;
      case 'xft':
        if (xx < 0) {
          // $rootScope.vGm.vGH.pp += 0 * undo; 
        } else {
          $rootScope.vGm.vP[xx].xft += 1 * undo;
          $rootScope.vGm.vP[xx].rrft = Math.round(($rootScope.vGm.vP[xx].yft / ($rootScope.vGm.vP[xx].xft + $rootScope.vGm.vP[xx].yft)) * 100);
        }
        break;
      case 'ast':
        if (xx < 0) {
          // $rootScope.vGm.vGH.pp += 0 * undo; 
        } else {
          $rootScope.vGm.vP[xx].ast += 1 * undo;
        }
        break;
      case 'stl':
        if (xx < 0) {
          // $rootScope.vGm.vGH.pp += 0 * undo; 
        } else {
          $rootScope.vGm.vP[xx].stl += 1 * undo;
        }
        break;
      case 'blk':
        if (xx >= 0) {
          $rootScope.vGm.vP[xx].blk += 1 * undo;
        }
        break;
      case 'drb':
        if (xx < 0) {
          // $rootScope.vGm.vGH.pp += 0 * undo; 
        } else {
          $rootScope.vGm.vP[xx].drb += 1 * undo;
        }
        break;
      case 'orb':
        if (xx < 0) {
          // $rootScope.vGm.vGH.pp += 0 * undo; 
        } else {
          $rootScope.vGm.vP[xx].orb += 1 * undo;
        }
        break;
      case 'tov':
        if (xx < 0) {
          // $rootScope.vGm.vGH.pp += 0 * undo; 
        } else {
          $rootScope.vGm.vP[xx].tov += 1 * undo;
        }
        break;
      case 'pf':
        if (xx < 0) {
          $rootScope.vGm.vGH.ff += 1 * undo;
        } else {
          $rootScope.vGm.vP[xx].pf += 1 * undo;
        }
        break;
      case 'tf':
        if (xx < 0) {
          // $rootScope.vGm.vGH.pp += 0 * undo; 
        } else {
          $rootScope.vGm.vP[xx].tf += 1 * undo;
        }
        break;
      case 'v2p':
        $rootScope.vGm.vGV.pp += 2 * undo;
        $scope.undoCB = false;
        break;
      case 'v3p':
        $rootScope.vGm.vGV.pp += 3 * undo;
        $scope.undoCB = false;
        break;
      case 'vft':
        $rootScope.vGm.vGV.pp += 1 * undo;
        $scope.undoCB = false;
        break;
      case 'vpf':
        $rootScope.vGm.vGV.ff += 1 * undo;
        $scope.undoCB = false;
        break;
      default:
        $rootScope.appLog = ">";
        break;
    }

    localStorage.setItem('vGm', JSON.stringify($rootScope.vGm));
  };

  $scope.resetLS = function() {
    localStorage.removeItem('vGm'); // clear();   
    $rootScope.vGm = JSON.parse(localStorage.getItem('vGm00'));
  };

});
