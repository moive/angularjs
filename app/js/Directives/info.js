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
}])
.directive('miMensaje',[function(){
	var plantilla = '<div class="alert-{{tipo}}"';
	plantilla += '<h2>{{titulo}}</h2><p>{{mensaje}}</p>';
	plantilla += '<input type="text" data-ng-model="mensaje"></div>';
	
	return {
		restric: 'EA',
		scope: {
			tipo: '@',
			titulo: '@',
			mensaje: '@'
		},
		template: plantilla,
		replace: true
	};
}]);