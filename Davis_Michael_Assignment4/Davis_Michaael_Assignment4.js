//alert("JavaScript works!");


/*
Michael Davis
SDI 1403
PROJECT 4
*/

        
//1. telephone
var numReturn;
/*
Strings
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

// Check String Function
var phoneNum = function () {
                
};

// Main code        
numReturn = checktelNum("215-287-3163");



//2. Email adress
var emailReturn;
/*
Strings
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

// Check String Function
var eMailAd = function () {
                
};

// Main code        
emailReturn = checkeMail("mdavisii@fullsail.edu");

//3. URL
var wSiteReturn;
/*
Strings
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

// Check String Function
var uWebSite = function () {
                
};

// Main code        
wSiteReturn = checkwebS("www.fullsail.com");
