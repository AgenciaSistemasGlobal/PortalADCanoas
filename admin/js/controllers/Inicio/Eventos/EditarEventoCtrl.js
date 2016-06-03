app.controller("EditarEventoCtrl", function ($route, $scope, $http, $location, $routeParams, evento, crudesAPI) {
	$scope.evento = {
	    id: evento.data.id,
	    dia: evento.data.dia,
	    mes: evento.data.mes,
	    ano: evento.data.ano,
	    textoGrande: evento.data.texto_grande,
	    textoMedio: evento.data.texto_medio
	}

	$scope.response_upload_error = false;

	$scope.editarEvento = function (evento) {

		crudesAPI.saveEvento(evento).success(function (data){
			if(data === "SUCCESS_EDIT"){
				$route.reload();
			}else{
				$scope.response_upload_error = true;
			}
		})
	}
});