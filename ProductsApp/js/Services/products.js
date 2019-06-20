angular.module('myApp')
	.factory('products', [function(){
		var products = [
			{ name: 'Samsung Galaxy S3', price: 105.99, points: 196, sales: 1820 },
			{ name: 'Asus Zenfone 2', price: 179.99, points: 127, sales: 716 },
			{ name: 'HTC Desire 620', price: 199.99, points: 166, sales: 914 },
			{ name: 'HTC One M7', price: 175.95, points: 1694, sales: 1589 },
			{ name: 'LG L Bello', price: 149.99, points: 1211, sales: 891 },
			{ name: 'Motorola Moto X 2', price: 219.99, points: 1865, sales: 6174 }
		];
		
		return {
			list: function(){
				return products;
			}
		};
	}]);