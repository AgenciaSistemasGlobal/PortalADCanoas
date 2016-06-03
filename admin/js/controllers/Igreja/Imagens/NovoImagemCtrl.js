app.controller("NovoImagemCtrl", function ($route, $scope, $http, $location, crudesAPI) {
	$scope.response_upload_error = false;
	$scope.galerias = [{id: 'galeria1'}];
	$scope.count_inpt_galery = $scope.galerias.length;
	$scope.imagem = {
		nome: 'a'
	};

	$scope.adicionarCampoImg = function () {
		var newItemNo = $scope.galerias.length+1;
		$scope.count_inpt_galery = $scope.galerias.length+1;
    	$scope.galerias.push({'id':'galeria'+newItemNo});
	};

	$scope.removeCampoImg = function() {
		var lastItem = $scope.galerias.length-1;
		$scope.count_inpt_galery = $scope.galerias.length-1;
		$scope.galerias.splice(lastItem);
	};

	$scope.adicionarImagem = function (imagem) {

		var fd = new FormData();
		for(var key in imagem)
			fd.append(key, imagem[key]);

		console.log(imagem)

		crudesAPI.saveImagem(fd).success(function (data){
			if(data === "SUCCESS"){
				$location.path('imagens/');
			}else{
				$scope.response_upload_error = true;
			}
		})
	}
});