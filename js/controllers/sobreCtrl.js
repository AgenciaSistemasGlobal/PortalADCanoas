app.controller("sobreCtrl", function ($rootScope, $route, $scope, $http, $location, crudesAPI, sobres, integrantes, imagens) {
	
	$rootScope.activetab = $location.path();

	$scope.sobres      = sobres.data;
    $scope.integrantes = integrantes.data;
    $scope.imagens     = imagens.data;
});