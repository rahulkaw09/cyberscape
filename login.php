<?php
if($_SERVER["REQUEST_METHOD"] == "POST"){
    include '_dbconnect.php';
    $username = $_POST["username"];
    $password = $_POST["password"];


    $sql = "Select * from `students` where username='$username' AND password='$password'";
    $result = mysqli_query($conn, $sql);
   $num = mysqli_num_rows($result);
    if ($num==1){
        session_start();
        echo'Success!';

        $_SESSION['username'] = $username;
        header("location: finallibrary.html");
    }
    else{
        echo 'Error!';
    }
}
?>

<!doctype html>
<html lang="en">
<head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">

    <title>Login</title>
</head>
<body>
<?php require 'navbar.php' ?>

<div class="container my-4" style="color: white">
    <h1 class="text-center">Login to our PSU</h1>
    <form action="login.php" method="post">
        <div class="form-group">
            <label for="username">Username</label>
            <input type="text" class="form-control" id="username" name="username" aria-describedby="emailHelp">

        </div>
        <div class="form-group">
            <label for="password">Password</label>
            <input type="password" class="form-control" id="password" name="password">
        </div>


        <button type="submit" class="btn btn-primary">Login</button>
    </form>
</div>

</body>
</html>