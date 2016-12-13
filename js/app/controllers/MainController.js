function MainController($scope) {
  $scope.name = "Bob";
  $scope.email = "bob@example.com";
  $scope.phone = "1234567890"
}

angular.module('app').controller('MainController', MainController);
