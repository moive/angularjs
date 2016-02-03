angular.module("app",[])
    .controller('Controlador',function($scope){
        $scope.coincidencia = false;

        $scope.$watchGroup(['password','password2'],function(nuevos, anteriores){
            if (!nuevos) return;
            if(nuevos[0]===nuevos[1]){
                $scope.coincidencia = true;
            }else{
                $scope.coincidencia = false;
            }
        })
    });