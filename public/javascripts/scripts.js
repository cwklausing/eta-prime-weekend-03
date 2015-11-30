$(function(){

	var $content = $('#memes');

	$('#newComment').on('submit', function(event){
		event.preventDefault();

		var data = $(this).serializeArray();

		var newComment = {};

		for(var i = 0; i < data.length; i++) {
			if (data[i].name === 'comment') {
				newMeme.comment = data[i].value;
			} else if (data[i].name === 'id') {
				newMeme.id = data[i].value;
			}
		}

		$.ajax({url: './data/comments',
			type: 'post',
			data: newComment
		}).done(function(data) {

			console.log(data);

			$h3 = $('<h3>');
			$h3.text(data.name + "\n");

			$p = $('<p>');
			$p.text("Meme id: " + data.id);

			$content.append($h3);
			$content.append($p);
		})
		$(this)[0].reset();

	});

})