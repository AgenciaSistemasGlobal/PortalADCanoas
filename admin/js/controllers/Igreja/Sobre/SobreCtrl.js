app.controller("SobreCtrl", function ($route, $scope, $http, $location, crudesAPI, sobres) {
	$scope.sobres      = sobres.data;

	$scope.editarSobre = function (id) {
        $location.path('sobre/editar/' + id);
    };
});