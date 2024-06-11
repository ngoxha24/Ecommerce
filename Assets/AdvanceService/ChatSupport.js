//Chat Support
let app = angular.module("myApp", []);
app.service("chatService", function ($http) {
    this.getChat = function () {
        var response = $http({
            method: 'get',
            url: "chat/getchat",
        });
        return response;
    };
    this.sendChat = function (chat) {
        var response = $http({
            method: 'post',
            url: "chat/sendchat",
            data: chat,
            dataType: "json",
        });
        return response;
    };
    this.getChat();
});