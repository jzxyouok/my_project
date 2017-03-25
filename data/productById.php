<?php 
header('Content-Type:application/json');

@$id=$_REQUEST['id'];

if (empty($id)) {
	echo '[]';
    return;
}
require('xiaomi_init.php');

$sql="SELECT * FROM detail WHERE pid=$id";
$result=mysqli_query($conn,$sql);

$output=[];

$row=mysqli_fetch_assoc($result);

if (empty($row)) {
	echo "[]";
}else{
	$output[]=$row;
	echo json_encode($output);
}
 