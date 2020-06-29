"use strict";
//строгий режим, вводит ограничения в скрипт, чтобы избежать ошибок, напр.без него нельзя обьявить переменные без let

//Переменные (var старая варсия) 
/*
let messegeText = "сообщение в алерте";
messegeText = "Новое сообщение в алерте";*/

/*текс, который будет отображаться в alert*/

/*alert(messegeText);*/

/*let название должно отображать содержимое, бывает верблюжья нотация, это каждое слово начинается с большой буквы let camelCase = "верблюжья нотация" и змеиная нотация- слова отделяются _ let snake_case = "змеиная нотация"*/

//Тип данных

/*let number = 42; //число, заносится без ""
let string = "строка"; //строка, всегда в ""
let boolean = true; // или false -булевый тип: истина или ложь
let nothing = null;*/ //пустота, ничего, для того чтобы сбросить пременную или для поиска

/*let undef = undefined;*/ //вообще ничего не было, не присвоено изначальное значение, даже 0

/*let var1; //значение будет undefined
let cantCalculate = NaN;*/ //ошибка вычисление, например строку умножить на число string*number == NaN (== - значение равенства === - тождество)

//тип данных объект 
/*let array = [42, "строка", boolean]; //массив- коллекция каких то данных
array[0];//42
array[1];//строка
array[2];//true
let object = {
  name: "Simple Object",
  coint: 42,
};
object["name"]; //ассоциативный массив. можно написать: object.name
let message = typeof(array); //проверка типа данных у переменных 
alert(message);*/

//ДИНАМИЧЕСКАЯ ТИПИЗАЦИЯ (одна и та же переменная может быть менять типы данных)

/*let a = "Я была строкой";
a = true; //стало
alert( typeof(a) );*/

//для внутренней отладки и проверки типа данных переменных. правильно ли написан код нужно вывести в консоль

/*let a = "some Variable";
let b = 42;
let c = ["one", "two", "three"];*/

/*console.log(a);
console.log(b);
console.log(c);
*/
/*console.log( [a, b, c] );*/

//ПРЕОБРАЗОВАНИЕ ТИПОВ

//Строковое преобразование

/*let a = 42;
let b = true;
let c = ["one", "two", "three"];
console.log( [String(a), String(b), String(c)] );*/

//Числовое преобразование:
//все к числу преобразовать нельзя. 

/*console.log( Number(c) ); //будет Nan
let var1 = 2;
let var2 = "3";
let resultString = var1 + var2;
console.log(resultString);*/ // 23 преобразование числа к строке. складывает как строки, а не числа они сцепляются друг с другом (конкотинация)

//чтобы преоб-ть строку к числу:
/*let resultNumber = var1 + +var2; //+сложение второй +var2-сокращенная функция преобразования строки к числу
console.log(resultNumber);*/ // 5

//преобразование буливого значения к числу:

/*let bool1 = true;
let bool2 = false;
console.log( [+bool1, +bool2] );*/ // [1, 0]

/*let nothing = null;
let undef = undefined;
console.log( [+nothing, +undef] ); */// [0, Nan]

//Преобразование к булевому типу

/*let str1 = "Строка";  //если есть значение - истина
let str2 = ""; //если пусто - ложь
let str3 = " "; //если есть пробел-это истина
let num1 = 42; //отличное от 0- это истина
let num2 = 0; //ложь
let arr1 = [1, 2, 3]; //любой массив-истина, его проверяют по другому
let arr2 = []; // истина
console.log( [Boolean(str1), Boolean(str2), Boolean(str3), Boolean(num1), Boolean(num2), Boolean(arr1), Boolean(arr2) ] )*/

// ОПЕРАТОРЫ

// бинарные операторы

/*let a = 4;  
let b = 2;
let result; //сначала объявляем переменную,
result = 4 + 2; // сложение // затем присваем им значение
console.log(result);
result = 4 - 2; // вычитание
console.log(result);
result = 4 * 2; // умножение
console.log(result);
result = 4 / 2; // деление
console.log(result);
result = 4 % 2; // остаток от деления
console.log(result);
result = 4 ** 2; // возведение в степень
console.log(result);*/

// приоритет операторов

/*result = 2 + 2 * 2; // 6
console.log(result);
result = result + 2; // 8 при присваивании значения в переменную в самой формуле можно использовать предыдущее значение этой переменной 
console.log(result);*/

//это можно прописать еще так сокращено:
/*result = 10; 
result += 5; //result = result + 5; 
console.log(result); //15
result = 10; 
result -= 5; //result = result - 5; 
console.log(result); //5
result = 10; 
result *= 5; //result = result * 5; 
console.log(result); //50
result = 10; 
result /= 5; //result = result / 5; 
console.log(result); //2
let str = "foo"; 
str += "bar"; // str= str + "bar";
console.log(str); // "foobar" традиция типа хелой ворлд
*/
// инкремент , в циклах, чтобы перебирать массивы
/*let i = 0;
//console.log(i);
console.log( i++ ); // i = i + 1 (0+1)
// Декремент
//console.log(i);
console.log( i-- );*/ // i = i - 1 (1-1)

//префиксное и постпиксное написание (перед или после переменной)

/*let j = 0;
let postfix = j++ //сначала присваивается значение j а потом прибавится 1 (происходит инкремент)
j = 0;
let prefix = ++j //сначала прибавиться единица, потом присвоется значение
console.log( [prefix, prefix] )*/

// операторы сравнения
/*console.log( 5 == 5); // true (== равенство)
console.log( 5 == 3); // false
console.log( 5 == "5"); // true,  приведение к типам 
console.log( 5 === "5"); // false, (===тождество) т.к. отличаются типами данных
console.log( 5 > 10 ); // false
console.log( 5 < 10 ); // true
console.log( 5 >= 5 ); // true
console.log( 5 <= 7 ); // true
console.log( 5 != 5 ); // false 5 не равно 5

let a = true;
console.log( !a );*/ //проверка от обратного? результат переворачивается наизнанку. при каких условиях действие не должно работать


// ВЗАИМОДЕЙСТВИЕ С ПОЛЬЗОВАТЕЛЕМ - alert(), prompt (), confirm() приостанавливают работу кода, пока не закончим вз-ие, нажав кн ОК

//let a = prompt ("Введите число"); // просит пользователя что то ввести, (как рез-т тип данных - строка string)
//let b = prompt ("Введите второе число");
//alert(a+b); // напр, 5+2=52 сцепление конкатенация

/*a = +prompt ("Введите число");
b = +prompt ("Введите второе число");
alert(a+b); // 5+2=7 сложение

let checkAge = confirm("Вам больше 18 лет");*/ //поддтверждение
//alert(checkAge);

// УСЛОВНЫЕ ОПЕРАТОРЫ 

//if 

/*let checkAge = confirm("Вам есть 18 лет?"); // true или false

if (checkAge) { // в () данные всегда приводятся к булевому типу
  //пользователь нажал ОК (checkAge == true)
  alert("Вам можно на сайт");
} else{
  //пользователь нажал отмена (checkAge == false)
  window.location.href = "https://netology.ru/profile/program/wm-56/lessons/27331/lesson_items/118472";
}*/

/*let userAge = +prompt("Сколько вам лет?");

if (userAge >= 18) {
 // userAge >= 18 == true
  alert("Вам можно на сайт");
} else {
  alert("Вам нельзя на сайт :c");
}*/

/*let userAge = +prompt("Сколько вам лет?");

if (userAge < 18) {
  alert("Вам нельзя на сайт :c");
} else if (userAge == 18) {
  alert("С этого года можно!");
} else {
  alert("Вам можно на сайт");
}*/

// условный  оператор ?

/*let message = "";
let checkAge = confirm("Вам больше 18?");
message = checkAge ? "Вам можно на сайт!" : "Вам нельзя на сайт!";
alert(message);*/

// ЛОГИЧЕСКИЕ ОПЕРАТОРЫ ИЛИ (|| - хотябы одно из условий д.б. true); И (&& - оба условия д.б. true); НЕ (!)

// спросить у пользователя два числа, надо проверить, что сумма этих чисел больше 10 и меньше  25:

/*let a = +prompt("Введите первое число");
let b = +prompt("Введите второе число");
let result = a + b;

if (result > 10 && result < 25) {
  alert("Попал в диапазон");
} else {
  alert("Не попал в диапазон");
}*/

// надо проверить, что сумма этих чисел меньше 10 ИЛИ больше 25:

/*if (result < 10 || result > 25) {
  alert("Попал во второй диапазон");
} else {
  alert("Не попал во второй диапазон");
}*/

// НЕ !
// Проверить возраст

/*let checkAge = confirm("Вам есть 18 лет?"); 

if (!checkAge) { // если не checkAge
  alert("Вам нельзя");
} else{
  alert("Вам можно");
}*/

// спросить число. Проверить, что оно попадает в один из двух диапазонов от 10 до 25 или от 50 до 60

/*let a = +prompt("Введите число");

if ( (a >= 10 && a < 25) || (a >= 50 && a < 60) ) {
  alert("попал в диапазон");
} else{
  alert("не попал");
}*/

// Конструкция switch-case - нужна для сокращения написания множественных if else

/*let nominal = +prompt("ВВедите номинал монеты (1, 2, 5, 10)");
let message = "";*/

/*if (nominal == 1) { 
  message = "один рубль";
} else if (nominal == 2) {
  message = "два рубля";
} else if (nominal == 5) {
  message = "пять рублей";
} else if (nominal == 10) {
  message = "десять рублей";
}  else {
  message = "Неверный номинал";
}
alert(message);*/
 
/*switch (nominal) {//переключатель
  case 1:
    message = "один рубль";
    break; // остановись, (torn) если его не писать будет выводить следующие действия
  case 2:
    message = "два рубля";
    break;
  case 5:
    message = "пять рублей";
    break;  
  case 10:
    message = "десять рублей";
    break;
  default: // Если ни один case не совпал – выполняется (если есть) вариант default
    message = "Неверный номинал";
}
alert(message);*/

// Циклы while (пока выполняется условие, делай это), do while (даже если условие не выполнено, он выполнит хотя бы один раз , то что написано в do), for

//нужно вывести на экран числа от 0 до 10
    // while
/*let i = 0;
while (i <= 10) {
  console.log(i);
  i++;
}*/

    //do while
/*let i = 0;
do {
  console.log(i);
  i++;
} while (i>100);*/

      // for
/*for (let i = 0; i <= 10; i++) {// (i, j, key -переменная, отвечающая за шаг, на каком шаге находится цикл;  условие, на котором будет выполняться; размер шага, какой шаг д.б. у цикла)
  console.log(i);
}*/

// спрашиваем число. сформировать строку, содержащую символ х столько раз, сколько указал пользователь. 1 - х, 5 - ххххх
/*let count = +prompt("Введите число!");
let message = "";
for (let i = 0; i < count; i++) {
  message += "x";
}
alert(message);*/

// Перебираем массив, использую цикл for
/*let fruits = ["яблоко", "груша", "банан", "апельсин", "манго"];
for (let i = 0; i < fruits.length; i++) { //length длина массива
  console.log(fruits[i]);
}*/

        //функции
        
/*sayHello("Василий", 5); // вызов функции, можно вызывать до их объявления. Множественные параметры указываются через запятую.
sayHello("Сергей");
function sayHello(userName, lastVisit = 0) { // обьявление функции. если в () написать что либо, это становится переменной внутри функции, т.е. userName == let userName. Множественные параметры указываются через запятую.
  alert("привет, "+ userName +"! Вас не было " + lastVisit + " дней!");
}*/

// напиши функцию, кот параметрами принимает 2 числа и возвращает их сумму

/*function sum(a, b) {
  let result = a+b;
  return result; // теперь ф-я возвращает как рез-т значение переменной result
  console.log("Функция отработала"); //не появится, т.к. return завершает выполнение фуккции/ все ф-и по умолчанию без return являются undefind
}

let num1 = +prompt("Введите число!");
let num2 = +prompt("Введите второе число!");

let message = sum(num1, num2);
alert(message);*/

//определить переменную balance и задайте ей значение 1000. сделайте функцию charge100 (), которая будет вычитать из баланся 100. balance не должен стать меньше 0

/*let balance = 1000;*/
/*function charge100() {
  if (balance >= 100) { // или balance - 100 >= 0
    balance -= 100; // balance = balance - 100;
    console.log(balance);
  } 
}*/

//проверить, что нельзя вычесть больше положенного значения и остановить ее действие

/*let balance = 1000;
function charge100() {
if (balance  -100 < 0) { 
  return; // позволяет избежать вложенности
}
    balance -= 100; 
    console.log(balance);
} */

// вычитать любое число
/*function charge(price) { // в () параметр он же переменная
  if (balance - price < 0) {
}
  balance -= price;
  return true;
}*/

// области видимости переменных

/*let globalA = 42;  //глобальная переменная (для текущей страницы)

if (true) {
  let localB = 54; // локальная переменная для if
  console.log(localB); 
}

for (let i = 0; i < 1; i++) 
{
  let localC = 11;
  console.log(localC); // локальная переменная для for
  console.log(globalA);
}

function f() {
  let localD = 15; // локальная переменная для функции
  console.log(localD);
  console.log(globalA);
}*/

// правило для javasctipt переменные, объявленные с помощью ключ.слова let внутри {} являются локальными для этих скобок.

/*let globalE = 42;

function someFunc(param) { // видна globalE, не видна globalG // параметры локальны для ф-ии
  let localF = 34;
  
  if (true) {  // видны param, globalF, globalE
    let localG = 22;
}
}*/

/*let var1 = 42;
let var2 = 54;

function f(var1) {
  let var2 = 36;
  console.log(var1);
}*/
//при вызове ф будет undefined потому что она не объявлена function f(var1)

//при совпадении имен переменных (наименований) будут использованы локальные переменные

// ОБЪЕКТЫ это пользователь, компьютер, животные в игре и т.д.

/*let user = {
  name: "Василий", //свойства ассоциативный объект, т.к использ. слова для обозначения значений
  lastname: "Петров",
}
console.log(user.name);*/

/*let elephant = { 
  //св-ва (т.е. описание объекта) м.б. любым типом данных, даже другими объектами
  nick: "Бимбо",
  color: "Серый",
  age: 12,
  favoriteFruits: ["Яблоки", "Персики", "Груши"],
  likesToWash: true,
  
  //методы (что объект может делать) при описании обьектов исп.функции
  speak() {
    alert("Ту-ту-ту-ту");
  },
  
  feed(fruit) {
    alert("Вы дали слону " + fruit);
  },
  getInfo() {
    let info = "";
    info = "Кличка: " + this.nick + "\n" + "Цвет: " + this.color + "\n" + "Возраст: " + this.age + "\n"; //\n переводит на новую строку, делает абзац
    return info; //через this можно перечислить св-ва
  },
  
  wolk() {
    alert("Топ-топ-топ");
  },
  
  cheer() {
    this.wolk(); //через this можно также перечислить методы
    this.speak();
  }
}
console.log( elephant.getInfo() );
elephant.cheer();*/
/* elephant.speak();
 elephant.feed("Яблоко");

console.log(elephant.age);*/ // можно обратиться к любому его св-ву console.log(elephant.favoriteFruits) и пр. в консоли набираем свойство elephant.age


//МЕТОДЫ РАБОТЫ С ЧИСЛАМИ

      //округление

/*let a = 3.1457;

console.log(Math.floor(a) ); //окр. вниз floor - пол
console.log(Math.ceil(a) ); //окр. вниз ceil - потолок
console.log(Math.round(a) ); //окр. по матем.правилам

console.log( a.toFixed(2) ); //окр.с числами после запятой
*/
// Генерация случайного числа

/*console.log( Math.random(a) ); // случайное число в диапазоне от 0 (включительно) до 1 (не включительно)
let randomNamber = Math.floor( 50 + Math.random() * (100 - 50) ); // генерация целого числа от 50 до 100 (не включает 100)
console.log(randomNamber);

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
}
console.log( getRandomIntInclusive(100, 200) );*/

// получение числа из строки с помощью parseInt (для целых чисел) и parseFloat (для чисел после запятой)

/*let height = "25px";
let width = "12.5rem";
console.log( +height ); // Nan not a number, с ед.изм.не получается с + перевести строку в число
console.log( parseInt(height) + 25 ); // разобрать как целое
console.log( parseFloat(width) + 15 ); // разобрать как дробное*/

        // Работа со строками

/*let str = "какая-то строка";
let companyName = "ООО 'Рога и Копыта'";*/

//Конкатенация

/*let userName = "Василий!";
let greeting = "Добрый день, " + userName + "!"; // "Добрый день, Василий!"
let goodbye = `Хорошего дня, ${userName}!`; // "Хорошего дня, Василий!" обратные ковычки, где буква ё `` на англ.раскладке без shift
console.log(greeting);
console.log(goodbye);*/

      // Спецсимволы

/*let message = "Привет\nмир"; //абзац
alert(message);
let companyName = "ООО \"Рога и Копыта\""; //экранирование символов и добавление "" к тексту
alert(companyName);
alert( "\u00A9" ); // символ копирайта
alert( "\u{1F60D}" ); //Эмодзи явл. частью шрифта*/

// Длина строки

/*let str = "Съешь еще этих мягких французских булок";
console.log( str.length ); // длина строки
console.log( str[3] ); // ш показывает символ на 3позиции в строке
console.log( str.charAt(3) ); // ш
console.log( str[1000] ); //undefined
console.log( str.charAt(1000) );*/ // ""

// str[3] = "щ"; - выдаст ошибку read only, перезаписать символ таким образом нельзя

  // Изменеие регистра (маленькие и большие буквы)

/*let userEmail = "MyEmail@mail.com";
let userEmailLInDB = "myemail@mail.com";
console.log(userEmail == userEmailLInDB); // выдаст false, т.к.строки с разными регистрами
console.log( userEmail.toLowerCase() ); // перевод в нижний регистр (не перезаписывает переменную)
console.log(userEmail);
userEmail = userEmail.toLowerCase(); // перезаписали переменную
console.log(userEmail);

console.log( userEmail.toUpperCase() );*/ // перевод в верхний регистр

  // Поиск подстроки

/*let str = "Съешь еще этих мягких французских булок";

console.log( str.indexOf("этих") ); // 10 при нахождении подстроки, возвращается индекс символа с которого начинается подстрока
console.log( str.indexOf("тех") ); // -1 подстрока не найдена

if ( str.indexOf("шоколадки") ); { // -1 == true
  console.log("шоколадки есть"); // но на самом деле их нет
}*/

  //проверка есть ли подстрока
/*console.log( str.includes("этих") );
console.log( str.includes("этих") ); //  true
console.log( str.includes("этих", 15) ); // false второй параметр - номер символа с которого начинается поиск
console.log( str.startsWith("Съешь") );  // true начинается на
console.log( str.endsWith("булок") ); */ //  true заканчивается на

// пользователь вводит слово - необходимо найти его в строке"Съешь еще этих мягких французских булок" и вывести номер символа, с которого начинается искомое слово, или сообщение "слово не найдено".

// задача найти символы с которых начинается слово
/*let searchedWord = prompt("Введите искомое слово");
let str = "Съешь еще этих мягких французских булок";

if ( str.includes(searchedWord) ) {
  alert ( str.indexOf(searchedWord) );
} else {
  alert("Слово не найдено");
}*/

// получение подстроки 

//получение копии, т.е. не меняется слова
/*let str = "Съешь еще этих мягких французских булок";

console.log( str.slice(10) ); // этих мягких французских булок// slice срез, т.е. получение подстроки, начиная с указанного индекса

console.log( str.slice(10, 13) ); // эти // индекс конца не включается

//изменение порядка
console.log( str.substring(10, 14) ); // Этих - то же самое, что и slice, но start м.б. больше, чем end;
console.log( str.substring(14, 10) ); // Этих 

console.log( str.substr(10, 4) ); // Этих/ сколько символов с позиции start

console.log( str.slice(-5, -2) ); // бул/ при отрицательных значенияй поиск начинается с конца
console.log( str.substr(-5, 3) );*/ // бул/ 3 -  количество символов

  // сравнение строк/ правила

/*console.log("a" < "z"); // true
console.log("б" < "я"); // true сравнение в алфавитном порядке (чем дальше в алфавите, тем >)
console.log("a" > "2"); // true строчные больше заглавных
console.log("&" < "z"); // true - спецсимволы идут в начале

// например

console.log("абв" < "агв"); // true - строки сравниваются посимвольно слева направо
console.log("абв" > "Абв"); // true

console.log("z" < "я"); */// true - кириллица > латиницы
//можно проверить в консоли 

// Методы работы с массивами, коллекция любых данных

/*let arr = new Array(); // так не нужно обозначать
let arr2 = []; // создание пустого массива

//массив мт состоять из след.элементов:
arr = ["строки", // строки
1, // числа
true, // булевое значение
["Яблоко", "Груша", "Апельсин"], // другой массив
{name: "Вася", lastname: "Петров"}, // объект
];*/

//для вызова элементов:
/*console.log(arr[2]); // true
console.log(arr[3]); // ["Яблоко", "Груша", "Апельсин"]
console.log(arr[10]); // undefined

console.log(arr);
arr[2] = false;
console.log(arr);*/ // true изменилось на false

/*console.log(arr.length); // длина массива
arr[arr.length] = "Еще один элемент"; // добавление новых данных в конец массива
console.log(arr);*/

/*let fruits = ["Яблоко", "Апельсин", "Груша", "Банан", "Нектарин"];
fruits.push("Манго"); // добавление данных в конец массива
console.log(fruits);*/

/*fruits = ["Яблоко", "Апельсин", "Груша", "Банан", "Нектарин"];
let lastFruit = fruits.pop(); // удаляет последний элемент из конца массива и м.записать его в переменную
console.log(fruits); // ["Яблоко", "Апельсин", "Груша", "Банан"]
console.log(lastFruit);*/ // "Нектарин"


/*fruits = ["Яблоко", "Апельсин", "Груша", "Банан", "Нектарин"];
fruits.unshift("Манго"); // добавляет данные в начало массива
console.log(fruits);*/ // ["Манго", "Яблоко", "Апельсин", "Груша", "Банан", "Нектарин"]

/*fruits = ["Яблоко", "Апельсин", "Груша", "Банан", "Нектарин"];
let firstFruit = fruits.shift(); // удаляет первый элемент массива и м. записать его в переменную
console.log(fruits); // ["Апельсин", "Груша", "Банан", "Нектарин"]
console.log(firstFruit);*/ //  Яблоко


// действия в середине массива
// удаление
/*let fruits = ["Яблоко", "Апельсин", "Груша", "Банан", "Нектарин"];

let pear = fruits.splice(2, 1); // 1- количество элементов, кот будут удалены, начиная с индекса 2 // "Яблоко", "Апельсин", "Банан", "Нектарин"
console.log(fruits);
console.log(pear);*/

// замена
/*fruits = ["Яблоко", "Апельсин", "Груша", "Банан", "Нектарин"];
pear = fruits.splice(2, 1, "Манго", "Маракуя"); // замена груши на манго и маракуйя // "Яблоко", "Апельсин", "Манго", "Маракуя", "Банан", "Нектарин"
console.log(fruits);
console.log(pear);*/

// добавление
/*fruits = ["Яблоко", "Апельсин", "Груша", "Банан", "Нектарин"];
fruits.splice(2, 0, "Манго", "Маракуя"); // добавляет элемены перед указанным индексом //  "Яблоко", "Апельсин", "Манго", "Маракуя", "Груша", "Банан", "Нектарин"
console.log(fruits);*/

/*fruits = ["Яблоко", "Апельсин", "Груша", "Банан", "Нектарин"];
fruits.splice(-1, 1, "Манго"); //замена нектарина на манго (отрицательные значения индекса отсчитываются с конца массива, в дан.примере нектарин -1)
console.log(fruits);*/

//slice

/*fruits = ["Яблоко", "Апельсин", "Груша", "Банан", "Нектарин"];
let fruitsToDeliver = fruits.splice(); //создает копию массива fruits и записывает в переменную
console.log(fruitsToDeliver);*/ // "Яблоко", "Апельсин", "Груша", "Банан", "Нектарин"

/*fruitsToDeliver = fruits.splice(1, 4); // создаем копию, начиная со старт до end (не включительно)
console.log(fruitsToDeliver);*/

/*fruitsToDeliver = fruits.splice(-4, -1); 
console.log(fruitsToDeliver);*/ // "Апельсин", "Груша", "Банан"

//  объединение массивов

/*let fruits1 = ["Яблоко", "Апельсин"];
let fruits2 = ["Груша", "Манго"];

let allFruits = fruits1.concat(fruits2); // объединяет массив
console.log(allFruits);*/  // "Яблоко", "Апельсин", "Груша", "Манго"


// превращение строки в массив

/*let str = "Съешь еще этих мягких французских булок";
let arr1 = str.split(""); // если в скобках "" - делится по буквам
console.log(arr1);*/

/*let arr2 = str.split("е"); // поделит по словам, содержащим букву е (сама буква удалится)
console.log(arr2);*/ // ["Съ", "шь ", "щ", " этих мягких французских булок"]

/*let arr3 = str.split(" "); // если в скобках пробел - делится по словам
console.log(arr3);*/ // ["Съешь", "еще", "этих", "мягких", "французских", "булок"]


/*let str2 = arr3.join(", "); // объединяет массив в строку по разделителю
console.log(str2);*/ // Съешь, еще, этих, мягких, французских, булок

    //Переворачивание массива
//задача в строке "Съешь еще этих мягких французских булок" построить все слова в обратном порядке

/*let str = "Съешь еще этих мягких французских булок";
let arr = str.split(" ");
arr.reverse(); // переворачивает массив
str = arr.join(" ");
console.log(str); */// булок французских мягких этих еще Съешь

// переборка массива

/*let fruits = ["Яблоко", "Апельсин", "Груша", "Банан", "Нектарин"];
// вывести в консоль каждый элемент по отдельности
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

for (let fruit of fruits) {
  console.log(fruit);
}*/


let btn = document.querySelector(".btn");

//btn.onclick = showMessager(); - не сработает, т.к.ф-я вызывается. Ф-я результатом выполнения возвращает undefined и он записывается в onclick

//btn.onclick = showMessager; // в св-во onclick записывается не результатом выполнения ф-ции, а сама ф-ция (ее тело)


/*function showMessager() {
  console.log(this); // this возвращает объект, к которому обращено св-вщ или метод.
  alert("Показываем сообщение!");
}*/
// "-" способа – невозможно вписать параметры ф-ции 
// "+"" воз-ть исп.this для получения элемента, на котором произошло событие 

let p = document.querySelector(".text");
let input = document.querySelector(".user-input");
/*let btn = document.querySelector(".btn");

console.log([p, input, btn]);*/

// получение\изменение внутреннего содержимого

/*console.log(p.innerHTML); // получаем внутреннее html-содержимое элемента, испол-я чаще всего
console.log(p.innerText); // получаем только текст (без тегов)

p.innerHTML = "другой текст"; // изменение внутреннего содержимого элемента
p.innerHTML = "<b>другой текст</b>"; // можно добавлять теги

console.log([p, input, btn]);*/

// получение\изменение стилей элементов

btn.style.color = "white"; // обращаемся к св-ву style (объект стилей), затем обращаемся к css-св-ву
btn.style.backgroundColor = "darckblue";// если css-св-во состоит из нескольких св-в, то они переписываются верблюжьей нотацией background-сolor => backgroundColor
btn.style.color = ""; // если в качестве значения мы передаем пустую строку, то значение возвращается на предыдущее (сделай как было)
console.log(btn.style.backgroundColor);

// Получение атрибута
//  Если атрибут есть в HTML 

input.value = "Василий"; // Забирает значение атрибута value 
// Если атрибута нет в HTML
console.log( input.type );
console.log( input.getAttribute("data-user") ); // Получение значения атрибутаа

input.setAttribute("data-user", "5"); // присваевает новое значение атрибута
console.log( input.hasAttribute("data-user") ); // true - проверка наличия атрибута

// input.removeAttribute("data-user") // удаляет атрибут

    //  Работа с классами

// Получение всего аргумента class

btn.className = "btn-primery btn"; // верезаписывает весь класс
console.log( btn.className );

// работа с отдельными классаим

btn.classList.add("btn-block"); // Добавить класс
btn.classList.remove("btn-primery"); // Удалить класс
console.log(btn.classList.contains("btn")); // true Содержит ли?
btn.classList.toggle("d-none"); // Вкл. / Выкл.

console.log( btn.className ); // btn btn-block d-none












