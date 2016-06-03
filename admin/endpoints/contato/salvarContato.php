<?php
	include("../connection.php");

	$idEdit    = $_POST['id'];
	$email     = $_POST['email'];
	$telefone  = $_POST['telefone'];
	$celular   = $_POST['celular'];
	$facebook  = $_POST['facebook'];
	$twitter   = $_POST['twitter'];
	$instagram = $_POST['instagram'];
	$youtube   = $_POST['youtube'];
	$radio     = $_POST['radio'];
	$endereco  = $_POST['endereco'];
	$numero    = $_POST['numero'];
	$bairro    = $_POST['bairro'];
	$cep       = $_POST['cep'];
	$cidade    = $_POST['cidade'];
	$estado    = $_POST['estado'];

	$q = "UPDATE contato SET 
	email=:email,
	celular=:celular,
	telefone=:telefone,
	facebook=:facebook,
	twitter=:twitter,
	instagram=:instagram,
	youtube=:youtube,
	endereco=:endereco,
	numero=:numero,
	bairro=:bairro,
	cidade=:cidade,
	estado=:estado,
	cep=:cep,
	radio=:radio WHERE id=:id";
	$query = $db->prepare($q);
	$execute = $query->execute(array(
		":id"        => $idEdit,
		":email"     => $email,
		":telefone"  => $telefone,
		":celular"   => $celular,
		":facebook"  => $facebook,
		":twitter"   => $twitter,
		":instagram" => $instagram,
		":youtube"   => $youtube,
		":radio"     => $radio,
		":endereco"  => $endereco,
		":numero"    => $numero,
		":bairro"    => $bairro,
		":cep"       => $cep,
		":cidade"    => $cidade,
		":estado"    => $estado
	));
	
	echo "SUCCESS_EDIT";
?>