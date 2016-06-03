app.controller("EditarImagemCtrl", function ($route, $scope, $http, $location, $routeParams, imagens, crudesAPI) {

	$scope.galeriass = imagens.data;

	$scope.galerias = [{id: 'galeria1'}];
	$scope.count_inpt_galery = $scope.galerias.length;

	$scope.imagem = {
		nome: 'a'
	};

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

	$scope.response_upload_error = false;

	$scope.editarImagem = function (imagem) {

		var fd = new FormData();
		for(var key in imagem)
			fd.append(key, imagem[key]);

		crudesAPI.saveImagem(fd).success(function (data){
			if(data === "SUCCESS"){
				$route.reload();
			}else{
				$scope.response_upload_error = true;
			}
		})
	}

	$scope.deletarImagem = function (id) {
    	var answer = confirm("Deseja realmente excluir?");
    	if(answer){
    		crudesAPI.deleteImagem(id).success(function (){
				$route.reload();
			});
    	}
    }

	$scope.CarouselPrev = function (id) {
        $('#myCarousel').carousel('prev');
    }

    $scope.CarouselNext = function (id) {
        $('#myCarousel').carousel('next');
    }
});