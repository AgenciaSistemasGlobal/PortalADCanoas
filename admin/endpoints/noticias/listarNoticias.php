<?php
	include("../connection.php");
	
	$slides = $db->query("SELECT * FROM noticias");
	$slides = $slides->fetchAll();

	echo json_encode(utf8ize($slides));
?>