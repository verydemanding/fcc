const myArray = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [[10, 11, 12], 13, 14],
  ];
  // find 8
  const myData = myArray[2][1];

  // example
  const arr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [[10, 11, 12], 13, 14]
  ];
  
  const subarray = arr[3];
  const nestedSubarray = arr[3][0];
  const element = arr[3][0][1];

  /*In this example, subarray has the value [[10, 11, 12], 13, 14], 
  nestedSubarray has the value [10, 11, 12], and element has the value 11 .*/