let arr = ["1","2", "3", "4", "5", "6"];
console.log(arr.length);
arr.forEach(function(item, i, arr){
  console.log( i + ": " + item );
});