<?php
	include("../../connection.php");
	
	$slides = $db->query("SELECT * FROM agenda_ministerial");
	$slides = $slides->fetchAll();

	echo json_encode(utf8ize($slides));
?>