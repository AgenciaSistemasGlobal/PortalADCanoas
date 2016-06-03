app.controller("MainController", function ($scope, $http, AuthenticationService) {

	var token;
	if (localStorage['token']){
		token = JSON.parse(localStorage['token']);
	}else{
		token = "somethin stupid";
	}

	AuthenticationService.checkToken(token);

	$scope.logout = function() {
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

	$scope.datepickerOptions = {
        format: 'yyyy-mm-dd',
        language: 'fr',
        startDate: "2012-10-01",
        endDate: "2012-10-31",
        autoclose: true,
        weekStart: 0
    }
})