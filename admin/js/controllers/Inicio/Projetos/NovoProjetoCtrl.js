app.controller("NovoProjetoCtrl", function ($route, $scope, $http, $location, crudesAPI) {
	$scope.response_upload_error = false;

	$scope.adicionarProjeto = function (projeto) {

		var fd = new FormData();
		for(var key in projeto)
			fd.append(key, projeto[key]);

		crudesAPI.saveProjeto(fd).success(function (data){
			if(data === "SUCCESS"){
				$location.path('projetos/');
			}else{
				$scope.response_upload_error = true;
			}
		})
	}
});