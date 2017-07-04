angular.module('miApp')
.controller('PrimerCtrl', ['$scope', '$cacheFactory', function($scope, $cacheFactory){
	var vm = this;
	var cachePrincipal = $cacheFactory('cachePrincipal');

	vm.guardar = function(){
		cachePrincipal.put('mensaje', vm.texto);
	};
	//console.log($cacheFactory.info());
}])
.controller('SegundoCtrl', ['$scope', '$cacheFactory', function($scope, $cacheFactory){
	var vm = this;
	var cachePrincipal = $cacheFactory.get('cachePrincipal');

	vm.imprimir = function(){
		console.log(cachePrincipal.get('mensaje'));
	};
}])