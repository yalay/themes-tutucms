//加载资源信息
function ajax_notice(tit,msg,post,buttom,clss,clss2){
	html = '<div class="ajax_notice">';
	html+= '<div class="ti_cont">';
	html+= '<h2>'+tit+':</h2>';
	html+= '<div class="cloe'+clss+'"><i class="fa fa-close"></i></div>';
	html+= '<div class="msg">';
	html+= '<h3>'+msg+'</h3>';
	html+= '<p>'+post+'</p>';
	html+= '</div>';
	if(clss2){
		html+= '<div class="cloes'+clss2+'">'+buttom+'</div>';
	}

	html+= '</div>';
	html+= '</div>';
	$(document.body).append(html);
	$('.ajax_notice').animate({
		opacity:'1'
	 });
	$('.ti_cont').animate({
		opacity:'1',
		height:'300px'
	 });
}
/* 加载动画 */
function ajax_animation(msg){
	html = '<div class="ajax_animation">';
	html+= '<i class="fa fa-spinner fa-spin"></i>';
	html+= '<span>'+msg+'</span>';
	html+= '</div>';
	$(document.body).append(html);
	$('.ajax_notice').animate({
		opacity:'1'
	 });
}
//关闭模块并跳转到首页
$(document.body).on('click', '.gb_cloe', function() {
	var html = $('.ajax_notice');
	html.remove();
});
//关闭模块
$(document.body).on('click', '.fk_cloe', function() {
	var html = $('.ajax_notice');
	html.remove();
});

$('.ajax_dl_attachs').on('click',function(){
	ajax_animation('正在加载图片下载资源');
	$.ajax({
            type: 'GET',
            dataType: 'json',
            url: '/ajax/dl/'+articleId,
            async: false,
            complete: function () {
                $(".ajax_animation").remove();
            },
            success:function(b) {
            	if(b.success === 1){
            		html = b.d_txt;
					html +='<br /><a class="ajax_down ajax_post_num" target="_blank" href="'+b.d_link+'"><i class="fa"></i> 点击下载 </a>';
					ajax_notice('<i class="fa fa-download"></i> '+b.msg,b.d_msg,html,'立即下载',' gb_cloe','');
            	}else{
					alert(b.msg);
            	}
            }
        });
	return false;
});

// 浏览量等设置
eval(function(p,a,c,k,e,d){while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+c.toString(a)+'\\b','g'),k[c])}}return p}('$(o).l(4(){6(h)});4 6(1,3){9(!3)3=\'\';7 t=k.w();7 b=j+\'?c=i&a=6&v=g&t=\'+t;$.m(b,{1:1,3:3},4(2){9(2.n<0){p(2.5.f)}q{$(\'#r\'+1).d(2.5.u.8());$(\'#s\'+1).d(2.5.e.8())}})}',33,33,'|id|output|type|function|data|loadInfo|var|toString|if||url||html|hits|errorMsg|json|articleId|Article|web_script|Math|ready|getJSON|state|document|alert|else|p_c_up_|p_c_hits_||up||random'.split('|')))


function userAddFavorite() {
    var url = window.location;
    var title = document.title;
    var ua = navigator.userAgent.toLowerCase();
    if (ua.indexOf("360se") > -1) {
        alert("由于360浏览器功能限制，请按 Ctrl+D 手动收藏！");
    }
    else if (ua.indexOf("msie 8") > -1) {
        window.external.AddToFavoritesBar(url, title); //IE8
    }
    else if (document.all) {
        try{
            window.external.addFavorite(url, title);
        }catch(e){
            alert('您的浏览器不支持,请按 Ctrl+D 手动收藏!');
        }
    }
    else if (window.sidebar) {
        window.sidebar.addPanel(title, url, "");
    }
    else {
        alert('您的浏览器不支持,请按 Ctrl+D 手动收藏!');
    }
}