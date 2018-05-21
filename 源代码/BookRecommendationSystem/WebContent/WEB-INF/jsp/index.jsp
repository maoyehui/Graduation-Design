<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>阅读推荐</title>
    <link rel="stylesheet" href="/BookRecommendationSystem/css/core.css">
    <link rel="stylesheet" href="/BookRecommendationSystem/css/discover.css">
</head>
<body>
<div id="g-topbar" class="g-topbar" style="width:100%; top: 0px;">
    <div class="m-top">
        <div class="wrap">
            <h1 class="logo"><a href="${pageContext.request.contextPath}/index">bookShare</a></h1>
            <ul class="m-nav j-tflag">
                <li class="fst">
                    <span><a hidefocus="true" href="${pageContext.request.contextPath}/index" data-module="discover" class="z-slt"><em>发现书籍</em><sub class="cor">&nbsp;</sub></a></span>
                </li>
                <li>
                    <span><a data-res-action="bilog" data-log-action="page" data-log-json="{&quot;type&quot;:&quot;my&quot;}" hidefocus="true" href="user/my" data-module="my"><em>我的书架</em><sub class="cor">&nbsp;</sub></a></span>
                </li>
                <li>
                    <span><a hidefocus="true" href="user/friend" data-module="friend"><em>以书会友</em><sub class="cor">&nbsp;</sub><i class="dot u-icn u-icn-68 f-alpha j-t" style="display:none;"></i></a></span>
                </li>
                <li>
                    <span><a hidefocus="true" href="" target="_blank" data-module="musician"><em>作家</em></a></span>
                </li>
            </ul>
            
            <div class="m-srch f-pr j-suggest" id="g_search">
                <div class="srchbg">
                    <span class="parent">
                    <input type="text" class="txt j-flag" value="" id="auto-id-gKW2hygTblykdFTi" style="opacity: 1;">
                    <label class="ph j-flag" id="auto-id-zOZGIGf2zcsg8sKf">书名/作家/书单/用户</label>
                    </span>
                </div>
                <span class="j-flag" style="display:none;" id="auto-id-zzu3QXDMD16cWMeE">&nbsp;</span>
                <div class="u-lstlay j-flag" style="display:none;" id="auto-id-Xn4JVhhQerIuO9WT"></div>
            </div>
        </div>
    </div>
    <div class="m-subnav m-subnav-up f-pr j-tflag f-hide">
        <div class="shadow">&nbsp;</div>
    </div>
    <div id="g_nav2" class="m-subnav j-tflag">
        <div class="wrap f-pr">
            <ul class="nav">
                <li><a hidefocus="true" data-module="discover" href="${pageContext.request.contextPath }/index" class="z-slt"><em>推荐</em></a></li>
                <li><a hidefocus="true" data-module="toplist" href="javascript:;" class="rank"><em>排行榜</em></a></li>
                <li><a hidefocus="true" data-module="playlist" href="/music_163/discover/playlist"><em>书单</em></a></li>
                <li><a hidefocus="true" data-module="djradio" href="/music_163/discover/djradio"><em>有声读物</em></a></li>
                <li><a hidefocus="true" data-module="artist" href="/music_163/discover/artist"><em>作家</em></a></li>
                <li><a hidefocus="true" data-module="album" href="/music_163/discover/album"><em>新书上架</em></a></li>
            </ul>
        </div>
    </div>
</div>
<iframe name="contentFrame" id="g_iframe" name='bottom' class="g-iframe" scrolling="auto" frameborder="0" src="${pageContext.request.contextPath }/discover"></iframe>

<script src="/BookRecommendationSystem/js/jquery.min.js"></script>
<script src="/BookRecommendationSystem/js/core.js" type="text/javascript"></script>
<script src="/BookRecommendationSystem/js/pt_discover_index.js" type="text/javascript"></script>
<script src="/BookRecommendationSystem/js/ga.js"></script>

</body>
<script type="text/javascript">

$(function(){
	
	function scrollWindow(){
			function scrollToLocation() {
			  var mainContainer = $('#discover-module');
			  var scrollToContainer = mainContainer.find('.n-bill');
			  //动画效果
			  var a=scrollToContainer.offset();
			  var b=mainContainer.top();
			  var c=mainContainer.scrollTop();
			  console.log( $('#discover-module'))
			  console.log(a)
			  console.log(b)
			  console.log(c)
			  mainContainer.animate({
			    scrollTop: a-b+c
			  },2000);
			}
			scrollToLocation();
	}
	$(".rank").on("click",function(){
		scrollWindow();
	})
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
   
    </script>
</html>