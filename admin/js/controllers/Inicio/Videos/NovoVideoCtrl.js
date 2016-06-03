app.controller("NovoVideoCtrl", function ($route, $scope, $http, $location, crudesAPI) {
	$scope.response_upload_error = false;

	$scope.adicionarVideo = function (video) {
		crudesAPI.saveVideo(video).success(function (data){
			if(data === "SUCCESS"){
				$location.path('videos/');
			}else{
				$scope.response_upload_error = true;
			}
		})
	}
});