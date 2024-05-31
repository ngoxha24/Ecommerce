// homeController

app.controller("homeController", function ($scope, clientService) {
    clientService.getAllType().then(function (res) {
        $scope.listOfType = res.data;
       
    })
    clientService.getDiscountList().then(function (res) {
        $scope.discountList = res.data;
       
    })
    clientService.getItemList().then(function (res) {
        $scope.itemList = res.data;
        console.log(res.data)

    })
    
})

app.controller("infoController", function ($scope, infoService) {
    infoService.getUser().then(function (res) {
        $scope.User = res.data;
        console.log($scope.User)
        $scope.User.DOB = $scope.formatDOB($scope.User.DOB);
    })
    

    $scope.updateUser = function () {
        console.log($scope.User);
        infoService.updateUser($scope.User).then(function (res) {
            console.log(res.data);
            infoService.getUser().then(function (res) {
                $scope.User = res.data;
                
            })
        })
    }
    $scope.formatDOB = function (dob) {
        return dob.split("T")[0];
    }
})
app.controller("itemController", function ($scope, itemService) {
    let keyword = document.getElementById("data").getAttribute('data-title');
    console.log(keyword)
    //Initalize
    itemService.getItemType().then(function (res) {
        $scope.itemTypes = res.data;
    })
    itemService.getByKeyword(keyword).then(function (res) {
        $scope.itemList = res.data;
        console.log(res.data);
    })


})