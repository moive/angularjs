angular.module('miApp')
.directive('comentario', [function(){
	var plantilla = '<div><div><img ng-src="{{imagenSrc}}">Por: {{por}}</div>';
	plantilla += '<blockquote ng-transclude></blockquote></div>';
	
	return {
		restric: 'E',
		scope: {
			por: '@',
			imagenSrc: '@'
		},
		replace: true,
		transclude: true,
		template: plantilla
	};
}]);