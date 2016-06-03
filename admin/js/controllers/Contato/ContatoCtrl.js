app.controller("ContatoCtrl", function ($route, $scope, $http, $location, crudesAPI, contatos) {
	$scope.contatos = contatos.data;

	$scope.editarContato = function (id) {
        $location.path('localizacao-contato/editar/' + id);
    };
});