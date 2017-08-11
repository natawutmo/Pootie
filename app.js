(function (window, document, drawModule, undefined) {

var btn = document.getElementById('btn');
btn.addEventListener("click", function(){
    drawModule.init();
    this.style.display = 'none';
});
/*
	document.onkeydown = function(event) {

        keyCode = window.event.keyCode; 
        keyCode = event.keyCode;

        if (keyCode == 40) {
            var now = (new Date()).getTime();
	        var elapsed = now - startTime;
	        console.log(elapsed);
			//var r = Math.round(Math.random()*10 - 0.5);
			//var s = Math.round(Math.random()*10 - 0.5);
			//var b1 = Math.round(Math.random());
			//var b2 = Math.round(Math.random());
			//dy = r;
			//dx = Math.round(Math.sqrt(25-dy*dy));
			//dx = s;
			//if (b1) dy = -dy;
			//if (b2) dx = -dx;
			
			if (dx == speed && dy == 0) {
				dy = speed;
				dx = 0;
			}
			else if (dx == 0 && dy == speed) {
				dx = -speed;
				dy = 0;
			}
			else if (dx == -speed && dy == 0) {
				dx = 0;
				dy = -speed;
			}
			else {
				dx = speed;
				dy = 0;
			}
		}
      }

*/
})(window, document, drawModule);