<?php 
    include('Connection.php');
    
        $name=$_POST['name'];
        $email=$_POST['email'];
        $pincode=$_POST['pincode'];
        $address=$_POST['address'];
        $photo=$_POST['photo'];        
        $whenNeeded=$_POST['whenNeeded'];
        $careType=$_POST['careType'];
        $additionalServices = $_POST['additionalServices'];

        $qry = mysqli_query($con, "INSERT INTO childcare (name, email, address, pincode, photo, whenNeeded, careType, additionalServices) 
        VALUES ('$name', '$email', '$address', '$pincode', '$photo', '$whenNeeded', '$careType', '$additionalServices')");
        
        if($qry){
            echo "Your Request Submitted Successfully";
            // echo "<script type='text/javascript'> document.location ='Register.php'; </script>";
        }
        else{
            echo "Please Try Again !!";
            // echo "<script type='text/javascript'> document.location ='Register.php'; </script>";
        }
    
?>