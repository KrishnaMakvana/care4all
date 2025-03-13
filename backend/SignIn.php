<?php 
    include('Connection.php');

    $email=$_POST['email'];
    $password=$_POST['password'];
    $qry = mysqli_query($con, "SELECT * FROM users WHERE email='$email' && password='$password' ");
    $ret=mysqli_fetch_array($qry);
    if($ret>0){
        echo json_encode(['exists' => true]); // Return JSON response
    } else {
        echo json_encode(['exists' => false]); // Email does not exist
    }
?>  