app.controller("EventoCtrl", function ($route, $scope, $http, $location, crudesAPI, eventos) {
	$scope.eventos = eventos.data;

	$scope.editarEvento = function (id) {
        $location.path('eventos/editarEvento/' + id);
    };

	$scope.deletarEvento = function (id) {
    	var answer = confirm("Deseja realmente excluir?");
    	if(answer){
    		crudesAPI.deleteEvento(id).success(function (data){
    			$route.reload();
			});
    	}
    };
});