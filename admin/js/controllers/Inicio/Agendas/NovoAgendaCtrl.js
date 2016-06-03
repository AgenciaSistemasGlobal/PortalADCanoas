app.controller("NovoAgendaCtrl", function ($route, $scope, $http, $location, crudesAPI) {
	$scope.response_upload_error = false;

	$scope.adicionarAgenda = function (agenda) {

		crudesAPI.saveAgendaMins(agenda).success(function (data){
			if(data === "SUCCESS"){
				$location.path('agenda-ministerial/');
			}else{
				$scope.response_upload_error = true;
			}
		})
	}
});