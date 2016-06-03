app.controller("NovoArtigoCtrl", function ($scope, $http, $location, crudesAPI) {	
	$scope.response_upload_error = false;

	$scope.adicionarArtigo = function (artigo) {

		var fd = new FormData();
		for(var key in artigo)
			fd.append(key, artigo[key]);

		crudesAPI.saveArtigo(fd).success(function (data){
			if(data === "SUCCESS"){
				$location.path('artigos/');
			}else{
				$scope.response_upload_error = true;
			}
		})
	}
});