angular.module('miApp')
.controller('IntervalCtrl',['$scope','$interval', '$log', function($scope, $interval, $log){
	var conteo = $interval(imprimirConteo, 1000, 5);
	var i = 4;

	function imprimirConteo(){
		if(i > 0){
			$log.log('Quedan ' + i + ' segundos.');
			i--;
		}else{
			$log.log('Conteo finalizado.');
		}
	}

	conteo.then(function(){
		alert('Ya han pasado 5 segundos.');
		$interval.cancel(conteo);
	});
}]);