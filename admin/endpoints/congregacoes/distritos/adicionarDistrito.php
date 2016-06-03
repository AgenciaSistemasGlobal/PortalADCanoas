<?php
	include("../../connection.php");

	$nome        = $_POST['nome'];
	$pastor      = $_POST['pastor'];
	$fone        = $_POST['fone'];
	$igreja_sede = $_POST['igreja_sede'];
	
	if(!empty($_FILES)){
		// Foto Distrito
		$pastaTemporaria_foto_distrito = $_FILES['foto_distrito']['tmp_name'];
		$pastaDestino_foto_distrito    = "../../../../uploads_admin/" . $_FILES['foto_distrito']['name'];
		$foto_distrito                 = "uploads_admin/" . $_FILES['foto_distrito']['name'];

		// Foto Pastor
		$pastaTemporaria_foto_pastor = $_FILES['foto_pastor']['tmp_name'];
		$pastaDestino_foto_pastor    = "../../../../uploads_admin/" . $_FILES['foto_pastor']['name'];
		$foto_pastor                 = "uploads_admin/" . $_FILES['foto_pastor']['name'];
	}

	if(!isset($_POST['id'])){
		if(move_uploaded_file($pastaTemporaria_foto_distrito, $pastaDestino_foto_distrito) && move_uploaded_file($pastaTemporaria_foto_pastor, $pastaDestino_foto_pastor)){
			$q = "INSERT INTO distritos (distrito, foto_distrito, pastor, foto_pastor, fone, igreja_sede) VALUES (:distrito, :foto_distrito, :pastor, :foto_pastor, :fone, :igreja_sede)";
			$query = $db->prepare($q);
			$execute = $query->execute(array(
				":distrito"      => $nome,
				":foto_distrito" => $foto_distrito,
				":pastor"        => $pastor,
				":foto_pastor"   => $foto_pastor,
				":fone"          => $fone,
				":igreja_sede"   => $igreja_sede
			));
			echo "SUCCESS";
		}else{
			echo "ERROR";
		}
	}else{
		$idEdit = $_POST['id'];

		if(empty($_FILES)){
			$q = "UPDATE distritos SET 
			distrito=:distrito,
			pastor=:pastor,
			fone=:fone,
			igreja_sede=:igreja_sede WHERE id=:id";
			$query = $db->prepare($q);
			$execute = $query->execute(array(
				":id" => $idEdit,
				":distrito" => $nome,
				":pastor" => $pastor,
				":fone" => $fone,
				":igreja_sede" => $igreja_sede
			));
			echo "SUCCESS_EDIT";
		}else{
			if(move_uploaded_file($pastaTemporaria_foto_distrito, $pastaDestino_foto_distrito) && move_uploaded_file($pastaTemporaria_foto_pastor, $pastaDestino_foto_pastor)){
				$q = "UPDATE distritos SET 
				distrito=:distrito,
				foto_distrito=:foto_distrito,
				pastor=:pastor,
				foto_pastor=:foto_pastor,
				fone=:fone,
				igreja_sede=:igreja_sede WHERE id=:id";
				$query = $db->prepare($q);
				$execute = $query->execute(array(
					":id"            => $idEdit,
					":distrito"      => $nome,
					":foto_distrito" => $foto_distrito,
					":pastor"        => $pastor,
					":foto_pastor"   => $foto_pastor,
					":fone"          => $fone,
					":igreja_sede"   => $igreja_sede
				));

				echo "SUCCESS_EDIT";
			}else{
				echo "ERROR_EDIT";
			}
		}
	}
?>