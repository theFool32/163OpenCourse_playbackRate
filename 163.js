!function() {
    var getLink = function() {
	var s = document.body.innerHTML;
	var reg = /appsrc : '([\w\W]*)m3u8'/;
	return s.match(reg)[1] + "mp4";
    }

    var _video = null;
    var _videoPanel = null;
    var _rateSpan = null;
    var _videoId = 'speedVideo';
    var createVideo = function() {
	if (document.getElementById(_videoId) !== null) return;
	_videoPanel = document.createElement('div');
	_videoPanel.style.width = '860px';
	_videoPanel.style.height = '485px';
	_videoPanel.style.backgroundColor = '#000';
	//_videoPanel.style.resize = 'both';
	//_videoPanel.style.overflow = 'auto';
	_videoPanel.style.position = 'absolute';
	_videoPanel.style.zIndex = 9999;
	_videoPanel.style.top = '140px';
	_videoPanel.style.left = (document.body.clientWidth - 860) / 2 + 'px';


	_video = document.createElement('video');
	_video.id = 'speedVideo';
	var src = getLink();
	if (src === undefined) {
	    console.log("Can't get the src.");
	    return;
	}
	_video.style.width = '100%';
	_video.style.height = '100%';
	_video.autoplay = 'true';
	_video.src = src;
	_video.controls = 'controls';

	_rateSpan = document.createElement('span');
	_rateSpan.innerHTML = 'x3';
	_rateSpan.style.color = '#fff';
	_rateSpan.style.fontSize = '4em';
	_rateSpan.style.position = 'absolute';
	_rateSpan.style.top = 0;
	_rateSpan.style.right = '20px';
	_rateSpan.style.visibility = 'hidden';

	_videoPanel.appendChild(_video);
	_videoPanel.appendChild(_rateSpan);
	document.body.appendChild(_videoPanel);
	document.getElementById('FPlayer').style.display = 'none';
	document.onkeypress = onKeyPressed;
    }

    var _timeId = null;
    var onKeyPressed = function(e) {
	var currKey = e.keyCode || e.which || e.charCode;
	var rate = _video.playbackRate;
	switch (currKey) {
	    case 91: rate -= 0.1; break; //[
	    case 93: rate += 0.1; break; //]
	    case 43: rate += 1;   break; //+
	    case 45: rate -= 1;   break; //-
	    default: break;
	}
	rate = Math.round(rate * 100) / 100;
	if (rate <= 0 || rate >= 32) 
	    rate = Math.round(_video.playbackRate * 100) / 100;
	_video.playbackRate = rate;
	_rateSpan.innerHTML = 'X' + rate;
	_rateSpan.style.visibility = 'visible';
	clearTimeout(_timeId);
	_timeId = setTimeout(hideSpan, 400);
    }

    var hideSpan = function() {
	_rateSpan.style.visibility = 'hidden';
    }

    createVideo();
}();
