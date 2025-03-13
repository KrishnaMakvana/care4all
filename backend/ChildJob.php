<?php 
    include('Connection.php');
    
        $name=$_POST['name'];
        $email=$_POST['email'];
        $pincode=$_POST['pincode'];
        $address=$_POST['address'];
        $photo=$_POST['photo'];        
        $experience=$_POST['experience'];        
        $ratings=$_POST['ratings'];
        $NumberOfChild=$_POST['NumberOfChild'];
        $selectedAges = $_POST['selectedAges'];
        $hourlyRate = $_POST['hourlyRate'];

        $qry = mysqli_query($con, "INSERT INTO childjob (name, email, address, pincode, photo, experience, ratings, NumberOfChild, selectedAges, hourlyRate) 
        VALUES ('$name', '$email', '$address', '$pincode', '$photo', '$experience', '$ratings', '$NumberOfChild','$selectedAges', '$hourlyRate')");
        
        if($qry){
            echo "Your Request Submitted Successfully";
            // echo "<script type='text/javascript'> document.location ='Register.php'; </script>";
        }
        else{
            echo "Please Try Again !!";
            // echo "<script type='text/javascript'> document.location ='Register.php'; </script>";
        }
    
?>