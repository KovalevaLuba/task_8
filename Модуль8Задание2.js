let x = prompt(`Введите значение x`);
if (typeof x === "string"){
  console.log(x + " — строка")
} else if (typeof x === "number"){
  console.log(x + " — число")
} else if (x ==="true" || x === "false"){
  console.log(x + " — логический тип")
} else {
  console.log("Тип x не определён")
}
