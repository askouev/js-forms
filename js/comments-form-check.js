$(document).ready(function() {

	var commentsFormCheck = (function(){

		var _formButton = $('#form_button');
		var _fullTextarea = $('#fullTextarea');
		var _commentErrorEmpty = $('.error')

		var init = function(){
			_watchers();

		}

		var _watchers = function(){
			_formButton.on('click', function(event){

				_formClick(event);	
			});
		}

		var _formClick = function(event){
			event.preventDefault();

			/*var form = $(this),
			var inputs = form.find('input, textarea');

			$.each(inputs, function(index, val){
				var input = $(val),
				var value = input.val().trim();

				console.log("1 = " + index);
				console.log("2 = " + value);
				console.log("3 = " + input);
				console.log("4 = " + val);
			});*/

			if(_fullTextarea.val() == ''){
				_commentErrorEmpty.fadeIn();
			}

			// Скрытие блока ошибки при вводе курсора в поле
			$('#fullTextarea').on('focus', function () {
				_commentErrorEmpty.fadeOut();
			});

		}

		return {
			init
		}

	}());

	commentsFormCheck.init();

});



