<?php 
header('Content-Type:application/json');

@$user_name=$_REQUEST['name'];
@$pwd=$_REQUEST['pwd'];


if (empty($user_name)||empty($pwd)) {
	echo '[]';
    return;
}

require('xiaomi_init.php');

$sql="INSERT INTO user VALUES (NULL,'$user_name','$pwd')";
$result=mysqli_query($conn,$sql);

$output=[];


if ($result) {
	$arr['msg']='succ';
	// $arr['oid']=mysqli_insert_id($conn);
}else{
	$arr['msg']='err';
}
$output[]=$arr;
echo json_encode($output);