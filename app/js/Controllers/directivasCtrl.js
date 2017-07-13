angular.module('miApp')
.controller('directivasCtrl',['$scope', function($scope){
	var cds = [
		'Songs of Innocence',
		'Forget the World',
		'Unlocked',
		'True',
		'The New Daylight',
		'Lovers on the Sun',
		'Talking Dreams',
		'Trouble in paradise'
	];
	
	$scope.cds = cds;
	
	$scope.mostrar = true;
}]);