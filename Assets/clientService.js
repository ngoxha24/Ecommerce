let app = angular.module("myApp", [])
app.service("clientService", function ($http) {
    this.getAllType = function () {
        let res = $http({
            method: 'get',
            url: '/item/listtype',
            params: {}

        });
        return res;
    }
    this.getDiscountList = function () {
        let res = $http({
            method: 'get',
            url: 'item/discount',
            params: {},
        });
        return res;
    }
    this.getItemList = function () {
        let res = $http({
            method: 'get',
            url: 'item/getlist',
        });
        return res;
    }
    
});

app.service("infoService", function ($http) {
    this.getUser = function () {
        var response = $http({
            method: 'get',
            url: "info/getuser"
        });
        return response;
    }
    this.updateUser = function (user) {
        var response = $http({
            method: 'post',
            url: "info/updateuser",
            data: user,
            dataType: "json",
        });
        return response;

    }
    this.getShop = function () {
        var response = $http({
            method: 'get',
            url: 'info/getshop'
        });
        return response;
    }
    this.registerShop = function (address, phonenumber, description, detail, infourl) {
        var response = $http({
            method: 'post',
            url: 'info/registershop',
            params: {
                Address: address,
                PhoneNumber: phonenumber,
                Description: description,
                Detail: detail,
                InfoUrl: infourl,
            }

        });
        return response;
    }
    this.deleteRegister = function (shop) {
        var response = $http({
            method: 'post',
            url: 'info/deleteregister',
            data: shop,
            dataType: 'json',
        });
        return response;
    }
})

app.service("ItemService", function ($http) {

})