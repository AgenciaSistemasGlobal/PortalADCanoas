app.controller("NovoNoticiaCtrl", function ($route, $scope, $http, $location, crudesAPI) {
	$scope.response_upload_error = false;

	$scope.adicionarNoticia = function (noticia) {

		var fd = new FormData();
		for(var key in noticia)
			fd.append(key, noticia[key]);

		crudesAPI.saveNoticia(fd).success(function (data){
			if(data === "SUCCESS"){
				$location.path('noticias/');
			}else{
				$scope.response_upload_error = true;
			}
		})
	}
});