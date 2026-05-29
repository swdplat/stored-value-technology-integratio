$(function () {
	var showAnimate = 'fadeInUp animated';
	var dismissAnimate = 'fadeOut animated';
    $('.nd-close').bind('click', function () {
		var na = $(this).parents('.note_area');
		if (na.is(':visible'))
		{
			na.addClass(dismissAnimate).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
				$(this).removeClass(dismissAnimate);
				$(this).hide();											
			});
		}			
    });

    $('[data-notedialog]').bind('click', function () {
        var triggerId = $(this).data('notedialog');
		if ($('#' + triggerId).is(':hidden'))
		{
			$('#' + triggerId).show();
			$('#' + triggerId).addClass(showAnimate).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
				$(this).removeClass(showAnimate);						
			});			
		}	
    });

    $('body').bind('click', function (e) {
        var triggerId = $(e.target).data('notedialog');
		var parentNA = $(e.target).parents('.note_area');
		if (parentNA.length !== 0) {
			triggerId = parentNA.attr('id');
		}
        $('.note_area').each(function () {
			var thisID = $(this).attr('id');
            if (thisID !== triggerId && ($(this).is(':visible'))) {
					$('#' + thisID).addClass(dismissAnimate).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
						$(this).removeClass(dismissAnimate);
						$(this).hide();											
				});                
            }
        });        
    });    
	
	$('.note_area').hide();
});