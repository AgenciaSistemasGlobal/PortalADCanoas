<?php
	include("../../connection.php");
	
	$slides = $db->query("SELECT * FROM imagens");
	$slides = $slides->fetchAll();

	echo json_encode(utf8ize($slides));
?>