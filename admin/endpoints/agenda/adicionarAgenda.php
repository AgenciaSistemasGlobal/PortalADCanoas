<?php
	include("../connection.php");

	$titulo     = $_POST['titulo'];
	$texto      = $_POST['texto'];
	$data       = $_POST['data'];
	
	if(!empty($_FILES)){
		$pastaTemporaria = $_FILES['file']['tmp_name'];
		$pastaDestino    = "../../../uploads_admin/" . $_FILES['file']['name'];
		$img             = "uploads_admin/" . $_FILES['file']['name'];
	}

	if(!isset($_POST['id'])){
		if(move_uploaded_file($pastaTemporaria, $pastaDestino)){
			$q = "INSERT INTO agenda (img, titulo, texto, data) VALUES (:img, :titulo, :texto, :data)";
			$query = $db->prepare($q);
			$execute = $query->execute(array(
				":img" => $img,
				":titulo" => $titulo,
				":texto" => $texto,
				":data" => $data
			));
			echo "SUCCESS";
		}else{
			echo "ERROR";
		}
	}else{
		$idEdit = $_POST['id'];

		if(empty($_FILES)){
			$q = "UPDATE agenda SET 
			titulo=:titulo,
			texto=:texto,
			data=:data WHERE id=:id";
			$query = $db->prepare($q);
			$execute = $query->execute(array(
				":id" => $idEdit,
				":titulo" => $titulo,
				":texto" => $texto,
				":data" => $data
			));
			echo "SUCCESS_EDIT";
		}else{
			if(move_uploaded_file($pastaTemporaria, $pastaDestino)){
				$q = "UPDATE agenda SET 
				img=:img, 
				titulo=:titulo,
				texto=:texto,
				data=:data WHERE id=:id";
				$query = $db->prepare($q);
				$execute = $query->execute(array(
					":id" => $idEdit,
					":img" => $img,
					":titulo" => $titulo,
					":texto" => $texto,
					":data" => $data
				));

				echo "SUCCESS_EDIT";
			}else{
				echo "ERROR_EDIT";
			}
		}
	}
?>