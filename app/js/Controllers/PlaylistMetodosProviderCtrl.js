angular.module('miApp')
    .controller('PlaylistMetodosProviderCtrl',['$scope','Playlist', function($scope, Playlist){
        $scope.playlist = Playlist.listar();
        $scope.borrar = function(id){
            Playlist.borrar(id);
        };
    }]);