<?php
	include("../../connection.php");

	$texto_grande    = $_POST['textoGrande'];
	$texto_medio     = $_POST['textoMedio'];
	$texto_pequeno   = $_POST['textoPequeno'];
	
	if(!empty($_FILES)){
		$pastaTemporaria = $_FILES['file']['tmp_name'];
		$pastaDestino    = "../../../../uploads_admin/" . $_FILES['file']['name'];
		$img             = "uploads_admin/" . $_FILES['file']['name'];
	}

	if(!isset($_POST['id'])){
		if(move_uploaded_file($pastaTemporaria, $pastaDestino)){
			$q = "INSERT INTO artigos (img, texto_grande, texto_medio, texto_pequeno) VALUES (:img, :texto_grande, :texto_medio, :texto_pequeno)";
			$query = $db->prepare($q);
			$execute = $query->execute(array(
				":img" => $img,
				":texto_grande" => $texto_grande,
				":texto_medio" => $texto_medio,
				":texto_pequeno" => $texto_pequeno
			));
			echo "SUCCESS";
		}else{
			echo "ERROR";
		}
	}else{
		$idEdit = $_POST['id'];

		if(empty($_FILES)){
			$q = "UPDATE artigos SET 
			texto_grande=:texto_grande,
			texto_medio=:texto_medio,
			texto_pequeno=:texto_pequeno WHERE id=:id";
			$query = $db->prepare($q);
			$execute = $query->execute(array(
				":id" => $idEdit,
				":texto_grande" => $texto_grande,
				":texto_medio" => $texto_medio,
				":texto_pequeno" => $texto_pequeno
			));
			echo "SUCCESS_EDIT";
		}else{
			if(move_uploaded_file($pastaTemporaria, $pastaDestino)){
				$q = "UPDATE artigos SET 
				img=:img, 
				texto_grande=:texto_grande,
				texto_medio=:texto_medio,
				texto_pequeno=:texto_pequeno WHERE id=:id";
				$query = $db->prepare($q);
				$execute = $query->execute(array(
					":id" => $idEdit,
					":img" => $img,
					":texto_grande" => $texto_grande,
					":texto_medio" => $texto_medio,
					":texto_pequeno" => $texto_pequeno
				));
				echo "SUCCESS_EDIT";
			}else{
				echo "ERROR_EDIT";
			}
		}
	}
?>