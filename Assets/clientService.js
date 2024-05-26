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