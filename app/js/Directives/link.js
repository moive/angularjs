angular.module('miApp')
.directive('miTitular', ['$log', function($log){
	return {
		restrict: 'E',
		template: '<div class="title"><h1>{{texto}}</h1></div>',
		replace: true,
		scope: {
			texto: '@'
		},
		link: function(scope, iElement, iAttrs){
			$log.log(scope.texto);
			iElement.css('cursor','pointer')
					.on('mouseenter', function(e){
						iElement.css('opacity','0.6');
					})
					.on('mouseleave', function(e){
						iElement.css('opacity', 1);
					}).append('<p>-- '+iAttrs.especial+'</p>');
		}
	};
}]);