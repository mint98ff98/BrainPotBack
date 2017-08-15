var Meaning = {
    list: undefined,
    methods: {
        init: (data) => {
            //lock
            $("#menu_draw").addClass("disabled");
            $("#menu_postit").addClass("disabled");

            //hide
            $("#menu2").css("display", "none");
            $(".canvas-container").css("display", "none");

            Meaning.list = data;

            //<code>load data grouping to meaning</code>
            var div = $("#brain_field_3")[0];

            data.forEach(function (item, index) {
                var chips = "";
                item.node.forEach(function (node) {
                    chips += '<div class="chip green">' + node + '</div>';
                });

                $(div).html('<div class="row center" index="' + index + '">' +
                    '<div class="col s2"></div>' +
                    '<div class="col s8 z-depth-1">' +
                    '<div>' +
                    '<h4 class="left">' + item.title + '</h4>' +
                    '<div class="chips">' +
                    chips +
                    '</div>' +
                    '<div class="input-field col s6">' +
                    '<input id="test" type="text" class="validate comment_input" index="' + index + '">' +
                    '<label for="test">comment<label>' +
                    '</div>' +
                    '</div>' +
                    '</div>' +
                    '<div class="col s2"></div>' +
                    '</div>');
            });
            //<code>load data grouping to meaning</code>

            //<code>comment add</code>
            $(".comment_input").keydown(function (event) {
                var key = event.key;

                if (key === "Enter") {
                    var comment = $(event.target).val();
                    var index = $(event.target).attr("index");

                    if (comment === "")
                        toast("아이디어 그룹에 알맞는 의미를 부여하세요.");
                    else if (comment.length < 10)
                        toast("10자 이상 입력해주세요.");
                    else {
                        var isExist = false;

                        if (Meaning.list[index].comment.length >= 3) {
                            toast("최대 3개의 의미만 부여할 수 있습니다.");
                            return;
                        }

                        Meaning.list[index].comment.forEach(function (item) {
                            if (item === comment)
                                isExist = true;
                        });

                        if (isExist) {
                            toast("중복된 의미를 부여할 수 없습니다!");
                            return;
                        }

                        var json = {
                            event: "comment_add",
                            index: index,
                            comment: comment
                        };

                        socket.send(json);
                    }
                }
            });
            //<code>comment add</code>
        }
    },
    event: {
        comment_add: (comment, index) => {
            var div = $(".chips")[index];

            console.log($(div)[0]);

            $(div)[0].innerHTML += '<div class="chip pink">' +
                comment +
                '<i class="close material-icons">close</i>' +
                '</div>';

            Meaning.list[index].comment.push(comment);
        },
        comment_remove : () => {
            
        }
    }
};
