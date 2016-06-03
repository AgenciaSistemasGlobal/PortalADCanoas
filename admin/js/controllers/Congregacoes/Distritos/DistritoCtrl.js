app.controller("DistritoCtrl", function ($route, $scope, $http, $location, crudesAPI, distritos) {
	$scope.distritos = distritos.data;

	$scope.editarDistrito = function (id) {
        $location.path('distritos/editarDistrito/' + id);
    };

	$scope.deletarDistrito = function (id) {
    	var answer = confirm("Deseja realmente excluir?");
    	if(answer){
    		crudesAPI.deleteDistrito(id).success(function (data){
    			$route.reload();
			});
    	}
    };
});