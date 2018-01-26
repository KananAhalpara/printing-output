//-------------------------------------------------------- TASK - 1 --------------------------------------------------------//

//---------- Declare variables ---------------------------//
var a, b, c, output;
a = 3;
b = 5;
//--------- printing output ---------------------//
output = "var a = 3; \n var b = 5; \n var c; \n -------------- \n" +
    "a + b = " + (a + b) + "\n" +
    "a - b = " + (a - b) + "\n" +
    "a * b = " + (a * b) + "\n" +
    "a / b = " + (a / b) + "\n" +
    "a % b = " + (a % b) + "\n" +
    "(a += b) : " + (a += b) + "\n" + // a = a + b // 8
    "(a -= b) : " + (a -= b) + "\n" + //a = a  -b // this will be 8 - 5 = 3
    "(a *= b) : " + (a *= b) + "\n" + //a= a * b // this will be 3 * 5 = 15
    "(a /= b) : " + (a /= b) + "\n" + //a = a / b //this will be 15 / 5 = 3
    "(a %= b) : " + (a %= b) + "\n" + // a = a % b //this will be 3 % 5 = 3
    "(a == b) : " + (a == b) + "\n" + // a==b //condition check if the value of a==b(NOT considering the type of variable)//false
    "(a != b) : " + (a != b) + "\n" + // a!=b //condition check if the value of a!=b(NOT considering the type of variable)//true
    "(a > b) : " + (a > b) + "\n" + // a>b //condition check if the value of a>b//false
    "(a < b) : " + (a < b) + "\n" + // a<b //condition check if the value of a<b//true
    "(!a && !c) : " + (!a && !c) + "\n" + // !a && !c  // logical operator value of !a AND !c// c dosent have a value but it also considers a..so //flase
    "(!a || !c) : " + (!a || !c) + "\n"; // !a OR !c  // logical operator value of !a AND !c//c dosent have a value ..so //true

//--------- printing output ---------------------//
alert(output);


//-------------------------------------------------------- TASK - 2 --------------------------------------------------------//

//---------- Declare variables ---------------------------//
var first_name, last_name, email, output;

first_name = "Kanan";
last_name = "Ahalpara";
email = "ahal0001@algonquinlive.com";

//--------- declaring output ---------------------//
output = "My name is " + first_name + " " + last_name + ". You can contact me at " + email;
/*  
// with the "" included in the display of the statement ,code will be as follows://
output = "\"My name is " + first_name + " " + last_name + ". You can contact me at " + email + "\"";
*/
//--------- printing output ---------------------//
//console.log(output);
alert(output);



/*
//-------------------------------------------------------- TASK - 3 --------------------------------------------------------//

//---------- Declare variables ---------------------------//
var numbers = [ //array on numbers
    Math.floor(Math.random() * (200 - 100) + 100),
    Math.floor(Math.random() * (200 - 100) + 100),
    Math.floor(Math.random() * (200 - 100) + 100),
    Math.floor(Math.random() * (200 - 100) + 100),
    Math.floor(Math.random() * (200 - 100) + 100)
];

var first_element, last_element, sum;

first_element = numbers[0];
last_element = numbers[numbers.length - 1];

sum = first_element + last_element;

function oddEven(sum) {
    if (sum % 2 == 0) {
        window.alert(first_element + " + " + last_element + " = " +  sum + \n +
             "This Number is Even");}
    else{
        window.alert(first_element + " + " + last_element + " = " +  sum + \n +
             "This Number is Odd");}
}

*/