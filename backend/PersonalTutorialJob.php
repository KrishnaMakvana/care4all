<?php 
    include('Connection.php');
    
        $name=$_POST['name'];
        $email=$_POST['email'];
        $pincode=$_POST['pincode'];
        $address=$_POST['address'];
        $photo=$_POST['photo'];        
        $experience=$_POST['experience'];        
        $ratings=$_POST['ratings'];
        $availability=$_POST['availability'];
        $subjects = $_POST['subjects'];

        $qry = mysqli_query($con, "INSERT INTO personaltutorialjob (name, email, address, pincode, photo, experience, ratings, availability, subjects) 
        VALUES ('$name', '$email', '$address', '$pincode', '$photo', '$experience', '$ratings', '$availability','$subjects')");
        
        if($qry){
            echo "Your Request Submitted Successfully";
        }
        else{
            echo "Please Try Again !!";
        }
    
?>