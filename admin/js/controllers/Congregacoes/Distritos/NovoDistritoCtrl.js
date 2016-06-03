app.controller("NovoDistritoCtrl", function ($route, $scope, $http, $location, crudesAPI) {
	$scope.response_upload_error = false;

	$scope.adicionarDistrito = function (distrito) {

		var fd = new FormData();
		for(var key in distrito)
			fd.append(key, distrito[key]);

		crudesAPI.saveDistrito(fd).success(function (data){
			if(data === "SUCCESS"){
				$location.path('distritos/');
			}else{
				$scope.response_upload_error = true;
			}
		})
	}
});