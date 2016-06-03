<?php
	include("./connection.php");
	$data = json_decode(file_get_contents("php://input"));
	$username = $data->username;
	$password = sha1($data->password);

	$userInfo = $db->query("SELECT email FROM usuarios WHERE email = '{$username}' AND senha = '{$password}'");
	$userInfo = $userInfo->fetchAll();

	$token;
	if(count($userInfo) == 1){
		$token = $username . " | " . uniqid() . uniqid() . uniqid();

		$q = "UPDATE usuarios SET token=:token WHERE email=:email AND senha=:password";
		$query = $db->prepare($q);
		$execute = $query->execute(array(
			":token" => $token,
			":email" => $username,
			":password" => $password
		));
		
		echo json_encode($token);
	}else{
		echo "ERROR";
	}
?>