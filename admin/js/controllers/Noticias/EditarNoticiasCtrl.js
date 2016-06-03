app.controller("EditarNoticiaCtrl", function ($route, $scope, $http, $location, $routeParams, noticia, crudesAPI) {
	$scope.noticia = {
	    id: noticia.data.id,
	    img: noticia.data.img,
	    titulo: noticia.data.titulo,
	    sub_titulo: noticia.data.sub_titulo,
	    texto: noticia.data.texto,
	    data: noticia.data.data
	}

	$scope.response_upload_error = false;

	$scope.editarNoticia = function (noticia) {

		var fd = new FormData();
		for(var key in noticia)
			fd.append(key, noticia[key]);

		crudesAPI.saveNoticia(fd).success(function (data){
			if(data === "SUCCESS_EDIT"){
				$route.reload();
			}else{
				$scope.response_upload_error = true;
			}
		})
	}
});