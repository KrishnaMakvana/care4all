<?php 
    include('Connection.php');
    
        $firstname=$_POST['firstname'];
        $lastname=$_POST['lastname'];
        $email=$_POST['email'];
        $contact=$_POST['contact'];
        $age=$_POST['age'];        
        $address=$_POST['address'];
        $password=$_POST['password'];


        $qry=mysqli_query($con,"insert into users(firstname,lastname,email,contact,age,address,password) value('$firstname','$lastname','$email','$contact','$age','$address','$password')");
        if($qry){
            echo "Registered Successfully";
        }
        else{
            echo "Please Try Again !!";
        }
    
?>