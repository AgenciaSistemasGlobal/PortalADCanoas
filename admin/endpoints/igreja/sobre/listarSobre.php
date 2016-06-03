<?php
	include("../../connection.php");
	
    $id = $_GET['id'];
    
	$slide = $db->query("SELECT * FROM sobre WHERE id={$id}");
	$slide = $slide->fetch();

	echo json_encode(utf8ize($slide));
?>