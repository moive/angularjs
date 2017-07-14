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
}])
.directive('miCita', ['$log', function($log){
	return {
		restric: 'E',
		compile: function(iElement, iAttr){
			var plantilla = angular.element('<blockquote></blockquote');
			plantilla.append(iElement.contents());
			iElement.replaceWith(plantilla);
			return function(scope, iElement, iAttr){
				iElement.css('text-align', 'right');
				if(iAttr.autor){
					iElement.append('<br><span>Por: '+iAttr.autor+'</span>');
				}
			};
		}
	};
}]);