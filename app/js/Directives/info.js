angular.module('miApp')
.directive('info', [function(){
	var plantilla = '<a href="mailto:{{usuario.email}}">';
	plantilla += '{{usuario.nombre}} {{usuario.apellido}}</a>';
	
	return {
		restric: 'A',
		scope: {
			usuario: '=usuario'
		},
		template: plantilla,
		replace: false
	};
}]);