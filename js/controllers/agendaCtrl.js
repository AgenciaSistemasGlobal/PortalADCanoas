app.controller("agendaCtrl", function ($rootScope, $route, $scope, $http, $location, crudesAPI, agendas) {
	
	$rootScope.activetab = $location.path();

	$scope.agendas = agendas.data;
});