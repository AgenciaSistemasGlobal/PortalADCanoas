app.controller("NovoIntegranteCtrl", function ($route, $scope, $http, $location, crudesAPI) {
	$scope.response_upload_error = false;

	$scope.adicionarIntegrante = function (integrante) {
		
		var fd = new FormData();
		for(var key in integrante)
			fd.append(key, integrante[key]);

		crudesAPI.saveIntegrante(fd).success(function (data){
			if(data === "SUCCESS"){
				$location.path('integrantes/');
			}else{
				$scope.response_upload_error = true;
			}
		})
	}
});