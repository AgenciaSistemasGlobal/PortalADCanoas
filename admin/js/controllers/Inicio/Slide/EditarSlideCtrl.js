app.controller("EditarSlideCtrl", function ($route, $scope, $http, $location, $routeParams, slide, crudesAPI) {
	$scope.slide = {
	    id: slide.data.id,
	    img: slide.data.img,
	    textoGrande: slide.data.texto_grande,
	    textoMedio: slide.data.texto_medio,
	    textoPequeno: slide.data.texto_pequeno
	}

	$scope.response_upload_error = false;

	$scope.editarSlide = function (slide) {

		var fd = new FormData();
		for(var key in slide)
			fd.append(key, slide[key]);

		crudesAPI.saveSlide(fd).success(function (data){
			if(data === "SUCCESS_EDIT"){
				$route.reload();
			}else{
				$scope.response_upload_error = true;
			}
		})
	}
});