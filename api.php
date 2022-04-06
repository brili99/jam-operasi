<?php
header('Content-Type: application/json; charset=utf-8');
// Create connection
$conn = new mysqli("localhost", "pi", "raspberry", "rumah_sakit");
if (
    isset($_GET['temp']) ||
    isset($_GET['humid'])
) {
    // Check connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    $sql = "UPDATE status SET time = now()";
    if (isset($_GET['temp'])) {
        $temp = $_GET['temp'];
        $sql .= ", temp = '$temp'";
    }
    if (isset($_GET['humid'])) {
        $humid = $_GET['humid'];
        $sql .= ", humid = '$humid'";
    }
    $sql .= " WHERE id = 1";
    $res['msg'] = "";
    if ($conn->query($sql) === TRUE) {
        $res['msg'] = "success";
    } else {
        $res['msg'] = "Error updating record: " . $conn->error;
    }
    echo json_encode($res);
} else {
    $sql = "SELECT temp, humid FROM status WHERE id = 1";
    if ($result->num_rows > 0) {
        $row = $result->fetch_assoc();
        echo json_encode($row);
    }
}
$conn->close();
