<?php 
header('Content-Type:application/json');

@$uid=$_REQUEST['uid'];

if (empty($uid)) {
	echo '[]';
    return;
}
require('xiaomi_init.php');

$sql="DELETE FROM cart_detail WHERE uid=$uid";
$result=mysqli_query($conn,$sql);