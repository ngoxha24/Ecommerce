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

    // This function is called when the user clicks the "Add to Cart" button G
    $scope.addToCart = function (item) {
        itemService.addToCart(item);
    }
    $scope.buyNow = function (item) {
        itemService.buyNow(item);
    }
    $scope.changeQuantity = function (item) {
        itemService.changeQuantity(item);
    }
    $scope.removeItem = function (item) {
        itemService.removeItem(item);
    }
    $scope.getCart = function () {
        itemService.getCart();
    }
    $scope.checkout = function () {
        itemService.checkout();
    }

    $scope.getCart();

    // This function is called when the user clicks the "Add to Wishlist" button G
    $scope.addToWishlist = function (item) {
        itemService.addToWishlist(item);
    }
    $scope.getWishlist = function () {
        itemService.getWishlist();
    }
    $scope.getWishlist();
    $scope.removeFromWishlist = function (item) {
        itemService.removeFromWishlist(item);
    }
    $scope.getWishlist();
    
})