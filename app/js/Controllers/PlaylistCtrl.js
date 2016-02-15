angular.module('miApp')
.controller('PlaylistCtrl',['$scope', 'Playlist',
    function($scope, Playlist){
    $scope.playlist = Playlist.listar();
}])