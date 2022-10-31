var size = 10;
var growthPerSecond = 0;
var growthCost = 10;
var multiCost = 100;
var multiplier = 1.5;
var multiBaseCost = 1000;
setInterval(function() {
  size += growthPerSecond;
	
  document.getElementById("number").innerText = size;
}, 1000);


setInterval(function() {
  save();
}, 30000);


function buyGrowth() { 
   if (size >= growthCost) {
      size -= growthCost;
      document.getElementById("number").innerText = size;
      growthPerSecond ++;
      document.getElementById("growthSpeed").innerText = growthPerSecond;
      growthCost = Math.floor(growthCost * 1.15);
      document.getElementById("growthPurchase").innerText = growthCost;
   } else {
     alert("You're too small!!!");
    }  
	
}

function buyMulti() { 
   if (size >= multiCost) {
      size -= multiCost;
      document.getElementById("number").innerText = size;
      growthPerSecond = Math.floor(growthPerSecond * multiplier);
      document.getElementById("growthSpeed").innerText = growthPerSecond;
      multiCost = Math.floor(multiCost * 1.45);
      document.getElementById("multiPurchase").innerText = multiCost;
   } else {
     alert("You're too small!!!");
    }  
	
}


function multBaseInc() { 
   if (size >= multiBaseCost) {
      size -= multiBaseCost;
      document.getElementById("number").innerText = size;
      multiplier = Math.floor(multiplier + 0.5);
      document.getElementById("growthSpeed").innerText = multiplier;
      multiBaseCost = Math.floor(multiBaseCost * 1.65);
      document.getElementById("multiPurchase").innerText = multiBaseCost;
   } else {
     alert("You're too small!!!");
    }  
	
}

setInterval(function() {
  if (size <= 1.6e+11) {
   document.getElementById("number").innerText = size;
   document.getElementById("measurement").innerText = "Planck Lengths";
  } else if (size >= 1.6e+11) {
     document.getElementById("number").innerText = size/1.6e+11;
     document.getElementById("measurement").innerText = "Yoctometers";
  } else if (size >= 1.6e+14) {
     document.getElementById("number").innerText = size/1.6e+14;
     document.getElementById("measurement").innerText = "Zeptometers";
  } else if (size >= 1.6e+17) {
     document.getElementById("number").innerText = size/1.6e+17;
     document.getElementById("measurement").innerText = "Attometers";
  } else if (size >= 1.6e+20) {
     document.getElementById("number").innerText = size/1.6e+20;
     document.getElementById("measurement").innerText = "Femtometers";
  } else if (size >= 1.6e+23) {
     document.getElementById("number").innerText = size/1.6e+23;
     document.getElementById("measurement").innerText = "Picimeters";
  } else if (size >= 1.6e+26) {
     document.getElementById("number").innerText = size/1.6e+26;
     document.getElementById("measurement").innerText = "Nanometers";
  } else if (size >= 1.6e+29) {
     document.getElementById("number").innerText = size/1.6e+29;
     document.getElementById("measurement").innerText = "Micrometers";
  } else if (size >= 1.6e+32) {
     document.getElementById("number").innerText = size/1.6e+32;
     document.getElementById("measurement").innerText = "Millimeters";
  } else if (size >= 1.6e+33) {
     document.getElementById("number").innerText = size/1.6e+33;
     document.getElementById("measurement").innerText = "Centimeters";
  } else if (size >= 1.6e+35) {
     document.getElementById("number").innerText = size/1.6e+35;
     document.getElementById("measurement").innerText = "Meters";
  } else if (size >= 1.6e+38) {
     document.getElementById("number").innerText = size/1.6e+38;
     document.getElementById("measurement").innerText = "Kilometers";
  } else if (size >= 1.6e+41) {
     document.getElementById("number").innerText = size/1.6e+41;
     document.getElementById("measurement").innerText = "Megameters";
  } else if (size >= 1.6e+44) {
     document.getElementById("number").innerText = size/1.6e+44;
     document.getElementById("measurement").innerText = "Gigameters";
  } else if (size >= 1.6e+47) {
     document.getElementById("number").innerText = size/1.6e+47;
     document.getElementById("measurement").innerText = "Terameters";
  } else if (size >= 1.6e+50) {
     document.getElementById("number").innerText = size/1.6e+50;
     document.getElementById("measurement").innerText = "Petameters";
  } else if (size >= 1.6e+53) {
     document.getElementById("number").innerText = size/1.6e+53;
     document.getElementById("measurement").innerText = "Exameters";
  } else if (size >= 1.6e+56) {
     document.getElementById("number").innerText = size/1.6e+56;
     document.getElementById("measurement").innerText = "Zettameters";
  } else {
     document.getElementById("number").innerText = size/1.6e+59;
     document.getElementById("measurement").innerText = "Yottameters";
  } 
}, 10);
