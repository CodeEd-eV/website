$(document).ready(function () {

	// one pager init
	$(".main").onepage_scroll({
		sectionContainer: "section",     // sectionContainer accepts any kind of selector in case you don't want to use section
		easing: "ease",                  // Easing options accepts the CSS3 easing animation such "ease", "linear", "ease-in",
		// "ease-out", "ease-in-out", or even cubic bezier value such as "cubic-bezier(0.175, 0.885, 0.420, 1.310)"
		animationTime: 800,             // AnimationTime let you define how long each section takes to animate
		pagination: true,                // You can either show or hide the pagination. Toggle true for show, false for hide.
		updateURL: false,                // Toggle this true if you want the URL to be updated automatically when the user scroll to each page.
		beforeMove: function (index) { },  // This option accepts a callback function. The function will be called before the page moves.
		afterMove: function (index) { },   // This option accepts a callback function. The function will be called after the page moves.
		loop: false,                     // You can have the page loop back to the top/bottom when the user navigates at up/down on the first/last page.
		keyboard: true,                  // You can activate the keyboard controls
		responsiveFallback: false,        // You can fallback to normal page scroll by defining the width of the browser in which
		// you want the responsive fallback to be triggered. For example, set this to 600 and whenever
		// the browser's width is less than 600, the fallback will kick in.
		direction: "vertical"            // You can now define the direction of the One Page Scroll animation. Options available are "vertical" and "horizontal". The default value is "vertical".  
	});

	// particle js init
	particlesJS('particles-js',

		{
			"particles": {
				"number": {
					"value": 200,
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

});
