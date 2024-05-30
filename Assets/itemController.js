app.controller("itemController", function ($scope, itemService) {
    let temp = document.getElementById("productid");
    $scope.itemId = temp.getAttribute('data-title');
    $scope.currentCate = 0;
    console.log($scope.itemId);
    
    //Initalize
    itemService.getById($scope.itemId).then(function (res) {
        $scope.Item = res.data
        $scope.Detail = $scope.Item.ItemDescription.split("\\n");
        console.log(res.data);
        $scope.Description = $scope.Item.ItemFooterDescription.split("\n");
        
    });
    itemService.getCategories($scope.itemId).then(function (res) {
        $scope.Categories = res.data;
        console.log(res.data);
    });
    itemService.getShop($scope.itemId).then(function (res) {
        $scope.Shop = res.data;
        console.log(res.data);
    });
    $scope.onChange = function (index) {
        console.log(index);
        $scope.currentCate = index;
    }
    
})