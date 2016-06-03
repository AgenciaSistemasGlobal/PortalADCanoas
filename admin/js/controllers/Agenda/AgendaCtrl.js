app.controller("Agenda2Ctrl", function ($route, $scope, $http, $location, crudesAPI, agendas) {
	$scope.agendas = agendas.data;

	$scope.editarAgenda = function (id) {
        $location.path('agenda/editarAgenda/' + id);
    };

	$scope.deletarAgenda = function (id) {
    	var answer = confirm("Deseja realmente excluir?");
    	if(answer){
    		crudesAPI.deleteAgenda(id).success(function (data){
    			$route.reload();
			});
    	}
    };
});