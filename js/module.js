$(document).ready(function() {

// Создание приватного модуля

myModule = (function(){

	var _button = $('.button');  // Переменная для кнопки, обозначенной классом

// Функция для действия при старте модуля
	var init = function(){   
		_sayHallo();  // Метод от одноимённой функции для запуска
		_setUpLiseners();  // Метод от одноимённой функции для запуска
	}

// Функция для отслеживания клика на кнопку
	var _setUpLiseners = function(){
		_button.on('click', function(event){
			_actionOnClick(event);  // Функция клика на кнопку, приведённая ниже
		});
	}

// Функция клика на кнопку
	var _actionOnClick = function(event){
		event.preventDefault();  // Отмена функций про умолчанию
		console.log("Salut encore une fois");
	}

// Функция простая, для вывода в консоль
	var _sayHallo = function(){
		console.log("Hello from me")
	}


// Возврат модуля, чтоб был доступен из вне.
	return {
		init  // Название функции, которая содержит методы при старте модуля
	}

}());

// Вызов приватного модуля
myModule.init();  // Название приватного модуля.Название функции, которая содержит методы при старте модуля

});


