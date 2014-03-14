alert("JavaScript works!");

//Michael Davis
//SDI 1403 SECTION 01
//March 13, 2014

/*
This week the story starts when the Davis Family is getting sleepy. 
As they drive through Georgia to get to Houston, Texas they want to find a hotel.


*/

//Variables (Internal Storage)

var davisFamily        = "Davis Family";
var driveStart         = "Philadelphia, PA";
var driveDestination   = "to \"Houston, Tx\"";
var familyMembers      = 4;
var needFood           = true;
var maxRestaurants     = 7;
var hotelCity          = "Atlanta";
var lunchMenu          = "food";


//Prompt

var hungry = prompt("What do you want for lunch Mike?");
    console.log(hungry);

var hungry = prompt("What do you want for lunch Dad?");
    console.log(hungry);

var hungry = prompt("What do you want for lunch son?");
    console.log(hungry);

//Procedure
// the following states that my function is going to be the food the want.
/* if the number of places to choose are less than or equal and if lunchMenu is less than 7, there will be 4 to 7 places to choose from.*/ 
var lunch = function (name, eat, lunch) {
    if (lunch >= 4 && lunch > 7)
    { 
      
    console.log("The " + davisFamily + "has between " + 4 && 7 + "restaurants to choose from.");
    
    } else
    {
     
    console.log("Not every one want to eat at the moment.");
      
    }
  };
  lunch("Mike wants to " + eat + " some " + lunch + ".");
  lunch("Dad wants to " + eat + " some " + lunch + ".");
  lunch("Son wants to " + eat + " some " + lunch + ".");
  
//Confirm to the user who made decisions.
  confirm("Everyone knows what they want to eat except for Mom.");
    
    console.log("Now we have to wait on Mom.");
  
//Boolean Function
//Local Variables
  
  var parent    = "Mom";
  var momFood   = false;
  var McD       = "burger and fries";
  var bKing     = "chicken sandwich and french fries";
 
var she = function(decide) {  
 
    while(10 >= 20) {
    
       if (McD >= bKing)
    {
      
    console.log(parent + "would like a " + McD + "."); // true
      
    } else
    {
        
    console.log(parent + "would like a " + bKing + ".");
        
    }
    }
};
 
  
//Number Function
  
  var mealOrders = 0;
  
  function eat(amount) {
  
  for (mealOrders=0;mealOrders<4;mealOrders++) {
    
    
      console.log("The order " + mealOrders + " was made.");
    
        return (1);
        return (2);
        return (3);
        return (4);
  }
  };
  
  
//String Function
  
  var trip       = "Okay now that we've all ate ";
  var timeToGo   = "it's time to get back on the road.";
  

  var letsGo = function(trip,timeToGo)
  {
    
    console.log(trip + timeToGo);    
    
  };
