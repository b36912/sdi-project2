//alert("JavaScript works!");

/*
Michael Davis
SDI 1403
Assignment 3
*/

//Json = Trip data describes family members and hotels and their costs.

 and hotels and their costs.
var tripData  = ["familyMembers"];
var hotelData = ["hotels"];


// json
var tripData =
{

    "familyMembers":
        [
            {
                "memberName"    : "Dad",
                "memberAge"     : 40,
                "memberLunchC"  : "Panera Bread",
                "memberLunch"   : "turkey panini sandwich with kettle chips and water",
                "memberCost"    : 8,
                "memberWallet"  : 130,
            },
            {
                "memberName"    : "Mom",
                "memberAge"     : 39,
                "memberLChoice" : "Panera Bread",
                "memberLunch"   : "chicken panini sandwich with an apple and water",
                "memberCost"    : 8,
                "memberWallet"  : 128,
                
            },
            {
                "memberName"    : "Son",
                "memberAge"     : 12,
                "memberLChoice" : "Chick Fi La",
                "memberLunch"   : "turkey panini sandwich with kettle chips and a water",
                "memberCost"    : 7.25,
                "memberWallet"  : 0 ,
            },
            {
                "memberName"    : "Daughter",
                "memberAge"     : 10,
                "memberLChoice" : "Chick Fi La",
                "memberLunch"   : "chicken sandwich with a mixed fruit cup and a lemonade",
                "memberCost"    : 6.25,
                "memberWallet"  : 0,
            }
        
        ]
};

var hotelData =
{

    "hotels":
        [
            {
                "hotel"         :  "Comfort Inn",
                "hotelCost"     :   128,
            },
            {
                "hotel"         :  "Hyatt",
                "hotelCost"     :   135,
            },
            {
                "hotel"         :  "Hilton Garden Inn",
                "hotelCost"     :   140,
            },
            {
                "hotel"         :  "Sheraton",
                "hotelCost"     :   156,
            },
            {
                "hotel"         :  "Embassy Suites",
                "hotelCost"     :   140,
            }
            
        ]
    

};
//Global Variables
var theFam   = "Davis Family";
var start    = "Philly, PA";
var finish   = "Houston, TX";
var hours    =  25;
var nonStop  =  false;
var lunch    =  ["memberLChoice", "memberLunch", "memberCost"];
var sleep    =  ["hotel", "hotelCost"];
var stopTrip =  true;
var hotels   =  ["Comfort Inn", "Hilton Garden Inn", "Sheraton", "Embassy Suites" ];
var hotelCosts = [128, 135, 140, 156, 140];



var getReady = function (name) {        
       
        console.log("Were about to leave " + name + "!");
            
    };
getReady("Tinasha");
                

//Start the car



//lunchTime
var posHours = 48;

var lunch = (prompt("Enter hours driven so far.", 5))
    {
    if (posHours - 5)
    { 
    var answer = "yes";  
        prompt("Is it time to eat?" + answer);
    
    } else
    {
     
    console.log("We're still driving.");
      
    }
};
  console.log(lunch);

alert("Where for lunch?");

//1st loop

var lunchtime = function(arrArg){

    for (var memberLChoice = 4; memberLChoice < memberLunch.length; memberLChoice ++){

    if (memberAge[0] > memberAge[1]) {

            console.log("This is what I want for lunch.");
   
    if (memberAge[2] < [3]) {
            console.log("I changed my mind.");
   } else {
            console.log("We need to hurry up to get back on the road.");
          }; 
   } else {
    
            console.log("Hurry up and pick what you want.");
          } 
    }
};

            console.log("The family is eating");



alert("We've now been back on the road for 5 hours.");


//If Statements functions
var hotels;
    var hotels = prompt("The family made it to a hotel, are their any rooms available?"); 
            console.log(hotels + ", there are plenty of vacancies available here at comfort inn Hotel.");
for (var hotelData = 4; HotelData < hotelData.length; membhotelData ++ )
    if (needSleep === true) {

        var hotels = prompt("How much does it cost for a non smoking room with 2 beds?");
            console.log(hotels);
           
            console.log("This includes tax as well as continental breakfast and wifi.");
   
   if (hotelCost < 200) {
            console.log("We'll take the room.");
        } else {
            console.log("Its a bit pricey, are there any corporate discounts available?");
    } 
        } else {
    
            console.log("Thanks anyway.");
    };

            console.log("The family found a hotel called " + hotelCost[0] + "to stay in for the night");



