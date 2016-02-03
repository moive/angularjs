angular.module("app",[])
    .controller('Controlador',function($scope){
        $scope.errorMinimo = false;

        $scope.$watch('password',function(nuevo, anterior){
            if (!nuevo) return;
            if(nuevo.length < 6){
                $scope.errorMinimo = true;
            }else{
                $scope.errorMinimo = false;
            }
        })
    });