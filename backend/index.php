<?php
$userName = "ali";
$userAge  = 30;

echo "hy my name is $userName  and my age is $userAge ";




echo "<br>";

$firstName = "Zamin";
$lastName = "Hussain";
$fullName = $firstName." ".$lastName;
echo $fullName ;



echo "<br>";

$userLogin = false;
if($userLogin){
    echo "u are already login.welcome";
}else{
    echo "u are not  login.";
}

echo "<br>";

$personDetails =[
    "name" => "Usama Mehboob",
    "age" => 19,
    "city" => "hasilpur"
];
echo "my name is $personDetails[name]";





?>