// 移动菜单
$(function(){
  	var $bg;
    $('#mobile_menu').slicknav({
	    duplicate: false,
	    prependTo: '.login_text',
	    init: function() {
        	$('.slicknav_menu').css({'background': 'white'});
        	$('.slicknav_nav a').css({'background': '#fff', 'color': 'red'});
        	$('.login_text').removeClass('hide');
	    }
	});
});

// 滚动到顶端
function backtotop(){this.init();}
backtotop.prototype={constructor:backtotop,init:function(){this._initBackTop()},_initBackTop:function(){var $backTop=this.$backTop=$('<div class="cbbfixed"><a class="gotop cbbtn"><i class="fa fa-angle-up"></i></a></div>');$('body').append($backTop);$backTop.click(function(){$("html, body").animate({scrollTop:0},120)});var timmer=null;$(window).bind("scroll",function(){var d=$(document).scrollTop(),e=$(window).height();0<d?$backTop.css("bottom","10px"):$backTop.css("bottom","-90px");clearTimeout(timmer);timmer=setTimeout(function(){clearTimeout(timmer)},100)})}}
var backtotop = new backtotop();

// 图片延迟加载
$("img.waitpic").lazyload({effect: "fadeIn",threshold: 200});
