<?php
	include("../../connection.php");

	for ($i=1; $i < count($_FILES) + 1; $i++) { 

		move_uploaded_file($_FILES['galeria' . $i]['tmp_name'], "../../../../uploads_admin/" . $_FILES['galeria' . $i]['name']);

		$q = "INSERT INTO imagens (img) VALUES (:img)";
		$query = $db->prepare($q);
		$execute = $query->execute(array(
			":img" => "uploads_admin/" . $_FILES['galeria' . $i]['name']
		));
	}
	echo "SUCCESS";
?>