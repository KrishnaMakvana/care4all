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
        $services = $_POST['services'];

        $qry = mysqli_query($con, "INSERT INTO seniorjob (name, email, address, pincode, photo, experience, ratings, availability, services) 
        VALUES ('$name', '$email', '$address', '$pincode', '$photo', '$experience', '$ratings', '$availability','$services')");
        
        if($qry){
            echo "Your Request Submitted Successfully";
        }
        else{
            echo "Please Try Again !!";
        }
    
?>