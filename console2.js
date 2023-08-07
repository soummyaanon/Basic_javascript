function findLargestNumber(a, b, c) {
   
    let largest = (a > b) ? (a > c ? a : c) : (b > c ? b : c);
    return largest;
  }
  
  
  console.log(findLargestNumber(10, 5, 20)); 
  console.log(findLargestNumber(5, 10, 7)); 
  