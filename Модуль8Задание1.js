let a = prompt(`Введите значение а`); 
a =+a;
console.log(typeof a);
if (a% 2 === 0){
  console.log(`четное`)
 } else if (a%1 === 0){
    console.log(`нечетное`)
  } else {
    console.log(`упс, это не число`)
  }
 