<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: *');
header('Access-Control-Allow-Methods "GET,PUT,POST,DELETE,PATCH,OPTIONS"');
header('Access-Control-Max-Age "1000"');
header('Access-Control-Allow-Headers "x-requested-with, Content-Type, origin, authorization, accept, client-security-token"');
header('Content-type: application/json;charset=UTF-8');

require 'connection.php';

$id = $_GET['id'];

//get by id
$sql = "SELECT * FROM students WHERE s_id = {$id}";

$result = mysqli_query($con,$sql);
$row = mysqli_fetch_assoc($result);
//print_r($row);

echo $json = json_encode($row);
//echo json_encode(['data'=>$json]);

exit;