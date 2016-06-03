app.controller("LoginController", function ($scope, $http, $location, $route) {
	
	// Variables
	$scope.signUpInfo = {
		nome: undefined,
		email_cadastro: undefined,
		senha_cadastro: undefined
	}

	$scope.loginInfo = {
		username: undefined,
		password: undefined
	}

    $scope.login_error = false;

	// Functions
	$scope.signUserUp = function () {
		var data = {
			nome: $scope.signUpInfo.nome,
			email_cadastro: $scope.signUpInfo.email_cadastro,
			senha_cadastro: $scope.signUpInfo.senha_cadastro,
			titulo: 'Você ganhou uma conta no portal de Igrejas :D',
			texto: 'Olá ' + $scope.signUpInfo.nome + ' esta é uma mensagem automatica sim! Mas, desejamos que poste conteúdos para ter um portal de sucesso. Abaixo estão os dados de login e senha para entrar no <a href="http://sistemasglobal.com.br/adcanoas/admin"><b>Gerenciador de Conteúdos - Portal ADCanoas</b></a> <br /><br /> <b>Login:</b> ' + $scope.signUpInfo.email_cadastro + ' <br /><b>Senha:</b> ' + $scope.signUpInfo.senha_cadastro + ' <br /><br /> Esta senha é provisória! Depois você poderá altera-la. Desejamos um bom uso da ferramenta, podes responder para esse e-mail que vos manda mesmo, estamos online :)'
		}

		$http.post("../endpoints/signup.php", data).success(function (res) {

			if(!res){
				// Email ja existe
				$scope.login_error = true;
				$('form')[0].reset();
			}else{
				// Enviar por email
				$http.post("../endpoints/phpmailer/config.php", data).success(function (response) {
					$location.path('novosUsuarios/sucesso');
				}).error(function (error) {
					console.error(error);
				});
			}
		}).error(function (error) {
			console.error(error)
		});
	};

	$scope.loginUser = function () {
		var data = {
			username: $scope.loginInfo.username,
			password: $scope.loginInfo.password
		}

		$http.post("endpoints/login.php", data).success(function (response) {
			response = response.replace('"', '');
			localStorage.setItem("token", JSON.stringify(response));
			if(response === 'ERROR'){
				$scope.login_error = true;
			}else{
				//$state.go("aplication", result);
				window.location.href = "pages/";
			}
		}).error(function (error) {
			console.error(error);
		});
	}

	$scope.esqueci_error = false;
	$scope.esqueci_ok = false;
	$scope.esqueciSenha = function (email) {
		$http.post("endpoints/esqueci.php", email).success(function (response) {
			if(response !== "EXISTED"){
				var data = {
					nome: response[0].nome,
					email_cadastro: email.email,
					token: response[0].id,
					titulo: 'Vamos redefinir sua senha?',
					texto: '<p>Olá ' + response[0].nome + ', clique no link abaixo, para redifinir sua senha: </p><p><a href="http://localhost/adcanoas/admin/esqueci/index.php?token=' + response[0].id + '" target="_blank">http://sistemasglobal/adcanoas/admin/esqueci</a></p><p>Caso tenha alguma dúvida, ou precisa de suporte, basta responder este e-mail.</p>'
				}
				$http.post("endpoints/phpmailer/config.php", data).success(function (response) {
					$scope.esqueci_ok = true;
					$scope.esqueci_error = false;
				}).error(function (error) {
					console.error(error);
				});
			}else{
				$scope.esqueci_error = true;
				$scope.esqueci_ok = false;
			}
		}).error(function (error) {
			console.error(error);
		});	
	}
	$scope.cancelModal = function () {
		$scope.esqueci_error = false;
		$scope.esqueci_ok = false;
		$('form[name="formModal"]')[0].reset();
	}

	var url = window.location.href;
	$scope.token_expirou = false;
	if(url.indexOf("?redefinicao-expirou") != -1){
		$scope.token_expirou = true;
	}
});