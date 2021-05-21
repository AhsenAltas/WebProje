
<?php
 $mail= $_POST['username'];
   echo "E-Mail:  ";
   echo $mail;
   echo "<br>";
 $password= $_POST['password'];
   echo "Şifre:  ";
   echo $password;
   echo " ";
  
   if(isset($_POST['submit'])){
        if($mail == "b181210102@sakarya.edu.tr" && $password == "b181210102"){
            echo("<br>");
            echo("Giriş Başarılı");  
        }
        else{
            header("location: ../../signin.html");
        }
   }
?>

<html>
<head>
 <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.0/jquery.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>
<title>Mesaj</title>	
	<body>
	<a href="../../signin.html"><button onclick="../../signin.html" type="submit">Geri Dön</button></a>
	</body>
</html>
