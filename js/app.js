var switchAudio = document.getElementById('sound');
var numberTextWidth, fontSize, deviceType;
var app = {
	counter: -1,
	copy: [
		'О, привет! Слабо нажать еще раз?',
		'Зачем ты это делаешь? Просто потому что я попросил тебя это сделать? Ну, нажми еще раз тогда.',
		'Серьезно. Прекрати. Это глупо.',
		'Еще раз нажмешь, и случится непоправимое!',
		'Мда, была мысль, что что-то произойдет?',
		'Может познакомимся? Меня Тимка зовут :)',
		'Почему ты вообще здесь находишься?',
		'Хм, может ты ищешь способ связаться со мной?',
		'Больше всего времени я провожу в Telegram. <a href="https://t.me/tumkascor">Жми сюда, чтобы написать мне</a>. Ну а если я не прав - нажми кнопку еще раз.',
		'Когда тебе уже надоест это делать?',
		'Ладно, может, тебе хочется посмотреть мои коды?',
		'<a href="https://github.com/TumkasCor">GitHub</a>. Иногда выкладываю некоторые особо удачные сайты!',
		'Ты все еще тут?',
		'Мне больше нечего тебе предложить. Еще один клик - и это все прекратится.'
	]
};

function isMobileOrTablet() {
	var check = false;
	(function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4)))check = true})(navigator.userAgent||navigator.vendor||window.opera);
	return check;
}

$(window).load(function() {

	$('#contact-slide').addClass('hide');
	$('#warning').addClass('hide');
	$('#second-warning').addClass('hide');
	$('.loader-wrapper').hide().html('<div class="loader"><p>Noting down your number...</p></div>');

});

function getTextWidth(text, font) {
	// re-use canvas object for better performance
	var canvas = getTextWidth.canvas || (getTextWidth.canvas = document.createElement("canvas"));
	var context = canvas.getContext("2d");
	context.font = font;
	var metrics = context.measureText(text);
	return metrics.width;
}

function adjustNumberBox(text) {
	//console.log('text: '+text);
	var numberWidth = getTextWidth(text, 'normal '+fontSize+' weissenhof_groteskmedium') + 10;
	//console.log('box width: '+numberWidth);
	$('#mobile').css({ 'width': numberWidth+'px' });

	if(text == 'number') {
		numberTextWidth = numberWidth;
	}
}

$(document).ready(function() {

	if(isMobileOrTablet()) {

		deviceType = 'mobile';

		var btnLeftMargin = $('.copy').offset().left;
		$('#switch, #switch svg').css({ 'left': btnLeftMargin+'px' });
		$('#mobile').attr({ 'placeholder': 'phone number' });

	} else {

		deviceType = 'desktop';
		fontSize = $('.input-field').css('font-size');
		adjustNumberBox('number');

	}

	$('#switch').click(function() {

		$('#hint').hide();

		soundAction('play');

		$('.main-wrapper').toggleClass('off');
		$('a.opl').toggleClass('off');

		if($('.main-wrapper').hasClass('off')) {

			$('.copy p#main-slide').html('');

			if(app.counter >= 14) {
				$('#warning').addClass('hide');
				$('#second-warning').addClass('hide');
				$('#contact-slide').addClass('hide');
			}

		} else {

			app.counter++;

			if(app.counter >= 14) {

				if(app.counter >= 15){
					$('#warning').removeClass('hide');
				}

				if(app.counter >= 16){
					$('#second-warning').removeClass('hide');
				}

				$('#contact-slide').removeClass('hide');
				// app.counter = -1;

			} else {

				$('#contact-slide').addClass('hide');
				$('.copy p#main-slide').html(app.copy[app.counter]);

			}

		}


	});

});

function soundAction(action) {
	switchAudio.currentTime = 0;
	if(action == 'play') {
		switchAudio.play();
	} else {
		switchAudio.pause();
	}
}