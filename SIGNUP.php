<?php
if($_SERVER["REQUEST_METHOD"] == "POST"){
    include '_dbconnect.php';
    $username = $_POST["username"];
    $password = $_POST["password"];
    $surePassword = $_POST["surePassword"];
//
    if(($password == $surePassword)){
        $sql = "INSERT INTO `students` ( `username`, `password`) VALUES ('$username', '$password')";
        $result = mysqli_query($conn, $sql);
        if ($result){
            echo 'Success!';
            header("location: login.php");
        }
    }
    else{
        echo 'Error!';
    }
}
?>

<!doctype html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">

    <title>SignUp</title>
</head>
<body style='background: url(" big.jpg")'>
<?php require '_nav.php' ?>

<div class="container my-4" style="color: white">
    <h1 class="text-center">Signup to PSU</h1>
    <form action="SIGNUP.php" method="post">
        <div class="form-group">
            <label for="username">Username</label>
            <input type="text" class="form-control" id="username" name="username" aria-describedby="emailHelp">
        </div>

        <div class="form-group">
            <label for="password">Password</label>
            <input type="password" class="form-control" id="password" name="password">
        </div>
        <div class="form-group">
            <label for="surePassword">Confirm Password</label>
            <input type="password" class="form-control" id="surePassword" name="surePassword">
            <b>Type the same password</b>
        </div>

        <button type="submit" class="btn btn-primary">SignUp</button>
    </form>
</div>


</body>
</html>