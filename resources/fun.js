//全局变量
var token;
var user_id;
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
        },
        fail: function (err) {
            console.log(err);
        }
    });
}
// 登录验证
function validate() {
    $.ajax({
        url:"https://api.shisanshui.rtxux.xyz/auth/validate",
        type:"GET",
        data:
            JSON.stringify({
                "X-Auth-Token": token
            }),
        contentType:"application/json",
        datatype: "json",
        success:function(res){
            console.log(res);
            console.log("success");
            alert("验证成功！")
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
        data:
            JSON.stringify({
                "X-Auth-Token": token
            }),
        contentType: "application/json",
        datatype: "json",
        success: function (data) {
            console.log(data)
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
//出牌
function submit() {
    $.ajax({
        url: 'https://api.shisanshui.rtxux.xyz/game/submit',
        type: 'POST',
        data:
            JSON.stringify({
                "X-Auth-Token": token,
                "id":user_id,
                "card": [
                    "*2 *3 *4",
                    "*5 *6 *7 *8 *9",
                    "*10 *J *Q *K *A"
                ]
            }),
        contentType:"application/json",
        datatype: "json",
        success:function(res){
            console.log(res);
            console.log("success");
            alert("请出牌!")
        },
    });
}
//开启战局
function open() {
    $.ajax({
        url: 'https://api.shisanshui.rtxux.xyz/game/open',
        type: 'POST',
        data:
            JSON.stringify({
                "X-Auth-Token": token
            }),
        contentType:"application/json",
        datatype: "json",
        success:function(res){
            console.log(res);
            console.log("success");
            alert("请出牌!")
        },
    });
}
//排行榜
function rank() {
    $.ajax({
        url:"https://api.shisanshui.rtxux.xyz/game/rank",
        type:"GET",
        data:
            JSON.stringify({
                "X-Auth-Token": token
            }),
        contentType:"application/json",
        datatype: "json",
        success:function(res){
            console.log(res);
            console.log("success");
        },
    });
}
//历史记录
function his() {
    $.ajax({
        url:"https://api.shisanshui.rtxux.xyz/history",
        type:"GET",
        data:
            JSON.stringify({
                "X-Auth-Token": token
            }),
        contentType:"application/json",
        datatype: "json",
        success:function(res){
            console.log(res);
            console.log("success");
        },
    });
}
//个人历史记录
function myhis() {
    $.ajax({
        url:"https://api.shisanshui.rtxux.xyz/history/{id}",
        type:"GET",
        data:
            JSON.stringify({
                "X-Auth-Token": token
            }),
        contentType:"application/json",
        datatype: "json",
        success:function(res){
            console.log(res);
            console.log("success");
        },
    });
}