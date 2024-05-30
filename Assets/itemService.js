let app = angular.module("myApp", []);
app.service("itemService", function ($http) {
    this.getById = function (id) {
        var response = $http({
            method: 'get',
            url: "product/getbyid",
            params: {
                Id: id,
            }
        });
        return response
    };
    this.getCategories = function (id) {
        var response = $http({
            method: 'get',
            url: "product/getcategory",
            params: {
                ItemId: id,
            }
        });
        return response
    };
    this.getShop = function (id) {
        var response = $http({
            method: 'get',
            url: "product/getshop",
            params: {
                Id: id,
            }
        });
        return response
    };

})