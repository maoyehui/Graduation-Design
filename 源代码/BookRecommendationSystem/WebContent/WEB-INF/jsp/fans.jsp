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
    <script type="text/javascript" async="" href="js/ga.js"></script>
    <base href="/BookRecommendationSystem/index" target="_top">
    <link href="css/core.css" type="text/css" rel="stylesheet">
    <link href="css/pt_frame.css" type="text/css" rel="stylesheet">
    <link href="css/home.css" type="text/css" rel="stylesheet">
    <link href="css/pt_my_index.css" type="text/css" rel="stylesheet">
<style>
	.reactions_list{
		width:80%;
		margin:0 auto;
		padding:20px;
	}
	.reactions_list{
		width:100%;
		margin:0 auto;
	}
	.book_title{
		font-size:14px;
	}
	.evaluation{
	
	
	}
	.reaction_content{
	
	
	}


</style>
</head>
<body>
<div class="m-top">
	<div class="wrap">
		<h1 class="logo"><a hidefocus="true" href="/BookRecommendationSystem/index">阅读推荐</a></h1>
		<ul class="m-nav j-tflag">
			<li class="fst"><span><a hidefocus="true" href="/BookRecommendationSystem/index" data-module="discover" class=""><em>发现书籍</em><sub class="cor">&nbsp;</sub></a></span></li>
			<li><span><a data-res-action="bilog" data-log-action="page" data-log-json="{&quot;type&quot;:&quot;my&quot;}" hidefocus="true" href="user/my" data-module="my" class="z-slt"><em>我的书架</em><sub class="cor">&nbsp;</sub></a></span></li>
			<li><span><a hidefocus="true" href="user/friend" data-module="friend"><em>以书会友</em><sub class="cor">&nbsp;</sub><i class="dot u-icn u-icn-68 f-alpha j-t" style="display:none"></i></a></span></li>
			<li><span><a hidefocus="true" href="/nmusician/web/recruit" target="_blank" data-module="musician"><em>作家</em></a></span></li>
		</ul>
		<div class="m-srch f-pr j-suggest" id="g_search">
			<div class="srchbg">
				<span class="parent"><input type="text" class="txt j-flag" value="" id="auto-id-nXAr7KJKeHTS8TqE" style="opacity:1"><label class="ph j-flag" id="auto-id-ilcoST09R6TTXiQZ">书名/作家/书单/用户</label></span>
			</div>
			<span class="j-flag" style="display:none" id="auto-id-Z9ygCXxGHQK70hzc">&nbsp;</span>
			<div class="u-lstlay j-flag" style="display:none" id="auto-id-FMSfrXfAh0XWpfZ2">
			</div>
		</div>
	</div>
</div>
<div id="g_nav" class="m-subnav m-subnav-up f-pr">
	<div class="shadow">
		&nbsp;
	</div>
</div>

<div class="g-bd">
	<div class="g-wrap p-prf">
		<dl class="m-proifo f-cb" id="head-box">
			<dt class="f-pr" id="ava">
			<img src="/" id='userImg'>
			<div class="btm">
				<a href="/user/update" class="upload">更换头像</a>
			</div>
			</dt>
			<dd id="userHome">
				<div class="name f-cb">
					<div class="f-cb">
						<div class="edit">
						<a href="/user/update?id=361583845" hidefocus="true" class="u-btn2 u-btn2-1"><i>编辑个人资料</i></a>
						</div>
						<div class="rect" id="newmusician">
						</div>
						<h2 id="j-name-wrap" class="wrap f-fl f-cb">
							<span class="tit f-ff2 s-fc0 f-thide" id='name'></span>
							<span class="lev u-lev u-icn2 u-icn2-lev">
								<span id='level'></span>
								<i class="right u-icn2 u-icn2-levr"></i>
							</span>
							<i class="icn u-icn u-icn-01"></i>
						</h2>
					</div>
				</div>
				<ul class="data s-fc3 f-cb" id="tab-box">
					<li class="fst">
						<a href="user/userHome">
							<strong id="event_count"></strong>
							<span>读后感</span>
						</a>
					</li>
					<li>
						<a href="user/follow">
							<strong id="follow_count"></strong>
							<span>关注</span>
						</a>
					</li>
					<li>
						<a href="user/fans">
							<strong id="fan_count"></strong>
							<span>粉丝</span>
							<i class="u-icn u-icn-68 f-alpha" id="newCount" style="display:none">
							</i>
						</a>
					</li>
				</ul>
				<div class="inf s-fc3">
					<span id="area"></span><span class="sep" id="age" data-age="778176000000">&nbsp;年龄：<span id="birthday"></span></span>
				</div>
				<div class="inf s-fc3 f-cb">
					<span class="tit">社交网络：</span>
					<ul class="u-logo u-logo-s f-cb">
						<li><i class="u-slg u-slg-sn-gray" title="新浪微博"></i></li>
						<li><i class="u-slg u-slg-db-gray" title="豆瓣网"></i></li>
					</ul>
				</div>
			</dd>
		</dl>
		<div class="u-title u-title-1 f-cb">
			<h3><span class="f-ff2 s-fc3">粉丝</span></h3>
		</div>
		<ul class="m-fans f-cb" id="main-box">
		<!-- 
			<li class="last z-new">
				<a href="/user/home?id=446116682" class="ava f-pr" title="飞奔的小蜗牛壳儿">
					<img src="http://p1.music.126.net/VnZiScyynLG7atLIZ2YPkw==/18686200114669622.jpg?param=60y60">
					<i class="dot u-icn u-icn-68 f-alpha"></i>
				</a>
				<div class="info">
					<p>
						<a href="/user/home?id=446116682" class="s-fc7 f-fs1 nm f-thide" title="飞奔的小蜗牛壳儿">飞奔的小蜗牛壳儿</a>&nbsp;
						<i class="icn u-icn u-icn-s-00"></i>
					</p>
					<p>
						<a href="/user/event?id=446116682">动态<em class="s-fc7">0</em></a>
						<span class="line">|</span>
						<a href="/user/follows?id=446116682">关注<em class="s-fc7">3</em></a>
						<span class="line">|</span>
						<a href="/user/fans?id=446116682">粉丝<em class="s-fc7">2</em></a>
					</p>
					<p class="s-fc3 f-thide"></p>
				</div>
				<div class="oper" id="oper_446116682">
					<a class="u-btn u-btn-7 f-tdn" href="#" data-action="send" data-userid="446116682" data-nickname="飞奔的小蜗牛壳儿">
					<i>发私信</i>
					</a>
					<p class="s-fc4" style="display:none;"><i class="u-icn u-icn-67"></i> 已关注</p>
					<p class="s-fc4"><i class="u-icn u-icn-66"></i> 相互关注</p>
					<a class="u-btn u-btn-8 f-tdn" href="#" data-action="follow" data-userid="446116682" style="display:none;">关 注</a>
				</div>
			</li>
		 -->
		</ul>
	</div>
</div>

<div class="g-ft ">
    <div class="m-ft">
        <div class="wrap f-cb">
            <div class="copy">
                <p>
                    <a target="_blank" class="s-fc4">关于推荐</a><span class="line">|</span>
                    <a target="_blank" class="s-fc4">客户服务</a><span class="line">|</span>
                    <a target="_blank" class="s-fc4">服务条款</a><span class="line">|</span>
                    <a target="_blank" class="s-fc4">网站导航</a><span class="line">|</span>
                    <a id="g_feedback" href="#" class="s-fc4" onclick="nm.x.feedback();return false;" hidefocus="true">意见反馈</a>
                </p>
                <p class="s-fc3">
                    <span class="sep">兰州理工大学版权所有©2016-2017</span>兰州理工大学运营：<a href="" target="_blank" class="s-fc3">甘网文[2017] 0415-135号</a>
                </p>
            </div>

        </div>
    </div>
</div>
<a title="回到顶部" class="m-back" href="#" id="g_backtop" hidefocus="true" style="display:none">回到顶部</a>
<script src="js/core.js" type="text/javascript"></script>
<iframe frameborder="0" style="display:none" src="about:blank">
</iframe>

<script type="text/javascript" src='js/jquery.min.js'></script>
<script type="text/javascript">

	attention();
	function attention(){
		//个人信息
		$.ajax({
			url:'user/userHome',
			success:function(data){
				//console.log(JSON.parse(data));
				JSON.parse(data).forEach(function(item,index){
					switch(index){
					case 0:
						$('#userImg').attr('src',item['picture']);
						$('#name').html(item['name']);
						$('#level').html(item['level']);
						$('#area').html("所在地区：" + item['province'] + " - " + item['city']);
						$('#birthday').html(item['birthday']);
						break;
					case 1:
						$('#follow_count').html(item);
						break;
					case 2:
						$('#fan_count').html(item);
						break;
					case 3:
						$('#event_count').html(item);
						break;
					}
				})
			},
			error:function(){
			}
			
		})
		
		$("#main-box").empty();
		//粉丝信息
		$.ajax({
	    	url:'user/selectFans',
	    	success:function(data){
	    		
	    		JSON.parse(data).forEach(function(item,index){
	    			console.log(typeof item['tag']);
	    			console.log(item['tag']);
	    			if(item['tag']==1){
	    				var li=$("<li class='odd last' id="+item['friend_id']+"><a href='' class='ava f-pr' title='"+ item['friend_name'] +"'><img src='"+ item['friend_picture'] +"'><i class='dot u-icn u-icn-68 f-alpha'></i></a><div class='info'><p><a href='' class='s-fc7 f-fs1 nm f-thide' title='"+ item['friend_name'] +"'>"+ item['friend_name'] +"</a>&nbsp;<i class='icn u-icn u-icn-s-00'></i></p><p><a href=''>动态<em class='s-fc7'>"+ item['friend_reaction'] +"</em></a><span class='line'>|</span><a href=''>关注<em class='s-fc7'>"+ item['friend_follow'] +"</em></a><span class='line'>|</span><a href=''>粉丝<em class='s-fc7'>"+ item['friend_fans'] +"</em></a></p><p class='s-fc3 f-thide'></p></div><div class='oper'><i class='u-icn u-icn-66'></i> 相互关注</p></div></li>");
	    				$("#main-box").append(li);
	    			}else{
	    				var li=$("<li class='odd last' id="+item['friend_id']+"><a href='' class='ava f-pr' title='"+ item['friend_name'] +"'><img src='"+ item['friend_picture'] +"'><i class='dot u-icn u-icn-68 f-alpha'></i></a><div class='info'><p><a href='' class='s-fc7 f-fs1 nm f-thide' title='"+ item['friend_name'] +"'>"+ item['friend_name'] +"</a>&nbsp;<i class='icn u-icn u-icn-s-00'></i></p><p><a href=''>动态<em class='s-fc7'>"+ item['friend_reaction'] +"</em></a><span class='line'>|</span><a href=''>关注<em class='s-fc7'>"+ item['friend_follow'] +"</em></a><span class='line'>|</span><a href=''>粉丝<em class='s-fc7'>"+ item['friend_fans'] +"</em></a></p><p class='s-fc3 f-thide'></p></div><div class='oper'></p><a class='u-btn u-btn-8 f-tdn' href='' id='add'>关 注</a></div></li>");
	    				$("#main-box").append(li);
	    			}
	    			
	    			
	    		});
	    	},
	    	error:function(){
	    	}
	    })
	}
	
	//添加关注
	$(document).on('click','#add',function(event){
		event.preventDefault();
		$.ajax({
			url:'user/insertAttentionById?friend_id='+$(this).parents('li').attr('id'),
			success:function(data){
				if(data=='1'){
					attention();
				}
			}		
		})
	})
	
	
</script>

</body>
</html>