<!doctype html>
<html lang="ru">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">

    <title>Кофе-машина</title>
    <link rel="stylesheet" href="style.css">
  </head>
  <body>
    
    <div class="container">
      <div class="row">
        <div class="col-6 coffee-list"> <!--левая сторона-->
          <div class="row flex-column justify-content-around"> <!--распределяются равномерно по вертикали-->
            <div class="coffee-item" onclick="cookCoffee(50, 'Американо', this)">
              <img src="img/americano.png" alt="Американо">
              <span>Американо - 50 руб.</span>
            </div>
            <div class="coffee-item" onclick="cookCoffee(92, 'Капучино', this)">
              <img src="img/cappuccino.png" alt="Капучино">
              <span>Капучино - 92 руб.</span>
            </div>
            <div class="coffee-item" onclick="cookCoffee(66, 'Эспрессо', this)">
              <img src="img/espresso.png" alt="Эспрессо">
              <span>Эспрессо - 66 руб.</span>
            </div>
            <div class="coffee-item" onclick="cookCoffee(128, 'Латте', this)">
              <img src="img/latte.jpg" alt="Латте">
              <span>Латте - 128 руб.</span>
            </div>
          </div>
        </div>
        <div class="col-6 coffee-oper">
          <div class="row">
            <div class="col-6"> <!--Дисплей и кружка-->
              <div class="display">
                <span class="display-text">Выберите кофе</span>
                <div class="progress mt-2">
                  <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style="width: 0%"></div>
                </div>  
              </div>
              
              <div class="cup">
                <img src="img/americano.png" alt="Кружка">
                
              </div>
            </div>
            <div class="col-6"> <!--баланс, АТМ, сдача-->

              <div class="input-group mb-3">
                <input type="text" class="form-control balance" placeholder="Баланс" readonly>
                
                <div class="input-group-append">
                  <span class="input-group-text">&#8381;</span> 
                </div>
              </div><!--это из бутстрапа-->
                
              <div class="atm">
                
                <div class="cash-catcher"></div> <!--див для эфекта заезжающей купюры-->
                
                <img src="img/bill_acc.png" alt="автомат">
              </div>
              
              <button class="btn btn-primary btn-block mt-3 change-btn">Сдача</button>
              <div class="change-box mt-3"></div>
            </div>
             
          </div>
        </div>
      </div> 
    </div>
    <div class ="money">
      <img src="img/100rub.jpg" cost="100" alt="100руб">
      <img src="img/500rub.jpg" cost="500" alt="500руб">
      <img src="img/50rub.jpg" cost="50" alt="50руб">
    </div>


    

    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI" crossorigin="anonymous"></script>
    <script src="script.js"></script>
  </body>
</html>