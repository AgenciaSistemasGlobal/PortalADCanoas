app.controller("EditarIntegranteCtrl", function ($route, $scope, $http, $location, $routeParams, integrante, crudesAPI) {
	$scope.integrante = {
	    id: integrante.data.id,
	    img: integrante.data.img,
	    nome: integrante.data.nome,
	    cargo: integrante.data.cargo,
	    descricao: integrante.data.descricao,
	    facebook: integrante.data.facebook,
	    twitter: integrante.data.twitter,
	    linkedin: integrante.data.linkedin
	}

	$scope.response_upload_error = false;

	$scope.editarIntegrante = function (integrante) {

		var fd = new FormData();
		for(var key in integrante)
			fd.append(key, integrante[key]);

		crudesAPI.saveIntegrante(fd).success(function (data){
			if(data === "SUCCESS_EDIT"){
				$route.reload();
			}else{
				$scope.response_upload_error = true;
			}
		})
	}
});