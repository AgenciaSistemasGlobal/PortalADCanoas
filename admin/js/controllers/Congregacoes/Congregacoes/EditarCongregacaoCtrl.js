app.controller("EditarCongregacaoCtrl", function ($route, $scope, $http, $location, $routeParams, congregacao, crudesAPI, distritos) {
	$scope.distritos = distritos.data;
	$scope.congregacao = {
	    id: congregacao.data.id,
	    distrito: congregacao.data.distrito,
	    nome: congregacao.data.nome,
	    endereco: congregacao.data.endereco,
	    encarregado: congregacao.data.encarregado
	}

	$scope.response_upload_error = false;

	$scope.editarCongregacao = function (congregacao) {

		crudesAPI.saveCongregacao(congregacao).success(function (data){
			if(data === "SUCCESS_EDIT"){
				$route.reload();
			}else{
				$scope.response_upload_error = true;
			}
		})
	}
});