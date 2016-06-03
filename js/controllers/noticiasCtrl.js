app.controller("NoticiasCtrl", function ($rootScope, $route, $scope, $http, $location, crudesAPI, noticias) {
	
	$rootScope.activetab = $location.path();

	$scope.noticias = noticias.data;
});