<?php
	include("../../connection.php");
	
	$slides = $db->query("SELECT congregacoes.*, distritos.distrito as nome_distrito FROM congregacoes JOIN distritos ON congregacoes.distrito = distritos.id");
	$slides = $slides->fetchAll();

	echo json_encode(utf8ize($slides));
?>