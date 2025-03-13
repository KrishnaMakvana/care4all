<?php 
    include('Connection.php');
    
        $name=$_POST['name'];
        $email=$_POST['email'];
        $pincode=$_POST['pincode'];
        $address=$_POST['address'];
        $photo=$_POST['photo'];        
        $petType=$_POST['petType'];
        $schedule=$_POST['schedule'];
        $startDate = $_POST['startDate'];
        $budget = $_POST['budget'];

        $qry = mysqli_query($con, "INSERT INTO petcare (name, email, address, pincode, photo, petType, schedule, startDate, budget) 
        VALUES ('$name', '$email', '$address', '$pincode', '$photo', '$petType', '$schedule', '$startDate', '$budget')");
        
        if($qry){
            echo "Your Request Submitted Successfully";
            // echo "<script type='text/javascript'> document.location ='Register.php'; </script>";
        }
        else{
            echo "Please Try Again !!";
            // echo "<script type='text/javascript'> document.location ='Register.php'; </script>";
        }
    
?>