app.controller("congregacoesCtrl", function ($rootScope, $route, $scope, $http, $location, crudesAPI, congregacoes, distritos) {
	
	$rootScope.activetab = $location.path();

    $scope.congregacoes = congregacoes.data;
    $scope.distritos    = distritos.data;

    $scope.buscas = 'two';
    $scope.alterSearch = function (val) {
    	$scope.buscas = val;
    }
});