angular.module('miApp')
    .controller('PlaylistMetodosServiceCtrl',['$scope','PlaylistService', function($scope, PlaylistService){
        $scope.playlist = PlaylistService.listar();
        $scope.borrar = function(id){
            PlaylistService.borrar(id);
        };
    }]);