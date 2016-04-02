$(function() {
	//图片预加载
	$('img[data]').load(function() {
		var __this__ = $(this);
		var url = __this__.attr('data');
		var src = __this__.attr('src');
		if (url == '' || url == src) //这里判断如果图片实际地址不存在或者已经加载不处理  
		{
			return;
		}
		var img = new Image(); //实例化一个图片的对象  
		img.src = url; //将要显示的图片加载进来  
		if (img.complete) //如果图片已经加载存在浏览器缓存中直接处理  
		{
			__this__.attr('src', url); //将要显示的图片替换过来  
			return;
		}
		img.onload = function() { //要显示的图片加载完成后做处理  
			__this__.attr('src', url);
		}
	});
	//预加载完成

	var heightBefore = $(window).height();
	var height;
	heightBefore = heightBefore < 600 ? 600 : heightBefore;
	height = (heightBefore - 70) + "px";
	var bannerHeight = ( heightBefore - 100 ) + "px";
	$(".bigSwiper").css("height", height);
	$(".bigSwiper .swiper-slide").css("height", height);
	$(".bigSwiper .bannerSwiper img").css("height", bannerHeight);

	var swiper = new Swiper('.bigSwiper', {
		pagination: '.swiper-pagination',
		paginationClickable: true,
		mousewheelControl: true,
		mode: 'vertical',
		slidesPerView: 1
	});

	$(".bigSwiper .swiper-pagination .swiper-pagination-switch").eq(1).css("background", "url(assets/img/czsh.png) no-repeat center center");
	$(".bigSwiper .swiper-pagination .swiper-pagination-switch").eq(2).css("background", "url(assets/img/wxd.png) no-repeat center center");
	$(".bigSwiper .swiper-pagination .swiper-pagination-switch").eq(3).css("background", "url(assets/img/sc.png) no-repeat center center");
	$(".bigSwiper .swiper-pagination .swiper-pagination-switch").eq(4).css("background", "url(assets/img/jtwzfw.png) no-repeat center center");

	var bannerSwiper = new Swiper('.bannerSwiper', {
		autoplay: 5000, //可选选项，自动滑动
	});


	$(".fix_shop_child").mouseover(function(){
		$(this).find(".black_intro").show();
	});
	$(".fix_shop_child").mouseout(function(){
		$(this).find(".black_intro").hide();
	});
	
	$(".point").mouseover(function(){
		var _src = $(this).find("img").attr("new");
		$(this).find("img").attr("src",_src);
	});
	$(".point").mouseout(function(){
		var _src = $(this).find("img").attr("old");
		$(this).find("img").attr("src",_src);
	});
})