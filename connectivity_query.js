// JavaScript Document

window.addEventListener('load', function() {
  var status = document.getElementById("status");

  function updateOnlineStatus(event) {
    var condition = navigator.onLine ? "online" : "offline";

    status.className = condition;
    status.innerHTML = condition.toUpperCase();

    <!--log.insertAdjacentHTML("beforeend", "Event: " + event.type + "; Status: " + condition);-->
	
	var videocontainer = document.getElementById('videoclip');
	 	videocontainer.pause();
	 	videocontainer.load();
    	videocontainer.play();
  }

  window.addEventListener('online',  updateOnlineStatus);
  window.addEventListener('offline', updateOnlineStatus);
});


button.addEventListener('click', function(e)
{
  if(media.paused)
  {
    media.play();
  }

}, false);