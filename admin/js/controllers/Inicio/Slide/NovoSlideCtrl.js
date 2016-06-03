app.controller("NovoSlideCtrl", function ($scope, $http, $location, crudesAPI) {	
	$scope.response_upload_error = false;

	$scope.adicionarSlide = function (slide) {

		var fd = new FormData();
		for(var key in slide)
			fd.append(key, slide[key]);

		crudesAPI.saveSlide(fd).success(function (data){
			if(data === "SUCCESS"){
				$location.path('slide/');
			}else{
				$scope.response_upload_error = true;
			}
		})
	}
});