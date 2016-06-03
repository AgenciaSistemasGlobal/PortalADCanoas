<?php
	include("../../connection.php");
	$data = json_decode(file_get_contents("php://input"));

	$nome        = $data->nome;
	$endereco    = $data->endereco;
	$encarregado = $data->encarregado;

	if(!isset($data->id)){
		$distrito = $data->distrito;

		$q = "INSERT INTO congregacoes (distrito, nome, endereco, encarregado) VALUES (:distrito, :nome, :endereco, :encarregado)";
		$query = $db->prepare($q);
		$execute = $query->execute(array(
			":distrito" => $distrito,
			":nome" => $nome,
			":endereco" => $endereco,
			":encarregado" => $encarregado
		));
		echo "SUCCESS";
	}else{
		$idEdit   = $data->id;
		$distrito = $data->distrito;

		$q = "UPDATE congregacoes SET 
		distrito=:distrito,
		nome=:nome,
		endereco=:endereco,
		encarregado=:encarregado WHERE id=:id";
		$query = $db->prepare($q);
		$execute = $query->execute(array(
			":id" => $idEdit,
			":distrito" => $distrito,
			":nome" => $nome,
			":endereco" => $endereco,
			":encarregado" => $encarregado
		));
		echo "SUCCESS_EDIT";
	}
?>