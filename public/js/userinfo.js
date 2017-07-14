var UserInfo = {
    list: [],
    //유저 데이터 추가
    add: (json) => {
        var user = {
            id: json.id,
            nickname: json.nickname
        };

        UserInfo.list.push(user);
    },
    //유저 데이터 입장 요청
    join : () => {
        var json = {
            event : "join_user",
            team : teamID,
            id: myID,
            nickname: myNickname,
        };

        socket.send(json);
    },
    //유저 데이터 제거
    remove: (json) => {
        UserInfo.list.forEach (function (item, index) {
            if (json.id === item.id) {
                toast(json.nickname + "님이 퇴장하였습니다.");
                UserInfo.list.splice(index, 1);
            }
        });
    },
    //유저 데이터 퇴장 요청
    left : (id) => {
        var json = {
            event : "left_user",
            team : teamID,
            id: id,
            nickname: myNickname,
            isAdmin : isAdmin (id)
        };

        socket.send(json);
    },
    //방장인가
    isAdmin: (id) => {
        return (id === teamAdminID)? true : false;
    }
}

//내 정보 입장
UserInfo.join();

//<summary> event function define </summary>
$("#user_list").click(function () {
    $("#user_list").empty();

    for (var i = 0; i < UserInfo.list.length; i++) {
        $("#user_list").append(
            '<li class="user_list_item" data-id='
            + '"'
            + UserInfo.list[i].id
            + '"'
            +'><a href="#!">'
            + UserInfo.list[i].nickname
            + '</a></li>');
    }
});

$(".user_list_item").click(function () {
    $("#modal_kick").modal('open');
});