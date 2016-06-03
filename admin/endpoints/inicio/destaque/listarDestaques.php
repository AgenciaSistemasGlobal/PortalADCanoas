<?php
	include("../../connection.php");

	$slides = $db->query("SELECT * FROM destaques");
	$slides = $slides->fetchAll();

	echo json_encode(utf8ize($slides));
?>