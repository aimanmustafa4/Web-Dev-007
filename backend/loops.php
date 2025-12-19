<?php
echo "learning loops in php";
echo "<br>";
for($i=0; $i<10; $i++){
    echo $i . "<br>";
}




$m =0;
while($m<5){
    echo $m . "<br>";
    $m ++;
}

$n=0;
do{
    echo $n."<br>";
    $n++;
}while($n<15);



$fruits = ['apple','pear','banana','strawberry','orange'];
echo var_dump($fruits);
foreach ($fruits as $fruit){
    echo $fruit ."<br>";
}
?>