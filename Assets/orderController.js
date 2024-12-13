﻿//order controller
app.controller("orderControler", function ($scope, orderService) {
    $scope.order = [];
    $scope.total = 0;
    $scope.totalItem = 0;
    $scope.order = orderService.getOrder();
    $scope.total = orderService.getTotal();
    $scope.totalItem = orderService.getTotalItem();
    console.log($scope.order);
    $scope.removeItem = function (index) {
        orderService.removeItem(index);
        $scope.order = orderService.getOrder();
        $scope.total = orderService.getTotal();
        $scope.totalItem = orderService.getTotalItem();
    }
    $scope.updateItem = function (index, quantity) {
        orderService.updateItem(index, quantity);
        $scope.order = orderService.getOrder();
        $scope.total = orderService.getTotal();
        $scope.totalItem = orderService.getTotalItem();
    }
    $scope.checkout = function () {
        orderService.checkout();
        $scope.order = orderService.getOrder();
        $scope.total = orderService.getTotal();
        $scope.totalItem = orderService.getTotalItem();
    }
    
}
)

