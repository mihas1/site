// Validate
var validation = (function() {
	var init = function() {
		_setUpListeners();
	},
		validateForm = function(form) {
			var elements = form.find('.validate'),
				valid = true;

			$.each(elements, function(index, element) {
				var $element = $(element),
					value = $element.val();

				if (!value.length) {
					valid = false;
					_addError($element);
				}
			});

			return valid;
		},

		_setUpListeners = function() {
			$('form').on('keydown', '.validate-error', _removeError);
			$('form').on('click', '.validate-error', _removeError);
			$('form').on('reset', _clearForm);
		},

		_removeError = function() {
			$(this).removeClass('validate-error');
		},

		_addError = function(element) {
			element.addClass('validate-error');
		},

		_clearForm = function() {
			$(this).find('.validate').removeClass('validate-error');
		};

	return {
		init: init,
		validateForm: validateForm
	};
})();

if ($('form').length) {
	validation.init();
}