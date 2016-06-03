app.controller("ArtigoCtrl", function ($route, $scope, $http, $location, crudesAPI, artigos) {
	$scope.artigos = artigos.data;

	$scope.editarArtigo = function (id) {
        $location.path('artigos/editarArtigo/' + id);
    };

    $scope.deletarArtigo = function (id) {
    	var answer = confirm("Deseja realmente excluir?");
    	if(answer){
    		crudesAPI.deleteArtigo(id).success(function (data){
    			$route.reload();
			});
    	}
    };
});