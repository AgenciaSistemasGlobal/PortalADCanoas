app.controller("DepartamentoCtrl", function ($scope, $http, $location, crudesAPI) {	
	$scope.response_upload_error = false;
	$scope.galerias = [{id: 'galeria1'}];
	$scope.count_inpt_galery = $scope.galerias.length;

	$scope.adicionarCampoImg = function () {
		var newItemNo = $scope.galerias.length+1;
		$scope.count_inpt_galery = $scope.galerias.length+1;
    	$scope.galerias.push({'id':'galeria'+newItemNo});
	}

	$scope.removeCampoImg = function() {
		var lastItem = $scope.galerias.length-1;
		$scope.count_inpt_galery = $scope.galerias.length-1;
		$scope.galerias.splice(lastItem);
	};

	$scope.adicionarDepartamento = function (departamento) {

		console.log(departamento)

		var fd = new FormData();
		for(var key in departamento)
			fd.append(key, departamento[key]);

		crudesAPI.saveDepartamento(fd).success(function (data){
			if(data === "SUCCESS"){
				$location.path('departamentos/');
			}else{
				$scope.response_upload_error = true;
			}
		})
	}
});