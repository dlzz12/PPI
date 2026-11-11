<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Random</title>
</head>
<body>
        <?php
        if (isset($_GET["min"]) && isset($_GET["max"])) {
            $min= $_GET("min");
            $max= $_GET("max");
            echo rand ($min, $max);
        
        }

    ?>
    <form action= "">
    <label for="min"> Mínimo</label>
    <input name= "min" type="number" value= "<?php echo $min; ?>">

    <label for="max">Max</label>
    <input name="max" type="number" value = "<?php echo $max;?>">

    <input type="submit">

    </form>    


</body>
</html>