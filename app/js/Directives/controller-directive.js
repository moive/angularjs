angular.module('miApp')
.directive('miDirectiva', ['$log', function($log){
	return {
		restrict: 'A',
		controller: function(){
			this.log = function(){
				$log.log('Médoto de la directiva: mi-directiva');
			};
		},
		link: function(scope, element, attr, ctrls){
			ctrls.log();
		}
	};
}])
.directive('otraDirectiva', ['$log', function($log){
	return {
		restrict: 'A',
		require: '?miDirectiva',
		link: function(scope, element, attr, ctrls){
			$log.log(ctrls);
			if(ctrls != null){
				ctrls.log();
			}
		}
	};
}])
.directive('miEjemplo', ['$log', function($log){
	return {
		restrict: 'A',
		template: '<div>{{ctrl.mensaje}}...!</div>',
		controllerAs: 'ctrl',
		controller: function(){
			this.mensaje = 'La variable mensaje está expuesta para ser utilizada';
			this.mensaje += 'fuera del controlador y a la vez de la misma directiva.';
		}
	};
}]);