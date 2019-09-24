var app = app || {};


app.Animation = (function () {

	var animationWindow = document.getElementById('animationWindow');

    var animData = {
        wrapper: animationWindow,
        animType: 'svg',
        loop: false,
        prerender: true,
        autoplay: false,
        path: './scripts/HRB_Accordion_L1.json'
    };

    var anim = bodymovin.loadAnimation(animData);

	// --------------------------------------------------------------------------------------
	// set default properties
	function initialize() {
		// DO NOT EDIT: reveals banner once loaded
		// TweenMax.set(anim, {force3D: true});

        anim.setSpeed(1);
	}

	// --------------------------------------------------------------------------------------
	// Starts the animation
	function start() {
		TweenMax.delayedCall(.5, myFunction);

        function myFunction() {
            anim.play();
        }
	}

	// --------------------------------------------------------------------------------------
	// Stops the animation
	function stop() {
		console.log("stopping animation");
	}

	// --------------------------------------------------------------------------------------
	// Publicly accessible methods and properties
	return {
		initialize:initialize,
		start:start,
		stop:stop
	}

})();
