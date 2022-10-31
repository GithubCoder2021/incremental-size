var size = 10;
var growthPerSecond = 0;
var growthCost = 10;

setInterval(function() {
  size += growthPerSecond;
	
  document.getElementById("number").innerText = size;
}, 1000);


function buyGrowth() { 
   if (size >= growthCost) {
     var size -= growthCost;
      document.getElementById("number").innerText = size;
      var growthPerSecond ++;
      document.getElementById("growthSpeed").innerText = growthPerSecond;
      var growthCost = Math.floor(growthCost * 1.15);
      document.getElementById("growthPurchase").innerText = growthCost;
   } else {
     alert("You're too small!!!");
    }  
	
}
