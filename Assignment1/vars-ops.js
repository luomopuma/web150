var taxPercentage = 0.1;

var mealPrice = parseFloat(prompt("Enter the amount of your meal."),"15");

var subTotal = mealPrice + mealPrice * taxPercentage;
var taxAmt = mealPrice * taxPercentage;
var total = subTotal + taxAmt;

var msg = "<br>Meal Price: $"+mealPrice.toFixed(2);
msg += "<br>Tax Amount: $"+taxAmt.toFixed(2);
msg += "<br>Total Cost: $"+total.toFixed(2);

var el = document.getElementById("message");
el.innerHTML = msg;