app.controller("EditarSobreCtrl", function ($route, $scope, $http, $location, $routeParams, sobre, crudesAPI) {
	$scope.sobre = {
	    id: sobre.data.id,
	    img: sobre.data.img,
	    textoGrande: sobre.data.texto_grande,
	    textoMedio: sobre.data.texto_medio
	}

	$scope.response_upload_error = false;

	$scope.editarSobre = function (sobre) {

		var fd = new FormData();
		for(var key in sobre)
			fd.append(key, sobre[key]);

		crudesAPI.saveSobre(fd).success(function (data){
			if(data === "SUCCESS_EDIT"){
				$route.reload();
			}else{
				$scope.response_upload_error = true;
			}
		})
	}
});