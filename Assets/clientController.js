// homeController

app.controller("homeController", function ($scope, clientService) {
    clientService.getAllType().then(function (res) {
        $scope.listOfType = res.data;
        console.log(res.data);
    })
    clientService.getDiscountList().then(function (res) {
        $scope.discountList = res.data;
        console.log(res.data);
    })
    clientService.getItemList().then(function (res) {
        $scope.listItems = res.data;
    })
    
})