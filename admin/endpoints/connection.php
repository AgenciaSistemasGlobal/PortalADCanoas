<?php
	$db = new PDO("mysql:host=localhost;dbname=adcanoas", "root", "");
    //$db = new PDO("mysql:host=mysql873.umbler.com;dbname=global_db", "muriloeduardo", "4o7@Vy.NUR}s");

	function utf8ize($d){
        if (is_array($d)) {
            foreach ($d as $k => $v) {
                $d[$k] = utf8ize($v);
            }
        } else if (is_string ($d)) {
            return utf8_encode($d);
        }
        return $d;
    }
?>