angular.module('miApp')
.controller("classCtrl",['$scope', function($scope){
	var styles = {
		'font-weight': 'bold',
		'color': '#eee'
	};
	
	$scope.styles = styles;
	
	$scope.etiquetas = ['Actualidad', 'Finanzas', 'Tecnología'];
	
	$scope.message = 'Hi from the controller.';
}]);