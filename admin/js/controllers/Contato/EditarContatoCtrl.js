app.controller("EditarContatoCtrl", function ($route, $scope, $http, $location, $routeParams, contato, crudesAPI) {
	$scope.contato = {
	    id: contato.data.id,
	    email: contato.data.email,
	    celular: contato.data.celular,
	    telefone: contato.data.telefone,
	    facebook: contato.data.facebook,
	    twitter: contato.data.twitter,
	    instagram: contato.data.instagram,
	    youtube: contato.data.youtube,
	    radio: contato.data.radio,
	    endereco: contato.data.endereco,
	    numero: contato.data.numero,
	    bairro: contato.data.bairro,
	    cidade: contato.data.cidade,
	    estado: contato.data.estado,
	    cep: contato.data.cep
	}

	$scope.response_upload_error = false;

	$scope.editarContato = function (contato) {

		var fd = new FormData();
		for(var key in contato)
			fd.append(key, contato[key]);

		crudesAPI.saveContato(fd).success(function (data){
			if(data === "SUCCESS_EDIT"){
				$route.reload();
			}else{
				$scope.response_upload_error = true;
			}
		})
	}
});