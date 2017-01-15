var sendAjax = (function() {
	var init = function() {
		_setUpListeners ();
		},
		
		_setUpListeners = function() {
			$('form').on('submit', _submitForm);
		},

		_submitForm = function(e) {
			e.preventDefault();

			var $form = $(this),
				url = '/burgers/action.php',
				defObject = _ajaxForm($form, url);
		},

		_ajaxForm = function(form, url) {
			if (!validation.validateForm(form)) {
				return false;
			}

			//запрос на сервер
			var allData = $('form').serializeArray();

			$.ajax({
				url: '/burgers/action.php',
				method: 'POST',
				data: allData
			}).done(function(data){
				modalSubmit(data);
				$('.textMessage').text(data);
			});
		};

	return {
		init: init
	};
})();

if ($('form').length) {
	sendAjax.init();
}