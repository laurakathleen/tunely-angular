angular
  .module('tunely', ['ngRoute'])
  .config(config);

config.$inject = ['$routeProvider', '$locationProvider'];
<<<<<<< HEAD
function config(   $routeProvider,  $locationProvider   ) {
  $routeProvider
    .when('/', {
    templateUrl: '/templates/albums',
    controllerAs: 'albumsIndexCtrl',
    controller: 'AlbumsIndexController'
  })
    .when('/albums/:id', {
      template: 'This template will show an album!',
=======

function config ($routeProvider, $locationProvider) {
  $routeProvider
    .when('/', {
      templateUrl: '/templates/albums',
      controllerAs: 'albumsIndexCtrl',
      controller: 'AlbumsIndexController'
    })
    .when('/:id', {
      templateUrl: '/templates/albums-show',
>>>>>>> aeedb84d81de135c130c24cb831fdb42a9e8c8d8
      controllerAs: 'albumsShowCtrl',
      controller: 'AlbumsShowController'
    });

  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false
  });
}