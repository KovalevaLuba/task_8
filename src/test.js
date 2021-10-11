const a = {
  "a" : 5,
  "b" : 2,
  "2" : 'lo',
};
  
let out = '';
for (let key in a) {
  out += 'Ключ - '+ key + ', значение - ' + a[key] + '\n';
}
console.log(out);
