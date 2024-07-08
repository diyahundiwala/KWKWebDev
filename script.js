function inIframe() {
    try {
        return window.self !== window.top;
    } catch (e) {
        return true;
    }
}

		var colors = [
			'#490A3D',
			'#BD1550',
			'#E97F02',
			'#F8CA00',
			'#8A9B0F',
			'#69D2E7',
			'#FA6900',
			'#16a085',
			'#27ae60',
			'#2c3e50',
			'#f39c12',
			'#e74c3c',
			'#9b59b6',
			'#FB6964',
			'#342224',
			'#472E32',
			'#77B1A9',
			'#73A857'
		];

var quotes = [
    ["“Forget this world and all its troubles and, if possible, it's multitudinous Charlatans-- everything, in short, but the Enchantress of Numbers.”                     -Ada Lovelace"],
    ["“The most damaging phrase in the language is: ‘It’s always been done that way.”                                 -Admiral Grace Hopper"],
    ["“Nothing in life is to be feared, it is only to be understood. Now is the time to understand more, so that we may fear less.”                               –Marie Curie"],
	  ["“Trust in yourself, believe that your voice matters, and know that your words are good enough.” -Amber Gordon"]
	  ["“There is no recipe, there is no one way to do things — there is only your way. And if you can recognize that in yourself and accept and appreciate that in others, you can make magic.” -Ara Katz"],
	  ["“If we do not share our stories and shine a light on inequities, things will not change.” -Ellen Pao"],
	  ["“If you can find something you’re really passionate about, jump on that. If you’re passionate about [something] and you bring your talent, you’ll be unstoppable.” -Megan Smith"],
	  ["“There is no limit to what we, as women, can accomplish.” -Michelle Obama"],
	  ["“You will be defined not just by what you achieve but by how you survive.” -Sheryl Sandberg"],
    ["“Don't let anyone rob you of your imagination, your creativity, or your curiosity. It's your place in the world; it's your life. Go on and do all you can with it, and make it the life you want to live.” -Mae Jemison"],
    ["“By learning to create technology, girls learn to speak up.” -Regina Agyare"],
    ["“I was taught that the way of progress was neither swift nor easy.” -Marie Curie"],
    ["“Science is not a boy's game, it's not a girl's game. It's everyone's game.” -Nichelle Nichols"]
];


var currentQuote = "";
var currentAuthor = "";
var randomquote = "";
var randomcolor = "";

function getQuote() {
	randomquote = Math.floor(Math.random() * quotes.length);
	randomcolor = Math.floor(Math.random() * colors.length);
    currentQuote = quotes[randomquote][0];
    currentAuthor = quotes[randomquote][1];
	if (inIframe()) {
		$('#tweet-quote').attr('href', 'https://twitter.com/intent/tweet?hashtags=quotes&related=aLamm&text=' + encodeURIComponent('"' + currentQuote + '" ' + currentAuthor));
	}

	$(document).ready(function () {
	    $('html body').animate({
	        backgroundColor: colors[randomcolor],
	        color: colors[randomcolor]
	    }, 500);
	    $('#newquote, .social-icons .fa-twitter').animate({ backgroundColor: colors[randomcolor] }, 500);
			$('blockquote footer').animate({ color: colors[randomcolor] }, 500);	
	    $('blockquote').animate({ borderLeftColor: colors[randomcolor] }, 500);
	    $('#quotetext').animate({ opacity: 0 }, 500, function () {
	        $(this).animate({ opacity: 1 }, 500);
	        $(this).text(currentQuote);
	    });
	    $('#quotesource').animate({ opacity: 0 }, 500, function () {
	        $(this).animate({ opacity: 1 }, 500);
	        $(this).text(currentAuthor);
	    });
    });    
}

function openURL(url) {
    window.open(url, 'Share', 'width=550, height=400, toolbar=0, scrollbars=1 ,location=0 ,statusbar=0,menubar=0, resizable=0');
}

getQuote();

$(document).ready(function () {
    $('#newquote').on('click', getQuote);
    $('#tweetquote').on('click', function () {
        if (!inIframe()) {
            openURL('https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' + encodeURIComponent('"' + currentQuote + '" ' + currentAuthor));
        }
    });
});
