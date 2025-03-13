<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With");
$con= mysqli_connect("localhost","root","","care4all");
if(mysqli_connect_errno()){
    echo "Connection Fail ".mysqli_connect_error();
}
?>
