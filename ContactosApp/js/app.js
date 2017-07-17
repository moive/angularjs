'use-strict';

angular.module('ContactosApp', ['ngRoute'])
.config(['$qProvider','$logProvider', '$compileProvider', function ($qProvider,$logProvider, $compileProvider) {
            $qProvider.errorOnUnhandledRejections(false);
            $logProvider.debugEnabled(false);

            //quita anotaciones innecesarias
            $compileProvider.debugInfoEnabled(false);
        }])
/*.run(['$anchorScroll', function($anchorScroll){
	$anchorScroll.yOffset = 50;
}]);*/