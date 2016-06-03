<?php
	include("../connection.php");
	
	$slides = $db->query("SELECT * FROM galeria_departamentos");
	$slides = $slides->fetchAll();

	echo json_encode(utf8ize($slides));
?>