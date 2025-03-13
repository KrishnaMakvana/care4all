<?php 
include('Connection.php');

$qry = "SELECT * FROM services";
$result = mysqli_query($con, $qry);

$json_array = array();

while ($row = mysqli_fetch_assoc($result)) {
    // Convert each value to UTF-8 encoding
    foreach ($row as $key => $value) {
        $row[$key] = mb_convert_encoding($value, 'UTF-8', 'auto');
    }
    
    $json_array[] = $row;
}

// Output the data as JSON
echo json_encode($json_array);

?>
