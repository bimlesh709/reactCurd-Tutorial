<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: *');
header('Access-Control-Allow-Methods "POST, GET, OPTIONS, DELETE, PUT, TRACE"');
header('Access-Control-Max-Age "1000"');
header('Access-Control-Allow-Headers "x-requested-with, Content-Type, origin, authorization, accept, client-security-token"');
header('Content-type: application/json;charset=UTF-8');

require 'connection.php';
//print_r($_POST);
$postdata = file_get_contents("php://input"); 
//$request = json_decode($postdata);
//print_r($request);


if(isset($postdata) && !empty($postdata)){
	
    $request = json_decode($postdata);    
	
    print_r($request);
	
	$s_id = $request->s_id;
    $first_name = $request->first_name;   
    $last_name = $request->last_name;
    $email = $request ->email;

    $sql = "insert into students(s_id,first_name,last_name, email) values ('{$s_id}','{$first_name}','{$last_name}','{$email}')";

    if (mysqli_query($con, $sql)){
        http_response_code(201);

    }
    else{
        http_response_code(422);

    }
}

?>