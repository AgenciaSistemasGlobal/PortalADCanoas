app.service("AuthenticationService", ["$http", function ($http) {
	var self = this;
	self.checkToken = function(token, cb){
		var data = {token: token};
		$http.post("../endpoints/checkToken.php", data).success(function (response) {
			if(response === "unauthorized"){
				window.location.href = "../";
			}else{
				return response;
			}
		}).error(function (error){
			window.location.href = "../";
		})
		if(cb){
			cb;	
		}
	}
}])