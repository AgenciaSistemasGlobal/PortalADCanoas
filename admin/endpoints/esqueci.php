<?php
	include("./connection.php");
	$data = json_decode(file_get_contents("php://input"));
	$email = $data->email;
	
	$verifica = $db->query("SELECT nome, id FROM usuarios WHERE email='{$email}'");
	$verifica = $verifica->fetchAll();

	if($verifica){
		echo json_encode(utf8ize($verifica));

		$q = "UPDATE usuarios SET forgout=1 WHERE email=:email";
		$query = $db->prepare($q);
		$execute = $query->execute(array(":email" => $email));
	}else{
		echo "EXISTED";
	}
?>