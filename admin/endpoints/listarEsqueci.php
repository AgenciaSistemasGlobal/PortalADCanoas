<?php
	include("./connection.php");
	$data = json_decode(file_get_contents("php://input"));
	
	$q = "UPDATE usuarios SET 
	senha=:senha, forgout=0 WHERE id=:id";
	$query = $db->prepare($q);
	$execute = $query->execute(array(
		":id" => $data->id,
		":senha" => sha1($data->nova_senha)
	));

	if($execute){
		echo "SUCCESS_EDIT";
	}else{
		echo "ERROR";
	}
?>