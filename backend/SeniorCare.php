<?php 
    include('Connection.php');
    
        $name=$_POST['name'];
        $email=$_POST['email'];
        $pincode=$_POST['pincode'];
        $address=$_POST['address'];
        $photo=$_POST['photo']; 
        $careType=$_POST['careType'];
        $schedule=$_POST['schedule'];
        $startDate=$_POST['startDate'];
        $budget=$_POST['budget'];
        $specialRequirements=$_POST['specialRequirements'];
        $additionalNotes=$_POST['additionalNotes'];

        $qry = mysqli_query($con, "INSERT INTO seniorcare (name, email, address, pincode, photo, careType, schedule, startDate, budget, specialRequirements, additionalNotes) 
        VALUES ('$name', '$email', '$address', '$pincode', '$photo', '$careType', '$schedule', '$startDate', '$budget', '$specialRequirements', '$additionalNotes')");
        
        if($qry){
            echo "Your Request Submitted Successfully";
            // echo "<script type='text/javascript'> document.location ='Register.php'; </script>";
        }
        else{
            echo "Please Try Again !!";
            // echo "<script type='text/javascript'> document.location ='Register.php'; </script>";
        }
    
?>