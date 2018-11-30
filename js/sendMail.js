$(document).ready(function () {
	function sendMail() {

		let subject = $('#mail-subject').val();
		if (subject.trim() === '') {
			setMailStatus('Bitte Betreff angeben!');
			return;
		}


		let from = $('#mail-from').val();
		if (from.trim() === '') {
			setMailStatus('Bitte Absender Adresse angeben!');
			return;
		}

		if (!validateEmail(from)) {
			setMailStatus('Bitte korrekte Email als Absender Adresse angeben!');
			return;
		}


		let message = $('#mail-message').val();
		if (message.trim() === '') {
			setMailStatus('Bitte Nachricht eingeben!');
			return;
		}

		$.ajax({
			type: 'POST',
			url: 'https://rooftop-finder-py.azurewebsites.net/api/mailtest?code=ivqxkLQy4aLPC4b2zUXUACcN5wrrvaGUBiFDnPLNdSEaSnL5i65YMQ==&clientId=default',
			data: JSON.stringify({
				"fromEmail": from,
				"toEmail": "christian.diemers@gmail.com",
				"subject": subject,
				"message": message
			}),
			headers: {
				'Content-Type': 'application/json',
				'Access-Control-Allow-Origin': '*',
				'Access-Control-Allow-Methods': 'POST, GET, OPTIONS',
				'Access-Control-Allow-Headers': 'X-Requested-With'
			},
			success: function (msg) {
				setMailStatus('Mail send! We will contact you back soon.');
				resetMailInputs();
			},
			error: function (XMLHttpRequest, textStatus, errorThrown) {
				setMailStatus('Sending the mail failed :/. Please contact hello@code-ed.de directly...')
			}
		});
	}

	function setMailStatus(message) {
		$('.contact-content').append(`<p class="mail-status">${message}<p>`);
		setTimeout(() => {
			$('.mail-status').fadeOut(500, () => {
				$(this).remove();
			});
		}, 3000);
	}

	function resetMailInputs() {
		$('#mail-subject').val('');
		$('#mail-from').val('');
		$('#mail-message').val('');
	}

	function validateEmail(email) {
		var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		return re.test(email);
	}


	//send mail listeners
	$('#btn-send').click(() => {
		sendMail();
	});

	$(window).keydown(function (e) {
		if ((e.metaKey || e.ctrlKey) && e.keyCode == 83) { /*ctrl+s or command+s*/
			sendMail();
			e.preventDefault();
			return false;
		}
	});
});