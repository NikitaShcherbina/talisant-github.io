$(document).ready(function() {
	new WOW().init();
	$(".button").hover(function (){
		$(this).find(".after, .before").stop().animate({
			width: "100%",
			height: "50%"
		}, 500);
		if($(this).find(".after, .before").hasClass("anim")) {
			return false;
		} else {
			$(this).find(".after, .before").stop().animate({
				width: "0%",
				height: "100%"
			}, 500, function() {
				$(this).addClass("anim").animate({
					width: "100%", 
					height: "50%"
				}, 500);
			});
		}
	}, function() {
		$(this).find(".after, .before").stop().animate({
			width: "100%",
			height: "50%"
		}, 500);
		if($(this).find(".after, .before").hasClass("anim")) {
			$(this).find(".after, .before").stop().animate({
				width: "0%",
				height: "100%"
			}, 500, function() {
				$(this).removeClass("anim").animate({
					width: "100%", 
					height: "50%"
				}, 500);
			});
		}
	});
	$(document).ready(function(){
        $("a.button").click(function (event) {
            //отменяем стандартную обработку нажатия по ссылке
            event.preventDefault();

            //забираем идентификатор бока с атрибута href
            var id  = $(this).attr('href'),

            //узнаем высоту от начала страницы до блока на который ссылается якорь
                top = $(id).offset().top;
            
            //анимируем переход на расстояние - top за 1500 мс
            $('body,html').animate({scrollTop: top}, 1500);
        });
    });
})