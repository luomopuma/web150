var $= function(id){ return document.getElementById(id);}

var calculate = function () {
    // check entries
    var subtotal = parseFloat($("subtotal").value);
    var tax_rate = parseFloat(document.getElementById("tax_rate").value);
    var sales_tax = (subtotal * (tax_rate / 100));
    var total = subtotal + sales_tax;
    var isValid = true;

    console.log(sales_tax);
    console.log(total);

    if(subtotal == ''){
        document.getElementById("subtotal_error").innerHTML = 'Please enter a positive number less than 1000.';
        isValid = false;
    } else {
        document.getElementById("subtotal_error").innerHTML = '';
    }

    if(tax_rate = ''){
        document.getElementById("tax_rate_error").innerHTML = 'Please enter a positive number under 25.';
        isValid = false;
    } else {
        document.getElementById("tax_rate_error").innerHTML = '';
    }

     // calculate and update
     if(isValid){
        console.log(sales_tax);
        console.log(total);
        document.getElementById("sales_tax").value = sales_tax;
        document.getElementById("total").value = total;
     }
}

var clear_bill = function(){
    document.getElementById("sales_tax").value = '0.0';
    document.getElementById("total").value = '0.0';
    document.getElementById("subtotal_error").innerHTML = 'Enter subtotal.';
    document.getElementById("tax_rate_error").innerHTML = 'Enter sales tax rate (e.g. 9.5).';
    $("subtotal").value = '';
    $("tax_rate").value = '';
}

window.onload = function () {
    $("calculate_bill").onclick = calculate;
    $("clear_bill").onclick = clear_bill;
    $("subtotal").focus(); 
}

