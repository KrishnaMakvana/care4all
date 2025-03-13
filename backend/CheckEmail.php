<?php 
    include('Connection.php');

    $email=$_POST['email'];
    $qry = mysqli_query($con, "SELECT * FROM users WHERE email='$email'");
    
    if (mysqli_num_rows($qry) > 0) {
        echo json_encode(['exists' => true]); // Return JSON response
    } else {
        echo json_encode(['exists' => false]); // Email does not exist
    }
?>  