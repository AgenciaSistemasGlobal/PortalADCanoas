app.config(function($sceDelegateProvider) {
  $sceDelegateProvider.resourceUrlWhitelist([
    'self',
    'https://www.youtube.com/**'
  ]);
}).controller("homeCtrl", function ($rootScope, $timeout, $route, $scope, $http, $location, crudesAPI, destaques, noticias, slides, videos, projetos, artigos, eventos, agendas, jornais) {

  $rootScope.activetab = $location.path();

	$scope.slides    = slides.data;
	$scope.destaques = destaques.data;
	$scope.noticias  = noticias.data;
	$scope.videos    = videos.data;
	$scope.projetos  = projetos.data;
	$scope.artigos   = artigos.data;
  $scope.eventos   = eventos.data;
  $scope.agendas   = agendas.data;
  $scope.jornais   = jornais.data;

	$scope.CarouselPrev = function (id) {
    $('#myCarousel').carousel('prev');
  };

  $scope.CarouselNext = function (id) {
    $('#myCarousel').carousel('next');
  };

  $scope.getIframeSrc = function (src) {
    return 'https://www.youtube.com/embed/' + src + '?autoplay=0&showinfo=0&controls=0';
  };

  $timeout(function () {
    $(window).load(function(){
      $('.engloba-npgs').each(function(){
        var linha  = $(this).data('line');
        var height = 0;
        var el     = $('[data-line="' + linha + '"]');
        el.each(function(){
          var height_linha = $(this).height();
          if(height_linha > height){
            height = height_linha;
          }
        });
        el.height(height);
      });
    });
  });
});