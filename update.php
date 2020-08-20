<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: *');
header('Access-Control-Allow-Methods "GET,PUT,POST,DELETE,PATCH,OPTIONS"');
header('Access-Control-Max-Age "1000"');
header('Access-Control-Allow-Headers "x-requested-with, Content-Type, origin, authorization, accept, client-security-token"');
header('Content-type: application/json;charset=UTF-8');

require 'connection.php';

	$postdata = file_get_contents("php://input");

	//$request = json_decode($postdata);

	if(isset($postdata) && !empty($postdata))
	{		
		//this will extract data	
		$request = json_decode($postdata);
		//print_r($request);

		//senitize
		$id = $_GET['id'];
		$first_name = $request->first_name;
		$last_name = $request->last_name;
		$email = $request->email;

	//update
	$sql = "UPDATE students SET first_name = '$first_name', last_name ='$last_name', email = '$email' WHERE s_id ={$id} LIMIT 1";
	//echo($sql);
		if(mysqli_query($con,$sql))
			{
			http_response_code(204);
			}
		else
			{
			return http_response_code(422);
			}
		echo(mysqli_query($con, $sql));
	}
