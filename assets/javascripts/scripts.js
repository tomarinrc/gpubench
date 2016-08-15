//Start Document Ready (Jquery)
$(function() {
	//Headroom (Animated Header Library)
	$(".navbar-default").headroom();



	//Sidebar Accordion
	/*$('li.sidebar-azlinks-link').on('click', function() {
		if($('ul.sidebar-azsubmenu').is(':visible')) {
			$('ul.sidebar-azsubmenu').slideUp(300);
		}
		$(this).next().slideToggle(300);
	});*/
	//Navbar Searchbar Expanding
	/*var submitIcon = $('.searchbox-icon');
	var inputBox = $('.searchbox-input');
	var searchBox = $('.searchbox');
	var isOpen = false;
	submitIcon.click(function() {
		if(isOpen == false) {
			searchBox.addClass('searchbox-open');
			inputBox.focus();
			isOpen = true;
		} else {
			searchBox.removeClass('searchbox-open');
			inputBox.focusout();
			isOpen = false;
		}
	});
	submitIcon.mouseup(function() {
		return false;
	});
	searchBox.mouseup(function() {
		return false;
	});
	$(document).mouseup(function() {
		if(isOpen == true) {
			$('.searchbox-icon').css('display', 'block');
			submitIcon.click();
		}
	});
	function buttonUp() {
		var inputVal = $('.searchbox-input').val();
		inputVal = $.trim(inputVal).length;
		if(inputVal !== 0) {
			$('.searchbox-icon').css('display', 'none');
		} else {
			$('.searchbox-input').val('');
			$('.searchbox-icon').css('display', 'block');
		}
	}*/
	//Scroll Bar
	/*var lastScrollTop = 0;
	$(window).scroll(function(event) {
		var st = $(this).scrollTop();
		if(st > lastScrollTop) {
			$(".navbar-row-main").slideUp();
		} else {
			$(".navbar-row-main").slideDown();
		}
		lastScrollTop = st;
	});*/
	//End Document Ready (Jquery)
});
