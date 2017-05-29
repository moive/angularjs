angular.module('miApp')
    .controller('PlaylistMetodosProviderCtrl',['$scope','Playlist', function($scope, Playlist){
        $scope.playlist = Playlist.listar();
        $scope.borrar = function(id){
            Playlist.borrar(id);
        };

        $scope.countSongs = 0;

        $scope.$watch(function(){
        	var l = Playlist.listar().length;
        	$scope.countSongs = l == 0 ? 'No hay datos' : l;
        })
    }]);