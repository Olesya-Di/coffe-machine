"use strict";

let balance = document.querySelector(".balance");

let state = "waiting"; // "cooking", "ready"

function cookCoffee(price, name, elem) {
  if (state != "waiting") {
    return; 
  }
  let buttonCup = elem.querySelector("img"); // поиск не по всему док-ту, а только по elem
  let cupSrc = buttonCup.src;
  console.log(elem);
  if (balance.value >= price) {
    balance.value -= price;
    balance.style.backgroundColor = ""; // вернуть белый фон балансу
    changeDisplayText("Ваш " + name + " готовится"); // изменение текста на дисплее
    cup.changeCupImage(cupSrc);
    state = "cooking";
    startCooking(); // запуск ф-ии прогресс-бара
    } else {
      changeDisplayText("Недостаточно средств");
      balance.style.backgroundColor = "rgb(255, 50, 50)";
    }
}
  
function startCooking() {
  if (state != "cooking") {
    return;
  }
  cup.showCup(); // вызов ф-ии. теперь при нажании на кнопки с кофе появляется кружка
  changeProgress(100, 5); // //100размер.5время прогресс-бар будет на том значении, которые в () при нажатии на кофе
  setTimeout(function() {
    state = "ready";
    changeDisplayText("Ваш кофе готов!");
    cup.toggleActive(); // включает руку при наведении на кружку после приготовл.кофе
    cup.elem.onclick = function() {
      takeCoffee();
    };
  }, 5000);
}
  
function takeCoffee() { // действие забрать кофе
  if (state != "ready") { // нельзя забрать кружку пока она в процессе
    return;
  }
  state = "waiting";
  changeProgress(0);
  cup.hideCup();
  changeDisplayText("Выберите кофе!");
  cup.toggleActive(); // выключает руку при наведении на кружку после приготовл.кофе
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

let cup = { // делаем обьект кружки
  elem: document.querySelector(".cup"),
  
  changeCupImage(src) { // метод-действие обращение к картинке cup и изменение ее в зав-ти от того какой кофе был выбран.
    let cupImage = cup.elem.querySelector("img"); // находим картинку кружки
    cupImage.src /*src непосредственно кружки*/ = src; //эта src переменная из параметров ф-ции // установить у этого изображения атрибут src = тому что пришел в параметрах ф-ции 
  },
  
  showCup() { // метод-действие показать кружку
    cup.elem.style.display = "block";
    cup.elem.style.transition = "opacity 5s"; //анимация внк=утри ф-ции нужно оборачивать в сеттаймаут
    setTimeout(function() {
      cup.elem.style.opacity = "1";
    }, 10);
  },
  
  hideCup() { // метод-действие спрятать кружку
    cup.elem.style.display = "none";
    cup.elem.style.opacity = "0";
  },
  
  toggleActive(){ // изменение курсора мышки на руку
    cup.elem.classList.toggle("pointer");
  }
};


function changeProgress(percent, sec = 0) { // метод-действие прогресс-бара, должен заполнять полоску при приготовлении
  let progress = document.querySelector(".progress-bar");
  progress.style.width = percent + "%";
  progress.style.transition = `width ${sec}s`;
}

function changeDisplayText(text) { //метод-действие изменение текста на дисплее
  let displayText = document.querySelector(".display-text");
  if (text.length > 25) {
    displayText.innerHTML = text.slice(0, 25) + "..."; // ограничение по кол-ву символов, т.е.не > 25
  } else {
    displayText.innerHTML = text;
  }
}





