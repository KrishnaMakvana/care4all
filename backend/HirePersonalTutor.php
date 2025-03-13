<?php 
    include('Connection.php');
    
        $name=$_POST['name'];
        $email=$_POST['email'];
        $pincode=$_POST['pincode'];
        $address=$_POST['address'];
        $photo=$_POST['photo'];        
        $subject=$_POST['subject'];
        $schedule=$_POST['schedule'];
        $startDate = $_POST['startDate'];
        $budget = $_POST['budget'];
        $additionalNotes = $_POST['additionalNotes'];

        $qry = mysqli_query($con, "INSERT INTO HirePersonalTutor (name, email, address, pincode, photo, subject, schedule, startDate, budget, additionalNotes) 
        VALUES ('$name', '$email', '$address', '$pincode', '$photo', '$subject', '$schedule', '$startDate', '$budget', '$additionalNotes')");
        
        if($qry){
            echo "Your Request Submitted Successfully";
            // echo "<script type='text/javascript'> document.location ='Register.php'; </script>";
        }
        else{
            echo "Please Try Again !!";
            // echo "<script type='text/javascript'> document.location ='Register.php'; </script>";
        }
    
?>