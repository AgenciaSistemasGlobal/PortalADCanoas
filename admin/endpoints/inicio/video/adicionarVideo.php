<?php
	include("../../connection.php");
	$data = json_decode(file_get_contents("php://input"));

	$url             = $data->url;
	$texto_grande    = $data->textoGrande;
	$texto_medio     = $data->textoMedio;

	if(!isset($data->id)){
		$q = "INSERT INTO videos (url, texto_grande, texto_medio) VALUES (:url, :texto_grande, :texto_medio)";
		$query = $db->prepare($q);
		$execute = $query->execute(array(
			":url" => $url,
			":texto_grande" => $texto_grande,
			":texto_medio" => $texto_medio
		));
		echo "SUCCESS";
	}else{
		$idEdit = $data->id;

		$q = "UPDATE videos SET 
		url=:url,
		texto_grande=:texto_grande,
		texto_medio=:texto_medio WHERE id=:id";
		$query = $db->prepare($q);
		$execute = $query->execute(array(
			":id" => $idEdit,
			":url" => $url,
			":texto_grande" => $texto_grande,
			":texto_medio" => $texto_medio
		));
		echo "SUCCESS_EDIT";
	}
?>