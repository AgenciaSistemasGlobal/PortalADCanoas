<?php
	include("./connection.php");
    $data = json_decode(file_get_contents("php://input"));
    
    if(isset($data->senha)){
    	$senha = sha1($data->senha);

    	$q = "UPDATE usuarios SET 
		nome=:nome, 
		email=:email,
		senha=:senha WHERE id=:id";
		$query = $db->prepare($q);
		$execute = $query->execute(array(
			":id" => $data->id,
			":nome" => $data->nome,
			":email" => $data->email,
			":senha" => $senha
		));
		echo "EDIT_PASS";
    }else{
    	$q = "UPDATE usuarios SET 
		nome=:nome, 
		email=:email WHERE id=:id";
		$query = $db->prepare($q);
		$execute = $query->execute(array(
			":id" => $data->id,
			":nome" => $data->nome,
			":email" => $data->email
		));
    }
?>