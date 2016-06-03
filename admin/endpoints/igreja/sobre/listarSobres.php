<?php
	include("../../connection.php");
	
	$slides = $db->query("SELECT * FROM sobre");
	$slides = $slides->fetchAll();

	echo json_encode(utf8ize($slides));
?>