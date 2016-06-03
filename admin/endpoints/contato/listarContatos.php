<?php
	include("../connection.php");
	
	$slides = $db->query("SELECT * FROM contato");
	$slides = $slides->fetchAll();

	echo json_encode(utf8ize($slides));
?>