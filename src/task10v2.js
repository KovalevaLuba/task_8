let number = prompt(`Введите любое число от 0 до 1000`); 
simpleNumber();
let celoe = 0;

function simpleNumber(){
  for (let i = 2; i <= number; i++){
    if (number % i === 0){
      celoe ++
    } 
  }

if (celoe <= 1){
console.log('Вы ввели простое число')
} else {
console.log('Вы ввели непростое число')
}
}