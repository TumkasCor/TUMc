	skel.init({
		reset: 'full',
		breakpoints: {
			'global': { range: '*', href: '-'/*tpa=http://tumkascor.tk/js/css/style.css*/, lockViewport: true, viewport: 'minimal-ui' },
			'wide': { range: '-1680', href: '-'/*tpa=http://tumkascor.tk/js/css/style-wide.css*/ },
			'normal': { range: '-1280', href: '-'/*tpa=http://tumkascor.tk/js/css/style-normal.css*/ },
			'mobile': { range: '-640', href: '-'/*tpa=http://tumkascor.tk/js/css/style-mobile.css*/ },
			'mobilep': { range: '-360', href: '-'/*tpa=http://tumkascor.tk/js/css/style-mobilep.css*/ }
		}
	});


		window.onload = function() {
			document.body.className = '';
		}


		window.ontouchmove = function() {
			return false;
		}

	
		window.onorientationchange = function() {
			document.body.scrollTop = 0;
		}