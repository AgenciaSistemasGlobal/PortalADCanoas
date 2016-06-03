app.controller("NovoDestaqueCtrl", function ($route, $scope, $http, $location, crudesAPI) {
	$scope.response_upload_error = false;

	$scope.adicionarDestaque = function (destaque) {

		var fd = new FormData();
		for(var key in destaque)
			fd.append(key, destaque[key]);

		crudesAPI.saveDestaque(fd).success(function (data){
			if(data === "SUCCESS"){
				$location.path('destaques/');
			}else{
				$scope.response_upload_error = true;
			}
		})
	}
});