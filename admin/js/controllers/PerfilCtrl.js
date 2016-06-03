app.controller("PerfilCtrl", function ($scope, $http, $location, crudesAPI, dados, $route) {

    $scope.dados = {
    	first: String(dados.data.nome).charAt(0),
    	nome: dados.data.nome,
    	email: dados.data.email,
    	id: dados.data.id
    }

    var logout = function() {
		var data = {
			token: token
		}

		$http.post("../endpoints/logout.php", data).success(function (response) {
			localStorage.clear();
			window.location.href = "../";
		}).error(function (error) {
			console.error(error);
		})
	}

	$scope.editPerfil = function (dados) {
		$http.post("../endpoints/editUser.php", dados).success(function (response) {
			if(response === "EDIT_PASS"){
				logout();
			}else{
				$route.reload();
			}
		}).error(function (error) {
			console.error(error);
		});
	}
});