<?php 
header('Content-Type:application/json');

@$uid=$_REQUEST['uid'];

if (empty($uid)) {
	echo '[]';
    return;
}
require('xiaomi_init.php');

$sql="SELECT * FROM cart_detail WHERE uid=$uid";
$result=mysqli_query($conn,$sql);

$output=[];

$row=mysqli_fetch_all($result,MYSQLI_ASSOC);

if (empty($row)) {
	echo "[]";
}else{
	$output[]=$row;
	echo json_encode($output);
}
 