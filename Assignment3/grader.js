var score = 0;
var scores = 0;
var total = 0;
result = '';

do{
    score = parseFloat(prompt("Enter number grades from 0 to 100. Enter 999 when you have submitted all entries."),"95");
    if(score != 999){
        total += score;
        scores += 1;
        console.log(score,total,scores);
    }
}while(score != 999);

var avg = Math.round(total / scores);
console.log(avg);

if (avg < 60){
    result = 'F';
}else if (avg < 68){
    result = 'D';
}else if (avg < 80){
    result = 'C';
}else if (avg <= 100){
    result = 'A';
}else{
    result = 'None';
}

msg = "Your numeric score = "+avg+"\n";
msg += "Your letter grade = "+result;
window.alert(msg);