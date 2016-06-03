app.controller("NovoAgenda2Ctrl", function ($route, $scope, $http, $location, crudesAPI) {
	$scope.response_upload_error = false;

	$scope.adicionarAgenda = function (agenda) {

		var fd = new FormData();
		for(var key in agenda)
			fd.append(key, agenda[key]);

		crudesAPI.saveAgenda(fd).success(function (data){
			if(data === "SUCCESS"){
				$location.path('agenda/');
			}else{
				$scope.response_upload_error = true;
			}
		})
	}
});