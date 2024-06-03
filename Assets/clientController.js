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


    })

})
//

app.controller("infoController", function ($scope, infoService) {
    infoService.getUser().then(function (res) {
        $scope.User = res.data;

        $scope.User.DOB = $scope.formatDOB($scope.User.DOB);
    })

    $scope.updateUser = function () {

        infoService.updateUser($scope.User).then(function (res) {

            infoService.getUser().then(function (res) {
                $scope.User = res.data;

            })
        })
    }
    $scope.formatDOB = function (dob) {
        if (dob == null) {
            return dob;
        }
        else return dob.split("T")[0];
    }
    $scope.formatDate = function (date) {
        if (date == null) {
            return date;
        }

        else {
            var date_split = date.split("T");
            var hours = date_split[1].split(":");
            var result = date_split[0] + " " + hours[0] + ":" + hours[1];
            return result;
        }

    }

    //Register

    infoService.getShop().then(function (res) {
        $scope.myShop = res.data;

        if ($scope.myShop == undefined || $scope.myShop == 'null') {

            $scope.myShop =
            {
                Address: "",
                PhoneNumber: "",
                Description: "",
                InfoUrl: "",
                CreatedTime: null,
            };
        }
        $scope.myShop.CreatedTime = $scope.formatDate($scope.myShop.CreatedTime)
        console.log($scope.myShop);
    })

    function Register() {
        if ($scope.myShop.InfoUrl == "") {
            $scope.myShop.InfoUrl = "bit.ly";
        }
        infoService.registerShop($scope.myShop.Address, $scope.myShop.PhoneNumber, $scope.myShop.Description, $scope.myShop.Detail, $scope.myShop.InfoUrl).then(function (res) {
            console.log(res.data);
            infoService.getShop().then(function (res) {
                $scope.myShop = res.data;


            })
        })
    }
    function deleteRegister() {
        infoService.deleteRegister($scope.myShop).then(function (res) {
            console.log(res.data);
            infoService.getShop().then(function (res) {
                $scope.myShop = res.data;
                console.log(res.data);
            })
        })
    }

    //Open notice
    let noticePane = document.getElementById("notice");
    noticePane.style.display = "none";
    $scope.Notice =
    {
        Notice: "0",
        Number: 1,
    };
    $scope.openNotice = function (button) {
        noticePane.style.display = "block";
        console.log(123);
        console.log($scope.myShop);
        if (button.id == "option1") {
            $scope.Notice.Detail = "Bạn chắc chắn muốn gửi đơn đăng ký này không ?"
            $scope.Notice.Number = 1;
            return;
        }
        if (button.id == "option2") {
            $scope.Notice.Detail = "Bạn chắc chắn muốn thay đổi thông tin đăng ký ?"
            $scope.Notice.Number = 1;
            return;
        }
        $scope.Notice.Detail = "Bạn chắc chắc muốn hủy đơn đăng ký này ?"
        $scope.Notice.Number = 3;
    }
    $scope.closeNotice = function () {
        noticePane.style.display = "none";
    }
    $scope.Accept = function () {
        if ($scope.Notice.Number == 1) {
            Register();
            $scope.closeNotice()
            return;
        }

        if ($scope.Notice.Number == 3) {
            deleteRegister();
            $scope.closeNotice()
        }
    }

})

//
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