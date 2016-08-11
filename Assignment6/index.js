var subtotal = 0.0;
var tax_rate = 0.0;
var sales_tax = 0.0;
var total = 0.0;

// Adds 'category' class to menu headers
$(':header').addClass('category');

// Adds item price to total when clicked.
$('ul > li').on('click',function(){

    switch($(this).closest('ul').attr('id')){
        case 'appetizers':
            calculate(2.5);
            break;
        case 'mains':
            calculate(7.5);
            break;
        case 'desserts':
            calculate(5);
            break;
        default:
            console.log('Item not found.');
    }

});

// Loads accordian function for menu
$(document).ready(function(x){
    $("#accordion").accordion();
});

// Adds a specified amount to the total and updates the order summary
var calculate = function(x){
    subtotal += x;
    $('#subtotal')[0].value = subtotal;

    tax_rate = parseFloat($('#tax_rate')[0].value);
    sales_tax = (subtotal * (tax_rate / 100));
    $('#sales_tax')[0].value = sales_tax.toFixed(2);

    total = (subtotal + sales_tax).toFixed(2);
    $('#order_total')[0].value = total;

}

// Clears cart of current amounts
var clear_cart = function(){
    console.log("clear_cart");
    $('#subtotal')[0].value = 0.0;
    $('#sales_tax')[0].value = 0.0;
    $('#order_total')[0].value = 0.0;
}

// Submits order and displays success.html
var submit_order = function(){
    console.log("clicked submit");
    $("form:first").submit();
}

window.onload = function(){
    $("#clear").on('click',clear_cart);
    $("#send_order").on('click',submit_order);
}

