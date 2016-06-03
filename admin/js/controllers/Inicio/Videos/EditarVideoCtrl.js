app.config(function($sceDelegateProvider) {
  $sceDelegateProvider.resourceUrlWhitelist([
    'self',
    'https://www.youtube.com/**'
  ]);
}).controller("EditarVideoCtrl", function ($route, $scope, $http, $location, $routeParams, video, crudesAPI) {
	$scope.video = {
	    id: video.data.id,
	    url: video.data.url,
	    textoGrande: video.data.texto_grande,
	    textoMedio: video.data.texto_medio
	}

	$scope.getIframeSrc = function(src) {
      return 'https://www.youtube.com/embed/' + src + '?autoplay=1&showinfo=0&controls=0';
    };

	$scope.response_upload_error = false;

	$scope.editarVideo = function (video) {

		crudesAPI.saveVideo(video).success(function (data){
			if(data === "SUCCESS_EDIT"){
				$route.reload();
			}else{
				$scope.response_upload_error = true;
			}
		})
	}
});