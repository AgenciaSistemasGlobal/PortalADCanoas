<?php
	include("./connection.php");
	
    $token = str_replace('"', '', $_GET['token']);
    $token = stripslashes($token);
    
	$dados = $db->query("SELECT * FROM usuarios WHERE token='{$token}'");
	$dados = $dados->fetch();

	echo json_encode(utf8ize($dados));
?>