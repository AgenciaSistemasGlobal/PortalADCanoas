<?php
	include("../../connection.php");
	
	$slides = $db->query("SELECT * FROM jornal_koinonia");
	$slides = $slides->fetchAll();

	echo json_encode(utf8ize($slides));
?>