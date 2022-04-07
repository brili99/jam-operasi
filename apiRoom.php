<?php
header('Content-Type: application/json; charset=utf-8');
$servername = "localhost";
$username = "dbrs";
$password = "bismillah";
$dbname = "rscounter";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$res = [];
if (
    isset($_GET['humid']) &&
    isset($_GET['temp'])
) {
    $humid = $_GET['humid'];
    $temp = $_GET['temp'];
    $sql = "UPDATE status_room SET temp = '$temp', humid = '$humid' WHERE id = 1";
    if ($conn->query($sql) === TRUE) {
        $res['msg'] = "success";
    } else {
        $res['msg'] = "fail";
        $res['debug'] = "Error updating record: " . $conn->error;
    }
} else {
    $sql = "SELECT temp, humid, UNIX_TIMESTAMP(time) as time FROM status_room WHERE id = 1";
    $result = $conn->query($sql);
    if ($result->num_rows > 0) {
        $res = $result->fetch_assoc();
    }
}
$conn->close();
echo json_encode($res);
