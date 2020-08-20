
<?php

header('Access-Control-Allow-Origin: *');

 require 'connection.php';
 $id = $_GET['id'];
 
 echo $sql = "DELETE FROM students WHERE s_id={$id}";
 
 if(mysqli_query($con, $sql))
 {
 http_response_code(204);
 }
 else
 {
 return http_response_code(422);
 }
 ?>
