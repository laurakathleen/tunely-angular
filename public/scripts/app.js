angular
  .module('tunely', ['ngRoute'])
  .config(config);

config.$inject = ['$routeProvider', '$locationProvider'];
function config(   $routeProvider,  $locationProvider   ) {
  $routeProvider
    .when('/', {
    templateUrl: '/templates/albums',
    controllerAs: 'albumsIndexCtrl',
    controller: 'AlbumsIndexController'
  })
    .when('/albums/:id', {
      template: 'This template will show an album!',
      controllerAs: 'albumsShowCtrl',
      controller: 'AlbumsShowController'
    });

  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false
  });
}