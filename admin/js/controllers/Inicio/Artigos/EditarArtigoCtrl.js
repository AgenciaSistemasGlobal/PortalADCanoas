app.controller("EditarArtigoCtrl", function ($route, $scope, $http, $location, $routeParams, artigo, crudesAPI) {
	$scope.artigo = {
	    id: artigo.data.id,
	    img: artigo.data.img,
	    textoGrande: artigo.data.texto_grande,
	    textoMedio: artigo.data.texto_medio,
	    textoPequeno: artigo.data.texto_pequeno
	}

	$scope.response_upload_error = false;

	$scope.editarArtigo = function (artigo) {

		var fd = new FormData();
		for(var key in artigo)
			fd.append(key, artigo[key]);

		crudesAPI.saveArtigo(fd).success(function (data){
			if(data === "SUCCESS_EDIT"){
				$route.reload();
			}else{
				$scope.response_upload_error = true;
			}
		})
	}
});