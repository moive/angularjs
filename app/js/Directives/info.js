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
	plantilla += '<h2>{{titulo}}</h2><p>{{texto}}</p>';
	plantilla += '<input type="text" data-ng-model="texto"></div>';
	
	return {
		restric: 'EA',
		scope: {
			tipo: '@',
			titulo: '@',
			texto: '@mensaje'
		},
		template: plantilla,
		replace: true
	};
}])
.directive('miContacto',[function(){
	return {
		restrict: 'E',
		scope: {
			log: '&'
		},
		templateUrl: '_vistas/contacto.html',
		replace: true
	};
}]);