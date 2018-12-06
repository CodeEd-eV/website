$(document).ready(function () {
	$('#contact-us').click(() => {
		$('html, body').animate({
			scrollTop: $('.contact-wrapper').offset().top
		}, 1000);
	});

	$('#about-us').click(() => {
		$('html, body').animate({
			scrollTop: 0
		}, 1000);
	});

	members.forEach(member => {
		let img = member.img ? './img/members/' + member.img : 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png';
		$('#members').append(`			
			<div class="member">
				<img src="${img}" alt="">
			<p>${member.fullname}</p>
		</div>`
		)
	});
});

let members = [
	{
		"username": "turban2009",
		"status": "Administrator",
		"billing-active": 1,
		"userid": "UCYAYU7NU",
		"fullname": "Tobias Urban",
		"displayname": "Tobi",
	},
	{
		"username": "jannlukas.meier",
		"status": "Primärer Inhaber",
		"billing-active": 1,
		"userid": "UCYDBQFGR",
		"fullname": "Jann-Lukas Meier",
		"displayname": "Jann-Lukas",
		"img": "JannLukasMaier.png"
	},
	{
		"username": "minhchau.lu",
		"status": "Administrator",
		"billing-active": 1,
		"userid": "UD04BRWBH",
		"fullname": "Minh Chau Lu",
		"displayname": "",
		"img": "MinhChauLu.jpg"
	},
	{
		"username": "sabrina.stoeckl",
		"email": "sabrina.stoeckl@t-online.de",
		"status": "Mitglied",
		"billing-active": 1,


		"userid": "UDA2W82PK",
		"fullname": "Sabrina Stöckl",
		"displayname": "Sabrina",
		"img": "SabrinaStöckl.jpg"
	},
	{
		"username": "christian.diemers",
		"email": "christian.diemers@gmail.com",
		"status": "Administrator",
		"billing-active": 1,
		"userid": "UCYDHL3PT",
		"fullname": "Christian Diemers",
		"displayname": "",
		"img": "ChristianDiemers.jpg"
	},
	{
		"username": "oliver.heilmann",
		"status": "Mitglied",
		"billing-active": 1,
		"userid": "UCYDQ39B3",
		"fullname": "Oliver Heilmann",
		"displayname": "oliver",
		"img": "Oliver.jpg"
	},
	{
		"username": "robert.graf",
		"status": "Mitglied",
		"billing-active": 1,
		"userid": "UCYR52YBW",
		"fullname": "Robert Graf",
		"displayname": "Robert"
	},
	{
		"username": "sonja.goerlich",
		"status": "Mitglied",
		"billing-active": 1,
		"userid": "UDQ22065S",
		"fullname": "Sonja Goerlich",
		"displayname": "Sonja",
		"img": "SonjaGoerlich.jpg"
	},
	{
		"username": "yannickstach",
		"email": "yannickstach@googlemail.com",
		"status": "Mitglied",
		"billing-active": 1,
		"userid": "UCYTY3RMZ",
		"fullname": "Yannick Stachelscheid",
		"displayname": "",
		"img": "YannickStachelscheid.jpg"
	},
	{
		"username": "justin",
		"status": "Mitglied",
		"billing-active": 1,
		"userid": "UCZ7E21U2",
		"fullname": "Justin Lübbers",
		"displayname": ""
	},
	{
		"username": "ga84mov",
		"status": "Mitglied",
		"billing-active": 1,
		"userid": "UCZUJ6GLT",
		"fullname": "Clara Lea B.",
		"displayname": ""
	},
	{
		"username": "nico.thule",
		"status": "Deaktiviert",
		"billing-active": 0,
		"userid": "UD03E1R63",
		"fullname": "Nicolas Thule",
		"displayname": "Nico Thule"
	},
	{
		"username": "t.klesel",
		"status": "Mitglied",
		"billing-active": 1,
		"userid": "UD0BSKXF0",
		"fullname": "Tobias Klesel",
		"displayname": ""
	},
	{
		"username": "m.schrader",
		"status": "Mitglied",
		"billing-active": 1,
		"userid": "UD0BUFK3L",
		"fullname": "Max Schrader",
		"displayname": "Max Schrader"
	},
	{
		"username": "frankz.lu",
		"status": "Mitglied",
		"billing-active": 1,
		"userid": "UD0C0MCBG",
		"fullname": "Frank",
		"displayname": ""
	},
	{
		"username": "jakob.vonderhaar",
		"status": "Mitglied",
		"billing-active": 1,
		"userid": "UD0GHSF4N",
		"fullname": "Jakob von der Haar",
		"displayname": "Jakob",
		"img": "JakobVonDerHaar.jpg"
	},
	{
		"username": "a.schaetzle",
		"status": "Mitglied",
		"billing-active": 1,
		"userid": "UD0KZJVL1",
		"fullname": "Anna Schätzle",
		"displayname": "Anna Maria"
	},
	{
		"username": "janosch-l.mail",
		"status": "Mitglied",
		"billing-active": 1,
		"userid": "UD4HVM4MT",
		"fullname": "Janosch Landvogt",
		"displayname": "",
		"img": "JanoschLandvogt.jpg"
	},
	{
		"username": "alina23.ickler",
		"status": "Deaktiviert",
		"billing-active": 0,
		"userid": "UD77NMNH5",
		"fullname": "Alina Ickler",
		"displayname": "Alina I."
	},
	{
		"username": "fabian",
		"status": "Mitglied",
		"billing-active": 1,
		"userid": "UD8LEBFLH",
		"fullname": "Fabian Höltke",
		"displayname": "Fabi",
		"img": "Fabi.jpg"
	},
	{
		"username": "florian-haberler",
		"status": "Mitglied",
		"billing-active": 1,
		"userid": "UDAJ0T6LB",
		"fullname": "Florian Haberler",
		"displayname": "Flo"
	},
	{
		"username": "mike.degmayr",
		"status": "Mitglied",
		"billing-active": 1,
		"userid": "UDE2S1YCS",
		"fullname": "Mike Degmayr",
		"displayname": "Mike",
		"img": "MikeDegmayr.jpg"
	},
	{
		"username": "sebastian.aigner",
		"status": "Mitglied",
		"billing-active": 1,
		"userid": "UDJQHLZSP",
		"fullname": "Sebastian Aigner",
		"displayname": "Sebastian",
		"img": "SebastianAigner.jpg"
	},
	{
		"username": "nina.stolle",
		"status": "Mitglied",
		"billing-active": 1,
		"userid": "UDR67RBF1",
		"fullname": "Nina Stolle",
		"displayname": "Nina"
	}
];