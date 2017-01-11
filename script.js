
var restapp = angular.module('restdbH', ['ngResource']);

restapp.config(function ($httpProvider) {

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

restapp.run( function ($rootScope, $http, DBservice) {
   $rootScope.getMeta  = DBservice.getMeta();
   $rootScope.contact = DBservice.getContact();
   $rootScope.ngrContact = DBservice.ngrContact;
   $rootScope.prod = DBservice.getAll;
});

restapp.controller('MainCtrl', function($scope, $rootScope) {

  // $scope.rs$ = $rootScope;

});

/* from angular docs  ...

var Todo = $resource('/api/1/todo/:id');

//create a todo
var todo1 = new Todo();
todo1.foo = 'bar';
todo1.something = 123;
todo1.$save();

//get and update a todo
var todo2 = Todo.get({id: 123});
todo2.foo += '!';
todo2.$save();

//which is basically the same as...
Todo.get({id: 123}, function(todo) {
   todo.foo += '!';
   todo.$save();
});

//get a list of todos
Todo.query(function(todos) {
  //do something with todos
  angular.forEach(todos, function(todo) {
     todo.foo += ' something';
     todo.$save();
  });
});

//delete a todo
Todo.$delete({id: 123});

// we can create an instance as well
var newCard = new CreditCard({number:'0123'});
newCard.name = "Mike Smith";
newCard.$save();
// POST: /user/123/card {number:'0123', name:'Mike Smith'}
// server returns: {id:789, number:'0123', name: 'Mike Smith'};

var User = $resource('/user/:userId', {userId:'@id'});
User.get({userId:123})
    .$promise.then(function(user) {
  user.abc = true;
      $scope.user = user;
  user.$save();
    });

// Some APIs expect a PUT request in the format URL/object/ID
// Here we are creating an 'update' method
app.factory('Notes', ['$resource', function($resource) {
return $resource('/notes/:id', null,
    {
        'update': { method:'PUT' }
    });
}]);

// In our controller we get the ID from the URL using ngRoute and $routeParams
// We pass in $routeParams and our Notes factory along with $scope
app.controller('NotesCtrl', ['$scope', '$routeParams', 'Notes',
                                   function($scope, $routeParams, Notes) {
// First get a note object from the factory
var note = Notes.get({ id:$routeParams.id });
$id = note.id;

// Now call update passing in the ID first then the object you are updating
Notes.update({ id:$id }, note);

// This will PUT /notes/ID with the note object in the request payload
}]);

// ...defining the `Hotel` resource...
var Hotel = $resource('/api/hotel/:id', {id: '@id'}, {
  // Let's make the `query()` method cancellable
  query: {method: 'get', isArray: true, cancellable: true}
});

// ...somewhere in the PlanVacationController...
...
this.onDestinationChanged = function onDestinationChanged(destination) {
  // We don't care about any pending request for hotels
  // in a different destination any more
  this.availableHotels.$cancelRequest();

  // Let's query for hotels in '<destination>'
  // (calls: /api/hotel?location=<destination>)
  this.availableHotels = Hotel.query({location: destination});
};

*/
