<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>阅读推荐</title>
    <meta charset="utf-8">
    <meta name="baidu-site-verification" content="cNhJHKEzsD">
    <meta property="qc:admins" content="27354635321361636375">
    <meta name="keywords" content="阅读推荐，音乐，播放器，网易，下载，播放，DJ，免费，明星，精选，歌单，识别音乐，收藏，分享音乐，音乐互动，高音质，320K，音乐社交，netease cloud music，cloudmusic，neteasemusic，neteasecloudmusic，music，netease，cloud">
    <meta name="description" content="阅读推荐是一款专注于发现与分享的音乐产品，依托专业音乐人、DJ、好友推荐及社交功能，为用户打造全新的音乐生活。cloud，netease cloud music，cloudmusic，neteasemusic，neteasecloudmusic，music，netease">
    <title>阅读推荐</title>
    <script type="text/javascript" async="" href="js/ga.js"></script>
    <base href="/BookRecommendationSystem/index" target="_top">
    <link href="css/core.css" type="text/css" rel="stylesheet"><link href="//s2.music.126.net/sep/s/2/pt_frame.css?25752eef9feffd06755cee7dd962b9c9" type="text/css" rel="stylesheet">
    <link href="css/pt_my_index.css" type="text/css" rel="stylesheet">
</head>
<body>
<div class="m-top">
    <div class="wrap">
        <h1 class="logo"><a hidefocus="true" href="/BookRecommendationSystem/index">阅读推荐</a></h1>
        <ul class="m-nav j-tflag">
            <li class="fst">
                <span><a hidefocus="true" href="/BookRecommendationSystem/index" data-module="discover" class=""><em>发现书籍</em></a></span>
            </li>
            <li>
                <span><a hidefocus="true" href="user/my" data-module="my" ><em>我的书架</em></a></span>
            </li>
            <li>
                <span><a hidefocus="true" href="user/friend" data-module="friend" class="z-slt"><em>以书会友</em><sub class="cor">&nbsp;</sub><i class="dot u-icn u-icn-68 f-alpha j-t" style="display:none;"></i></a></span>
            </li>
            <li>
                <span><a hidefocus="true" href="/nmusician/web/recruit" target="_blank" data-module="musician"><em>作家</em></a></span>
            </li>
        </ul>
        <div class="m-srch f-pr j-suggest" id="g_search">
            <div class="srchbg">
				<span class="parent">
				<input type="text" class="txt j-flag" value="" id="auto-id-nXAr7KJKeHTS8TqE" style="opacity: 1;">
				<label class="ph j-flag" id="auto-id-ilcoST09R6TTXiQZ">书名/作家/书单/用户</label>
				</span>
            </div>
            <span class="j-flag" style="display:none;" id="auto-id-Z9ygCXxGHQK70hzc">&nbsp;</span>
            <div class="u-lstlay j-flag" style="display:none;" id="auto-id-FMSfrXfAh0XWpfZ2"></div>
        </div>
    </div>
</div>
<div id="g_nav" class="m-subnav m-subnav-up f-pr j-tflag">
    <div class="shadow">&nbsp;</div>
</div>

<div id="g_mymusic" class="g-mymusic" style="height: 674px;">
    <div class="g-bd3 p-mymusic f-cb" style="min-height: 574px;">
        <div class="g-sd3 u-scroll n-musicsd f-pr j-flag" style="height: 574px;">
            <div>
                <div class="n-minelst n-minelst-1" style="margin-top:8px;">
                    <h2 class="f-ff1">
                        <span class="rtitle" data-action="spread"><i class="tri tri1"></i>感兴趣的人</span>
                    </h2>
                    <ul class="j-flag f-cb" id='recFollow'>
						<li class="j-iflag z-selected">
							<div class="item f-cb">
								<div class="left">
									<a hidefocus="true" class="avatar">
									<img src="http://p1.music.126.net/Y1j1WBw0KPj3ENjuqVke7g==/3295236350131493.jpg?param=40y40" alt="">
									</a>
								</div>
								<p class="name f-thide">
									<a hidefocus="true" class="s-fc0">我的关注</a>
								</p>
								<button type='button' id='rm_follow' class="s-fc4 f-thide num">关注</button>
							</div>
						</li>
					</ul>
                </div>
                <div style="height:100px;"></div>
            </div></div>
        <div class="g-mn3 f-pr j-flag">
            <div class="f-pr">
                <div class="j-flag">
				<div class="g-wrap">
				<div class="m-info f-cb">
					<div class="cover u-cover u-cover-dj">
						<img id="flag_cover" src="images/my_pic.jpg">
						<span class="msk"></span>
					</div>
					<div class="cnt">
						<div class="cntc m-info">
							<div class="hd f-cb">
								<i class="type u-icn u-icn-13"></i>
								<h2 class="f-ff2 f-thide">我的关注</h2>
							</div>
							<div class="user f-cb" id="myInfoById">

							</div>
						</div>
					</div>
				</div>
				</div>
					<div class="u-title u-title-1 f-cb">
						<h3><span class="f-ff2">关注的人</span></h3>
					</div>
				</div>
                <div class="j-flag">
				<div oncopy="return false;" oncut="return false;" ondragstart="return false;" >
				<div class="j-flag">
					<table class="m-table ">
						<thead>
							<tr>
								<th class="first w1">
									<div class="wp">&nbsp;</div>
								</th>
								<th>
									<div class="wp">昵称</div>
								</th>
								<th class="w2">
									<div class="wp">性别</div>
								</th>
								<th class="w3">
									<div class="wp">职业</div>
								</th>
								<th class="w4">
									<div class="wp">城市</div>
								</th>
							</tr>
						</thead>
						<tbody id='follow'>
	
	          			</tbody>
	          		</table>
          		</div>

            	</div>
           	</div>
    </div>
</div>
</div></div>
<a title="回到顶部" class="m-back" href="#" id="g_backtop" hidefocus="true" style="">回到顶部</a>

<script src="js/core.js" type="text/javascript"></script>
<iframe frameborder="0"  style="display: none;" src="about:blank"></iframe>

<script type="text/javascript" src='js/jquery.min.js'></script>
<script type="text/javascript">

	//用户关注列表
	function followList(){
		$('#follow').empty();
		$.ajax({
			url:'user/followInfo',
			success:function(data){
				showData(JSON.parse(data));
			}
		})
	}
	followList();
	function showData(data){
		data.forEach(function(item,index){
			var tr=$("<tr id='"+item['friend_id']+"'><td class='left'></span><button type='button' id='rm_follow'>删除</button>&nbsp;&nbsp;&nbsp;<span class='num'>"+(index+1)+"</td><td>"+item['name']+"</td><td>"+item['gender']+"</td><td>"+item['career']+"</td><td>"+item['city']+"</td></tr>")
			$("#follow").append(tr);
		})
	}
	
	//我的书架个人信息
	$.ajax({
		url:'user/myInfoById',
		success:function(data){
			$('#myInfoById').empty();
			var result=JSON.parse(data);
			var div=$("<div><a class='face'><img src='"+result['picture']+"'></a><span class='name f-thide'><a href='user/home' class='s-fc7'>"+result['name']+"</a></span></div>")
			$('#myInfoById').append(div);
		}
	})
	
	//删除关注的人
	$(document).on('click','#rm_follow',function(){
    	var id=$(this).parents("tr").attr("id");
    	$.ajax({
    		url:'user/deleteAttentionById?friend_id='+id,
    		success:function(data){
    			//删除失败
    			if(data == "0"){
    				alert("删除失败");
    			}
    			//删除成功
    			else{
    				followList();
    			}
    		}
    	})
    })
    
    //感兴趣的人
	$.ajax({
		url:'user/recFollow',
		success:function(data){
			//console.log($('#recFollow'));
			$('#recFollow').empty();
			JSON.parse(data).forEach(function(item,index){
				var li='<li class="j-iflag z-selected" id='+ item['friend_id'] +'><div class="item f-cb"><div class="left"><a hidefocus="true" class="avatar"><img src="'+item["userInfo"]["picture"]+'"></a></div><p class="name f-thide"><a hidefocus="true" class="s-fc0">'+item["userInfo"]["name"]+'</a></p><button type="button" id="add" class="s-fc4 f-thide num">关注</button></div></li>';
				$('#recFollow').append(li);
				 
			})
		}
	})
	console.log($('#rm_follow'));
	
	//点击关注
	$(document).on('click','#add',function(event){
		event.preventDefault();
		$.ajax({
			url:'user/insertAttentionById?friend_id='+$(this).parents('li').attr('id'),
			success:function(data){
				if(data=='1'){
					followList();
				}
			}		
		})
	})

</script>
</body>
</html>