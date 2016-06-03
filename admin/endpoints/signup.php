<?php
	include("./connection.php");
	$data = json_decode(file_get_contents("php://input"));
	$nome = $data->nome;
	$email_cadastro = $data->email_cadastro;
	$senha_cadastro = $data->senha_cadastro;
    
	$verifica = $db->query("SELECT nome, token FROM usuarios WHERE email='{$email_cadastro}'");
	$verifica = $verifica->fetch();

	if($verifica){
		// Erro ja existe este email
		return false;
	}else{
		$q = "INSERT INTO usuarios (nome, email, senha) VALUES (:nome, :email, :senha_cadastro)";
		$query = $db->prepare($q);
		$execute = $query->execute(array(
			":nome" => $nome,
			":email" => $email_cadastro,
			":senha_cadastro" => sha1($senha_cadastro)
		));

		echo json_encode($email_cadastro);
	}
?>