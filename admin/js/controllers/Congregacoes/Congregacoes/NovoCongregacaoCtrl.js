app.controller("NovaCongregacaoCtrl", function ($route, $scope, $http, $location, crudesAPI, distritos) {
	$scope.distritos = distritos.data;
	$scope.response_upload_error = false;

	$scope.adicionarCongregacao = function (congregacao) {

		crudesAPI.saveCongregacao(congregacao).success(function (data){
			if(data === "SUCCESS"){
				$location.path('congregacoes/');
			}else{
				$scope.response_upload_error = true;
			}
		})
	}
});