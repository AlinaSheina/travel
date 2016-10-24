$(function(){
	$('.js-open-btn').click(function() {
		var thisParent = $(this).parent();
		thisParent.find('.js-open-content').toggleClass('jshide');
		thisParent.find('.arrow-down').toggleClass('arrow-up');
	});

	$('.full-text').click(function() {
		var thisClosest = $(this).closest('.expert-overview');
		thisClosest.toggleClass('full-height');
	});
});