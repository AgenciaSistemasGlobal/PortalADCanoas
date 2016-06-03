app.config(function($sceDelegateProvider) {
  $sceDelegateProvider.resourceUrlWhitelist([
    'self',
    'https://www.youtube.com/**'
  ]);
}).controller("VideoCtrl", function ($route, $scope, $http, $location, crudesAPI, videos) {

    $scope.videos = videos.data;

    $scope.getIframeSrc = function(src) {
      return 'https://www.youtube.com/embed/' + src + '?autoplay=0&showinfo=0&controls=0';
    };

	$scope.editarVideo = function (id) {
        $location.path('videos/editarVideo/' + id);
    };

	$scope.deletarVideo = function (id) {
    	var answer = confirm("Deseja realmente excluir?");
    	if(answer){
    		crudesAPI.deleteVideo(id).success(function (data){
    			$route.reload();
			});
    	}
    };
});