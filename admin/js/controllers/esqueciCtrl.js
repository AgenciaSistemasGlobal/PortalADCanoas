app.controller("EsqueciController", function ($scope, $http, $location, $route) {
	var id_nova_senha = $('#token_inpt').val();

	$scope.novaSenha = function (novasenha) {
		var data = {
			id: id_nova_senha,
			nova_senha: novasenha.password
		}

		$http.post("../endpoints/novaSenha.php", data).success(function (response) {
			if(response === "SUCCESS_EDIT"){
				window.location.href = "../";
			}
		}).error(function (error) {
			console.error(error);
		});
	}

	var forgoutLiberado = function () {
		$http.get("../endpoints/listarEsqueci.php?id=" + id_nova_senha).success(function (response) {
			console.log(response.forgout)
			if (response.forgout=="0") {
				window.location.href = "../?redefinicao-expirou";
			}
		}).error(function (error) {
			console.error(error);
		});
	}

	forgoutLiberado();
});