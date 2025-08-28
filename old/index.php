<?php

$extracss = null;
$page = null;

try {
	$url = null;
	if (array_key_exists('URI', $_GET)) {
		$myurl = $_GET['URI'];
		$url = explode('/', $myurl);
		if (count($url) > 0) {
			foreach ($url as $index => $value) {
				if (empty($value)) unset($url[$index]);
			}
		}
	}
	if($url != null && is_array($url)){
		if(file_exists("pages/" . $url[0] . ".php")){
			$page = "pages/" . $url[0] . ".php";
			$extracss = "/css/" . $url[0] . ".css";
		}else{
			var_dump($url);
		}
	}else{
		$page = "pages/home.php";
		$extracss = "/css/home.css";
	}
}catch(Exception $e){
    header('HTTP/1.1 404 File Not Found');
}

require_once("head.php");
if($page != null){
	require_once($page);
}
require_once("footer.php");	

?>
