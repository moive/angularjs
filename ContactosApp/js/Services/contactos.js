angular.module('myApp')
	.factory('contactos',[function(){
		var contactos = [
			{
				nombre: 'Maikel Rivero Dorta',
				email: 'yo@dominio.com',
				tel: '123456789'
			},
			{
				nombre: 'john Doe',
				email: 'johndoe@example.com',
				tel: '543216789'
			}
		];
		
		return {
			lista: function(){
				return contactos;
			},
			ver: function(id){
				return contactos[id] || false;
			},
			borrar: function(id){
				return contactos.splice(id,1).length ? true : false;
			},
			crear: function(elem){
				return contactos.push(elem);
			},
			editar: function(id, contacto){
				contactos[id] = contacto;
			},
		};
	}]);