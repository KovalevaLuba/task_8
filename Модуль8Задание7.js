let arr = [1, 4, 8, 9, 16, 42];

count(arr);

function count(arr) {
  let oddAmount = 0;
  let evenAmount = 0;
  let nullAmount = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      evenAmount++;
    } else if (arr[i] / 1 === 0){
      nullAmount++;
    }
      else {
      oddAmount++;
    }

  }
  console.log("нулей: " + nullAmount);
  console.log("нечетных : " + oddAmount);
  console.log("четных : " + evenAmount);
}