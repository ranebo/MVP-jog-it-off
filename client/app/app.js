angular.module('MVP', [
  'ui.router',
  'MVP.controllers'
])
.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/home');

  $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: 'app/partials/partial-inputs-submit.html'
    });
    // .state('history')
})
.factory("Meals", function ($http) {

  var getAll = function() {
    return $http({
      method: 'GET',
      url: '/api/meals'
    }).then( function(data) {
      console.log("---------------HERE--------", data.data);
      return data.data;
    }, function(err) {
      console.log("Could not get all meals");
      console.error(err);
    });
  };

  var addOne = function(meal) {
    return $http({
      method: 'POST',
      url: '/api/meals',
      data: meal
    }).then( function (data) {
      return data.data;
    }, function (err) {
      console.log("Could not add meal");
      console.error(err);
    });
  };

  return {
    getAll: getAll,
    addOne: addOne
  };

});
