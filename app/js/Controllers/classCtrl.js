angular.module('miApp')
.controller("classCtrl",['$scope', function($scope){
	var classes = ['flotar', 'fondoRojo', 'borderRedondeados'];
	$scope.generateClass = function(){
		return classes;
	};
}]);