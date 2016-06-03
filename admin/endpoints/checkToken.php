<?php
	include("./connection.php");
	$data = json_decode(file_get_contents("php://input"));
	$token = $data->token;

	$token = str_replace('"', "", $token);
	$check = $db->query("SELECT * FROM usuarios WHERE token='{$token}'");
	$check = $check->fetchAll();
	
	if (count($check) == 1){
		echo "authorized";
	} else {
		echo "unauthorized";
	}
?>