app.controller("EditarProjetoCtrl", function ($route, $scope, $http, $location, $routeParams, projeto, crudesAPI) {
	$scope.projeto = {
	    id: projeto.data.id,
	    img: projeto.data.img,
	    textoGrande: projeto.data.texto_grande,
	    textoMedio: projeto.data.texto_medio
	}

	$scope.response_upload_error = false;

	$scope.editarProjeto = function (projeto) {

		var fd = new FormData();
		for(var key in projeto)
			fd.append(key, projeto[key]);

		crudesAPI.saveProjeto(fd).success(function (data){
			if(data === "SUCCESS_EDIT"){
				$route.reload();
			}else{
				$scope.response_upload_error = true;
			}
		})
	}
});