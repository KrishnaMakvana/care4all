<?php 
    include('Connection.php');
    
        $name=$_POST['name'];
        $email=$_POST['email'];
        $cardNumber=$_POST['cardNumber'];
        $expiry=$_POST['expiry'];        
        $cvv=$_POST['cvv'];
        $amount=$_POST['amount'];

        $qry=mysqli_query($con,"insert into subscribers(name,email,cardNumber,expiry,cvv,amount) value('$name','$email','$cardNumber','$expiry','$cvv','$amount')");
        if($qry){
            echo "You Have Successfully Subscribed !";
        }
        else{
            echo "Please Try Again !!";
        }
    
?>