$(function(){

	var $content = $('#memes');

	$('#newMeme').on('submit', function(event){
		event.preventDefault();

		var data = $(this).serializeArray();

		var newMeme = {};

		for(var i = 0; i < data.length; i++) {
			if (data[i].url === 'url') {}
		}
	})
})