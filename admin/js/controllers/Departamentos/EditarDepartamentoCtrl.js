app.controller("EditarDepartamentoCtrl", function ($route, $scope, $http, $location, $routeParams, departamento, galeriass, crudesAPI) {

	$scope.galeriass = galeriass.data;
	
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

	$scope.departamento = {
	    id: departamento.data.id,
	    nome: departamento.data.nome,
	    sobre: departamento.data.sobre,
	    facebook: departamento.data.facebook,
	    img_lider: departamento.data.foto_lider,
	    nome_lider: departamento.data.nome_lider
	}

	$scope.response_upload_error = false;

	$scope.editarDepartamento = function (departamento) {

		var fd = new FormData();
		for(var key in departamento)
			fd.append(key, departamento[key]);

		crudesAPI.saveDepartamento(fd).success(function (data){
			if(data === "SUCCESS_EDIT"){
				$route.reload();
			}else{
				$scope.response_upload_error = true;
			}
		})
	}

	$scope.CarouselPrev = function (id) {
        $('#myCarousel' + id).carousel('prev');
    }

    $scope.CarouselNext = function (id) {
        $('#myCarousel' + id).carousel('next');
    }

    $scope.deleteImgExistenteGaleria = function (id) {
    	var answer = confirm("Deseja realmente excluir?");
    	if(answer){
    		crudesAPI.deleteImgExistenteGaleria(id).success(function (){
				$route.reload();
			});
    	}
    }
});