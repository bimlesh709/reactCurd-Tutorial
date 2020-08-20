<?php

header('Access-Control-Allow-Origin: *');


require 'connection.php';
error_reporting(E_ERROR);
//$students=[];
$students = array( );
//var_dump($students); 

$sql = "select * from students";
if ($result = mysqli_query($con,$sql)){
    $cr = 0;
    while($row = mysqli_fetch_assoc($result)){
        $students[$cr]["s_id"] = $row["s_id"];
        $students[$cr]["first_name"] = $row["first_name"];
        $students[$cr]["last_name"] = $row["last_name"];
        $students[$cr]["email"] = $row["email"];
        $cr++;
    }
    

    //print_r($students);
    echo json_encode($students);

}
else {
    http_response_code(404);
}

?>