<?php
	include("../../connection.php");
	
	$slides = $db->query("SELECT * FROM integrantes");
	$slides = $slides->fetchAll();

	echo json_encode(utf8ize($slides));
?>