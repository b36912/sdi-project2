//alert("JavaScript works!");


/*
Michael Davis
SDI 1403
PROJECT 4
*/

        
//var lilWords = prompt(“Type a statement ”,” eugene is a dad”);

//console.log(“The first characters of the lilWords“ + lilWords);
//1. telephone
var numReturn;
/*
Strings

this  function uses if statements and for loops
uses comparisons to determine true or false
*/
var checktelNum = function (num) {

    var telNumLength = num.length;
   
    for (var i = 0; i < telNumLength; i++) {
      
        //console.log(num[i]);
        if (num[i] > "&") {
            
            console.log("The telphone number is true.");
        
        } else {
            console.log("The telphone number is false.");
        }
    };
};       
numReturn = checktelNum("215-287-3163");



//2. Email adress
var emailReturn;
/*
Strings
this  function uses if statements and for loops
uses comparisons to determine true or false
*/
var checkeMail = function addres(email) {

var eMailLength = email.length;
   
    for (var i = 0; i < eMailLength; i++) {
      
        //console.log(mail[i]);
        if (email[i] <= "&") {
            
            console.log("The email address is false.");
        
        } else {
            console.log("The email address is true.");
        }
    };
};      
emailReturn = checkeMail("mdavisii@fullsail.edu");


//3. URL

var wSiteReturn;

/*
Strings
this  function uses if statements and for loops
uses comparisons to determine true or false
*/
var checkwebS = function web(site) {

var wSiteLength = site.length;
   
    for (var i = 0; i < wSiteLength; i++) {
      
        //console.log(mail[i]);
        if (site[i] < "&") {
            
            console.log("The URL address is false.");
        
        } else {
            console.log("The URL address is true.");
        }
    };
};
wSiteReturn = checkwebS("www.fullsail.com");


//4. numbers math function
var itemCost = 11.25;
var finalCost = 11.25 * 2.09;
var cost = function(money) {
    if(11+2) {
    console.log (money.toFixed(finalCost));
    }
};
cost(finalCost);

//5.I used the parse to turn it from  string to a number
var strNumber = function (num) {
    console.log(num);
};
strNumber(5);

var number = parseInt("10");
console.log(parseInt(number));



//6. comparisons and operators, this is also for assignment 2
var fuzzyNumber = function (num,comNumber,percent) {
        var percentage = (num / comNumber) * 100;
        if ((num >= comNumber && percentage >= percent) || (num < comNumber && percentage < percent)) {
                return false;
        } else {
                return true;
        };
        };
        console.log(fuzzyNumber(1,27,54));
        console.log(fuzzyNumber(54,1,27));
