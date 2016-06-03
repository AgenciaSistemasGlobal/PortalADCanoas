app.controller("EditarDistritoCtrl", function ($route, $scope, $http, $location, $routeParams, distrito, crudesAPI) {
	$scope.distrito = {
	    id: distrito.data.id,
	    nome: distrito.data.distrito,
	    foto_distrito: distrito.data.foto_distrito,
	    pastor: distrito.data.pastor,
	    foto_pastor: distrito.data.foto_pastor,
	    fone: distrito.data.fone,
	    igreja_sede: distrito.data.igreja_sede
	}

	$scope.response_upload_error = false;

	$scope.editarDistrito = function (distrito) {

		var fd = new FormData();
		for(var key in distrito)
			fd.append(key, distrito[key]);

		crudesAPI.saveDistrito(fd).success(function (data){
			if(data === "SUCCESS_EDIT"){
				$route.reload();
			}else{
				$scope.response_upload_error = true;
			}
		})
	}
});