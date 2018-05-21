<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
    <meta name="baidu-site-verification" content="cNhJHKEzsD" />
    <meta property="qc:admins" content="27354635321361636375" />
    <meta name="keywords" content="阅读推荐，音乐，播放器，网易，下载，播放，DJ，免费，明星，精选，歌单，识别音乐，收藏，分享音乐，音乐互动，高音质，320K，音乐社交，netease cloud music，cloudmusic，neteasemusic，neteasecloudmusic，music，netease，cloud" />
    <meta name="description" content="阅读推荐是一款专注于发现与分享的音乐产品，依托专业音乐人、DJ、好友推荐及社交功能，为用户打造全新的音乐生活。cloud，netease cloud music，cloudmusic，neteasemusic，neteasecloudmusic，music，netease" />
    <title>阅读推荐</title>
    <link href="css/discover.css" type="text/css" rel="stylesheet"/>
     <link rel="stylesheet" href="css/swiper.min.css">
</head>
<body class="discover">

<div data-module="discover" data-sub="discover" id="g_top" class="m-top">&nbsp;</div>
<div id="g_nav" class="m-subnav">&nbsp;</div>

<div class="n-ban d-flag" id="index-banner">
    <div class="wrap">
	    <div class="swiper-container swiper1">
		    <div class="swiper-wrapper" style="z-index:10;">
		        <div class="swiper-slide">
			        <a hidefocus="true" class="active d-flag" href="#">
	                <img class="d-flag" src="images/round_1.jpg">
	           		</a>
		        </div>
		        <div class="swiper-slide">
			        <a hidefocus="true" class="active d-flag" href="#">
	                <img class="d-flag" src="images/round_2.jpg">
	           		</a>
		        </div>
		        <div class="swiper-slide">
			        <a hidefocus="true" class="active d-flag" href="#">
	                <img class="d-flag" src="images/round_3.jpg">
	           		</a>
		        </div>
		        <div class="swiper-slide">
			        <a hidefocus="true" class="active d-flag" href="#">
	                <img class="d-flag" src="images/round_4.jpg">
	           		</a>
		        </div>
		      
		    </div>
		   
		    <div class="swiper-pagination" style="-webkit-filter:grayscale(1)"></div>
		    
		    <div class="swiper-button-prev" style="-webkit-filter:grayscale(1)"></div>
		    <div class="swiper-button-next" style="-webkit-filter:grayscale(1)"></div>
		</div>
    </div>
</div>
<div id="discover-module" class="g-bd1 f-cb">
    <div class="g-mn1">
        <div class="g-mn1c">
            <div class="g-wrap3">
                <div class="n-rcmd">
                    <div class="v-hd2">
                        <a href="/discover/playlist/?cat=1" class="tit f-ff2 f-tdn" id='hotRecommend'>热门推荐</a>
                        <div class="tab">
                            <a href="/discover/playlist/?cat=1" class="s-fc3" id='literature'>文学</a>
                            <span class="line">|</span>
                            <a href="/discover/playlist/?cat=1" class="s-fc3" id='novel'>小说</a>
                            <span class="line">|</span>
                            <a href="/discover/playlist/?cat=1" class="s-fc3" id='history'>历史</a>
                            <span class="line">|</span>
                            <a href="/discover/playlist/?cat=1" class="s-fc3" id='management'>经管</a>
                            <span class="line">|</span>
                            <a href="/discover/playlist/?cat=1" class="s-fc3" id='inspiration'>励志</a>
                        </div>
                        <span class="more"><a href="/discover/playlist/?cat=more" class="s-fc3">更多</a><i class="cor s-bg s-bg-6">&nbsp;</i></span>
                    </div>
                    <ul class="m-cvrlst f-cb" id="hot-book">

                    </ul>
                </div>
                <div class="n-rcmd" id="personalRec" hidden >
				    <div class="v-hd2">
				        <span class="tit f-ff2 f-tdn">个性化推荐</span>
				    </div>
				    <ul class="m-cvrlst m-cvrlst-idv f-cb" id="recomendation_books">
				        
				    </ul>
                </div>
                <div class="n-new">
                    <div class="v-hd2">
                        <a href="/discover/album/" class="tit f-ff2 f-tdn">新书上架</a>
                        <span class="more"><a href="/discover/album/" class="s-fc3">更多</a><i class="cor s-bg s-bg-6">&nbsp;</i></span>
                    </div>
                    <div class="n-disk">
                        <div class="inner" id="album-roller">
                            <a hidefocus="true" href="#" class="click-flag pre s-bg s-bg-7 f-tdn">&nbsp;</a>
                            <div class="roll f-pr">
                                <ul class="f-cb roller-flag" style="left:-645px;">
                                    
                                </ul>
                                <ul class="f-cb roller-flag" style="left:0px;" id="fresh-book">
                                    
                                </ul>
                                <ul class="f-cb roller-flag" style="left:645px;">
                                    
                                </ul>
                                <ul class="f-cb roller-flag" style="left:1290px;">
                                </ul>
                            </div>
                            <a hidefocus="true" href="#" class="click-flag nxt s-bg s-bg-8 f-tdn">&nbsp;</a>
                        </div>
                    </div>
                </div>
                <div class="n-bill">
                <a name='#rankAnchor'></a>
                    <div class="v-hd2">
                        <a href="/discover/toplist" class="tit f-ff2 f-tdn">榜单</a>
                        <span class="more"><a href="/discover/toplist" class="s-fc3">更多</a><i class="cor s-bg s-bg-6">&nbsp;</i></span>
                    </div>
                    <div class="n-bilst" id="top-flag">
                        <dl class="blk ">
                            <dt class="top">
                            <div class="cver u-cover u-cover-4">
                                <img class="j-img" src="images/新书人气榜.jpg">
                                <a class="msk" title="新书人气榜"></a>
                            </div>
                            <div class="tit">
                                <a title="新书人气榜"><h3 class="f-fs1 f-thide">新书人气榜</h3></a>
                            </div>
                            </dt>
                            <dd>
                               	<ol id="FreshBookRank">
                                    
                                </ol>
                                <div class="more"><a href="/discover/toplist?id=19723756" class="s-fc0">查看全部&gt;</a></div>
                            </dd>
                        </dl>
                        <dl class="blk ">
                            <dt class="top">
                            <div class="cver u-cover u-cover-4">
                                <img class="j-img" src="images/图书畅读榜.jpg">
                                <a class="msk" title="图书畅读榜"></a>
                            </div>
                            <div class="tit">
                                <a title="图书畅读榜"><h3 class="f-fs1 f-thide">图书畅读榜</h3></a>
                            </div>
                            </dt>
                            <dd>
                                <ol id="BestReaderRank">
                                    
                                </ol>
                                <div class="more"><a href="/discover/toplist?id=3779629" class="s-fc0">查看全部&gt;</a></div>
                            </dd>
                        </dl>
                        <dl class="blk blk-1">
                            <dt class="top">
                            <div class="cver u-cover u-cover-4">
                                <img class="j-img" src="images/图书高分榜.jpg">
                                <a class="msk" title="图书高分榜"></a>
                            </div>
                            <div class="tit">
                                <a title="图书高分榜"><h3 class="f-fs1 f-thide">图书高分榜</h3></a>
                            </div>
                            </dt>
                            <dd>
                                <ol id="HightEvaluationRank">
                                    
                                </ol>
                                <div class="more"><a href="/discover/toplist?id=2884035" class="s-fc0">查看全部&gt;</a></div>
                            </dd>
                        </dl>
                    </div>
                </div>

            </div>
        </div>
    </div>
    <div class="g-sd1">
        <!--登录-->
        <div class="n-myinfo n-myinfo-1 s-bg s-bg-1" id="login-area">
            <p class="note s-fc3">登录阅读云推荐，可以享受无限阅读的乐趣，并且与作家深入对话</p>
            <a id="index-enter-default" href="#" top.login()="top.login();return false;" class="btn s-bg s-bg-2 f-tdn" tabindex="1">用户登录</a>
        </div>
        <!--登录成功、用户信息-->
        <div class="n-myinfo s-bg s-bg-5" hidden id="login-success-area">
            <div class="f-cb">
                <a href="/user/home?id=100843013" class="head f-pr">
                    <img src="" id='userImg'>
                </a>
                <div class="info">
                    <h4><a href="user/home" id='userName' class="nm nm-icn f-fs1 f-ib f-thide"></a></h4>
                    <p><a href="" class="u-lv u-icn2 u-icn2-lv"><span  id='userLV' >7</span><i class="right u-icn2 u-icn2-lvright"></i></a></p>
                    <div class="btnwrap f-pr">
                        <a data-need-safety="false" data-action="checkin" href="writer/logout" hidefocus="true" class="sign u-btn2 u-btn2-2"><i>注 销</i></a>
                    </div>
                </div>
            </div>
            <ul class="dny s-fc3 f-cb">
                <li class="fst"><a href="user/home"><strong id="event_count">1</strong><span>读后感</span></a></li>
                <li><a href="user/follow"><strong  id='follow_count'>9</strong><span>关注</span></a></li>
                <li class="lst"><a href="user/fans"><strong id="fan_count">1</strong><span>粉丝</span></a></li>
            </ul>
        </div>
        <div class="n-singer">
            <h3 class="v-hd3">
                <span class="f-fl">签约作家</span>
                <a href="/discover/artist/signed/" class="more s-fc3">查看全部 &gt;</a>
            </h3>
            <ul class="n-enter f-cb" id="singer-list">
                
            </ul>
            <div><a target="_blank" href="/recruit" hidefocus="true" class="u-btn2 u-btn2-1"><i>我要签约</i></a></div>
        </div>
        <div class="n-dj n-dj-1">
            <h3 class="v-hd3">热门作家</h3>
            <ul class="n-hotdj f-cb" id="hotdj-list">
                
            </ul>
        </div>
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
                    <span class="sep">兰州理工大学版权所有©2016-2017</span>兰州理工大学运营：<a href="http://p1.music.126.net/-DB9zs1FAJq8vg7HOb-yOQ==/3250156395654666.jpg" target="_blank" class="s-fc3">甘网文[2017] 0415-135号</a>
                </p>
            </div>

        </div>
    </div>
</div>
<!-- 登录  -->
<div class="m-layer z-show" hidden style="top: 150.5px; left: 455px;" id='loginForm'>
        <div class="zbar">
            <div class="zttl">登录</div>
            
            <span class="zcls" title="关闭窗体" id='closeLoginForm' style="color:green !important">x</span>
        </div>
        <div class="zcnt">
            <div class="lyct lyct-1" id="auto-id-otTEOFAg4fGSicep">
            <div class="n-log2 n-log2-2">
                <div>
                    <input type="text" class="js-input u-txt" placeholder="用户名" id="auto-id-plhBcZ6ynKLFMihd">
                </div>
                <div class="f-mgt10">
                    <input type="password" class="js-input u-txt" placeholder="密码" id="auto-id-TTPb1TJszNG2gwq8">
                </div>
                <div class="u-err" id="error-info" hidden>
                	<i class="u-icn u-icn-25"></i>
                	<span>用户名或密码错误</span>
                </div>
                <div class="f-mgt10">
                    <label class="s-fc3"><input type="checkbox" checked="checked" class="u-auto">自动登录</label>
                    <a href="#" class="f-fr s-fc3" data-action="forget">忘记密码？</a>
                </div>
                <div class="f-mgt20">
                    <a id="loginBtn" class="js-primary u-btn2 u-btn2-2" hidefocus="true" href="#" data-action="login"><i> 登　录</i></a>
                </div>
            </div>
            <div class="js-btmbar n-loglink2 f-cb">
                <a href="${pageContext.request.contextPath}/register" data-action="reg" class="f-fr">没有帐号？免费注册&nbsp;&nbsp;&gt;</a>
            </div>
        </div>
        </div>
        
</div>
<a title="回到顶部" class="m-back" href="#" id="g_backtop" hidefocus="true" style="display:none;">回到顶部</a>
<script type="text/javascript">

</script>

<script src="js/jquery.min.js"></script>
<script src="js/swiper.jquery.min.js"></script>
<script src="js/core.js"></script>
<script src="js/pt_discover_index.js"></script>
<script src="js/ga.js"></script>
</body>

<script type="text/javascript">

var mySwiper = new Swiper ('.swiper1', {
	autoplay : 3000,
    loop: true,
    // 如果需要分页器
    pagination: '.swiper-pagination',
    
    // 如果需要前进后退按钮
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',

  })        
//$("#loginForm").hide();

$("#closeLoginForm").click(function(){
	$("#loginForm").hide();
})
$("#index-enter-default").click(function(e){
	//alert();
	e.preventDefault();
	$("#loginForm").show();
})
    var _gaq = _gaq || [];
    _gaq.push(['_trackPageview']);
    (function() {
        var ga = document.createElement('script');
        ga.type = 'text/javascript';
        ga.async = true;
        ga.src = 'js/ga.js';
        var s = document.getElementsByTagName('script')[0];
        s.parentNode.insertBefore(ga, s);
    })();//fix ipad下的一个bug
    if (navigator.userAgent.indexOf('iPad') != -1) {
        iframeHeight = Math.max(
                Math.max(document.body.scrollHeight, document.documentElement.scrollHeight),
                Math.max(document.body.offsetHeight, document.documentElement.offsetHeight),
                Math.max(document.body.clientHeight, document.documentElement.clientHeight)
        );
        top.document.body.style.height = iframeHeight + 20 + 'px';
    }
    
    //请求数据--热门作家
   var jqXHR=$.ajax({
	   url:'writer/selectWriterOrderByHotdegree'
   })
   //处理请求后的数据
   jqXHR.then(
	function(data){
//		console.log(data);
//		console.log(JSON.parse(data));
		JSON.parse(data).forEach(function(item,index){
			var li=$("<li><a href='' class='cver'><img class='j-img' src='"+item['writer']['picture']+"'></a><div class='info'><p><a class='nm-icn f-thide s-fc0'>"+item['writer']['writer_name']+"</a><sup class='u-icn u-icn-1'></sup></p><p class='f-thide s-fc3'>"+item['writer']['identity_lable']+"</p></div></li>");
			$("#hotdj-list").append(li);
		});
	},function(){}	   
   );
     //请求数据--签约作家
    $.ajax({
    	url:'writer/selectContractWriter',
    	success:function(data){
    		JSON.parse(data).forEach(function(item,index){
    			var li=$("<li><a href='' class='itm f-tdn'><div class='head'><img class='j-img' src='"+item.picture+"'></div><div class='ifo'><h4><span class='nm f-fs1 f-ib f-thide'>"+item.writer_name+"</span></h4><p class='f-thide s-fc3'>"+item.identity_lable+"</p></div></a></li>");
    			$("#singer-list").append(li);
    		});
    	},
    	error:function(){
    	}
    })
    
    // 请求数据--热门推荐
    $("#hotRecommend").click(function(e){
    	e.preventDefault();
    	$.ajax({
        	url:'writer/selectBookByHotdegree',
        	success:function(data){
        		showData(JSON.parse(data));
        	},
        	error:function(){
        	}
        })
    })
    //文学
    $("#literature").click(function(e){
    	e.preventDefault();
    	$.ajax({
    		url:'writer/selectHotBookByLiterature',
    		success:function(data){
    			showData(JSON.parse(data));
    		}
    	})
    })
    //小说
    $("#novel").click(function(e){
    	e.preventDefault();
    	$.ajax({
    		url:'writer/selectHotBookByNovel',
    		success:function(data){
    			showData(JSON.parse(data));
    		}
    	})
    })
    //历史
    $("#history").click(function(e){
    	e.preventDefault();
    	$.ajax({
    		url:'writer/selectHotBookByHistory',
    		success:function(data){
    			showData(JSON.parse(data));
    		}
    	})
    })
    //经管
    $("#management").click(function(e){
    	e.preventDefault();
    	$.ajax({
    		url:'writer/selectHotBookByManagement',
    		success:function(data){
    			showData(JSON.parse(data));
    		}
    	})
    })
    //励志
    $("#inspiration").click(function(e){
    	e.preventDefault();
    	$.ajax({
    		url:'writer/selectHotBookByInspiration',
    		success:function(data){
    			showData(JSON.parse(data));
    		}
    	})
    })
    //热门书籍(文学、小说、历史、经管、励志)
    function showData(data){
    	$("#hot-book").empty();
    	data.forEach(function(item,inxdex){
    		var li=$("<li><div class='u-cover u-cover-1'><img src='"+item['book']['picture']+"'></div><p class='dec'><a title="+item['book']['title']+" class='tit s-fc0' href='writer/bookpage?bookId="+item['book_id']+"'>"+item['book']['title']+"</a></p></li>");
			$("#hot-book").append(li);
    	})
     }
     //默认点击热门推荐
    $("#hotRecommend").trigger('click');
     
     //新书上架
    $.ajax({
    	url:'writer/selectFreshBook',
    	success:function(data){
    		JSON.parse(data).forEach(function(item,index){
    			//console.log(item);
    			var li=$("<li><div class='u-cover u-cover-alb1'><img class='j-img' src='"+item['book']['picture']+"'></div><p class='f-thide'><a title='"+item['book']['title']+"' href='writer/bookpage?bookId="+item['book']['book_id']+"' class='s-fc0 tit'>"+item['book']['title']+"</a></p><p class='tit f-thide' title='"+item['book']['writer']['writer_name']+"'><a class='s-fc3'>"+item['book']['writer']['writer_name']+"</a></li>");
    			$("#fresh-book").append(li);
    		});
    	},
    	error:function(){
    	}
    })
    
    //新书人气榜
    $.ajax({
    	url:'writer/selectFreshBookRank',
    	success:function(data){
    		JSON.parse(data).forEach(function(item,index){
    			var li=$("<li onmouseover='this.className='z-hvr'' onmouseout='this.className='''><span class='no'>"+(index+1)+"</span><a href='writer/bookpage?bookId="+item.book_id+"' class='nm s-fc0 f-thide' title='"+item.title+"'>"+item.title+"</a></li>");
    			if(index<3){
    				li.find("span").addClass("no-top");
    			}
    			$("#FreshBookRank").append(li);
    		});
    	},
    	error:function(){
    	}
    })
    
    //图书畅读榜
    $.ajax({
    	url:'writer/selectBestReaderRank',
    	success:function(data){
    		JSON.parse(data).forEach(function(item,index){
    			var li=$("<li onmouseover='this.className='z-hvr'' onmouseout='this.className='''><span class='no'>"+(index+1)+"</span><a href='writer/bookpage?bookId="+item.book_id+"' class='nm s-fc0 f-thide' title='"+item.title+"'>"+item.title+"</a></li>");
    			if(index<3){
    				li.find("span").addClass("no-top");
    			}
    			$("#BestReaderRank").append(li);
    		});
    	},
    	error:function(){
    	}
    })
    
    //图书高分榜
    $.ajax({
    	url:'writer/selectHightEvaluationRank',
    	success:function(data){
    		JSON.parse(data).forEach(function(item,index){
    			var li=$("<li onmouseover='this.className='z-hvr'' onmouseout='this.className='''><span class='no'>"+(index+1)+"</span><a href='writer/bookpage?bookId="+item.book_id+"' class='nm s-fc0 f-thide' title='"+item.title+"'>"+item.title+"</a></li>");
    			if(index<3){
    				li.find("span").addClass("no-top");
    			}
    			$("#HightEvaluationRank").append(li);
    		});
    	},
    	error:function(){
    	}
    })
    
    //判断用户是否登录
    $.ajax({
    	url:'writer/judgeLogin',
    	success:function(data){
    		JSON.parse(data).forEach(function(item,index){
    			if(JSON.parse(data) != null){
    				//隐藏登录表单
    				$("#loginForm").hide();
    				//隐藏登录按钮
    				$("#login-area").hide();
    				//显示个性化推荐
    				$("#personalRec").show();
    				JSON.parse(data).forEach(function(item,index){
    					switch(index){
    						case 0:
    							$("#recomendation_books").empty();
    						item.forEach(function(item,index){
    							var li=$("<li><div class='u-cover u-cover-1'><img src='"+item['book']['picture']+"'><a title='"+item['book']['title']+"' class='msk'></a></div><p class='dec f-brk'><a href='writer/bookpage?bookId="+item['book']['book_id']+"' title='"+item['book']['title']+"' class='tit s-fc0'>"+item['book']['title']+"</a></p><p class='f-brk s-fc4' title='"+item['book']['writer']['writer_name']+"'><em>"+item['book']['writer']['writer_name']+"</em></p></li>");
    							$("#recomendation_books").append(li);
    						})
    						break;
    						case 1:
    							$("#userImg").attr("src",item["picture"]);
    							$("#userName").html(item["name"]);
    							$("#userLV").text(item["level"]);
    							break;
    						case 2:
    							$("#follow_count").text(item);
    							break;
    						case 3:
    							$("#fan_count").text(item);
    							break;
    						case 4:
    							$("#event_count").text(item);
    							break;
    					}
    				});
    				//显示个人信息
    				$("#login-success-area").show();
    			}
    			//登录失败
    			if(JSON.parse(data) == null){
    				$("#error-info").show();
    			}
    		});
    	},
    	error:function(){
    	}
    })
    
    // 登录操作
    $("#loginBtn").click(function(e){
    	//alert();
    	e.preventDefault();
    	$.ajax({
    		url:'writer/login',
    		method:'POST',
    		data:{
    			userName:$("#auto-id-plhBcZ6ynKLFMihd").val(),
    			password:$("#auto-id-TTPb1TJszNG2gwq8").val()
    		},
    		success:function(data){
    			//console.log(JSON.parse(data));
    			//登录成功
    			if(JSON.parse(data) != null){
    				//隐藏登录表单
    				$("#loginForm").hide();
    				//隐藏登录按钮
    				$("#login-area").hide();
    				//显示个性化推荐
    				$("#personalRec").show();
    				JSON.parse(data).forEach(function(item,index){
    					switch(index){
    						case 0:
    						item.forEach(function(item,index){
    							var li=$("<li><div class='u-cover u-cover-1'><img src='"+item['book']['picture']+"'><a title='"+item['book']['title']+"' class='msk'></a></div><p class='dec f-brk'><a title='"+item['book']['title']+"' class='tit s-fc0'>"+item['book']['title']+"</a></p><p class='f-brk s-fc4' title='"+item['book']['writer']['writer_name']+"'><em>"+item['book']['writer']['writer_name']+"</em></p></li>");
    	    					$("#recomendation_books").append(li);
    						})
    						break;
    						case 1:
    							$("#userImg").attr("src",item["picture"]);
    							$("#userName").html(item["name"]);
    							$("#userLV").text(item["level"]);
    							break;
    						case 2:
    							$("#follow_count").text(item);
    							break;
    						case 3:
    							$("#fan_count").text(item);
    							break;
    						case 4:
    							$("#event_count").text(item);
    							break;
    					}
    					
    				});
    				//显示个人信息
    				$("#login-success-area").show();
    			}
    			//登录失败
    			if(JSON.parse(data) == null){
    				$("#error-info").show();
    			}
    		}
    	})
    })
    
</script>
</html>