const myArray = [["John", 23], ["dog", 3]];

/*Use the .shift() function to remove the first item from myArray and 
assign the "shifted off" value to a new variable, removedFromMyArray.*/

const removedFromMyArray = myArray.shift();

//example

const ourArray = ["Stimpson", "J", ["cat"]];
const removedFromOurArray = ourArray.shift();

//removedFromOurArray would have a value of the string Stimpson, and ourArray would have ["J", ["cat"]]. 