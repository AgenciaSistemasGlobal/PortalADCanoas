<?php
require 'PHPMailerAutoload.php';

$data = json_decode(file_get_contents("php://input"));
$mail = new PHPMailer;

//$mail->SMTPDebug = 3;                               // Enable verbose debug output

$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'smtp.umbler.com';                      // Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'falecom@sistemasglobal.com.br';    // SMTP username
$mail->Password = 'liloeduardo0202';                  // SMTP password
$mail->SMTPSecure = false;                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 587;                                    // TCP port to connect to
$mail->setLanguage('pt');

$mail->setFrom('falecom@sistemasglobal.com.br', $data->nome);

// Aqui vai o nome e mail da pessoa que vai receber
$mail->addAddress($data->email_cadastro, $data->nome);     // Add a recipient

$mail->addReplyTo('falecom@sistemasglobal.com.br', 'Portal de Igrejas ADCanoas');

$mail->isHTML(true);                                  // Set email format to HTML
$mail->CharSet  = 'utf-8';
$mail->WordWrap = 70;

$mail->Subject = $data->titulo;
$mail->Body = $data->texto;

if(!$mail->send()) {
    echo 'Message could not be sent.';
    echo 'Mailer Error: ' . $mail->ErrorInfo;
} else {
    echo 'Message has been sent';
}
?>