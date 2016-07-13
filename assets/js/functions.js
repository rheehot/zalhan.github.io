$(function() {
	mentoringBubbleClick();
  setInterval(function(){articleTada()}, 1500);
  designBGStuff();
  mobileNav();
  appChange();
});


function mobileNav() {
  $('.mobile-nav-toggle').on('click', function(){
    var status = $(this).hasClass('is-open');
    if(status){ $('.mobile-nav-toggle, .mobile-nav').removeClass('is-open'); }
    else { $('.mobile-nav-toggle, .mobile-nav').addClass('is-open'); }
  });
}

var arrayOfImage = ['assets/img/gold00.png', 'assets/img/gold01.png', 'assets/img/gold02.png', 'assets/img/gold03.png', 'assets/img/gold04.png'];

function appChange() {
 $('.img-change').on({
   'click': function() {
        var src = $(this).attr('src');
        var idx = arrayOfImage.indexOf(src);
        if (idx < arrayOfImage.length - 1) {
          idx += 1;
        } else {
          idx = 0
        }
        src = arrayOfImage[idx];
        $(this).attr('src', src);
    }
 });
}


// function appChange() {
//   $('.img-change').on({
//       'click': function() {
//           $('.img-change').attr('src','assets/img/gold01.png')
//         }
//   });
// }


function designBGStuff() {
  $('.design-img-link').hover(function(){
    $(this).parent().parent().css('background-color', $(this).data('color'));
  }, function(){
    // off > revert the color
    $(this).parent().parent().css('background-color', $(this).parent().parent().data('orig-color'));
  });

}

function articleTada(){
  var randNum = Math.floor(Math.random() * $('.article-thumb').length) +1
  $('.article-thumb').eq(randNum).addClass('is-emph')
    .siblings().removeClass('is-emph');
}


function mentoringBubbleClick() {
  $('.face').on('click',function() {
    var $this = $(this),
        faceTop = $this.position().top,
        vertMath =  -1 * (faceTop - 230),
        faceLeft = $this.position().left,
        horizMath =  0 - faceLeft;

    if($(window).width() > 640){
      $this.parent().css('top', + vertMath +'px');
    } else {
      if($this.hasClass('back-btn')){
        mentoringNarrowStart();
      } else {
        $this.parent().css('left', + horizMath +'px');
      }
    }
    if(!$this.hasClass('back-btn')){
      $this.addClass('has-bubble-open')
        .siblings().removeClass('has-bubble-open');
    }
  });

}
	// when I click a face
	// get the distance of the face from its parent
	// move the whole container up 115px + the count
	// add the is-open class to the face, popo the ballon



$(window).scroll(function() {
	youtubeVidScroll();
	startMentoring();
  startArticles();
});


function youtubeVidScroll() {

	var wScroll = $(window).scrollTop();

	//console.log(wScroll);

	$('.video-strip').css('background-position','center -'+ wScroll +'px');

}

function startArticles(){
  var wScroll = $(window).scrollTop();

  if($('section.articles').offset().top - $(window).height()/1 < wScroll) {
    $('.article-thumb').each(function(i){
      setTimeout(function(){
        $('.article-thumb').eq(i).addClass('is-visible');
      }, 200 * i);
    });
  }
}



function startMentoring() {

  var wScroll = $(window).scrollTop();
  //멘토링 페이지는 half에서 작동됨
  if($('section.editorial').offset().top - $(window).height()/2 < wScroll) {
    if($(window).width() > 640) {
    $('.faces').addClass('launched');
      if(!$('.face').hasClass('has-bubble-open')){
        setTimeout(function(){
          $('.face:nth-child(3)').addClass('has-bubble-open');
        }, 400);
      }
    } else {
      mentoringNarrowStart();
    }
  }

};

function mentoringNarrowStart() {
	$('.faces').css({
		'top': '230px',
		'left': '0px'
	});
	$('.face').first().addClass('has-bubble-open')
		.siblings().removeClass('has-bubble-open');

}

function mentoringWideStart() {
	$('.faces').css({
		'top': '0px',
		'left': '0px'
	});
	$('.face:nth-child(3)').first().addClass('has-bubble-open')
		.siblings().removeClass('has-bubble-open');

}


$(window).resize(function() {
	if($(window).width() > 640){
		mentoringWideStart();
	} else {
		mentoringNarrowStart();
	}
});












