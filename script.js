"use strict";

let balance = document.querySelector(".balance");

function cookCoffee(price, name) {
  if (balance.value >= price) {
    balance.value -= price;
    balance.style.backgroundColor = ""; // вернуть белый фон балансу
    changeDisplayText("Ваш " + name + " готовится"); // изменение текста на дисплее
    startCooking(); // запуск ф-ии прогресс-бара
    } else {
      changeDisplayText("Недостаточно средств");
      balance.style.backgroundColor = "rgb(255, 50, 50)";
    }
}
  
function startCooking() {
  changeProgress(100); //  прогресс-бар будет на том значении, которые в () при нажатии на кофе
  setTimeout(function() {
    changeDisplayText("Ваш кофе готов!");
  }, 5000);
}
  
  
  
// планирование
/*let timeout = setTimeout(function() {
  changeDisplayText("Передумали заказывать?");
}, 3000); // отрабатывает только один раз
let interval = setInterval(function() {
  changeDisplayText( "Кофе: "+ Date.now() );
}, 4000); // отрабатывает пока не отключим (каждый опред-й промежуток времени)

setTimeout(function() {
  clearTimeout(timeout); // очистит таймаут (больше не отрабатывает)
  clearInterval(interval); // очистит интервал (больше не отрабатывает)
  console.log("Timeout and interval cleared");
}, 1000);*/

function changeProgress(percent) {
  let progress = document.querySelector(".progress-bar");
  progress.style.width = percent + "%";
  progress.style.transition = "width 5s";
}

function changeDisplayText(text) {
  let displayText = document.querySelector(".display-text");
  if (text.length > 25) {
    displayText.innerHTML = text.slice(0, 25) + "..."; // ограничение по кол-ву символов, т.е.не 25>
  } else {
    displayText.innerHTML = text;
  }
}





