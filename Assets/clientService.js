﻿let app = angular.module("myApp", [])
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

app.service("itemService", function ($http) {
    this.getByKeyword = function (keyword) {
        var response = $http({
            method: 'get',
            url: 'product/getbykeyword',
            params: {
                Keyword: keyword,
            }
        });
        return response;
    }
    this.getItemType = function () {
        var response = $http({
            method: 'get',
            url: 'item/getitemtype'
        });
        return response;
    }
})

app.service("sellerService", function ($http) {
    var baseUrl = "/seller/";
    this.getSeller = function () {
        var response = $http({
            method: 'get',
            url: baseUrl + 'getseller',

        });
        return response;
    }
    this.getShop = function () {
        var response = $http({
            method: 'get',
            url: baseUrl + "getshop",


        });
        return response;
    }
    this.getItemList = function (keyword) {
        var response = $http({
            method: 'get',
            url: baseUrl + "getitemlist",
            params: {
                Keyword: keyword,
            }
        });
        return response;
    }
    this.getItemById = function (id) {
        var response = $http({
            method: 'get',
            url: baseUrl + 'getitembyid',
            params: {
                Id: id,
            }
        });
        return response;
    }
    this.addItem = function (itemdto) {
        var response = $http({
            method: 'post',
            url: baseUrl + 'additem',
            data: itemdto,
            dataType: 'json',
        });
        return response;
    }
    this.updateItem = function (item) {
        var response = $http({
            method: 'post',
            url: baseUrl + 'updateitem',
            data: item,
            dataType: 'json',
        });
        return response;
    }
    this.deleteItem = function (item) {
        var response = $http({
            method: 'post',
            url: baseUrl + 'deleteitem',
            data: item,
            dataType: 'json',
        });
        return response;
    }
    this.getCategoryList = function (itemid) {
        var response = $http({
            method: 'get',
            url: baseUrl + "getcategorylist",

        });
        return response;
    }

    this.getCategoryById = function (id) {
        var response = $http({
            method: 'get',
            url: baseUrl + "getcategorybyid",
        });
        return response;
    }
    this.addCategory = function (catedto) {
        var response = $http({
            method: 'post',
            url: baseUrl + 'addcategory',
            data: cateDto,
            dataType: 'json'
        });
        return response;
    }
    this.updateCategory = function (cate) {
        var response = $http({
            method: 'post',
            url: baseUrl + 'updatecategory',
            data: cate,
            dataType: 'json',
        });
        return response;

    }
    this.deleteCategory = function (cate) {
        var response = $http({
            method: 'post',
            url: baseUrl + 'deletecategory',
            data: cate,
            dataType: 'json',
        });
        return response;
    }

})