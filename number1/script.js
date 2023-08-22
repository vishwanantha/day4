//Print odd numbers in an array:
(function (arr) {
  for (let num of arr) {
    if (num % 2 !== 0) {
      console.log(num);
    }
  }
})([1, 2, 3, 4]);


//Convert all the strings to title caps in a string array

(function (arr) {
  var conv = arr.map((str) => str.charAt(0).toUpperCase() );
  console.log(conv);
})(["hello", "world", "vishwa"]);

//Sum of all numbers in an array
(function (arr) {
  var sum = arr.reduce((total, num) => total + num, 0);
  console.log(sum);
})([1, 2, 3, 4]);


//Return all the prime numbers in an array
(function (arr) {
  function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i == 0)
       return false;
    }
    return true;
  }

  let primeNums = arr.filter((num) => isprime(num));
  console.log(primeNums);
})([1, 2, 3, 4, 5]);


//Return all the palindromes in an array
(function (arr) {
  function operation(vis) {
    var reversed = vis.split("").reverse().join("");
    return str === reversed;
  }

  var viswa = arr.filter((vis) => operation (vis));
  console.log(viswa);
})(["hello", "world", "ghd", "vijay"]);



//Return median of two sorted arrays of the same size
(function (arr1, arr2) {
  function findMedian(arr) {
    var  length = arr.length;
    var mid = Math.floor(length / 2);
    if (length % 2 === 0) {
      return (arr[mid - 1] + arr[mid]) / 2;
    } else {
      return arr[mid];
    }
  }

  var merged = arr1.concat(arr2);
  var sorted = merged.sort((a, b) => a - b);
  var median = findMedian(sorted);
  console.log(median);
})([1, 3, 5], [2, 4, 6]);



//Remove duplicates from an array
(function (arr) {
  var viArr = arr.filter(
    (value, index, self) => self.indexOf(value) === index
  );
  console.log(uviArr);
})([1, 2, 3, 3, 4,2]);



//Rotate an array by k times
(function (arr, k) {
  k = k % arr.length;
var rotated = arr.slice(k).concat(arr.slice(0, k));
  console.log(rotated);
})([1, 2, 3, 4], 2);