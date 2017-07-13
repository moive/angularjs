angular.module('miApp')
.controller('directivasCtrl',['$scope', '$log', function($scope, $log){
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
	
	$scope.keydown = function(e){
		$log.log('Key down - Key Code: ' + e.keyCode, 'altKey: ' + e.altKey);
	};
	
	$scope.keypress = function(e){
		$log.log('Key press - Key Code: ' + e.keyCode, 'altKey: ' + e.altKey);
	};
	
	$scope.keyup = function(e){
		$log.log('Key up - Key Code: ' + e.keyCode, 'altKey: ' + e.altKey);
	};
	
	$scope.style = {
		'border': '2px solid black',
		'width': '200px',
		'height': '200px',
		'background-color': '#56A5F3'
	};
	
	$scope.down = function(e){
		$log.log('Ejecutado el evento Mousedown');
	};
	
	$scope.up = function(e){
		$log.log('Ejecutado el evento Mouseup');
	};
	
	$scope.enter = function(e){
		$log.log('Ejecutado el evento Mouseenter');
	};
	
	$scope.leave = function(e){
		$log.log('Ejecutado el evento Mouseleave');
	};
	
	$scope.move = function(e){
		$scope.pos = 'x: ' + e.x + ' y: ' + e.y;
	};
	
	$scope.over = function(e){
		$log.log('Ejecutando el evento Mouseover');
	}
}]);