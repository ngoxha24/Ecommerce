// cart service G
app.service("cartSegvice", function ($http) {
    this.getCart = function () {
        var response = $http({
            method: 'get',
            url: 'cart/getcart',
        });
        return response;
    }
    this.getTotal = function () {
        var response = $http({
            method: 'get',
            url: 'cart/gettotal',
        });
        return response;
    }
    this.getTotalItem = function () {
        var response = $http({
            method: 'get',
            url: 'cart/gettotalitem',
        });
        return response;
    }
    this.removeItem = function (index) {
        var response = $http({
            method: 'post',
            url: 'cart/removeitem',
            data: {
                Index: index,
            }
        });
        return response;
    }
    this.updateItem = function (index, quantity) {
        var response = $http({
            method: 'post',
            url: 'cart/updateitem',
            data: {
                Index: index,
                Quantity: quantity,
            }
        });
        return response;
    }
    this.checkout = function () {
        var response = $http({
            method: 'post',
            url: 'cart/checkout',
        });
        return response;
    }
    this.addCart = function (item) {
        var response = $http({
            method: 'post',
            url: 'cart/addcart',
            data: {
                Item: item,
            }
        });
        return response;
    }
    this.updateCart = function (item) {
        var response = $http({
            method: 'post',
            url: 'cart/updatecart',
            data: {
                Item: item,
            }
        });
        return response;
    }
    this.deleteCart = function (item) {
        var response = $http({
            method: 'post',
            url: 'cart/deletecart',
            data: {
                Item: item,
            }
        });
        return response;
    }
})
