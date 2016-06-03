app.controller("EditarAgenda2Ctrl", function ($route, $scope, $http, $location, $routeParams, agenda, crudesAPI) {
	$scope.agenda = {
	    id: agenda.data.id,
	    img: agenda.data.img,
	    titulo: agenda.data.titulo,
	    texto: agenda.data.texto,
	    data: agenda.data.data
	}

	$scope.response_upload_error = false;

	$scope.editarAgenda = function (agenda) {

		var fd = new FormData();
		for(var key in agenda)
			fd.append(key, agenda[key]);

		crudesAPI.saveAgenda(fd).success(function (data){
			if(data === "SUCCESS_EDIT"){
				$route.reload();
			}else{
				$scope.response_upload_error = true;
			}
		})
	}
});