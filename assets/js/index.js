//для одной строки
/*блок кода*/
//alert("Hello JS");
/*console.log("Hello JS!");
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
var - использование переменной до let
простые типы данных:
1. boolean (логический тип) true 0, false 1
2. number 0, 100, -2, -0,5, 0.333
3. string '' or "" - 'hello', "hello!"
4. bidint
5. symbol
6. undefinded = let x=
7. null
8. object
9. function
*/
/*x=x+b+b;
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
console.log('result is',valueGr,'gr');*/

/*let s1='hello', s2='vasya'
let res;
res=s1+' '+s2;
console.log(res);
let x1=5,x2=10;
res=x1+x2;
console.log(res);
console.log(`result is ${res}`);
 
let h1='hello Js', h2=100,h3=5.5,h4=true;
console.log(h1,h2,h3,h4);
const colorcar='red';
console.log(colorcar)

let n=100,h=50;
res=0.5*n*h;
console.log(res);

let t, t1;
t=100;
t1=200;
res=t+t1;
console.log(res);
let t2='hello',t3='vasya';
 
let t4=Number(prompt('1 number'));
let t5=Number(prompt('2 number'));
//or
res=Number(t4)+Number(t5)
console.log(res);*/

//операторы
//+ - / *
//% остаток от деления
//** возведение в степень
/*let i=10, i1=3;
console.log('деление',i/i1);
console.log('остаток от деления',i%i1);
console.log('возведение в степень',i**i1);

let userValue=597;
let lastNum=userValue%10;
console.log(lastNum);

let firstNum=userValue/100;
res=firstNum%10;
console.log(firstNum);

let midNum=userValue-lastNum;
console.log(midNum);

let i4=10;
console.log(i4%2==0)*/

//условый оператор if
/* if(условие){
    действие й
    действие 2
    действие 3...
}*/

/*let userValue1;
userValue1=prompt('Enter some value')
//проверить равно ли 100
/*if(userValue1==100){
    console.log('Yes')
}
if(userValue1!=100){
    console.log('No')
}
if(userValue1>100){
    console.log('More than 100')
}
if(userValue1<100){
    console.log('Less than 100')
}*/
//равно == 
//больше >
//меньше <
//больше или равно/меньше или равно <=/>=
//не равно !=
/*if(userValue1%2==0){
    console.log(`Число ${userValue1} является четным`)
}   else{
    console.log(`Число ${userValue1} не является четным`)
}
if(--){
    --
    --
    --
}   else{
    --
    --
    --
}
блок if - else 
если условие выполняется, то делаем то, что в блоке if
если оно не выполняется, делается то, что в else и делаем снова if*/
//напишите программу которая проверяет правильно ли пользователь вычислил 2+2
//вычислите стоимость покупки, которая состояит из н тетрадей и м ручек
//решить предыдущую задачу с учетом скидки 2% если сумма покупки превысит 500 грн
//программа которая по введенному числу прописывает сумму в гривнах, например 120.75 вернет строку 120 грн 75 коп
/*let userValue3;
userValue3=prompt('Сколько будет 2+2?');
if(userValue3==4){
    console.log('Ответ верный')
}   else{
    console.log('Ответ неверный')
    }
*/
let n, m, priceN, priceM, sum;
n=prompt('Введите количество тетрадей');
m=prompt('Введите количество ручек');
priceM=4;
priceN=5;
sum=(n*priceN)+(m*priceM);
if(sum>500){
    sum1=sum*0.98;
    console.log(`Cтоимость покупки составляет ${sum1} грн.`)
}   else{
    console.log(`Cтоимость покупки составляет ${sum} грн.`)
}

let userRole;
if(userRole=='user'){
    //do
}   else if(userRole=='moderator'){
    //do
}   else if(userRole=='admin'){
    //do
}   else{
    console.log('Неопределенная роль. Прав нет.')
}
//логические операторы для условия, and - && ,or - ||
let val4=prompt();
if(val4>0&&val4<100){
    console.log('число от 1 до 100')
}   else{
    console.log('число не от 1 до 100')
}
//в какую четверть часа относится введенное число минут
let valMinutes=prompt('Enter minutes');
let partOfHour;
if (valMinutes>0&&valMinutes<15){
    partOfHour=1;
}   else if(valMinutes>15&&valMinutes<30){
    partOfHour=2;
}   else if(valMinutes>30&&valMinutes<45){
    partOfHour=3;
}   else{
    partOfHour=4;
}
console.log(`${partOfHour} part of a hour`);