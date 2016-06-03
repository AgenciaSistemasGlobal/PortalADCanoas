<?php
	include("../../connection.php");

	$nome        = $_POST['nome'];
	$cargo       = $_POST['cargo'];
	$descricao   = $_POST['descricao'];
	$facebook    = $_POST['facebook'];
	$twitter     = $_POST['twitter'];
	$linkedin    = $_POST['linkedin'];

	
	if(!empty($_FILES)){
		$pastaTemporaria = $_FILES['file']['tmp_name'];
		$pastaDestino    = "../../../../uploads_admin/" . $_FILES['file']['name'];
		$img             = "uploads_admin/" . $_FILES['file']['name'];
	}

	if(!isset($_POST['id'])){
		if(move_uploaded_file($pastaTemporaria, $pastaDestino)){
			$q = "INSERT INTO integrantes (img, nome, cargo, descricao, facebook, twitter, linkedin) VALUES (:img, :nome, :cargo, :descricao, :facebook, :twitter, :linkedin)";
			$query = $db->prepare($q);
			$execute = $query->execute(array(
				":img" => $img,
				":nome" => $nome,
				":cargo" => $cargo,
				":descricao" => $descricao,
				":facebook" => $facebook,
				":twitter" => $twitter,
				":linkedin" => $linkedin
			));
			echo "SUCCESS";
		}else{
			echo "ERROR";
		}
	}else{
		$idEdit = $_POST['id'];

		if(empty($_FILES)){
			$q = "UPDATE integrantes SET 
			nome=:nome,
			cargo=:cargo,
			descricao=:descricao,
			facebook=:facebook,
			twitter=:twitter,
			linkedin=:linkedin WHERE id=:id";
			$query = $db->prepare($q);
			$execute = $query->execute(array(
				":id" => $idEdit,
				":nome" => $nome,
				":cargo" => $cargo,
				":descricao" => $descricao,
				":facebook" => $facebook,
				":twitter" => $twitter,
				":linkedin" => $linkedin
			));
			echo "SUCCESS_EDIT";
		}else{
			if(move_uploaded_file($pastaTemporaria, $pastaDestino)){
				$q = "UPDATE integrantes SET 
				img=:img, 
				nome=:nome,
				cargo=:cargo,
				descricao=:descricao,
				facebook=:facebook,
				twitter=:twitter,
				linkedin=:linkedin WHERE id=:id";
				$query = $db->prepare($q);
				$execute = $query->execute(array(
					":id" => $idEdit,
					":img" => $img,
					":nome" => $nome,
					":cargo" => $cargo,
					":descricao" => $descricao,
					":facebook" => $facebook,
					":twitter" => $twitter,
					":linkedin" => $linkedin
				));
				echo "SUCCESS_EDIT";
			}else{
				echo "ERROR_EDIT";
			}
		}
	}
?>