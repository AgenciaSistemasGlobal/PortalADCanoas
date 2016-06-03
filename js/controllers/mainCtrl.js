app.controller("mainCtrl", function ($route, $scope, $http, $location, crudesAPI) {
    $scope.go = function (route) {
        $location.path(route);
    }
});