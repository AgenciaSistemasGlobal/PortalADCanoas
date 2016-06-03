app.controller("CongregacaoCtrl", function ($route, $scope, $http, $location, crudesAPI, congregacoes) {
	$scope.congregacoes = congregacoes.data;

	$scope.editarCongregacao = function (id) {
        $location.path('congregacoes/editarCongregacao/' + id);
    };

	$scope.deletarCongregacao = function (id) {
    	var answer = confirm("Deseja realmente excluir?");
    	if(answer){
    		crudesAPI.deleteCongregacao(id).success(function (data){
    			$route.reload();
			});
    	}
    };
});