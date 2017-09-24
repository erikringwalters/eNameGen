<?php
$size;
$race;
$gender;

function setDefaults()
{
  $size = "medium";
  $race = "basic";
  $gender = "basic";
}
function getCategory($category)
{

}
function displayName($size, $race, $gender)
{
  $r1 = rand(0,40);
  $r2 = rand(0,40);
  $r3 = rand(0,40);
  echo arrays/begs.php($r1)
}
 ?>
