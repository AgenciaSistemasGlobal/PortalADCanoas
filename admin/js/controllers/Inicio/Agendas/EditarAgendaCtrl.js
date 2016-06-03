app.controller("EditarAgendaCtrl", function ($route, $scope, $http, $location, $routeParams, agenda, crudesAPI) {
	$scope.agenda = {
	    id: agenda.data.id,
	    dia: agenda.data.dia,
	    mes: agenda.data.mes,
	    ano: agenda.data.ano,
	    textoGrande: agenda.data.texto_grande,
	    textoMedio: agenda.data.texto_medio
	}

	$scope.response_upload_error = false;

	$scope.editarAgenda = function (agenda) {

		crudesAPI.saveAgendaMins(agenda).success(function (data){
			if(data === "SUCCESS_EDIT"){
				$route.reload();
			}else{
				$scope.response_upload_error = true;
			}
		})
	}
});