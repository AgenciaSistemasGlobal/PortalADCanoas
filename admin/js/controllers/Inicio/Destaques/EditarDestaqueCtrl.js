app.controller("EditarDestaqueCtrl", function ($route, $scope, $http, $location, $routeParams, destaque, crudesAPI) {
	$scope.destaque = {
	    id: destaque.data.id,
	    img: destaque.data.img,
	    textoGrande: destaque.data.texto_grande,
	    textoMedio: destaque.data.texto_medio
	}

	$scope.response_upload_error = false;

	$scope.editarDestaque = function (destaque) {

		var fd = new FormData();
		for(var key in destaque)
			fd.append(key, destaque[key]);

		crudesAPI.saveDestaque(fd).success(function (data){
			if(data === "SUCCESS_EDIT"){
				$route.reload();
			}else{
				$scope.response_upload_error = true;
			}
		})
	}
});