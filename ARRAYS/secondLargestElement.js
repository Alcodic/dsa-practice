const secLargestElement = (arr) => {
  if (arr.length === 0) return null; //edge case
  if (arr.length === 1)
    return "single element array. Therefore no second largest element."; // edge case

  let largestEl = arr[0];
  let secLargestEl = arr[1];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i - 1] < arr[i]) {
      largestEl = arr[i];
    }
    if(secLargestEl[i]<largestEl){
      
    }
  }
  return secLargestEl;
};

const arr = [10, 20, 30, 40, 50, 60, 70];
const arr1 = [20, 60, 599589, 45, 47484, 5673, 1, 4];
console.log(secLargestElement(arr1));
