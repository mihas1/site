var modalSubmit = function(done) {	
	var modal = document.getElementById('myModal'),
		btn = document.getElementById("sendButton"),
		span = document.getElementsByClassName("modal-send")[0];

	if (done) {
		modal.style.display = "block";
	}

	span.onclick = function() {
	    modal.style.display = "none";
	};

	window.onclick = function(event) {
	    if (event.target == modal) {
	        modal.style.display = "none";
	    }
	};
};