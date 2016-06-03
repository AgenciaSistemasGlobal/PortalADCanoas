app.controller("NovoEventoCtrl", function ($route, $scope, $http, $location, crudesAPI) {
	$scope.response_upload_error = false;

	$scope.adicionarEvento = function (evento) {

		crudesAPI.saveEvento(evento).success(function (data){
			if(data === "SUCCESS"){
				$location.path('eventos/');
			}else{
				$scope.response_upload_error = true;
			}
		})
	}
});