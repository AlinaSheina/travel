$(function(){
	$('.js-open-btn').click(function() {
		var thisParent = $(this).parent();
		thisParent.find('.js-open-content').toggleClass('jshide');
		thisParent.find('.arrow-down').toggleClass('arrow-up');
	});

	$('.full-text-btn').click(function() {
		var thisClosest = $(this).closest('.expert-overview');
		thisClosest.find('.full-text-block').toggleClass('full-height');
	});

	$('.sidebar-arrow').click(function() {
		var sidebar = $(this).closest('.sidebar');
		sidebar.toggleClass('sidebar-hide');
	});

	$('.calendar-item').click(function() {
		$('.calendar-item').removeClass('active-item');
		$(this).addClass('active-item');
	});

	var calendarItemWidth = $('.calendar-item').outerWidth();
	var calendarItemNum = $('.calendar-item').length;
	var calendarOverview = $('.calendar-overview');
	var calendarViewport = $('.calendar-viewport');
	calendarOverview.width(calendarItemWidth * calendarItemNum);

	var marginLeft = 0;
	$('.js-left').click(function() {
		if (marginLeft < 0) {
			marginLeft = marginLeft + calendarItemWidth;
			calendarOverview.css({
				'margin-left': + marginLeft + 'px'
			});
		};
	});
	$('.js-right').click(function() {
		if ( marginLeft <= 0 && marginLeft > -(calendarOverview.width() - calendarViewport.width() - calendarItemNum * 2) ) {
			marginLeft = marginLeft - calendarItemWidth;
			calendarOverview.css({
				'margin-left': + marginLeft + 'px'
			});
		};
	});
});