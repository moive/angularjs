angular.module('miApp')
    .controller('PlaylistServiceCtrl',['$scope', 'PlaylistService', function($scope,PlaylistService){
        $scope.playlist = PlaylistService.listar();
        console.log(PlaylistService.playlist)
    }]);