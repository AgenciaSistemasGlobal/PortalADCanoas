<?php
	include("../../connection.php");
	
	$slides = $db->query("SELECT * FROM artigos");
	$slides = $slides->fetchAll();

	echo json_encode(utf8ize($slides));
?>