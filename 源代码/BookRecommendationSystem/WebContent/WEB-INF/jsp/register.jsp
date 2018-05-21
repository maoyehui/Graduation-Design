<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html><head>
    <meta charset="utf-8">
    <meta name="baidu-site-verification" content="cNhJHKEzsD">
    <meta property="qc:admins" content="27354635321361636375">
    <meta name="keywords" content="阅读推荐，音乐，播放器，网易，下载，播放，DJ，免费，明星，精选，歌单，识别音乐，收藏，分享音乐，音乐互动，高音质，320K，音乐社交，netease cloud music，cloudmusic，neteasemusic，neteasecloudmusic，music，netease，cloud">
    <meta name="description" content="阅读推荐是一款专注于发现与分享的音乐产品，依托专业音乐人、DJ、好友推荐及社交功能，为用户打造全新的音乐生活。cloud，netease cloud music，cloudmusic，neteasemusic，neteasecloudmusic，music，netease">
    <title>阅读推荐</title>
    <script type="text/javascript" async="" src="js/ga.js"></script>
    <base href="/BookRecommendationSystem/index" target="_top">
    <link href="css/core.css" type="text/css" rel="stylesheet">
    <!-- <link href=".net/sep/s/2/pt_frame.css" type="text/css" rel="stylesheet"> -->
    <link href="css/pt_my_index.css" type="text/css" rel="stylesheet">
<style>
    .form_w{
        font-family: "Microsoft Yahei", Arial, Helvetica, sans-serif;
        width: 600px;
        margin: 20px auto;
        -moz-border-radius: 4px; -webkit-border-radius: 4px; border-radius: 4px;
        box-shadow: 0 0 5px 2px rgba(79, 69, 66, 0.2);
        padding: 20px 120px;
    }
    .necessary{
        position: relative;
        top:4px;
        padding: 4px;
        font-size:16px;
        color: #de1a07;
    }
    .f-ff2{
        font-size: 20px;
        line-height: 28px;
        padding-bottom: 50px;
    }
    .form_w label{
        font-size: 14px;
        display: inline-block;
        width: 100px;
        text-align: right;
        margin: 15px;
    }
    .form_w
    input[type="text"],
    input[type="password"],
    input[type="date"],
    input[type="number"],
    textarea,
    textarea.form-control {
        width: 300px;
        height: 40px;
        margin: 5px 0  10px;
        padding: 0 20px;
        vertical-align: middle;
        background: #fff;
        border: 1px solid #ddd;
        font-family: 'Roboto', sans-serif;
        font-size: 16px;
        font-weight: 300;
        line-height: 45px;
        color: #888;
        -moz-border-radius: 4px; -webkit-border-radius: 4px; border-radius: 4px;
        -moz-box-shadow: none; -webkit-box-shadow: none; box-shadow: none;
        -o-transition: all .3s; -moz-transition: all .3s;
        -webkit-transition: all .3s;
        -ms-transition: all .3s; transition: all .3s;
    }
    .form_w
    textarea,
    textarea.form-control {
        padding-top: 10px;
        padding-bottom: 10px;
        line-height: 30px;
    }
    .form_w  button.btn {
        width: 50%;
        height: 40px;
        margin: 20px auto;
        position: relative;
        left: 20%;
        vertical-align: middle;
        background:RGB(199,12,12);
        border: 0;
        font-family: 'Roboto', sans-serif;
        font-size: 16px;
        font-weight: 300;
        line-height: 45px;
        color: #fff;
        -moz-border-radius: 4px; -webkit-border-radius: 4px; border-radius: 4px;
        text-shadow: none;
        -moz-box-shadow: none; -webkit-box-shadow: none; box-shadow: none;
        -o-transition: all .3s; -moz-transition: all .3s; -webkit-transition: all .3s; -ms-transition: all .3s; transition: all .3s;
    }

    .form_w button.btn:hover { opacity: 0.6; color: #fff; }

    .form_w button.btn:active { outline: 0; opacity: 0.6; color: #fff; -moz-box-shadow: none; -webkit-box-shadow: none; box-shadow: none; }

    .form_w button.btn:focus { outline: 0; opacity: 0.6; background: RGB(199,12,12); color: #fff; }

    .form_w button.btn:active:focus, button.btn.active:focus { outline: 0; opacity: 0.6; background: RGB(199,12,12); color: #fff; }

</style>
</head>

<body>

    <div class="m-top">
        <div class="wrap">
            <h1 class="logo"><a hidefocus="true" href="/#">阅读推荐</a></h1>
            <ul class="m-nav j-tflag">
                <li class="fst">
                    <span><a hidefocus="true" href="/#" data-module="discover" class=""><em>发现书籍</em><sub class="cor">&nbsp;</sub></a></span>
                </li>
                <li>
                    <span><a data-res-action="bilog" data-log-action="page" data-log-json="{&quot;type&quot;:&quot;my&quot;}" hidefocus="true" href="/my/" data-module="my" class="z-slt"><em>我的书架</em><sub class="cor">&nbsp;</sub></a></span>
                </li>
                <li>
                    <span><a hidefocus="true" href="/friend" data-module="friend"><em>以书会友</em><sub class="cor">&nbsp;</sub><i class="dot u-icn u-icn-68 f-alpha j-t" style="display:none;"></i></a></span>
                </li>
                <li>
                    <span><a hidefocus="true" href="/nmusician/web/recruit" target="_blank" data-module="musician"><em>作家</em></a></span>
                </li>
            </ul>
        </div>
    </div>
    <div id="g_nav" class="m-subnav m-subnav-up f-pr">
        <div class="shadow">&nbsp;</div>
    </div>

    <div id="g_mymusic" class="g-mymusic" style="min-height: 674px;">
        <div class="g-bd3 p-mymusic f-cb" style="min-height: 574px;">
                <div class="form_w">
                    <span class="f-ff2">用户注册</span>
                    <form action="writer/insertUserInfo" method="post">
                    	<label for="accoount">账号<span class="necessary">*</span></label>
                    	<input id="account"  type="text" placeholder="账号" class="form-control" name='account'>
                    	<label class="input_warning" id="account_warning" style="padding:0 0 0 140px;color:red;width:200px;display: none;"></label>
                    	<br>
                        <label for="password">密码<span class="necessary">*</span></label>
                        <input id="password" type="password" class="form-control" name='password'>
                        <br>
                        <label for="passwordAgain">确认密码<span class="necessary">*</span></label>
                        <input id="passwordAgain" type="password" class="form-control" name='passwordAgain'>
                        <label class="input_warning" id="password_warning" style="padding:0 0 0 140px;color:red;width:238px;display: none;"></label>
                        <br>
                        <label for="name">昵称<span class="necessary">*</span></label>
                        <input id="name"  type="text" placeholder="昵称" class="form-control" name='name'>
                        <br>
                        <label >性别<span class="necessary">*</span></label>
                            <input class="form-control" name="gender" value="男" type="radio" name='gender'>
                            <span><i></i>男</span>
							&nbsp;&nbsp;
                            <input class="form-control" name="gender" value="女" type="radio" name='gender'>
                            <span><i></i>女</span>
                        <br>
                        <label for="birthday">生日<span class="necessary">*</span></label>
                        <input id="birthday" type="date" class="form-control" name='birthday'>
                        <br>
                        <label for="province">省份<span class="necessary">*</span></label>
                        <input id="province" type="text" class="form-control" placeholder="甘肃" name='province'>
                        <br>
                        <label for="city">城市<span class="necessary">*</span></label>
                        <input id="city" type="text" class="form-control" placeholder="兰州" name='city'>
                        <br>
                        <label for="career">职业<span class="necessary">*</span></label>
                        <input id="career" type="text" class="form-control" name='career'>
                        <br>
                        <label for="cellphone">手机号</label>
                        <input id="cellphone"  type="number" maxlength="11" class="form-control" name='cellphone'>
                        <br>
                        <label for="wechat">微信</label>
                        <input id="wechat"  type="text" class="form-control" name='wechat'>
                        <br>
                        <label for="qq">QQ</label>
                        <input id="qq"  type="text" class="form-control" name='qq'>
                        <br>
                        <label for="signature">个性签名</label>
                        <textarea rows="2" cols="8" type="text" class="form-control" name='signature'></textarea>
                        <button type="submit" class="btn btn-primary btn-block">提 交</button>
                    </form>
                </div>
    	</div>
        <div class="g-ft ">
            <div class="m-ft">
                <div class="wrap f-cb">
                    <div class="copy">
                        <p>
                            <a href="//music.163.com/about" target="_blank" class="s-fc4">关于推荐</a><span class="line">|</span>
                            <a href="//help.163.com/" target="_blank" class="s-fc4">客户服务</a><span class="line">|</span>
                            <a href="//music.163.com/html/web2/service.html" target="_blank" class="s-fc4">服务条款</a><span class="line">|</span>
                            <a href="//sitemap.163.com/" target="_blank" class="s-fc4">网站导航</a><span class="line">|</span>
                            <a id="g_feedback" href="#" class="s-fc4" onclick="nm.x.feedback();return false;" hidefocus="true">意见反馈</a>
                        </p>
                        <p class="s-fc3">
                            <span class="sep">兰州理工大学版权所有©2016-2017</span>兰州理工大学运营：<a href="" target="_blank" class="s-fc3">甘网文[2017] 0415-135号</a>
                        </p>
                    </div>

                </div>
            </div>
        </div>
    <script type="text/javascript" src='js/jquery.min.js'></script>
    <script src="js/core.js" type="text/javascript"></script>
    <script type="text/javascript">
    	$(document).on('blur','#account',function(){
    		var account = $('#account').val();
    		if(account == ""){
    			$('#account_warning').show();
				$('#account_warning').html("用户名不能为空！");
    		}else{
    			$.ajax({
        			url:'writer/accountIfExists',
        			method:'POST',
            		data:{
            			account:account
            		},
        			success:function(data){
        				if(data == "false"){
        					$('#account_warning').show();
        					$('#account_warning').html("用户名已被占用！");
        				}
        				else{
        					$('#account_warning').hide();
        				}
        			}		
        		})
    		}
    	})
    	$(document).on('blur','#passwordAgain',function(){
    		var password = $('#password').val();
    		var passwordAgain = $('#passwordAgain').val();
    		if(password != passwordAgain){
    			$('#password_warning').show();
				$('#password_warning').html("前后两次密码输入不一致！请重新输入");
    		}else{
    			$('#password_warning').hide();
    		}
    	})
    </script>

</body>
</html>