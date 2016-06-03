app.controller("ImagemCtrl", function ($route, $scope, $http, $location, crudesAPI, imagens) {
    $scope.galerias = imagens.data;

	$scope.editarImagem = function (id) {
        $location.path('imagens/editarImagem');
    };

    $scope.CarouselPrev = function (id) {
        $('#myCarousel').carousel('prev');
    };

    $scope.CarouselNext = function (id) {
        $('#myCarousel').carousel('next');
    };
});