//全局变量
var token;
var user_id;
var cards;
var c1,c2,c3;//三墩
var c11,c22,c33;//三墩分割为单张
var c;
var s;//历史详情里52张牌
//登录
function login() {
    var user = document.getElementById("u5_input").value.trim();
    var pass = document.getElementById("u6_input").value.trim();
    $.ajax({
        url: "https://api.shisanshui.rtxux.xyz/auth/login",
        type: "POST",
        data:
            JSON.stringify({
                "username": user,
                "password": pass
            }),
        contentType: "application/json",
        datatype: "json",
        success: function (res) {
            console.log(res);
            console.log("success");
            token = res.data.token;
            user_id = res.data.user_id;
            console.log(token);
            console.log(user_id);
            window.location.href =('首页.html');
            localStorage.setItem("token1",token);
            localStorage.setItem("id",user_id);
        },
        fail: function (err) {
            console.log(err);
        }
    });
}
// 登录验证
function validate()
{
    token =localStorage.getItem("token1");
    $.ajax({
        url:"https://api.shisanshui.rtxux.xyz/auth/validate",
        type:"GET",
        headers:{"X-Auth-Token":token},
        contentType:"application/json",
        datatype: "json",
        success:function(res){
            console.log(res);
            console.log("success");
        },
        fail:function (err) {
            alert("密码错误！")
        }
    });
}
//注销
function logout() {
    token =localStorage.getItem("token1");
    $.ajax({
        type: "post",
        url: "https://api.shisanshui.rtxux.xyz/auth/logout",
        headers:{"X-Auth-Token":token},
        contentType: "application/json",
        datatype: "json",
        success: function (data) {
            console.log(data)
            alert("注销成功")
        }
    });
}
//注册
function register() {
    $.ajax({
        url: 'https://api.shisanshui.rtxux.xyz/auth/register',
        type: 'POST',
        data:
            JSON.stringify({
                "username": document.getElementById("u5_input").value.trim(),
                "password": document.getElementById("u6_input").value.trim()
            }),
        contentType:"application/json",
        datatype: "json",
        success:function(res){
            console.log(res);
            console.log("success");

            alert("注册成功!")
        },
        fail:function (err) {
            alert("sorry，注册失败!");
        }
    });
}
//开启战局
function opennnn() {
    console.log(token);
    token =localStorage.getItem("token1");

    $.ajax({
        url: 'https://api.shisanshui.rtxux.xyz/game/open',
        type: 'POST',
        headers:{"X-Auth-Token":token},
        contentType:"application/json",
        datatype: "json",
        success:function(res){
            console.log(res);
            console.log("success");
            alert("请出牌!");
            cards=res.data.card;
            console.log(cards);
            //分成三墩
            c1=cards.slice(0,9);
            c2=cards.slice(9,24);
            c3=cards.slice(24,40);
            //分成13张
            c=cards.trim().split(/\s+/);
            //三墩分割成单张牌
           // c11=c1.trim().split(/\s+/);
           // c22=c2.trim().split(/\s+/);
           // c33=c3.trim().split(/\s+/);
           // console.log(c11);
           // console.log(c11[1]);
           //  console.log(c22);
           //  console.log(c33);
        },
    });
}
//出牌
function play(){

    user_id=localStorage.getItem("id");
    token =localStorage.getItem("token1");
    console.log(user_id);
    console.log(JSON.stringify({
        "card":[c1,c2,c3]
    }));
    $.ajax({
        url: "",
        data: {
            "id":user_id,
            "card":cards},
        headers:{"X-Auth-Token":token},
        type: "post",
        success: function (data) {
            console.log(data);
            show();

        },
        error: function (res) {
            alert("出牌失败");
        }

    });
}
//显示13张牌型
function f( i ) {
    switch (c[i]) {
        case "*A":
            return "images/扑克牌/梅花A.png";
        case "*2":
            return "images/扑克牌/梅花2.png";
        case "*3":
            return "images/扑克牌/梅花3.png";
        case "*4":
            return "images/扑克牌/梅花4.png";
        case "*5":
            return "images/扑克牌/梅花5.png";
        case "*6":
            return "images/扑克牌/梅花6.png";
        case "*7":
            return "images/扑克牌/梅花7.png";
        case "*8":
            return "images/扑克牌/梅花8.png";
        case "*9":
            return "images/扑克牌/梅花9.png";
        case "*10":
            return "images/扑克牌/梅花10.png";
        case "*J":
            return "images/扑克牌/梅花J.png";
        case "*Q":
            return "images/扑克牌/梅花Q.png";
        case "*K":
            return "images/扑克牌/梅花K.png";
            //////
        case "&A":
            return "images/扑克牌/红心A.png";
        case "&2":
            return "images/扑克牌/红心2.png";
        case "&3":
            return"images/扑克牌/红心3.png";
        case "&4":
            return"images/扑克牌/红心4.png";
        case "&5":
            return "images/扑克牌/红心5.png";
        case "&6":
            return "images/扑克牌/红心6.png";
        case "&7":
            return "images/扑克牌/红心7.png";
        case "&8":
            return"images/扑克牌/红心8.png";
        case "&9":
            return "images/扑克牌/红心9.png";
        case "&10":
            return "images/扑克牌/红心10.png";
        case "&J":
            return "images/扑克牌/红心J.png";
        case "&Q":
            return "images/扑克牌/红心Q.png";
        case "&K":
            return "images/扑克牌/红心K.png";
            /////
        case "$A":
            return "images/扑克牌/黑桃A.png";
        case "$2":
            return "images/扑克牌/黑桃2.png";
        case "$3":
            return "images/扑克牌/黑桃3.png";
        case "$4":
            return "images/扑克牌/黑桃4.png";
        case "$5":
            return "images/扑克牌/黑桃5.png";
        case "$6":
            return "images/扑克牌/黑桃6.png";
        case "$7":
            return "images/扑克牌/黑桃7.png";
        case "$8":
            return "images/扑克牌/黑桃8.png";
        case "$9":
            return "images/扑克牌/黑桃9.png";
        case "$10":
            return "images/扑克牌/黑桃10.png";
        case "$J":
            return "images/扑克牌/黑桃J.png";
        case "$Q":
            return "images/扑克牌/黑桃Q.png";
        case "$K":
            return "images/扑克牌/黑桃K.png";
            /////
        case "#A":
            return "images/扑克牌/方块A.png";
        case "#2":
            return "images/扑克牌/方块2.png";
        case "#3":
            return "images/扑克牌/方块3.png";
        case "#4":
            return "images/扑克牌/方块4.png";
        case "#5":
            return "images/扑克牌/方块5.png";
        case "#6":
            return "images/扑克牌/方块6.png";
        case "#7":
            return "images/扑克牌/方块7.png";
        case "#8":
            return "images/扑克牌/方块8.png";
        case "#9":
            return "images/扑克牌/方块9.png";
        case "#10":
            return "images/扑克牌/方块10.png";
        case "#J":
            return "images/扑克牌/方块J.png";
        case "#Q":
            return "images/扑克牌/方块Q.png";
        case "#K":
            return "images/扑克牌/方块K.png";
    }
}
function show() {
    document.getElementById("wrap1").src=f(0);
    document.getElementById("wrap2").src=f(1);
    document.getElementById("wrap3").src=f(2);
    document.getElementById("wrap4").src=f(3);
    document.getElementById("wrap5").src=f(4);
    document.getElementById("wrap6").src=f(5);
    document.getElementById("wrap7").src=f(6);
    document.getElementById("wrap8").src=f(7);
    document.getElementById("wrap9").src=f(8);
    document.getElementById("wrap10").src=f(9);
    document.getElementById("wrap11").src=f(10);
    document.getElementById("wrap12").src=f(11);
    document.getElementById("wrap13").src=f(12);
}
//排行榜在HTML文件中

// //我的历史战局
var x=0;//页码
function add(){document.getElementById("demo").innerHTML=null;x++;myhis(); }
function dec(){if(x>0){document.getElementById("demo").innerHTML=null;x--;myhis();} else {alert("前面没有页数啦！"); return;}}
function myhis() {

    var json;
    var token = localStorage.getItem('token1');
    (function ($) {
        $.fn.serializeJson = function () {
            var serializeObj = {};
            var array = this.serializeArray();
            var str = this.serialize();
            $(array).each(function () {
                if (serializeObj[this.name]) {
                    if ($.isArray(serializeObj[this.name]) && this.value != "") {
                        serializeObj[this.name].push(this.value);
                    } else {
                        if (this.value != "") {
                            serializeObj[this.name] = [serializeObj[this.name], this.value];
                        }
                    }
                } else {
                    if (this.value != "") {
                        serializeObj[this.name] = this.value;
                    }
                }
            });
            return serializeObj;
        };
    })(jQuery);
$.ajax({
    type: "GET",
    url: "https://api.shisanshui.rtxux.xyz/history?page="+x+"&limit=5&player_id=1060",
    headers: {
        'x-auth-token': token
    } ,
    success: function (result) {
        console.log(result);
        console.log(token);
        json = result;
        function getJsonLength(json) {
            for (var i in json) {
                var l = 0;

                for (var j in json.data) {
                    document.getElementById("demo").innerHTML += '<tr><td style="width: 10% ;height: 20px" >' + json.data[l].id + '</td><td style="width: 65%;text-align: center">' + json.data[l].card + '</td><td style="width: 10%">' + json.data[l].score + '</td><td style="width: 15%">' + json.data[l].timestamp + '</td></tr>';
                    l++;
                };

            };

        }
        document.getElementById("p").innerHTML=x+1;
        getJsonLength(json);
    }
});

}
//历史战局详情
function his() {

    var idd=document.getElementById("idd").value.trim();//战局id
    token =localStorage.getItem("token1");

    $.ajax({
        type: "GET",
        url: "https://api.shisanshui.rtxux.xyz/history/"+idd,
                dataType: "json",
                contentType: "application/json",
                beforeSend: function(request) {
                    request.setRequestHeader("X-Auth-Token", token);
                },
        success:  (res)=> {
            console.log(res);
            console.log(token);
                    var test=res;
                    console.log("success");
                    document.getElementById("11").innerHTML=test.data.detail[0].player_id;
                    document.getElementById("21").innerHTML=test.data.detail[1].player_id;
                    document.getElementById("31").innerHTML=test.data.detail[2].player_id;
                    document.getElementById("41").innerHTML=test.data.detail[3].player_id;

                    document.getElementById("12").innerHTML=test.data.detail[0].name;
                    document.getElementById("22").innerHTML=test.data.detail[1].name;
                    document.getElementById("32").innerHTML=test.data.detail[2].name;
                    document.getElementById("42").innerHTML=test.data.detail[3].name;

                    document.getElementById("14").innerHTML=test.data.detail[0].score;
                    document.getElementById("24").innerHTML=test.data.detail[1].score;
                    document.getElementById("34").innerHTML=test.data.detail[2].score;
                    document.getElementById("44").innerHTML=test.data.detail[3].score;
                    //连接四人的牌
             s=test.data.detail[0].card+" "+test.data.detail[1].card+" "+test.data.detail[2].card+" "+test.data.detail[3].card;
             //删除空格和逗号
             s=s.split(/\s+|,/);
             console.log(s);
            for(var i=0;i<52;i++){
                       disp();
                   }
                }
        })
}
//显示52张牌
function disp()  {
    document.getElementById("1").src=ff(0);
    document.getElementById("2").src=ff(1);
    document.getElementById("3").src=ff(2);
    document.getElementById("4").src=ff(3);
    document.getElementById("5").src=ff(4);
    document.getElementById("6").src=ff(5);
    document.getElementById("7").src=ff(6);
    document.getElementById("8").src=ff(7);
    document.getElementById("9").src=ff(8);
    document.getElementById(".10").src=ff(9);
    document.getElementById(".11").src=ff(10);
    document.getElementById(".12").src=ff(11);
    document.getElementById(".13").src=ff(12);
    //
    document.getElementById(".14").src=ff(13);
    document.getElementById(".15").src=ff(14);
    document.getElementById(".16").src=ff(15);
    document.getElementById(".17").src=ff(16);
    document.getElementById(".18").src=ff(17);
    document.getElementById(".19").src=ff(18);
    document.getElementById(".20").src=ff(19);
    document.getElementById(".21").src=ff(20);
    document.getElementById(".22").src=ff(21);
    document.getElementById(".23").src=ff(22);
    document.getElementById(".24").src=ff(23);
    document.getElementById(".25").src=ff(24);
    document.getElementById(".26").src=ff(25);
    //
    document.getElementById(".27").src=ff(26);
    document.getElementById(".28").src=ff(27);
    document.getElementById(".29").src=ff(28);
    document.getElementById(".30").src=ff(29);
    document.getElementById(".31").src=ff(30);
    document.getElementById(".32").src=ff(31);
    document.getElementById(".33").src=ff(32);
    document.getElementById(".34").src=ff(33);
    document.getElementById(".35").src=ff(34);
    document.getElementById(".36").src=ff(35);
    document.getElementById(".37").src=ff(36);
    document.getElementById(".38").src=ff(37);
    document.getElementById(".39").src=ff(38);
    // /
    document.getElementById(".40").src=ff(39);
    document.getElementById(".41").src=ff(40);
    document.getElementById(".42").src=ff(41);
    document.getElementById(".43").src=ff(42);
    document.getElementById(".44").src=ff(43);
    document.getElementById(".45").src=ff(44);
    document.getElementById(".46").src=ff(45);
    document.getElementById(".47").src=ff(46);
    document.getElementById(".48").src=ff(47);
    document.getElementById(".49").src=ff(48);
    document.getElementById(".50").src=ff(49);
    document.getElementById(".51").src=ff(50);
    document.getElementById(".52").src=ff(51);
}
function ff(i) {
    switch (s[i]) {
        case "*A":
            return "images/扑克牌/梅花A.png";
        case "*2":
            return "images/扑克牌/梅花2.png";
        case "*3":
            return "images/扑克牌/梅花3.png";
        case "*4":
            return "images/扑克牌/梅花4.png";
        case "*5":
            return "images/扑克牌/梅花5.png";
        case "*6":
            return "images/扑克牌/梅花6.png";
        case "*7":
            return "images/扑克牌/梅花7.png";
        case "*8":
            return "images/扑克牌/梅花8.png";
        case "*9":
            return "images/扑克牌/梅花9.png";
        case "*10":
            return "images/扑克牌/梅花10.png";
        case "*J":
            return "images/扑克牌/梅花J.png";
        case "*Q":
            return "images/扑克牌/梅花Q.png";
        case "*K":
            return "images/扑克牌/梅花K.png";
        //////
        case "&A":
            return "images/扑克牌/红心A.png";
        case "&2":
            return "images/扑克牌/红心2.png";
        case "&3":
            return"images/扑克牌/红心3.png";
        case "&4":
            return"images/扑克牌/红心4.png";
        case "&5":
            return "images/扑克牌/红心5.png";
        case "&6":
            return "images/扑克牌/红心6.png";
        case "&7":
            return "images/扑克牌/红心7.png";
        case "&8":
            return"images/扑克牌/红心8.png";
        case "&9":
            return "images/扑克牌/红心9.png";
        case "&10":
            return "images/扑克牌/红心10.png";
        case "&J":
            return "images/扑克牌/红心J.png";
        case "&Q":
            return "images/扑克牌/红心Q.png";
        case "&K":
            return "images/扑克牌/红心K.png";
        /////
        case "$A":
            return "images/扑克牌/黑桃A.png";
        case "$2":
            return "images/扑克牌/黑桃2.png";
        case "$3":
            return "images/扑克牌/黑桃3.png";
        case "$4":
            return "images/扑克牌/黑桃4.png";
        case "$5":
            return "images/扑克牌/黑桃5.png";
        case "$6":
            return "images/扑克牌/黑桃6.png";
        case "$7":
            return "images/扑克牌/黑桃7.png";
        case "$8":
            return "images/扑克牌/黑桃8.png";
        case "$9":
            return "images/扑克牌/黑桃9.png";
        case "$10":
            return "images/扑克牌/黑桃10.png";
        case "$J":
            return "images/扑克牌/黑桃J.png";
        case "$Q":
            return "images/扑克牌/黑桃Q.png";
        case "$K":
            return "images/扑克牌/黑桃K.png";
        /////
        case "#A":
            return "images/扑克牌/方块A.png";
        case "#2":
            return "images/扑克牌/方块2.png";
        case "#3":
            return "images/扑克牌/方块3.png";
        case "#4":
            return "images/扑克牌/方块4.png";
        case "#5":
            return "images/扑克牌/方块5.png";
        case "#6":
            return "images/扑克牌/方块6.png";
        case "#7":
            return "images/扑克牌/方块7.png";
        case "#8":
            return "images/扑克牌/方块8.png";
        case "#9":
            return "images/扑克牌/方块9.png";
        case "#10":
            return "images/扑克牌/方块10.png";
        case "#J":
            return "images/扑克牌/方块J.png";
        case "#Q":
            return "images/扑克牌/方块Q.png";
        case "#K":
            return "images/扑克牌/方块K.png";
    }
}
