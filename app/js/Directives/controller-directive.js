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
}]);