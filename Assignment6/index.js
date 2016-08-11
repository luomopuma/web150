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
    document.getElementById("subtotal").value = subtotal;

    tax_rate = parseFloat(document.getElementById("tax_rate").value);
    sales_tax = (subtotal * (tax_rate / 100));
    document.getElementById("sales_tax").value = sales_tax.toFixed(2);

    total = (subtotal + sales_tax).toFixed(2);
    console.log(total);
    document.getElementById("order_total").value = total;

}
