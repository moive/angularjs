angular.module('miApp')
.directive('primeraDirectiva', [function(){
	return {
		restrict: 'EAC',
		template: '<p>Esta es la primera directiva.</p>',
		replace: true
	};
}]);