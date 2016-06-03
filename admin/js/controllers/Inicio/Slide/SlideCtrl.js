app.controller("SlideCtrl", function ($route, $scope, $http, $location, crudesAPI, slides) {
	$scope.slides = slides.data;

	$scope.editarSlide = function (id) {
        $location.path('slide/editarSlide/' + id);
    };

    $scope.deletarSlide = function (id) {
    	var answer = confirm("Deseja realmente excluir?");
    	if(answer){
    		crudesAPI.deleteSlide(id).success(function (data){
    			$route.reload();
			});
    	}
    };
});