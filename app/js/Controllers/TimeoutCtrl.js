angular.module('miApp')
.controller('TimeoutCtrl',['$scope','$timeout','$log', function($scope, $timeout, $log){
	var vm = this;
	var retraso = $timeout(Action, 3000, true, 'Uno', 'Dos');

	function Action(param1, param2){
		$log.warn('Ejecutado después de dos segundos.');
		$log.log('Parámetros: ', param1, param2);
		return 'Mensaje devuelto por el temporizador.';
	}

	retraso.then(function(msg){
		$log.log(msg);
		$log.debug('Retraso finalizado');
	});

	retraso.catch(function(){
		$log.error('Retraso cancelado.');
	});

	vm.cancelar = function(){
		$timeout.cancel(retraso);
	}

}]);