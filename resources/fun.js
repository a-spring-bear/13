//全局变量
var token;
var user_id;
var cards;
var c1,c2,c3;//三墩
var c11,c22,c33;//三墩分割为单张
var c;
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
            alert("请出牌!")
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
//显示牌型
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

//历史记录列表
function myhis() {
    //获取输入框的值
        var player_id=document.getElementById("player_id").value;
        var limit= document.getElementById("pageSize").value;
        var page=document.getElementById("changePage").value;

//     var a = [
//         {
//             "id": 2890,
//             "card": [
//                 "&J $K &A",
//                 "#2 &2 #3 *3 $5",
//                 "&3 #4 *5 $6 #7"
//             ],
//             "score": -7,
//             "timestamp": 1570608064
//         },
//         {
//             "id": 2897,
//             "card": [
//                 "$9 $Q *A",
//                 "#3 $3 *3 $K &K",
//                 "*5 *10 #10 $10 &10"
//             ],
//             "score": 24,
//             "timestamp": 1570608065
//         },
//         {
//             "id": 2900,
//             "card": [
//                 "&3 *8 *J",
//                 "&5 *6 &7 &8 #9",
//                 "$2 $4 $6 $8 $Q"
//             ],
//             "score": -2,
//             "timestamp": 1570608066
//         },
//         {
//             "id": 2894,
//             "card": [
//                 "#5 #J *A",
//                 "*3 &4 *10 $K &K",
//                 "$3 $6 $8 $9 $A"
//             ],
//             "score": -4,
//             "timestamp": 1570608065
//         },
//         {
//             "id": 2896,
//             "card": [
//                 "#2 &10 $K",
//                 "&3 *6 $6 $7 &7",
// //                 "#9 &9 $9 #A *A"
// //             ],
// //             "score": 1,
// //             "timestamp": 1570608065
// //         },
// //         {
// //             "id": 2899,
// //             "card": [
// //                 "*8 &9 #K",
// //                 "*2 &5 *5 *6 #6",
// //                 "$7 $8 #9 $10 $J"
// //             ],
// //             "score": -8,
// //             "timestamp": 1570608066
//         },{
//             "id": 2898,
//             "card": [
//                 "&6 *7 #K",
//                 "*10 $J #J &A *A",
//                 "#2 $4 *8 &8 $8"
//             ],
//             "score": -13,
//             "timestamp": 1570608065
//         },
//         {
//             "id": 2909,
//             "card": [
//                 "*4 *10 #Q",
//                 "&2 *3 $3 &J $J",
//                 "$4 $5 #6 &7 &8"
//             ],
//             "score": -11,
//             "timestamp": 1570608068
//         },
//         {
//             "id": 2912,
//             "card": [
//                 "&2 &8 &A",
//                 "#3 #4 #5 #10 #A",
//                 "$6 #6 *6 $9 &9"
//             ],"score": 6,
//             "timestamp": 1570608069
//         },
//         {
//             "id": 2968,
//             "card": [
//                 "$7 &10 &J",
//                 "&3 #4 $4 $A *A",
//                 "&5 #9 #Q *Q $Q"
//             ],
//             "score": -6,
//             "timestamp": 1570608081
//         }
//
//     ]
// add(a);

    token = localStorage.getItem("token1");
    $.ajax({
        url: "https://api.shisanshui.rtxux.xyz/history",
        type: "GET",
        headers:{"X-Auth-Token":token},
        data: JSON.stringify({
            "player_id": player_id,
            "limit": limit,
            "page": page
        }),

        contentType: "application/json",
        datatype: "json",
        success: function (res) {
            console.log(res);
            console.log("success");
            add(res.data);
        },
    });

}
//<!--    动态加入数据-->
function add(per) {

    var tbody = document.getElementById('tbMain');

    for(var i = 0;i < per.length; i++){ //遍历一下json数据  
        var trow = getDataRow(per[i]); //定义一个方法,返回tr数据  
        tbody.appendChild(trow);
    }
}
//添加一行数据
function getDataRow(h){
    var row = document.createElement('tr'); //创建行  

    var idCell = document.createElement('td'); //创建第一列id  
    idCell.innerHTML = h.id; //填充数据  
    row.appendChild(idCell); //加入行  ，下面类似  

    var timeCell = document.createElement('td');//创建第二列name  
    timeCell.innerHTML = h.timestamp;
    row.appendChild(timeCell);

    var carCell = document.createElement('td');//创建第三列job  
    carCell.innerHTML = h.card;
    row.appendChild(carCell);

    var scoreCell = document.createElement('td');//创建第三列job  
    scoreCell.innerHTML = h.score;
    row.appendChild(scoreCell);

    return row; //返回tr数据      
}
//历史战局详情
function his() {
    var id=document.getElementById("id").value;
    token =localStorage.getItem("token1");
    $.ajax({
        url:"https://api.shisanshui.rtxux.xyz/history/{id}",
        type:"GET",
        headers:{"X-Auth-Token":token},
        data: JSON.stringify({
            "id":id
        }),
        contentType:"application/json",
        datatype: "json",
        success:function(res){
            console.log(res);
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

            // document.getElementById("13").innerHTML=test.data.detail[0].card;
            // document.getElementById("23").innerHTML=test.data.detail[1].card;
            // document.getElementById("33").innerHTML=test.data.detail[2].card;
            // document.getElementById("43").innerHTML=test.data.detail[3].card;

           var s1=test.data.detail[0].card.trim.split(/\s+/);
            var s2=test.data.detail[0].card.trim.split(/\s+/);
            var s3=test.data.detail[0].card.trim.split(/\s+/);
            var s4=test.data.detail[0].card.trim.split(/\s+/);

            document.getElementById("14").innerHTML=test.data.detail[0].score;
            document.getElementById("24").innerHTML=test.data.detail[1].score;
            document.getElementById("34").innerHTML=test.data.detail[2].score;
            document.getElementById("44").innerHTML=test.data.detail[3].score;
        },
    });
}