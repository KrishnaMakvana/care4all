<?php 
include('Connection.php');

$Service_name = $_POST['Service_name']; 
$pincode = $_POST['pincode']; 
$cj = $_POST['cj']; 

if($cj == 'care'){
    switch ($Service_name) {
        case 'Child Care':
            $qry = "SELECT * FROM childjob where pincode = '$pincode' LIMIT 3";
            break;
        case 'Pet Care':
            $qry = "SELECT * FROM petjob where pincode = '$pincode' LIMIT 3";
            break;
        case 'Housekeeping':
            $qry = "SELECT * FROM housekeepingjob where pincode = '$pincode' LIMIT 3";
            break;
        case 'Senior Care':
            $qry = "SELECT * FROM seniorjob where pincode = '$pincode' LIMIT 3";
            break;
        case 'Personal Tutoring':
            $qry = "SELECT * FROM personaltutorialjob where pincode = '$pincode' LIMIT 3";
            break;
        case 'Physiotherapy':
            $qry = "SELECT * FROM Physiotherapyjob where pincode = '$pincode' LIMIT 3";
            break;
        default:
            echo json_encode(["error" => "Invalid service name"]);
            exit();
    }
}
else{
    switch ($Service_name) {
        case 'Child Care':
            $qry = "SELECT * FROM childcare where pincode = '$pincode' LIMIT 3";
            break;
        case 'Pet Care':
            $qry = "SELECT * FROM petcare where pincode = '$pincode' LIMIT 3";
            break;
        case 'Housekeeping':
            $qry = "SELECT * FROM hirehousekeeping where pincode = '$pincode' LIMIT 3";
            break;
        case 'Senior Care':
            $qry = "SELECT * FROM seniorcare where pincode = '$pincode' LIMIT 3";
            break;
        case 'Personal Tutoring':
            $qry = "SELECT * FROM hirepersonaltutor where pincode = '$pincode' LIMIT 3";
            break;
        case 'Physiotherapy':
            $qry = "SELECT * FROM Physiotherapycare where pincode = '$pincode' LIMIT 3";
            break;
        default:
            echo json_encode(["error" => "Invalid service name"]);
            exit();
    }
}


$result = mysqli_query($con, $qry);

$json_array = array();


while ($row = mysqli_fetch_assoc($result)) {
    foreach ($row as $key => $value) {
        $row[$key] = mb_convert_encoding($value, 'UTF-8', 'auto');
    }
    $json_array[] = $row;
}

echo json_encode($json_array);
?>
