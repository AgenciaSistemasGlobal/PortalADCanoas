<?php
	include("../connection.php");

	$titulo         = $_POST['titulo'];
	$sub_titulo     = $_POST['sub_titulo'];
	$texto          = $_POST['texto'];
	$data           = $_POST['data'];
	
	if(!empty($_FILES)){
		$pastaTemporaria = $_FILES['file']['tmp_name'];
		$pastaDestino    = "../../../uploads_admin/" . $_FILES['file']['name'];
		$img             = "uploads_admin/" . $_FILES['file']['name'];
	}

	if(!isset($_POST['id'])){
		if(move_uploaded_file($pastaTemporaria, $pastaDestino)){
			$q = "INSERT INTO noticias (img, titulo, sub_titulo, texto, data) VALUES (:img, :titulo, :sub_titulo, :texto, :data)";
			$query = $db->prepare($q);
			$execute = $query->execute(array(
				":img" => $img,
				":titulo" => $titulo,
				":sub_titulo" => $sub_titulo,
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
			$q = "UPDATE noticias SET 
			titulo=:titulo,
			sub_titulo=:sub_titulo,
			texto=:texto,
			data=:data WHERE id=:id";
			$query = $db->prepare($q);
			$execute = $query->execute(array(
				":id" => $idEdit,
				":titulo" => $titulo,
				":sub_titulo" => $sub_titulo,
				":texto" => $texto,
				":data" => $data
			));
			echo "SUCCESS_EDIT";
		}else{
			if(move_uploaded_file($pastaTemporaria, $pastaDestino)){
				$q = "UPDATE noticias SET 
				img=:img, 
				titulo=:titulo,
				sub_titulo=:sub_titulo,
				texto=:texto,
				data=:data WHERE id=:id";
				$query = $db->prepare($q);
				$execute = $query->execute(array(
					":id" => $idEdit,
					":img" => $img,
					":titulo" => $titulo,
					":sub_titulo" => $sub_titulo,
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