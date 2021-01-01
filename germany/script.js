$(document).ready(function() {
	var x = screen.height;
	
	function hideButtons(){
	  $('button').hide(0);
	  $('#menu').show(1);
	  $('#nav').mouseenter(function(){
		$('button').show('slow');
	  });
	  $('#nav').mouseleave(function(){
		$('button').hide('fast');
		$('#menu').show(0);
	  });
	}
	
	function chooseZone(){
	$('#nav').hide(0);
	$('.content').hide(0);
	$('h1').hide(0);
	$('p').hide(0);
	$('.start_block').show(0);
	}
	
	chooseZone();
	
	$('.start_block').height(x/2.6);
	$('.block').css("padding-top", x/8);
	
	$('#swb').click(function(){
	  $('.start_block').hide(0);
	  $('#nav').show(0);
	  $('#sw').show(0);
	  $('h1').show(0);
	  $('p').show(0);
	});

    $('#back').click(chooseZone);
	
});
