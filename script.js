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


// _------------Drog'n'Drop с купюрами. (взять положить)------------

let bills = document.querySelectorAll(".money img"); // массив из трех картинок события на массив в том виде, нельзя навесить, поэтому онклик нужно весить каждой купюре поочередно:

/*bills[0].onclick = function {}
bills[1].onclick = function {}
bills[2].onclick = function {} или проще цикл for
*/

for (let bill of bills) {
  bill.onmousedown = dragMoney;
 }


function dragMoney(event) { // все слушатели события возвращают в ф-ю первым параметром объект event
  console.log(event); // получаем объект события
  console.log([event.clientX, event.clientY]); // получение координаты мыши
  console.log( this.getBoundingClientRect() ); // получение координат элемента
  event.preventDefault(); // предотвратить стандартное действие
  let bill = this;
  let billCoords = bill.getBoundingClientRect();
  let billWidth = billCoords.width;
  let billHeight = billCoords.height;
  
  bill.style.position = "absolute";
  bill.style.transform = "rotate(90deg)";
  bill.style.top = event.clientY - billHeight/2  + "px"; // мышь, нужно указывать не только число но и +px// при вычитании из Y сдвигается вверх и из X влево.
  bill.style.left = event.clientX - billWidth/2 + "px";
  
  
  window.onmousemove = function(event) {
    /*let billCoords = bill.getBoundingClientRect();
    let billWidth = billCoords.width;
    let billHeight = billCoords.height;*/
    bill.style.top = event.clientY - billHeight/2  + "px"; // gjldbytn reg.he yf cthtlbye rehcjhf
    bill.style.left = event.clientX - billWidth/2 + "px";
  }
  
  bill.onmouseup = function() { // при отжимании мыши
    window.onmousemove = null; // отключаем призрака при перемещении купюры
    if ( inAtm(bill) ) { // условия для отслеживания купюры 
      let cost = +bill.getAttribute("cost"); // получаем собственный атрибут
      balance.value = +balance.value + cost; // прибавляем к балансу
      bill.remove(); // удаляем купюру
      eatBill(bill);
    } else {
      bill.style.transform = "rotate(0deg)"; // поворот купюры обратно
    }
  }
}

// исчезновение купюры
function eatBill(bill) {
  let cashCatcher = document.querySelector(".cash-catcher");
  cashCatcher.append(bill);
  bill.style.position = "";
  bill.style.transition = "transform 3s";
  bill.style.transform = "translateY(50%) rotate(90deg)";
  setTimeout(function() {
    bill.style.transform = "translateY(-200%) rotate(90deg)";
  }, 10);
}

function inAtm(bill) { // будет проверять попала купюра в банкомат?
  let atm = document.querySelector(".atm img"); // находим бункомат
  
  let atmCoords = atm.getBoundingClientRect(); //получаем координаты банкомата
  let atmWidth = atmCoords.width; // высота банкомата
  let atmHeight = atmCoords.height; // ширина банкомата
  
  let billCoords = bill.getBoundingClientRect(); // получаем координаты купюры
  let billWidth = billCoords.width; // высота купюры
  let billHeight = billCoords.height; // ширина купюры
  
  let atmLeftX = atmCoords.x; // координаты левого угла банкомата
  let atmTopY = atmCoords.y; // координаты верхнего угла банкомата 
  let atmRightX = atmLeftX + atmWidth; // координаты правого угла банкомата
  let atmBottomY = atmTopY + atmHeight/3; // нижний 
  
  let billLeftX = billCoords.x; // координаты левого угла купюры 
  let billRightX = billCoords.x + billCoords.width; //координаты левого угла купюры
  let billY = billCoords.y; 
  
  console.log([atmLeftX, atmTopY, atmRightX, atmBottomY]);
  console.log([billCoords.x, billCoords.y]);
  
  if (billLeftX > atmLeftX  // сравниваем попадает ли левый верхний угол купюры с левым верх углом банкомата// заводим услови проверки попала ли купюра в банкомат?
    && billRightX < atmRightX
    && billY > atmTopY
    && billY < atmBottomY
    ) {
    return true;
  } else {
    return false;
  }
}

// ----------получение сдачи------------

let changeBtn = document.querySelector(".change-btn"); // кнопка сдача
changeBtn.onclick = function() { // на кнопку событие навесили
  takeChange();
};

function takeChange() { // прописали, что должно происходить при нажатии кнопки
  if (balance.value >= 10) {
    balance.value -=10;
    createCoin("10");
    setTimeout(function() { // теперь ф-я выполняется не сразу а с задержкой
      takeChange(); 
    }, 300);
  } else if ( balance.value >= 5) {
      balance.value -= 5;
      createCoin("5");
      setTimeout(function() { 
      takeChange(); 
    }, 300);
  } else if ( balance.value >= 2) {
      balance.value -= 2;
      createCoin("2");
      setTimeout(function() { 
      takeChange(); 
    }, 300);
  } else if ( balance.value >= 1) {
      balance.value -= 1;
      createCoin("1");
      setTimeout(function() { 
      takeChange(); 
    }, 300);
  }
}

function createCoin(nominal) { // "1", "2", "5", "10"
  let imageSrc = "";
  switch (nominal) {
    case "1":
      imageSrc = "img/1rub.png";
      break;
    case "2":
      imageSrc = "img/2rub.png";
      break;
    case "5":
      imageSrc = "img/5rub.png";
      break;
    case "10":
      imageSrc = "img/10rub.png";
      break;
  }
 let changeBox = document.querySelector(".change-box"); // div в котором должны появляться монеты
 let changeBoxCoords = changeBox.getBoundingClientRect();
 let changeBoxWidth = changeBoxCoords.width;
 let changeBoxHeight = changeBoxCoords.height;
 console.log([changeBoxWidth, changeBoxHeight]);
 
  // changeBox.innerHTML += `<img src="${imageSrc}" style="width: 50px>`; // добавляются монеты 
  let coin = document.createElement("img"); //создает элемент в вакууме, их пока не видно
  coin.src = imageSrc;
  coin.style.cursor = "pointer"; // чтобы при наведении мышкой на монетку, она превратилась в руку
  coin.style.userSelector = "none"; // чтобы не выделялись монеты синим квадратом
  coin.style.width = "30px";
  coin.style.position = "absolute";
  coin.style.opacity = 0;
  coin.style.transform = "translateY(-75%)"; //%от величины монеты // для смещения
  coin.style.transition = "opacity .5s, transform .5s"; // для анимации
  coin.style.top = getRandomInt(0, changeBoxHeight - 30) + "px";
  coin.style.left = getRandomInt(0, changeBoxWidth - 30) + "px";
  
  setTimeout(function() { // эффект прозрачности при появлении монет
    coin.style.opacity = 1;
     coin.style.transform = "translateY(0%)"; 
  }, 10 );
  
  changeBox.append(coin); // методы которые позволяют непосредственно отобразить элементы
  coin.onclick = function() { 
    coin.remove(); // при нажатии на монету, она исчезает 
  };
  
  let coinDropSound = new Audio("sound/coinDrop.mp3"); // создает объект аудио 
  coinDropSound.play(); // проигрывание аудио
  coinDropSound.volume = 0.01; // уменьшает громкость звука
  // coinDropSound.pause(); // приостановить
  // coinDropSound.currentTime(); // перемотать в начало
}
//в конце
//в начале
//до элемента
//после
//замена одного э на др

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
}










