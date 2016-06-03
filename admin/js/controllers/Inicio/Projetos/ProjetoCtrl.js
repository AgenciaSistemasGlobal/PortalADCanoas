app.controller("ProjetoCtrl", function ($route, $scope, $http, $location, crudesAPI, projetos) {
	$scope.projetos = projetos.data;

	$scope.editarProjeto = function (id) {
        $location.path('projetos/editarProjeto/' + id);
    };

	$scope.deletarProjeto = function (id) {
    	var answer = confirm("Deseja realmente excluir?");
    	if(answer){
    		crudesAPI.deleteProjeto(id).success(function (data){
    			$route.reload();
			});
    	}
    };
});