var meal1 = "Breakfast special";
var mealPrice = 20;
var taxPercentage = 0.1;

var tipPercent = parseFloat(prompt("Please enter a tip amount as a percentage, (e.g. 15 for 15%);"),"15");

var taxAmt = mealPrice * taxPercentage;
var subTotal = mealPrice + taxAmt;
var tipAmt = subTotal * tipPercent / 100;
var total = subTotal + tipAmt;

var msg = "You ordered: " + meal1;
msg += "<br>Meal Price: $"+mealPrice.toFixed(2);
msg += "<br>Tax Amount: $"+taxAmt.toFixed(2);
msg += "<br>Tip Amount: $"+tipAmt.toFixed(2);
msg += "<br>Total Amount: $"+total.toFixed(2);

var el = document.getElementById("message");
el.innerHTML = msg;