app.controller("JornalCtrl", function ($route, $scope, $http, $location, crudesAPI, jornais) {
	$scope.jornais = jornais.data;

	$scope.editarJornal = function (id) {
        $location.path('jornal-koinonia/editar/' + id);
    };
});