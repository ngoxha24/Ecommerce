//cart controller
app.controller("cartController", function ($scope, cartService) {
    $scope.cart = [];
    $scope.total = 0;
    $scope.totalItem = 0;
    $scope.cart = cartService.getCart();
    $scope.total = cartService.getTotal();
    $scope.totalItem = cartService.getTotalItem();
    console.log($scope.cart);
    $scope.removeItem = function (index) {
        cartService.removeItem(index);
        $scope.cart = cartService.getCart();
        $scope.total = cartService.getTotal();
        $scope.totalItem = cartService.getTotalItem();
    }
    $scope.updateItem = function (index, quantity) {
        cartService.updateItem(index, quantity);
        $scope.cart = cartService.getCart();
        $scope.total = cartService.getTotal();
        $scope.totalItem = cartService.getTotalItem();
    }
    $scope.checkout = function () {
        cartService.checkout();
        $scope.cart = cartService.getCart();
        $scope.total = cartService.getTotal();
        $scope.totalItem = cartService.getTotalItem();
    }
    $scope.addCart = function (item) {
        cartService.addCart(item);
        $scope.cart = cartService.getCart();
        $scope.total = cartService.getTotal();
        $scope.totalItem = cartService.getTotalItem();
    }
    $scope.updateCart = function (item) {
        cartService.updateCart(item);
        $scope.cart = cartService.getCart();
        $scope.total = cartService.getTotal();
        $scope.totalItem = cartService.getTotalItem();
    }
    $scope.deleteCart = function (item) {
        cartService.deleteCart(item);
        $scope.cart = cartService.getCart();
        $scope.total = cartService.getTotal();
        $scope.totalItem = cartService.getTotalItem();
    
    }

}
)
// Path: Assets/clientController.js
// Compare this snippet from Assets/clientController.js:
// // homeController
//
// app.controller("homeController", function ($scope, clientService) {
//     clientService.getAllType().then(function (res) {
//         $scope.listOfType = res.data;
// 