let arr = [1, 4, 8, 9, 16, 42, 0];

count(arr);

function count(arr) {
  let oddAmount = 0;
  let evenAmount = 0;
  let nullAmount = 0;

  
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      nullAmount++;
    } else if (arr[i] %2 === 0 && arr[i] !== 0){
      evenAmount++;
    }
      else {
      oddAmount++;
    }

  }
  console.log("нулей: " + nullAmount);
  console.log("нечетных : " + oddAmount);
  console.log("четных : " + evenAmount);
}