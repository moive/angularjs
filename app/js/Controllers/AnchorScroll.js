angular.module("miApp")
.controller('AnchorScroll',['$scope', '$anchorScroll', function($scope, $anchorScroll){
	$scope.goTo = function(id){
		var nuevaId = 'contenido' + id;
		$anchorScroll(nuevaId);
	};
}]);