const myArray = [["John", 23], ["cat", 2]];

//Use the .pop() function to remove the last item from myArray and assign the popped off value to a new variable, removedFromMyArray.

const removedFromMyArray = myArray.pop();

//example

const threeArr = [1, 4, 6];
const oneDown = threeArr.pop();
console.log(oneDown);
console.log(threeArr);

//The first console.log will display the value 6, and the second will display the value [1, 4].