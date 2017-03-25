<?php 
header('Content-Type:application/json');

@$user_name=$_REQUEST['name'];
@$pwd=$_REQUEST['pwd'];


if (empty($user_name)||empty($pwd)) {
	echo '[]';
    return;
}

require('xiaomi_init.php');

$sql="SELECT uid,user FROM user WHERE user LIKE '$user_name' AND pwd LIKE '$pwd'";
$result=mysqli_query($conn,$sql);

$output=[];

while (1) {
	$row=mysqli_fetch_assoc($result);
	if (!$row) {
		break;
	}
	$output[]=$row;
}



echo json_encode($output);