 $(document).ready(function(){

 	(function(){

 		var formValidation = {

 			isValid: true,

 			init: function(){
 				this._setUpListeners();
 			},

 			_setUpListeners: function(){
 				$('#form').on('submit', formValidation._validateForm).on('submit', formValidation._sendEmail);
 			},

 			_validateForm: function(event){
 				event.preventDefault();
 				var form = $(this);
 				var inputs = form.find('input');
 				var checkboxes = form.find('input:checkbox');
 				var valid = true;

 				$.each(inputs, function(index, val){
 					var inputVal = $(val);
 					var valueVal = inputVal.val().trim();
 					var formGroup = $('.input');

 					var mailInput = $('.input_mail');
 					var passwordInput = $('.input_password');
 					var mailFormatFailed = $('.error__mail--format');
 					var pattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;

 					if(valueVal.length === 0){
 						$('.error__mail, .error__password').fadeIn();
 						valid = false;
 					}

 					mailInput.on('focus', function(){
 						$('.error__mail').fadeOut();
 					}); 					

 					passwordInput.on('focus', function(){
 						$('.error__password').fadeOut();
 						if(mailInput.val() !== '' && !(pattern.test(mailInput.val()))){
 							$('.error__mail--format').fadeIn();
 							$('.error--with-desc').fadeOut();
 						}
 						if((pattern.test(mailInput.val()))){
 							$('.error__mail--format').fadeOut();
 						}
 						if( mailInput.val() == '' ){
 							$('.error__mail').fadeIn();
 						}

 					});

 					form.on('submit', function(){
 						var correctLogin = "mail@mail.ru";
 						var correctPassword = 123;

 						if(mailInput.val() !== correctLogin || passwordInput.val() !== correctPassword ){
 							$('.error--with-desc, .error-description').fadeIn();
 							
 						}
 						if( mailInput.val() == correctLogin && passwordInput.val() == correctPassword ){
 							$('.error--with-desc, .error-description').fadeOut();
 							console.log("Tous est bon");
 						}
												
 					});

 				});

 				formValidation.isValid = valid;

 			},

 			_sendEmail: function(){
 				
 				if (formValidation.isValid === true){
 					console.log("Sending form !");
 				}else{
 					console.log("Validation FAILED");
 				}
 			}

 		};

 		formValidation.init();

 	}());

 });