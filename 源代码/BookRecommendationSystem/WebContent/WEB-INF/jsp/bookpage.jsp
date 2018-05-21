<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
    <meta charset="utf-8">
    <meta name="baidu-site-verification" content="cNhJHKEzsD">
    <meta property="qc:admins" content="27354635321361636375">
    <meta name="keywords" content="阅读推荐，音乐，播放器，网易，下载，播放，DJ，免费，明星，精选，歌单，识别音乐，收藏，分享音乐，音乐互动，高音质，320K，音乐社交，netease cloud music，cloudmusic，neteasemusic，neteasecloudmusic，music，netease，cloud">
    <meta name="description" content="阅读推荐是一款专注于发现与分享的音乐产品，依托专业音乐人、DJ、好友推荐及社交功能，为用户打造全新的音乐生活。cloud，netease cloud music，cloudmusic，neteasemusic，neteasecloudmusic，music，netease">
    <title>阅读推荐</title>
    <script type="text/javascript" href="js/ga.js"></script>
    <base href="/BookRecommendationSystem/index" target="_top"> 
    <link href="css/core.css" type="text/css" rel="stylesheet">
    <link href="css/pt_frame.css" type="text/css" rel="stylesheet">
    <link href="css/pt_my_index.css" type="text/css" rel="stylesheet">
</head>

<body>
	
    <div class="m-top">
        <div class="wrap">
            <h1 class="logo"><a hidefocus="true" href="/#">阅读推荐</a></h1>
            <ul class="m-nav j-tflag">
                <li class="fst">
                    <span><a hidefocus="true" href="${pageContext.request.contextPath}/index" data-module="discover" class=""><em>发现书籍</em><sub class="cor">&nbsp;</sub></a></span>
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
            <div class="m-srch f-pr j-suggest" id="g_search">
                <div class="srchbg">
    <span class="parent">
    <input type="text" class="txt j-flag" value="" id="auto-id-nXAr7KJKeHTS8TqE" style="opacity: 1;">
    <label class="ph j-flag" id="auto-id-ilcoST09R6TTXiQZ">单曲/歌手/专辑/歌单/MV/用户</label>
    </span>
                </div>
                <div class="j-showoff u-showoff f-hide"></div>
                <span class="j-flag" style="display:none;" id="auto-id-Z9ygCXxGHQK70hzc">&nbsp;</span>
                <div class="u-lstlay j-flag" style="display:none;" id="auto-id-FMSfrXfAh0XWpfZ2"></div>
            </div>
        </div>
    </div>
    <div id="g_nav" class="m-subnav m-subnav-up f-pr">
        <div class="shadow">&nbsp;</div>
    </div>

    <div class="g-bd4 f-cb">
        <div class="g-mn4">
            <div class="g-mn4c">
                <div class="g-wrap6" id="bookDetail">
                     
                    <div class="n-artist f-cb">
                        <div class="btm">
                        	<span id='bookId' hidden>${bookInfo.book_id }</span>
                            <h2 id="book-name"  class="sname f-thide sname-max" >${bookInfo.title}</h2>
                            <h3 id="book-alias" class="salias f-thide"> 作者：<span class="writer">${bookInfo.writer.writer_name}</span></h3>
                            <div><i class="type u-icn u-icn-13" id="collection" href=""></i></div>
                        </div>
                        <img src="${bookInfo.picture}" alt="${bookInfo.picture}">
                    </div>
                    <div>
                        <div class="n-artdesc">
                            <h2><i>&nbsp;</i>书籍详情</h2>
                            <p class="z-indent">出版社：${bookInfo.press}<br />出版日期：${bookInfo.publish_date}<br />ISBN：${bookInfo.isbn}<br />类别：${bookInfo.category}<br />评分：${bookInfo.evaluation_level}<br />阅读价格：${bookInfo.price}&nbsp;CNY</p>
                            <h2><i>&nbsp;</i>书籍简介</h2>
                            <p class="z-indent">${bookInfo.brief_introduction}</p>
                            <h2><i>&nbsp;</i>书籍目录</h2>
                            <p class="z-indent">${bookInfo.context}</p>
                            <h2><i>&nbsp;</i>作者简介</h2>
                            <p class="z-indent">${bookInfo.writer.brief_introduction}</p>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
        <div class="g-sd4">
            <div class="g-wrap7">
            	<br /><br />
                <h3 class="u-hd3">
                    <span class="f-fl">相似书籍</span>
                </h3>
                <ul class="m-hdlist f-cb" id="rec-similar-books">

                </ul>
            </div>
        </div>
    </div>
    <div class="g-ft ">
            <div class="m-ft">
                <div class="wrap f-cb">
                    <div class="copy">
                        <p>
                            <a href="" target="_blank" class="s-fc4">关于网易</a><span class="line">|</span>
                            <a href="" target="_blank" class="s-fc4">客户服务</a><span class="line">|</span>
                            <a href="" target="_blank" class="s-fc4">服务条款</a><span class="line">|</span>
                            <a href="" target="_blank" class="s-fc4">网站导航</a><span class="line">|</span>
                            <a id="g_feedback" href="#" class="s-fc4" onclick="nm.x.feedback();return false;" hidefocus="true">意见反馈</a>
                        </p>
                        <p class="s-fc3">
                            <span class="sep">兰州理工大学版权所有©2016-2017</span>兰州理工大学运营：<a href="" target="_blank" class="s-fc3">甘网文[2017] 0415-135号</a>
                        </p>
                    </div>

                </div>
            </div>
        </div>

    <script src="js/jquery.min.js" type="text/javascript"></script>
    <script src="js/core.js" type="text/javascript"></script>
<script type="text/javascript">
	//相似书籍
	$.ajax({
    	url:'writer/similarBook?bookId='+$('#bookId').html(),
    	success:function(data){
    		JSON.parse(data).forEach(function(item,index){
    			var li=$("<li style='float: left;width: 36%;height: auto;padding-left: 11%;'><div class='hd' style='width: 91px;height: 104px;'><a href='writer/bookpage?bookId="+item['book_id']+"'><img src='"+ item['picture'] +"' style='width: 91px;height: 104px;'></a></div><p><a href='writer/bookpage?bookId="+ item['book_id'] +"' class='nm nm-icn f-ib f-thide' style='margin: 5px 0px 10px'>"+ item['title'] +"</a></p></li>");
    			$("#rec-similar-books").append(li);
    		});
    	},
    	error:function(){
    	}
    })
    $('#collection').click(function(){
    	console.log($('#bookId').html());
    	$.ajax({
    		url:'user/insertCollectionBookById?book_id='+$('#bookId').html(),
    		success:function(data){
    			if(data=='1'){
    				alert("success")
    				$(this).hide();
    			}else{
    				window.location='login';
    			}
    				
    		}
    		
    	})
    })
</script>
</body>
</html>