angular.module('myApp')
	.service('organize', [function(){
		var organize = [
			{ value: '-points', text: 'Mayor Puntuado' },
			{ value: 'points', text: 'Menor Puntuado' },
			{ value: '-sales', text: 'Más Vendido' },
			{ value: 'sales', text: 'Menos Vendido' },
			{ value: 'price', text: 'Menor Precio' },
			{ value: '-price', text: 'Mayor Precio' }
		];
		
		this.list = function(){
			return organize;
		};
	}]);