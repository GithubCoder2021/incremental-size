var size = 10
var growthPerSecond = 0

setInterval(function() {
  size += growthPerSecond;
	
  document.getElementById("number").innerText = size;
}, 1000)
