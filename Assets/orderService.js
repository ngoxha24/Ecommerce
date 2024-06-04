//Order service G
app.service("orderService", function ($http) {
    this.getOrder = function () {
        var response = $http({
            method: 'get',
            url: 'order/getorder',
        });
        return response;
    }
    this.getTotal = function () {
        var response = $http({
            method: 'get',
            url: 'order/gettotal',
        });
        return response;
    }
    this.getTotalItem = function () {
        var response = $http({
            method: 'get',
            url: 'order/gettotalitem',
        });
        return response;
    }
    this.removeItem = function (index) {
        var response = $http({
            method: 'post',
            url: 'order/removeitem',
            data: {
                Index: index,
            }
        });
        return response;
    }
    this.updateItem = function (index, quantity) {
        var response = $http({
            method: 'post',
            url: 'order/updateitem',
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
            url: 'order/checkout',
        });
        return response;
    }
    this.addOrder = function (item) {
        var response = $http({
            method: 'post',
            url: 'order/addorder',
            data: {
                Item: item,
            }
        });
        return response;
    }
    this.updateOrder = function (item) {
        var response = $http({
            method: 'post',
            url: 'order/updateorder',
            data: {
                Item: item,
            }
        });
        return response;
    }
    this.deleteOrder = function (item) {
        var response = $http({
            method: 'post',
            url: 'order/deleteorder',
            data: {
                Item: item,
            }
        });
        return response;
    }
    //option G
    this.getOption = function () {
        var response = $http({
            method: 'get',
            url: 'order/getoption',
        });
        return response;
    }
    this.addOption = function (item) {
        var response = $http({
            method: 'post',
            url: 'order/addoption',
            data: {
                Item: item,
            }
        });
        return response;
    }
    this.updateOption = function (item) {
        var response = $http({
            method: 'post',
            url: 'order/updateoption',
            data: {
                Item: item,
            }
        });
        return response;
    }
    this.deleteOption = function (item) {
        var response = $http({
            method: 'post',
            url: 'order/deleteoption',
            data: {
                Item: item,
            }
        });
        return response;
    }
    // customer G
    this.getCustomer = function () {
        var response = $http({
            method: 'get',
            url: 'order/getcustomer',
        });
        return response;
    }
    this.addCustomer = function (item) {
        var response = $http({
            method: 'post',
            url: 'order/addcustomer',
            data: {
                Item: item,
            }
        });
        return response;
    }
    this.updateCustomer = function (item) {
        var response = $http({
            method: 'post',
            url: 'order/updatecustomer',
            data: {
                Item: item,
            }
        });
        return response;
    }
    this.deleteCustomer = function (item) {
        var response = $http({
            method: 'post',
            url: 'order/deletecustomer',
            data: {
                Item: item,
            }
        });
        return response;
    }
    // order detail G
    this.getOrderDetail = function () {
        var response = $http({
            method: 'get',
            url: 'order/getorderdetail',
        });
        return response;
    }
    this.addOrderDetail = function (item) {
        var response = $http({
            method: 'post',
            url: 'order/addorderdetail',
            data: {
                Item: item,
            }
        });
        return response;
    }
    this.updateOrderDetail = function (item) {
        var response = $http({
            method: 'post',
            url: 'order/updateorderdetail',
            data: {
                Item: item,
            }
        });
        return response;
    }
    this.deleteOrderDetail = function (item) {
        var response = $http({
            method: 'post',
            url: 'order/deleteorderdetail',
            data: {
                Item: item,
            }
        });
        return response;
    }
    // order status G
    this.getOrderStatus = function () {
        var response = $http({
            method: 'get',
            url: 'order/getorderstatus',
        });
        return response;
    }
    this.addOrderStatus = function (item) {
        var response = $http({
            method: 'post',
            url: 'order/addorderstatus',
            data: {
                Item: item,
            }
        });
        return response;
    }
    this.updateOrderStatus = function (item) {
        var response = $http({
            method: 'post',
            url: 'order/updateorderstatus',
            data: {
                Item: item,
            }
        });
        return response;
    }
    this.deleteOrderStatus = function (item) {
        var response = $http({
            method: 'post',
            url: 'order/deleteorderstatus',
            data: {
                Item: item,
            }
        });
        return response;
    }
    // order type G
    this.getOrderType = function () {
        var response = $http({
            method: 'get',
            url: 'order/getordertype',
        });
        return response;
    }
    this.addOrderType = function (item) {
        var response = $http({
            method: 'post',
            url: 'order/addordertype',
            data: {
                Item: item,
            }
        });
        return response;
    }
    this.updateOrderType = function (item) {
        var response = $http({
            method: 'post',
            url: 'order/updateordertype',
            data: {
                Item: item,
            }
        });
        return response;
    }
    this.deleteOrderType = function (item) {
        var response = $http({
            method: 'post',
            url: 'order/deleteordertype',
            data: {
                Item: item,
            }
        });
        return response;
    }
    // payment G
    this.getPayment = function () {
        var response = $http({
            method: 'get',
            url: 'order/getpayment',
        });
        return response;
    }
    this.addPayment = function (item) {
        var response = $http({
            method: 'post',
            url: 'order/addpayment',
            data: {
                Item: item,
            }
        });
        return response;
    }
    this.updatePayment = function (item) {
        var response = $http({
            method: 'post',
            url: 'order/updatepayment',
            data: {
                Item: item,
            }
        });
        return response;
    }
    this.deletePayment = function (item) {
        var response = $http({
            method: 'post',
            url: 'order/deletepayment',
            data: {
                Item: item,
            }
        });
        return response;
    }
    // shipping G
    this.getShipping = function () {
        var response = $http({
            method: 'get',
            url: 'order/getshipping',
        });
        return response;
    }
    this.addShipping = function (item) {
        var response = $http({
            method: 'post',
            url: 'order/addshipping',
            data: {
                Item: item,
            }
        });
        return response;
    }

    this.updateShipping = function (item) {
        var response = $http({
            method: 'post',
            url: 'order/updateshipping',
            data: {
                Item: item,
            }
        });
        return response;
    }
    this.deleteShipping = function (item) {
        var response = $http({
            method: 'post',
            url: 'order/deleteshipping',
            data: {
                Item: item,
            }
        });
        return response;
    }
    // shipping status G
    this.getShippingStatus = function () {
        var response = $http({
            method: 'get',
            url: 'order/getshippingstatus',
        });
        return response;
    }
    this.addShippingStatus = function (item) {
        var response = $http({
            method: 'post',
            url: 'order/addshippingstatus',
            data: {
                Item: item,
            }
        });
        return response;
    }
    this.updateShippingStatus = function (item) {
        var response = $http({
            method: 'post',
            url: 'order/updateshippingstatus',
            data: {
                Item: item,
            }
        });
        return response;
    }
    this.deleteShippingStatus = function (item) {
        var response = $http({
            method: 'post',
            url: 'order/deleteshippingstatus',
            data: {
                Item: item,
            }
        });
        return response;
    }
    // shipping type G
    this.getShippingType = function () {
        var response = $http({
            method: 'get',
            url: 'order/getshippingtype',
        });
        return response;
    }
    this.addShippingType = function (item) {
        var response = $http({
            method: 'post',
            url: 'order/addshippingtype',
            data: {
                Item: item,
            }
        });
        return response;
    }
    this.updateShippingType = function (item) {
        var response = $http({
            method: 'post',
            url: 'order/updateshippingtype',
            data: {
                Item: item,
            }
        });
        return response;
    }
    this.deleteShippingType = function (item) {
        var response = $http({
            method: 'post',
            url: 'order/deleteshippingtype',
            data: {
                Item: item,
            }
        });
        return response;
    }
    // transaction G
    this.getTransaction = function () {
        var response = $http({
            method: 'get',
            url: 'order/gettransaction',
        });
        return response;
    }
    this.addTransaction = function (item) {
        var response = $http({
            method: 'post',
            url: 'order/addtransaction',
            data: {
                Item: item,
            }
        });
        return response;
    }
    this.updateTransaction = function (item) {
        var response = $http({
            method: 'post',
            url: 'order/updatetransaction',
            data: {
                Item: item,
            }
        });
        return response;
    }
    this.deleteTransaction = function (item) {
        var response = $http({
            method: 'post',
            url: 'order/deletetransaction',
            data: {
                Item: item,
            }
        });
        return response;
    }
    // transaction status G
    this.getTransactionStatus = function () {
        var response = $http({
            method: 'get',
            url: 'order/gettransactionstatus',
        });
        return response;
    }
    this.addTransactionStatus = function (item) {
        var response = $http({
            method: 'post',
            url: 'order/addtransactionstatus',
            data: {
                Item: item,
            }
        });
        return response;
    }
    this.updateTransactionStatus = function (item) {
        var response = $http({
            method: 'post',
            url: 'order/updatetransactionstatus',
            data: {
                Item: item,
            }
        });
        return response;
    }
    this.deleteTransactionStatus = function (item) {
        var response = $http({
            method: 'post',
            url: 'order/deletetransactionstatus',
            data: {
                Item: item,
            }
        });
        return response;
    }
    // transaction type G
    this.getTransactionType = function () {
        var response = $http({
            method: 'get',
            url: 'order/gettransactiontype',
        });
        return response;
    }
    this.addTransactionType = function (item) {
        var response = $http({
            method: 'post',
            url: 'order/addtransactiontype',
            data: {
                Item: item,
            }
        });
        return response;
    }
    this.updateTransactionType = function (item) {
        var response = $http({
            method: 'post',
            url: 'order/updatetransactiontype',
            data: {
                Item: item,
            }
        });
        return response;
    }
    this.deleteTransactionType = function (item) {
        var response = $http({
            method: 'post',
            url: 'order/deletetransactiontype',
            data: {
                Item: item,
            }
        });
        return response;
    }

}
)