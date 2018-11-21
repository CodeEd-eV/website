let content = [
	[
		`About us 1 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
		standard dummy
		text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type
		specimen book`,
		`About us 2 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
		standard dummy
		text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type
		specimen book`,
		`About us 3 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
		standard dummy
		text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type
		specimen book`
	], [
		`Member 1 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
		standard dummy
		text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type
		specimen book`,
		`Member 2 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
		standard dummy
		text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type
		specimen book`,
		`Member 3 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
		standard dummy
		text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type
		specimen book`
	], [
		`Partner 1 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
		standard dummy
		text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type
		specimen book`,
		`Partner 2 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
		standard dummy
		text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type
		specimen book`,
		`Partner 3 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
		standard dummy
		text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type
		specimen book`
	],
];

let headings = [
	[
		'ÜBER UNS 1',
		'ÜBER UNS 2',
		'ÜBER UNS 3',
	], [
		'Member 1',
		'Member 2',
		'Member 3',
	], [
		'Partner 1',
		'Partner 2',
		'Partner 3',
	]

]

$(document).ready(function () {

	// one pager init, see https://github.com/peachananr/onepage-scroll for docs
	$(".main").onepage_scroll({
		sectionContainer: "section",
		easing: "ease",
		animationTime: 800,
		pagination: false,
		updateURL: false,
		beforeMove: function (index) {
			markAsideDot(index);
		},
		afterMove: function (index) {
		},
		loop: false,
		keyboard: true,
		responsiveFallback: false,
		direction: "vertical"
	});

	// particle js init
	particlesJS('particles-js',

		{
			"particles": {
				"number": {
					"value": 100,
					"density": {
						"enable": true,
						"value_area": 800
					}
				},
				"color": {
					"value": "#FCFBF9"
				},
				"shape": {
					"type": "triangle",
					"stroke": {
						"width": 0,
						"color": "#000000"
					},
					"polygon": {
						"nb_sides": 3
					},
					"image": {
						"src": "img/github.svg",
						"width": 0,
						"height": 0
					}
				},
				"opacity": {
					"value": 0.1,
					"random": false,
					"anim": {
						"enable": false,
						"speed": 1,
						"opacity_min": 0.1,
						"sync": false
					}
				},
				"size": {
					"value": 0,
					"random": true,
					"anim": {
						"enable": false,
						"speed": 40,
						"size_min": 0.1,
						"sync": false
					}
				},
				"line_linked": {
					"enable": true,
					"distance": 150,
					"color": "#ffffff",
					"opacity": 0.4,
					"width": 1
				},
				"move": {
					"enable": true,
					"speed": 2,
					"direction": "none",
					"random": false,
					"straight": false,
					"out_mode": "out",
					"attract": {
						"enable": false,
						"rotateX": 600,
						"rotateY": 1200
					}
				}
			},
			"interactivity": {
				"detect_on": "canvas",
				"events": {
					"onhover": {
						"enable": true,
						"mode": "grab"
					},
					"onclick": {
						"enable": true,
						"mode": "push"
					},
					"resize": true
				},
				"modes": {
					"grab": {
						"distance": 100,
						"line_linked": {
							"opacity": 0.5
						}
					},
					"bubble": {
						"distance": 400,
						"size": 40,
						"duration": 2,
						"opacity": 8,
						"speed": 3
					},
					"repulse": {
						"distance": 200
					},
					"push": {
						"particles_nb": 4
					},
					"remove": {
						"particles_nb": 2
					}
				}
			},
			"retina_detect": true,
			"config_demo": {
				"hide_card": false,
				"background_color": "#b61924",
				"background_image": "",
				"background_position": "50% 50%",
				"background_repeat": "no-repeat",
				"background_size": "cover"
			}
		}

	);

	// typing init + logic
	const wordList = ["teach!", "hack!", "gather!", "code!"];
	let wordIndex = 0;
	let typeWord = document.getElementById("loveableThings");

	writeWord(wordList[wordIndex], 0);
	wordIndex < wordList.length - 1 ? wordIndex++ : wordIndex = 0;
	window.setTimeout(() => {
		deleteWord();
	}, 2000);
	window.setInterval(() => {
		writeWord(wordList[wordIndex], 0);
		wordIndex < wordList.length - 1 ? wordIndex++ : wordIndex = 0;
		window.setTimeout(() => {
			deleteWord();
		}, 2000);
	}, 3000);


	function writeWord(str, i) {
		if (i <= str.length) {
			window.setTimeout(() => {
				typeWord.innerText = str.substr(0, i);
				if (i != str.length) typeWord.innerText += "|";
				writeWord(str, i + 1);
			}, 200);
		}
	}
	function deleteWord() {
		let text = typeWord.innerText;
		if (text.length != 0) {
			window.setTimeout(() => {
				typeWord.innerText = text.substr(0, text.length - 1);
				deleteWord();
			}, 100);
		}
	}

	//menu click listener
	$('#about-us').click(() => {
		$('.landing-text').each((i, el) => {
			$(el).html(content[0][i]);
		});
		$('.landing-heading').each((i, el) => {
			$(el).html(headings[0][i]);
		});
	});

	$('#member').click(() => {
		$('.landing-text').each((i, el) => {
			$(el).html(content[1][i]);
		});
		$('.landing-heading').each((i, el) => {
			$(el).html(headings[1][i]);
		});
	});

	$('#partner').click(() => {
		$('.landing-text').each((i, el) => {
			$(el).html(content[2][i]);
		});
		$('.landing-heading').each((i, el) => {
			$(el).html(headings[2][i]);
		});
	});

	$('#contact-us').click(() => {
		$('.main').moveTo(5);
	});

	// indicator click listener
	$.map($('.dot'), (val, index) => {
		$(val).click(() => {
			$('.main').moveTo(index + 1);
		});
	});

	// set correct scroll indicator color
	function markAsideDot(index) {
		// reset color
		$('.dot').css('background-color', 'var(--light)');
		// set new color, last element is special case
		let newColor = index === $('.dot').length ? 'var(--action)' : 'var(--primary2)';
		$('.dot:eq(' + --index + ')').css('background-color', newColor);
	}

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

	//header logo click
	$('#logo').click(() => {
		$('.main').moveTo(0);
	});
});
