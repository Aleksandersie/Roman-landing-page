<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Разработка макета</title>
    <link rel="stylesheet" href="style.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Alumni+Sans:ital,wght@0,200;0,300;0,400;0,500;0,600;1,200;1,300;1,400;1,500;1,600&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@500&display=swap" rel="stylesheet">


</head>
<body>

<?php
$to = "aleksander.sie@gmail.com"; // емайл получателя данных из формы
$tema = "Форма обратной связи на PHP"; // тема полученного емайла
$message = "Ваше имя: ".$_POST['name']."<br>";//присвоить переменной значение, полученное из формы name=name
$message .= "E-mail: ".$_POST['email']."<br>"; //полученное из формы name=email
$message .= "Номер телефона: ".$_POST['phone']."<br>"; //полученное из формы name=phone
$message .= "Сообщение: ".$_POST['message']."<br>"; //полученное из формы name=message
$headers  = 'MIME-Version: 1.0' . "\r\n"; // заголовок соответствует формату плюс символ перевода строки
$headers .= 'Content-type: text/html; charset=utf-8' . "\r\n"; // указывает на тип посылаемого контента
mail($to, $tema, $message, $headers); //отправляет получателю на емайл значения переменных
?>;
<h2>Форма обратной связи на PHP</h2>
<!--Данные введенные пользователем обрабатываются кодом в mail.php-->
<form action="./form.php" method="post">
    <!--Тег используется для группировки связанных элементов в форме-->
    <fieldset>
        <!--Тег задает заголовок для групповых элементов-->
        <legend>Оставьте сообщение:</legend>
        Ваше имя:
        <!--Устанавливает однострочное текстовое поле ввода:-->
        <input type="text" name="name">
        <!--Используется для полей ввода, которые должны содержать адрес электронной почты.-->
        E-mail:
        <input type="text" name="email">
        Номер телефона:
        <input type="text" name="phone">
        Сообщение:
        <!--Тег разрешает многострочный ввод текста.-->
        Текстовая область может содержать неограниченное количество символов-->
        <textarea rows="10" cols="45" name="message"></textarea>
        <!--Устанавливает кнопку для отправки данных формы в обработчик формы.-->
        <input type="submit" value="Отправить сообщение">
    </fieldset>
</form>
<footer>
    <div class="footer container">
        <div class="footerContainer">
            <div class="logoFooter">LOGO</div>
            <div class="socialIconBox">
                <i class="fa-brands fa-instagram icon"></i>
                <i class="fa-brands fa-vk icon"></i>
                <i class="fa-brands fa-whatsapp icon"></i>
                <i class="fa-brands fa-telegram icon"></i>
                <i class="fa-solid fa-envelope icon"></i>
            </div>
        </div>
    </div>
</footer>



</div>
<script src="https://kit.fontawesome.com/04bae50cbf.js" crossorigin="anonymous"></script>


</body>
</html>