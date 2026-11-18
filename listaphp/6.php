<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Par ou Impar?</title>
</head>
<body>
    
<form action="">
    <label for="num">Insira o numero: </label>
    <input name="num" type="number" >
  

</form>

<?php 
 if(!isset($_GET["num"])){
 exit();
 }
   $num = $_GET["num"];

    function parouimpar($n){

       if($n % 2 == 0){
        echo "$n é par";
       }
       else{
        echo "$n é impar";
       }
    }

    

    parouimpar($num);

    ?>
    
</body>
</html>