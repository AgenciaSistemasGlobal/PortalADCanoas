app.controller("departamentosCtrl", function ($rootScope, $route, $scope, $http, $location, crudesAPI, departamentos, galerias) {
	
	$rootScope.activetab = $location.path();

	$scope.departamentos = departamentos.data;
    $scope.galerias      = galerias.data;

    $scope.CarouselPrev = function (id) {
        $('#myCarousel' + id).carousel('prev');
    };

    $scope.CarouselNext = function (id) {
        $('#myCarousel' + id).carousel('next');
    };
});