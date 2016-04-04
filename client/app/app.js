angular.module('MVP', [
  'ui.router',
  'MVP.controllers'
])
.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/home');

  $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: 'partials/partial-inputs-submit.html'
    });
    // .state('history')
});
