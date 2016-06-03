<?php
	include("../connection.php");
	$data = json_decode(file_get_contents("php://input"));

	$q = "DELETE FROM agenda WHERE id=:id";
	$query = $db->prepare($q);
	$execute = $query->execute(array(
		":id" => $data->id
	));

	echo "SUCCESS";
?>