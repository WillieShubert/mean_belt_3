var app = angular.module('app', ['ngRoute','ngCookies']);

app.config(function($routeProvider){
  $routeProvider
  .when('/', {templateUrl: '../partials/login.html'})
  .when('/appointments', {templateUrl: '../partials/board.html'})
  .when('/new_appointment', {templateUrl: '../partials/new_appointment.html'})
  .otherwise({redirectTo:'/appointments'});
});

app.factory('usersFactory', ['$http', function($http) {
  var factory = {};

  factory.getUsers = function(){
    return $http.get('/user')
    .then(function(res){ return res.data; })
  }
  factory.createUser = function(newUser){
    return $http.post('/user', newUser)
  }
  factory.deleteUser = function(id){
    return $http.delete(`/user/${id}`)
  }
  return factory;
}]);


app.factory('appointmentsFactory', function($http){
  var factory = {};

  factory.showAppointments = function(){
    return $http.get('/appointments')
      .then(function(all_appointments){
      return all_questions.data;
    })
  }
  factory.createAppointment = function(newAppointment, callback){
    console.log(newAppointment);
      return $http.post('/add_appointment', newAppointment)
    }
  return factory;
});

app.controller('loginController', ['$scope', 'usersFactory', '$routeParams', '$location', function($scope, usersFactory, $routeParams, $location){

  $scope.users = [];
  fetchUsers();

  function fetchUsers(){
    usersFactory.getUsers()
    .then( function(data){
      $scope.users = data;
    });
  }

  $scope.createUser = function(){
    usersFactory.createUser($scope.newuser)
    .then( function(){
      $scope.newUser = {};
    })
    .then(fetchUsers )
  };

  $scope.deleteUser = function(id){
    usersFactory.deleteUser(id)
    .then( fetchCustomers )
  };

}]);


app.controller('appointmentsController', ['appointmentsFactory', 'userFactory', '$scope', function(appointmentsFactory, userFactory, $scope){

  $scope.appointments = [];

  userFactory.readUser(function(data) {
    $scope.user = data;
  })

  getAppointments();

  function getAppointments(){
    appointmentsFactory.showAppointments()
    .then(function(data){
      $scope.appointments = data
    })
  }
  $scope.createAppointment = function(){
  var appointment = $scope.newQuestion;
  appointmentsFactory.createAppointment(appointment, function(data){
      appointmentsFactory.showAppointments(function(data){
        $scope.appointments = data;
      })
  });
}
}]);
