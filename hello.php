<h1>

 <?php //seu codigo aqui

    echo "Olá mundao!";

 ?> 
</h1>
<?php

    $valor=50;
    echo "<p>".$valor."</p>";
    echo "<p>$valor</p>";
    echo '<p> $valor </p>';


    $nome = "Joao Marcelo";
    echo $nome;

    $array=""; //Declarando array como string
    $array = array(); //como array
    $array=["pera", "maça", "banana"]; //como array list

     echo "<ul>";
    for ($i=0; $i<=count($array);$i++){
        echo "<li> $i $array[$i] </li>";
    }

    echo "</ul>"
?>


