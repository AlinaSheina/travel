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
});