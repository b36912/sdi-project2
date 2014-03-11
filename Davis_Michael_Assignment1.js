//alert("JavaScript works!");

// Michael Davis
// SDI 1403
// Project 1


/*
Finding a hotel 

One beautiful summer evening, the Davis family was in the middle of driving from Philadelphia, PA to Houston, TX.
They've been on the road 10 hours and are exhausted.
Somewhere in Georgia, the Dad decided to find a hotel to stay at for the night.
He said if the next exit sign coming up has a hotel advertised the family will go there first, else they will drive until they do.
Once they got to the hotel the dad went into the hotel to see if they had any vacancies and if so how much was it going cost for a non smoking room with 2 beds.
The hotel clerk told him that they do have vacancies and that that for a non smoking room with 2 beds will cost  $119.99 before tax.  T
he dad checked his wallet to see if he had enough, he responded to the clerk, ÒSold!Ó
The clerk said, "Great! I'll put you in our system." The clerk then said, "After taxes the total is $128.00.
The Davis family found a hotel to stay for night.
*/

// Internal Storage
var davisFamily = "Davis Family";
var driveStart = "Philadelphia, PA";
var driveDestination = "to \"Houston, Tx\"";
var familyMembers = 4;
var needSleep = true;

//Outputs
console.log("The " + davisFamily + " decided to take a road trip during on a a beautiful summer day.");
console.log("The family started driving from "  + driveStart + " 10 hours ago.");
console.log("They want to drive " + driveDestination + " to visit some friends of theirs.");
console.log("The family of " + familyMembers + " is in " + needSleep + " need of sleep!");

var exit = true

confirm("The kids and wife are ready to eat and sleep?");

if (needSleep === exit) {
    
    prompt(" Is there a hotel exit advertised close for the family to visit first? ")
        console.log(prompt + ", there's one coming up in less than a mile.");
    } else {
        
        console.log("We will drive until we see a hotel exit.");
        
        };
//Prompt then condition
var hotels;
    var hotels = prompt("The family made it to a hotel, are their any rooms available?"); 
        console.log(hotels + ", there are plenty of vacancies available here at Domino Hotel.");

    if (needSleep === true) {

        var hotelCost = prompt("How much does it cost for a non smoking room with 2 beds?");
            console.log(hotelCost);
            hotelCost = parseInt(hotelCost);
            console.log(hotelCost + ", this includes tax as well as continental breakfast and wifi.");
   if (hotelCost < 200) {
        console.log("We'll take the room.");
   } else {
        console.log("Its a bit pricey, are there any corporate discounts available?");
   }; 
} else {
    
    console.log("Thanks anyway.");
};

console.log("The family found a hotel to stay in for the night");
