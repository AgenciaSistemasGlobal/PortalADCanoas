app.controller("DestaqueCtrl", function ($route, $scope, $http, $location, crudesAPI, destaques) {
	$scope.destaques = destaques.data;

	$scope.editarDestaque = function (id) {
        $location.path('destaques/editarDestaque/' + id);
    };

	$scope.deletarDestaque = function (id) {
    	var answer = confirm("Deseja realmente excluir?");
    	if(answer){
    		crudesAPI.deleteDestaque(id).success(function (data){
    			$route.reload();
			});
    	}
    };
});