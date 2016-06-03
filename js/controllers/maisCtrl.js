app.controller("maisCtrl", function ($route, $scope, $http, $location, crudesAPI, mais) {

	$scope.fetchAll = false;
	$scope.fetch    = false;
	if($route.current.params.id == 'all'){
		$scope.mais_all = mais.data;
		$scope.fetchAll = true;
	}else{
		$scope.mais_one = mais.data;
		$scope.fetch    = true;
	}

    $scope.go = function (route) {
        $location.path(route);
    }

    $scope.doTheBack = function() {
	  window.history.back();
	};

	$scope.getIframeSrc = function (src) {
		return 'https://www.youtube.com/embed/' + src + '?autoplay=0&showinfo=0&controls=0';
	};
});