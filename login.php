<?php
// variables
$uname = $pw = "";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $uname = test_input($_POST["uname"]);
    $pw = test_input($_POST["psw"]);
    echoContent($_POST["uname"], $_POST["psw"]);
}

function test_input($data) {
    $data = trim($data);
    $data = stripcslashes($data);
    $data = htmlspecialchars($data);
    return $data;
}

function echoContent($uname2, $pw2) {
    echo "<h2>Your Input:</h2>";
    echo $uname2;
    echo "<br>";
    echo $pw2;
}
?>