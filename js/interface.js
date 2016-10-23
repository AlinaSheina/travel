$(function(){
	$('.js-open-btn').click(function() {
		var thisParent = $(this).parent();
		thisParent.find('.js-open-content').toggleClass('jshide');
		thisParent.find('.arrow-down').toggleClass('arrow-up');
	})
});