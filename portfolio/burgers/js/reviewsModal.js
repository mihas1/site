var reviewsModal = (function() {
	var init = function() {
			_setUpListeners();
		},

		// $this = $(this),
		// container = $this.closest('.reviews__list-item'),
		// modalBlock = container.find('.modal-reviews'),
		// modalTitle = modalBlock.find('.block-hover__title').text(),
		// modalText = modalBlock.find('.block-hover__text').text(),

		_setUpListeners = function() {
			$('.block-hover__button').on('click', _modalOpen);
			$('.modal-close-img').on('click', _modalClose);
			$('.modal-reviews').on('click', _modalClose);
		},

		_modalOpen = function() {
			var $this = $(this),
				container = $this.closest('.reviews__list-item'),
				// contentBlock = container.find('.reviews__list-item'),
				contentTitle = container.find('.block-hover__title').text(),
				contentText = container.find('.block-hover__text').text(),
				modalContainer = container.closest('.reviews'),
				modalBlock = modalContainer.find('.modal-reviews');

			$('.modal-title').text(contentTitle);
			$('.modal-text').text(contentText);
			modalBlock.css({
			// modalBlock.css({
				'display' : 'block'
			});	
		},

		_modalClose = function() {
			var $this = $(this),
				container = $this.closest('.modal-reviews');

			container.css({
			// modalBlock.css({
				'display' : 'none'
			});
		};

	return {
		init: init
	};
})();

reviewsModal.init();