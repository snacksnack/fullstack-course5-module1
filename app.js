(function () {
  'use strict';

  angular.module('LunchCheck',[])
  .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];
  function LunchCheckController($scope) {
    $scope.items = "";
    $scope.message = "";
    $scope.fontColor = "";
    $scope.textBox = "";
    

    $scope.validateInput = function(items) {
      var items = items.split(",");
      var validItems = [];

      for (var i in items) {
        items[i] = items[i].trim();
        if (items[i] != "") {
          validItems.push(items[i]);
        }
      }
      return validItems;
    };
    
    $scope.howMuch = function () {
      var items = $scope.items
      if (items == "") {
        $scope.textBox = "red";
        return $scope.message = "Please enter a comma separated list of items!";
      }
      
      var validItems = $scope.validateInput(items);
      var count = validItems.length;
      if (count <= 3){
        $scope.fontColor = "green";
        $scope.message = "Enjoy!";
      } else {
        $scope.fontColor = "red";
        $scope.message = "Too much!";
      }
    };
  }
})();