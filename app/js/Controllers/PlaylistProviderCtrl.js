angular.module('miApp')
    .controller('PlaylistProviderCtrl',['$scope','Playlist', function($scope, Playlist){
        $scope.playlist = Playlist.listar();
    }]);