app.controller("DepartamentosCtrl", function ($route, $scope, $http, $location, crudesAPI, departamentos, galerias) {
	$scope.departamentos = departamentos.data;
    $scope.galerias      = galerias.data;

	$scope.editarDepartamento = function (id) {
        $location.path('departamentos/editarDepartamento/' + id);
    };

    $scope.deletarDepartamento = function (id) {
    	var answer = confirm("Deseja realmente excluir?");
    	if(answer){
    		crudesAPI.deleteDepartamento(id).success(function (data){
    			$route.reload();
			});
    	}
    };

    $scope.CarouselPrev = function (id) {
        $('#myCarousel' + id).carousel('prev');
    };

    $scope.CarouselNext = function (id) {
        $('#myCarousel' + id).carousel('next');
    };
});