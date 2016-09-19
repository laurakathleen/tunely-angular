angular
<<<<<<< HEAD
	.module('tunely')
	.controller('AlbumsShowController', AlbumsShowController);

AlbumsShowController.$inject = ['$http', '$routeParams'];
function AlbumsShowController (  $http,   $routeParams  ) {
	var vm = this;
	console.log($routeParams);
	var albumId = $routeParams.albumsId;

    $http({
      method: 'GET',
      url: '/api/albums/'+ albumId  // how can we get the id? (hint: check console log from above)
    }).then(function successCallback(json) {
    vm.album = json.data;
    });
=======
  .module('tunely')
  .controller('AlbumsShowController', AlbumsShowController);

AlbumsShowController.$inject = ['$http', '$routeParams'];

function AlbumsShowController ($http, $routeParams) {
  var vm = this;
  vm.newSong = {};

  $http({
    method: 'GET',
    url: '/api/albums/'+$routeParams.id
  }).then(function successCallback(json) {
    vm.album = json.data;
  }, function errorCallback(response) {
    console.log('There was an error getting the data', response);
  });

>>>>>>> aeedb84d81de135c130c24cb831fdb42a9e8c8d8
}
