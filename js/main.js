// CLICK TO NEXT PAGE

$('.next').click(function(){
	$('div.page.landing').animate({
		top: '-100vh'
	}, 1000, function() {
    // Animation complete.
	});
})



// LANDING PAGE IMAGE HOVER


$('span.landing.cat').hover(
	function(){
		$(this).addClass('italic');
		$(this).addClass('cat-hovering');
		$(this).css({'cursor':'crosshair','letter-spacing':'-0.1rem'});
	}, function(){
		$(this).removeClass('italic');
		$(this).removeClass('cat-hovering');
		$(this).css({'cursor':'default','letter-spacing':'0rem'});
	}
)


$('span.landing.cat.type-design').hover(
	function(){
		$('img.bg-img').css({'display':'none'})
		$('img.bg-img.type-design').css({'display':'block'})
	}, function(){
		$('img.bg-img.type-design').css({'display':'none'})
	}
)

$('span.landing.cat.web').hover(
	function(){
		$('img.bg-img').css({'display':'none'})
		$('img.bg-img.web').css({'display':'block'})
	}, function(){
		$('img.bg-img.web').css({'display':'none'})
	}
)

$('span.landing.cat.systems').hover(
	function(){
		$('img.bg-img').css({'display':'none'})
		$('img.bg-img.systems').css({'display':'block'})
	}, function(){
		$('img.bg-img.systems').css({'display':'none'})
	}
)

$('span.landing.cat.interact').hover(
	function(){
		$('img.bg-img').css({'display':'none'})
		$('img.bg-img.interact').css({'display':'block'})
	}, function(){
		$('img.bg-img.interact').css({'display':'none'})
	}
)

$('span.landing.cat.book').hover(
	function(){
		$('img.bg-img').css({'display':'none'})
		$('img.bg-img.book').css({'display':'block'})
	}, function(){
		$('img.bg-img.book').css({'display':'none'})
	}
)

$('span.landing.cat.cool').hover(
	function(){
		$('img.bg-img').css({'display':'none'})
		$('img.bg-img.cool').css({'display':'block'})
	}, function(){
		$('img.bg-img.cool').css({'display':'none'})
	}
)

$('span.landing.cat.perform').hover(
	function(){
		$('img.bg-img').css({'display':'none'})
		$('img.bg-img.perform').css({'display':'block'})
	}, function(){
		$('img.bg-img.perform').css({'display':'none'})
	}
)

$('span.landing.cat.typeset').hover(
	function(){
		$('img.bg-img').css({'display':'none'})
		$('img.bg-img.typeset').css({'display':'block'})
	}, function(){
		$('img.bg-img.typeset').css({'display':'none'})
	}
)