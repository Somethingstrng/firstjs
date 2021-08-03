//для одной строки
/*блок кода*/
//alert("Hello JS");
console.log("Hello JS!");
let x;
let a, b;
console.log(x);
x=3;
console.log("x=",x);
console.log(x,a,b);
a="space";
b=765;
console.log(a,b,x);
let userName;
userName="lila";
console.log(userName);
let userAge = 45;
console.log(userAge);
let name="iva",age=40;
console.log(name,age);
let carSize=65,carAge=0,carName="tod";
console.log(carName,carSize,carAge);
const color_car='red', size_car=44;
console.log(color_car, size_car);
x=b;
console.log(x);
/*color_car='blue';
console.log(color_car); - ошибка, константу нельзя менять, только использовать
var - использование переменной до let*/
x=x+b+b;
console.log(x);
//инкремент x=x+1 то же самое что x++
//дeкремент x=x-1 то же самое что x--
console.log(x);
x=3;
x++;
console.log(x);
x--
console.log(x);
x--
console.log(x);
let result;
result=x;
console.log(result);
result=++x;
console.log(result);

let valueKg, valueGr;
const DEFAULT_VALUE_KG=60;
valueKg=prompt('Введи значение в кг',DEFAULT_VALUE_KG); //спрашиваем у пользователя значение
valueGr=valueKg*1000;
console.log('result is',valueGr,'gr');