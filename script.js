var size = 10;
var growthPerSecond = 0;
var growthCost = 10;
var multiCost = 100;
var multiplier = 1.1;
var multiBaseCost = 1000;
setInterval(function() {
  size += growthPerSecond;
	
  document.getElementById("number").innerText = size;
}, 1000);





function buyGrowth() { 
   if (size >= growthCost) {
      size -= growthCost;
      document.getElementById("number").innerText = size;
      growthPerSecond ++;
      document.getElementById("growthSpeed").innerText = growthPerSecond;
      growthCost = Math.floor(growthCost * 1.15);
      document.getElementById("growthPurchase").innerText = growthCost;
   } 
	
}

function buyMulti() { 
   if (size >= multiCost) {
      size -= multiCost;
      document.getElementById("number").innerText = size;
      growthPerSecond = Math.floor(growthPerSecond * multiplier);
      document.getElementById("growthSpeed").innerText = growthPerSecond;
      multiCost = Math.floor(multiCost * 1.6);
      document.getElementById("multiPurchase").innerText = multiCost;
   }   
	
}


function multBaseInc() { 
   if (size >= multiBaseCost) {
      size -= multiBaseCost;
      document.getElementById("number").innerText = size;
      multiplier = multiplier + 0.1;
      document.getElementById("multiplier").innerText = multiplier;
      multiBaseCost = Math.floor(multiBaseCost * 1.65);
      document.getElementById("multBaseCost").innerText = multiBaseCost;
   } 	
}
