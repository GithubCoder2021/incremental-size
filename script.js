var size = 10;
var growthPerSecond = 0;
var growthCost = 10;

setInterval(function() {
  size += growthPerSecond;
	
  document.getElementById("number").innerText = size;
}, 1000)

function buyGrowth() {
   if (size >= growthCost) {
      size-= growthCost;
      growthPerSecond ++;
      document.getElementById("number").innerText = size;
      document.getElementById("growthSpeed").innerText = growthPerSecond;
      growthCost = Math.floor(growthCost * 1.15);
      document.getElementById("growthPurchase").innerText = growthCost;
   }
   else {
     alert("You're too small!!!");
       }  
   }
