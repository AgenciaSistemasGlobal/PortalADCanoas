app.controller("EditarJornalCtrl", function ($route, $scope, $http, $location, $routeParams, jornal, crudesAPI) {
	$scope.jornal = {
	    id: jornal.data.id,
	    img: jornal.data.img,
	    textoGrande: jornal.data.texto_grande,
	    textoMedio: jornal.data.texto_medio
	}

	$scope.response_upload_error = false;

	$scope.editarJornal = function (jornal) {

		var fd = new FormData();
		for(var key in jornal)
			fd.append(key, jornal[key]);

		crudesAPI.saveJornal(fd).success(function (data){
			if(data === "SUCCESS_EDIT"){
				$route.reload();
			}else{
				$scope.response_upload_error = true;
			}
		})
	}
});