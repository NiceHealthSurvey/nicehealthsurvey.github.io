$(document).ready(function() {
  var ripple_wrap = $('.ripple-wrap'),
      rippler = $('.ripple'),
      finish = false,
      monitor = function(el) {
        var computed = window.getComputedStyle(el, null),
            borderwidth = parseFloat(computed.getPropertyValue('border-left-width'));
        if (!finish && borderwidth >= 1500) {
          el.style.WebkitAnimationPlayState = "paused";
          el.style.animationPlayState = "paused";
          swapContent();
        }
        if (finish) {
          el.style.WebkitAnimationPlayState = "running";
          el.style.animationPlayState = "running";
          return;
        } else {
          window.requestAnimationFrame(function() {monitor(el)});
        }
      };
var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0');
var yyyy = today.getFullYear();
$('.date').html(dd + '/' + mm + '/' + yyyy);
  screen1 = $('#content-screen').html();
  screen2 = $('#screen2').html();
  $('#screen2').remove();
  screen3 = $('#screen3').html();
  $('#screen3').remove();
  screen4 = $('#screen4').html();
  $('#screen4').remove();
  screenyes = $('#screenyes').html();
  $('#screenyes').remove();
  screenno = $('#screenno').html();
  $('#screenno').remove();
  
  
  rippler.bind("webkitAnimationEnd oAnimationEnd msAnimationEnd mozAnimationEnd animationend", function(e){
    ripple_wrap.removeClass('goripple');
  });

  $('body').on('click', '#continue1', function(e) {
    rippler.css('left', e.clientX + 'px');
    rippler.css('top', e.clientY + 'px');
    e.preventDefault();
    finish = false;
    ripple_wrap.addClass('goripple');
    window.requestAnimationFrame(function() {monitor(rippler[0])});
  });
  sick = 0;
	q1 = -1;
  $('body').on('click', '#q1-yes', function(e) {
    rippler.css('left', e.clientX + 'px');
    rippler.css('top', e.clientY + 'px');
    e.preventDefault();
    finish = false;
	q1 = 1;
	  sick = 1;
    ripple_wrap.addClass('goripple');
    window.requestAnimationFrame(function() {monitor(rippler[0])});
  });
  $('body').on('click', '#q1-no', function(e) {
    rippler.css('left', e.clientX + 'px');
    rippler.css('top', e.clientY + 'px');
    e.preventDefault();
    finish = false;
	q1 = 0;
    ripple_wrap.addClass('goripple');
    window.requestAnimationFrame(function() {monitor(rippler[0])});
  });
  
  q2 = -1;
  $('body').on('click', '#q2-yes', function(e) {
    rippler.css('left', e.clientX + 'px');
    rippler.css('top', e.clientY + 'px');
    e.preventDefault();
    finish = false;
	q2 = 1;
	  sick = 1;
    ripple_wrap.addClass('goripple');
    window.requestAnimationFrame(function() {monitor(rippler[0])});
  });
  $('body').on('click', '#q2-no', function(e) {
    rippler.css('left', e.clientX + 'px');
    rippler.css('top', e.clientY + 'px');
    e.preventDefault();
    finish = false;
	q2 = 0;
    ripple_wrap.addClass('goripple');
    window.requestAnimationFrame(function() {monitor(rippler[0])});
  });
  
  q3 = -1;
  $('body').on('click', '#q3-yes', function(e) {
    rippler.css('left', e.clientX + 'px');
    rippler.css('top', e.clientY + 'px');
    e.preventDefault();
    finish = false;
	q3 = 1;
	  sick = 1;
	  frm = new FormData();
	  frm.append('Timestamp', (new Date()).toString()));
	  frm.append('Fever', q1);
	  frm.append('Cough', q2);
	  frm.append('Contact', q3);
	  frm.append('Sick', sick);
    fetch('https://script.google.com/macros/s/AKfycbzdC6iPblVhO3AKdy66YGPgb4u3klFzyodaDIogNBWeczkBtUs/exec', { method: 'POST', body: })
      .then(response => console.log('Success!', response))
      .catch(error => console.error('Error!', error.message));
    ripple_wrap.addClass('goripple');
    window.requestAnimationFrame(function() {monitor(rippler[0])});
	
	
	
  });
  $('body').on('click', '#q3-no', function(e) {
    rippler.css('left', e.clientX + 'px');
    rippler.css('top', e.clientY + 'px');
    e.preventDefault();
    finish = false;
	q3 = 0;
	  frm = new FormData();
	  frm.append('Timestamp', (new Date()).toString()));
	  frm.append('Fever', q1);
	  frm.append('Cough', q2);
	  frm.append('Contact', q3);
	  frm.append('Sick', sick);
    fetch('https://script.google.com/macros/s/AKfycbzdC6iPblVhO3AKdy66YGPgb4u3klFzyodaDIogNBWeczkBtUs/exec', { method: 'POST', body: })
      .then(response => console.log('Success!', response))
      .catch(error => console.error('Error!', error.message));
    ripple_wrap.addClass('goripple');
    window.requestAnimationFrame(function() {monitor(rippler[0])});
  });
  
  
  current_screen = 1;
  function swapContent() {
	  switch (current_screen) {
		  case 1:
			current_screen = 2;
			  $('#content-screen').html(screen2);
		  break;
		  case 2:
			current_screen = 3;
			  $('#content-screen').html(screen3);
		  break;
		  case 3:
			current_screen = 4;
			  $('#content-screen').html(screen4);
		  break;
		  case 4:
			if (sick == 1) {
			  $('#content-screen').html(screenno);
			  $('body').addClass("back-red");
			} else {
				$('#content-screen').html(screenyes);
			  $('body').addClass("back-green");
			}
		  default:
		  break;
	  }
      setTimeout(function() {
        finish = true;
      },10);
  }
  
});
