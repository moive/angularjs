angular.module('miApp')
.controller('TimeoutCtrl',['$scope','$timeout', function($scope, $timeout){
	var vm = this;
	var retraso = $timeout(Action, 3000, true, 'Uno', 'Dos');

	function Action(param1, param2){
		console.log('Ejecutado después de dos segundos.');
		console.log('Parámetros: ', param1, param2);
		return 'Mensaje devuelto por el temporizador.';
	}

	retraso.then(function(msg){
		console.log(msg);
		console.log('Retraso finalizado');
	});

	retraso.catch(function(){
		console.log('Retraso cancelado.');
	});

	vm.cancelar = function(){
		$timeout.cancel(retraso);
	}

}]);