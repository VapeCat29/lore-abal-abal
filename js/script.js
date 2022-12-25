/* global monogatari */

// Define the messages used in the game.
monogatari.action ('message').messages ({
	'Help': {
		title: 'Help',
		subtitle: 'Some useful Links',
		body: `
			<p><a href='https://developers.monogatari.io/documentation/'>Documentation</a> - Everything you need to know.</p>
			<p><a href='https://monogatari.io/demo/'>Demo</a> - A simple Demo.</p>
		`
	}
});

// Define the notifications used in the game
monogatari.action ('notification').notifications ({
	'Welcome': {
		title: 'Welcome',
		body: 'This is the Monogatari VN Engine',
		icon: ''
	}
});

// Define the Particles JS Configurations used in the game
monogatari.action ('particles').particles ({

});

// Define the canvas objects used in the game
monogatari.action ('canvas').objects ({

});

// Credits of the people involved in the creation of this awesome game
monogatari.configuration ('credits', {

});


// Define the images that will be available on your game's image gallery
monogatari.assets ('gallery', {

});

// Define the music used in the game.
monogatari.assets ('music', {
	'beforeSummon': 'beforeSummon.mp3',
	'summon': 'Summon.mp3',
	'afterSummon': 'afterSummon.mp3',
	'mainMenu': 'mainMenu.mp3',
});

// Define the voice files used in the game.
monogatari.assets ('voices', {

});

// Define the sounds used in the game.
monogatari.assets ('sounds', {
	'genshinSummon': 'genshinSummon.mp3',
	'typing': 'typing.mp3',
	'electroSummon': 'electroSummon.mp3',
	'takingBook': 'takingBook.mp3',
	'walking': 'walking.mp3',
});

// Define the videos used in the game.
monogatari.assets ('videos', {

});

// Define the images used in the game.
monogatari.assets ('images', {

});

// Define the backgrounds for each scene.
monogatari.assets ('scenes', {
	office: 'office_bg.png',
	officeNight:'officenight_bg.png',
	maudyTyping: 'maudy_typing.png',
	playingGTA: 'playing_gta.png',
	missionFailed: 'mission_failed.png',
	compileError: 'compile_error.png',
	tutorGacha: 'tutor_gacha.png',
	summon: 'summon.png',
	summonSuccess: 'summon_success.png',
	endScreen: 'end_screen.png',

});


// Define the Characters
monogatari.characters ({
	'dika': {
		name: 'Dika',
		directory: 'dika',
		color: '#5bcaff',
		sprites: {
			neutral: 'neutral.png',
			surprised: 'surprised.png',
		},
		expressions:{
			neutral: 'expressions/neutral.png',
			angry: 'expressions/angry.png',
			surprised: 'expressions/surprised.png',
		},
		default_expression: 'neutral'
	},
	'maudi':{
		name: 'Maudi',
		directory: 'maudi',
		color: '#f8ca5d',
		sprites: {
			neutral: 'neutral.png',
			serious: 'serious.png',
			sigh: 'sigh.png',
		},
		expressions:{
			neutral: 'expressions/neutral.png',
			serious: 'expressions/serious.png',

		},
		default_expression: 'neutral'
	},
	'narrator':{
		name: 'Narrator',
		directory: 'narrator',
		expressions:{
			neutral: 'neutral.png',
		},
		default_expression: 'neutral'
	},
	'laptop':{
		name: 'Laptop-kun',
		directory: 'laptop',
		expressions:{
			neutral: 'laptop_kun.png',
		},
		default_expression: 'laptop_kun.png'
	},

});

monogatari.script ({
	// The game starts here.
	'Start': [
		function(){
			this.element().find('[data-component="text-box"]').hide()
		  },
		'play music beforeSummon with loop fade 5 volume 20',
		'show scene office with fadeIn duration 1s',
		'wait 3000',
		`narrator Sinar matahari pagi yang menyelinap dari jendela menyinari sebuah ruang kerja berukuran 4x4.`,
		`narrator Tidak terdapat banyak interior di dalam ruangan tersebut, hanya sebuah meja, printer, kursi office, rak buku berukuran sedang di samping kanan meja, dan sebuah laptop berwarna silver.`,
		`narrator Meski ruangan tersebut terlihat sedikit kosong, tetapi pencahayaan yang baik membuat ruangan itu terlihat cerah dan nyaman.`,
		'play sound typing with loop',
		'show scene maudyTyping with fadeIn duration 2s',
		function(){
			this.element().find('[data-component="text-box"]').hide()
		  },
		'wait 2000',
		`narrator Seorang wanita dengan kemeja putih tanpa lengan terlihat sedang duduk dan mengetikkan sesuatu di laptopnya.`,
		'maudi Hmm kalau gini error gak ya…',
		'show scene office with fadeIn duration 1s',
		'show character maudi neutral with exclaim',
		`narrator Tangan wanita itu bergerak menyisipkan beberapa helaian rambut kebelakang telinganya, sebuah kebiasaan yang ia lakukan setiap kali ia bekerja.`,
		'stop sound typing with fade 2',
		`maudi Kayaknya Dika sudah mulai terbiasa pakai laptopnya`,
		`narrator Jemarinya terhenti sejenak dan kini mata birunya tertuju ke sebuah video livestream yang menampilkan seorang pria yang sedang bermain video game.`,
		function(){
			this.element().find('[data-component="text-box"]').hide()
		  },
		'show scene playingGTA with fadeIn duration 1s',
		'wait 2000',
		`narrator Rambut hitam dengan sedikit warna biru diujung poni pria itu, terlihat mirip dengan warna rambut wanita yang kini duduk dengan mata sayu dan telapak tangan yang menopang dagunya.`,
		'show scene missionFailed with fadeIn duration 1s',
		`narrator Teks merah berukuran besar nampak di layar livestream yang sedang ditonton wanita itu.`,
		`dika:angry Pickstar tolol! mobilnya kebalik terus, NPCnya juga gak mau gerak!`,
		'show scene office with fadeIn duration 1s',
		'show character maudi neutral with exclaim',
		`maudi Haah...`,
		`narrator Helaan nafas dapat terdengar dari wanita itu`,
		`maudi Padahal dia aja yang gak bisa nyetir. Sudah tau licin malah naik bukit.`,
		`narrator Wanita itu terdiam sejenak lalu kembali mengetikkan beberapa baris code ke laptopnya.`,
		'play sound typing with loop',
		'stop music beforeSummon with fade 2',
		'show character maudi serious with exclaim',
		'play music summon with loop fade 2 volume 10',
		`maudi:serious Yah, tapi cuma dia yang cocok untuk rencanaku.`,
		`maudi:serious Ini kesempatan terakhirku untuk mengembalikan kejayaan clan Ina`,
		'stop sound typing with fade 2',
		`narrator Ribuan baris code yang ia perlukan sudah tersusun rapi dan siap untuk dicoba`,
		'show character maudi serious with pulse',
		`narrator Dengan mata tajam dan jantung yang berdebar keras, wanita itu melakukan simulasi pemanggilan dengan code yang sudah ia ketik. (serius amat, padahal ini cuma proses compile wkwkwk)`,
		`laptop Compiling...`,
		`narrator Beberapa baris merah dengan pesan error nampak di layar monitornya.`,
		'show scene compileError with fadeIn duration 1s',
		`laptop Error expected ; at the end of line 6969.`,
		'show scene office with fadeIn duration 1s',
		'show character maudi serious with exclaim',
		`maudi:serious Cih, masih gagal juga.`,
		'play sound typing with loop',
		`narrator Wanita itu nampak kesal tetapi tanpa membuang waktu, ia kembali duduk dan memperbaiki codenya. (awikwok debugging momen)`,
		'show scene officeNight with fadeIn duration 1s',
		`narrator Pagi berganti malam, sinar matahari yang cerah kini digantikan oleh cahaya lampu yang cukup terang namun tidak menyilaukan.`,
		'stop sound typing with fade 2',
		'show character maudi sigh with fadeIn',
		`wait 1000`,
		'show character maudi neutral with fadeIn',
		`maudi Haah... akhirnya selesai juga.`,
		`narrator Wanita itu terlihat lelah tetapi masih terlihat semangat untuk melakukan pemanggilan seperti yang ia rencanakan.`,
		`maudi Oh iya.. Satu lagi.`,
		`narrator Ia bangkit dari kursinya dan mengambil sebuah buku tebal yang terletak ditengah-tengah rak bukunya.`,
		function(){
			this.element().find('[data-component="text-box"]').hide()
		  },
		'play sound takingBook',
		`show scene tutorGacha with fadeIn duration 1s`,
		`wait 2000`,
		`maudi:serious Ok, dengan ini summonnya pasti berhasil.`,
		'show scene officeNight with fadeIn duration 1s',
		'play sound walking',
		`narrator Wanita itu berjalan ketengah ruangan dan bersiap menjalankan code pemanggilannya.`,
		`narrator Masih memegang buku ditangan kirinya, wanita itu mengarahkan tangan kanannya kedepan.`,
		'show scene summon with fadeIn duration 2s',
		`maudi:serious SUMMON!`,
		'play sound electroSummon with volume 50',
		function(){
			this.element().find('[data-component="text-box"]').hide()
		  },
		'show scene summon with flash duration 2s',
		'wait 2000',
		'show scene summon with shakeY duration 1s',
		'wait 1000',
		'show scene summon with shakeY duration 1s',
		'wait 1000',
		'play sound genshinSummon with volume 75',
		'show scene summonSuccess with flash duration 1s',
		'wait 2000',
		`narrator Dika yang tadinya ia tonton melalui livestream kini muncul di hadapannya.`,
		'stop music summon with fade 2',
		'show scene officeNight with fadeIn duration 1s',
		'play music afterSummon with loop fade 2 volume 20',
		'show character dika surprised at left with exclaim',
		`narrator Dika tidak mengatakan apapun. Wajahnya yang terlihat kebingungan berbalik menatap sekelilingnya dengan mulut terbuka.`,
		'show character maudi neutral with exclaim',
		`maudi Hmm kayaknya harus kuajak beli baju baru dulu. Kalau keluar dalam keadaan begini pasti dikatai wibu.`,
		`dika:surprised Emm… kamu siapa?`,
		`narrator Wanita yang sedang hanyut dalam pikirannya itu dihentikan oleh pertanyaan dari pria dihadapannya.`,
		`maudi Oh iya… namaku Maudy.`,
		`maudi Tidak usah banyak tanya dulu, ayo sini kucarikan baju baru.`,
		`dika:surprised ...`,
		`maudi Hmm… pasti dia masih kaget.`,
		`dika:surprised UOOOGGGHHH ONEE-SAN`,
		`show character maudi serious with exclaim`,
		`maudi:serious Anak pante-`,
		function(){
			this.element().find('[data-component="text-box"]').hide()
		  },
		'stop music afterSummon with fade 2',
		`show scene endScreen with fadeIn duration 1s`,
		`wait`,
		'end'
	]

});