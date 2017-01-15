<?php
require 'vendor/phpMailer/PHPMailerAutoload.php';
$name = $_REQUEST['name'];
$phone = "<br>Телефон: ".$_REQUEST['phone'];
$street = "<br>Улица: ".$_REQUEST['street'];
$home = "<br>Дом: ".$_REQUEST['home'];
$housing = "<br>Корпус: ".$_REQUEST['housing'];
$flat = "<br>Квартира: ".$_REQUEST['flat'];
$floor = "<br>Этаж: ".$_REQUEST['floor'];
$comments = "<br>Комментарии: ".$_REQUEST['comments'];
$message = $phone . $street . $home . $housing . $flat . $floor;

$mail = new PHPMailer;
$mail->isSMTP();                                      // Set mailer to use SMTP
// $mail->SMTPDebug = 1;
$mail->Host = 'smtp.yandex.ru';  // Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'ooo.kerm';                 // SMTP username
$mail->Password = 'Negfzfhvf123';                           // SMTP password
$mail->SMTPSecure = 'TLS';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 587;                                    // TCP port to connect to

$mail->setFrom('ooo.kerm@yandex.ru', 'Отправитель - сайт Burgers');
$mail->addAddress('ooo.kerm@yandex.ru', 'Получатель - сайт Burgers');     // Add a recipient              // Name is optional
$mail->addReplyTo('ooo.kerm@yandex.ru', 'Information');

// $mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
// $mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name
$mail->isHTML(true);                                  // Set email format to HTML

$mail->Subject = 'Новый заказ с сайта Burgers';
$mail->Body    = 'Сообщение от пользователя: '.$name.'<br>'.$message.'<br>'.$comments;
$mail->AltBody = 'Сообщение от пользователя: '.$name.'<br>'.$message.'<br>'.$comments;

if(!$mail->send()) {
	echo "Сообщение не отправлено";
} else {
    echo "Сообщение отправлено";
}