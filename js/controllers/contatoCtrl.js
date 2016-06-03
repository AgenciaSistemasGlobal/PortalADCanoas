app.controller("contatoCtrl", function ($rootScope, $route, $scope, $http, $location, crudesAPI, contatos) {
	
	$rootScope.activetab = $location.path();

	$scope.contatos = contatos.data;
});