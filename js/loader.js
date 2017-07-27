$('#loading').css('height',$(window).height());
$('#loading').css('width',$(window).width());

$(window).load(function() {
	$('#loading').hide();
	$('#headerId').show();
});