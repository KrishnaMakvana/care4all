<?php 
    include('Connection.php');
    
        $name=$_POST['name'];
        $email=$_POST['email'];
        $pincode=$_POST['pincode'];
        $address=$_POST['address'];
        $photo=$_POST['photo'];        
        $serviceType=$_POST['serviceType'];
        $cleaningFrequency=$_POST['cleaningFrequency'];
        $startDate = $_POST['startDate'];
        $budget = $_POST['budget'];
        $specialInstructions = $_POST['specialInstructions'];

        $qry = mysqli_query($con, "INSERT INTO HireHouseKeeping (name, email, address, pincode, photo, serviceType, cleaningFrequency, startDate, budget, specialInstructions) 
        VALUES ('$name', '$email', '$address', '$pincode', '$photo', '$serviceType', '$cleaningFrequency', '$startDate', '$budget', '$specialInstructions')");
        
        if($qry){
            echo "Your Request Submitted Successfully";
            // echo "<script type='text/javascript'> document.location ='Register.php'; </script>";
        }
        else{
            echo "Please Try Again !!";
            // echo "<script type='text/javascript'> document.location ='Register.php'; </script>";
        }
    
?>