<?php
	include("../connection.php");

	$nome       = $_POST['nome'];
	$sobre      = $_POST['sobre'];
	$facebook   = $_POST['facebook'];
	$nome_lider = $_POST['nome_lider'];

	if(!isset($_POST['id'])){
		if(move_uploaded_file($_FILES['img_lider']['tmp_name'], "../../../uploads_admin/" . $_FILES['img_lider']['name'])){
			$q = "INSERT INTO departamentos (facebook, sobre, foto_lider, nome_lider, nome) VALUES (:facebook, :sobre, :foto_lider, :nome_lider, :nome)";
			$query = $db->prepare($q);
			$execute = $query->execute(array(
				":facebook" => $facebook,
				":sobre" => $sobre,
				":foto_lider" => "uploads_admin/" . $_FILES['img_lider']['name'],
				":nome_lider" => $nome_lider,
				":nome" => $nome
			));

			$id_inserido = $db->lastInsertId();

			for ($i=1; $i < count($_FILES); $i++) { 
				
				move_uploaded_file($_FILES['galeria' . $i]['tmp_name'], "../../../uploads_admin/" . $_FILES['galeria' . $i]['name']);

				$q = "INSERT INTO galeria_departamentos (id_departamento, img) VALUES (:id_departamento, :img)";
				$query = $db->prepare($q);
				$execute = $query->execute(array(
					":id_departamento" => $id_inserido,
					":img" => "uploads_admin/" . $_FILES['galeria' . $i]['name']
				));
			}

			echo "SUCCESS";
		}else{
			echo "ERROR";
		}
	}else{
		$idEdit = $_POST['id'];

		if(empty($_FILES)){
			$q = "UPDATE departamentos SET 
			facebook=:facebook,
			sobre=:sobre,
			nome_lider=:nome_lider,
			nome=:nome WHERE id=:id";
			$query = $db->prepare($q);
			$execute = $query->execute(array(
				":id" => $idEdit,
				":facebook" => $facebook,
				":sobre" => $sobre,
				":nome_lider" => $nome_lider,
				":nome" => $nome
			));
			echo "SUCCESS_EDIT";
		}else{
			if (!isset($_FILES['img_lider'])) {
				$q = "UPDATE departamentos SET 
				facebook=:facebook,
				sobre=:sobre,
				nome_lider=:nome_lider,
				nome=:nome WHERE id=:id";
				$query = $db->prepare($q);
				$execute = $query->execute(array(
					":id" => $idEdit,
					":facebook" => $facebook,
					":sobre" => $sobre,
					":nome_lider" => $nome_lider,
					":nome" => $nome
				));

				if (isset($_FILES['galeria1'])) {

					for ($i=1; $i < count($_FILES) + 1; $i++) { 
				
						move_uploaded_file($_FILES['galeria' . $i]['tmp_name'], "../../../uploads_admin/" . $_FILES['galeria' . $i]['name']);

						$q = "INSERT INTO galeria_departamentos (id_departamento, img) VALUES (:id_departamento, :img)";
						$query = $db->prepare($q);
						$execute = $query->execute(array(
							":id_departamento" => $idEdit,
							":img" => "uploads_admin/" . $_FILES['galeria' . $i]['name']
						));
					}	
				}

				echo "SUCCESS_EDIT";
			}else{

				if(move_uploaded_file($_FILES['img_lider']['tmp_name'], "../../../uploads_admin/" . $_FILES['img_lider']['name'])){
					$q = "UPDATE departamentos SET 
					foto_lider=:foto_lider, 
					facebook=:facebook,
					sobre=:sobre,
					nome_lider=:nome_lider,
					nome=:nome WHERE id=:id";
					$query = $db->prepare($q);
					$execute = $query->execute(array(
						":id" => $idEdit,
						":foto_lider" => "uploads_admin/" . $_FILES['img_lider']['name'],
						":facebook" => $facebook,
						":sobre" => $sobre,
						":nome_lider" => $nome_lider,
						":nome" => $nome
					));

					if (isset($_FILES['galeria1'])) {

						for ($i=1; $i < count($_FILES); $i++) { 
					
							move_uploaded_file($_FILES['galeria' . $i]['tmp_name'], "../../../uploads_admin/" . $_FILES['galeria' . $i]['name']);

							$q = "INSERT INTO galeria_departamentos (id_departamento, img) VALUES (:id_departamento, :img)";
							$query = $db->prepare($q);
							$execute = $query->execute(array(
								":id_departamento" => $idEdit,
								":img" => "uploads_admin/" . $_FILES['galeria' . $i]['name']
							));
						}
					}

					echo "SUCCESS_EDIT";
				}else{
					echo "ERROR_EDIT";
				}
			}
		}
	}
?>