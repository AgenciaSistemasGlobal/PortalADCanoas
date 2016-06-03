app.controller("NoticiasCtrl", function ($route, $scope, $http, $location, crudesAPI, noticias) {
	$scope.noticias = noticias.data;

	$scope.editarNoticia = function (id) {
        $location.path('noticias/editarNoticia/' + id);
    };

	$scope.deletarNoticia = function (id) {
    	var answer = confirm("Deseja realmente excluir?");
    	if(answer){
    		crudesAPI.deleteNoticia(id).success(function (data){
    			$route.reload();
			});
    	}
    };
});