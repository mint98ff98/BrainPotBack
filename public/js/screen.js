//<summary>디스플레이 해상도에 따른 컴포넌트 사이즈 조정</summary>

var screen = window.screen;
<<<<<<< HEAD
var resolution;
console.log("screen width : " + screen.width + ", height : " + screen.height);
=======
>>>>>>> refs/remotes/origin/master

$(document).ready(function () {
    //FHD인 경우
    if (screen.width >= 1820 && screen.width <= 2020) {
        resolution = "FHD";
        //메인 슬라이더 사이즈
        $('.slider').height(980);
        $('.slides').height(950);

        //브레인 필드 사이즈
        $("#brain_field_1").attr("width", 1418);
        $("#brain_field_2").attr("width", 1418);
        $("#brain_field_3").attr("width", 1418);
        $("#brain_field_4").attr("width", 1418);
        $("#brain_field_5").attr("width", 1418);
        $("#brain_field_1").attr("height", 870);
        $("#brain_field_2").attr("height", 870);
        $("#brain_field_3").css("height", 870);
        $("#brain_field_4").css("height", 870);
        $("#brain_field_5").attr("height", 870);
        $("#brain_chatList").css("height", 274 + 310);

        //채팅 내용 전송 버튼 사이즈
        $("#chat_send").removeClass("btn");
        $("#chat_send").addClass("btn-large");
    }
    //HD인 경우
    else if (screen.width >= 1266 && screen.width <= 1466) {
        resolution = "HD";
        //메인 슬라이더 사이즈
        $('.slider').height(670);
        $('.slides').height(640);

        //브레인 필드 사이즈
        $("#brain_field_1").attr("width", 1002);
        $("#brain_field_2").attr("width", 1002);
        $("#brain_field_3").attr("width", 1002);
        $("#brain_field_4").attr("width", 1002);
        $("#brain_field_5").attr("width", 1002);
        $("#brain_field_1").attr("height", 560);
        $("#brain_field_2").attr("height", 560);
        $("#brain_field_3").css("height", 560);
        $("#brain_field_4").css("height", 560);
        $("#brain_field_5").attr("height", 560);


        //채팅 내용 전송 버튼 사이즈
        $("#chat_send").removeClass("btn-large");
        $("#chat_send").addClass("btn");
    }
});
