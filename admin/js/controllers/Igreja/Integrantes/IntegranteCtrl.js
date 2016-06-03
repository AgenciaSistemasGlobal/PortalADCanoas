app.controller("IntegranteCtrl", function ($route, $scope, $http, $location, crudesAPI, integrantes) {
	$scope.integrantes = integrantes.data;

	$scope.editarIntegrante = function (id) {
        $location.path('integrantes/editarIntegrante/' + id);
    };

	$scope.deletarIntegrante = function (id) {
    	var answer = confirm("Deseja realmente excluir?");
    	if(answer){
    		crudesAPI.deleteIntegrante(id).success(function (data){
    			$route.reload();
			});
    	}
    };
});