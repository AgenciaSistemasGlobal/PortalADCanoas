<?php
	include("../connection.php");
	
    $id = $_GET['id'];
    
	$slide = $db->query("SELECT * FROM noticias WHERE id={$id}");
	$slide = $slide->fetch();

	echo json_encode(utf8ize($slide));
?>