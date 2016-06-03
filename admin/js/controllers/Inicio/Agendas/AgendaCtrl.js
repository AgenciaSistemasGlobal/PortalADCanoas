app.controller("AgendaCtrl", function ($route, $scope, $http, $location, crudesAPI, agendas) {
	$scope.agendas = agendas.data;

	$scope.editarAgenda = function (id) {
        $location.path('agenda-ministerial/editarData/' + id);
    };

	$scope.deletarAgenda = function (id) {
    	var answer = confirm("Deseja realmente excluir?");
    	if(answer){
    		crudesAPI.deleteAgendaMins(id).success(function (data){
    			$route.reload();
			});
    	}
    };
});