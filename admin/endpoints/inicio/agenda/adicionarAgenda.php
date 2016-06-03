<?php
	include("../../connection.php");
	$data = json_decode(file_get_contents("php://input"));

	$dia           	 = $data->dia;
	$mes           	 = $data->mes;
	$ano           	 = $data->ano;
	$texto_grande    = $data->textoGrande;
	$texto_medio     = $data->textoMedio;

	if(!isset($data->id)){
		$q = "INSERT INTO agenda_ministerial (dia, mes, ano, texto_grande, texto_medio) VALUES (:dia, :mes, :ano, :texto_grande, :texto_medio)";
		$query = $db->prepare($q);
		$execute = $query->execute(array(
			":dia" => $dia,
			":mes" => $mes,
			":ano" => $ano,
			":texto_grande" => $texto_grande,
			":texto_medio" => $texto_medio
		));
		echo "SUCCESS";
	}else{
		$idEdit = $data->id;

		$q = "UPDATE agenda_ministerial SET 
		dia=:dia,
		mes=:mes,
		ano=:ano,
		texto_grande=:texto_grande,
		texto_medio=:texto_medio WHERE id=:id";
		$query = $db->prepare($q);
		$execute = $query->execute(array(
			":id" => $idEdit,
			":dia" => $dia,
			":mes" => $mes,
			":ano" => $ano,
			":texto_grande" => $texto_grande,
			":texto_medio" => $texto_medio
		));
		echo "SUCCESS_EDIT";
	}
?>