<?php 
header('Content-Type:application/json');

@$user_name=$_REQUEST['user_name'];

if (empty($user_name)) {
	echo '[]';
    return;
}

require('xiaomi_init.php');

$sql="SELECT uid FROM user WHERE user LIKE '$user_name'";
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