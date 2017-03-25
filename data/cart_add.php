<?php 
header('Content-Type:application/json');

@$user_name=$_REQUEST['name'];
@$uid=$_REQUEST['uid'];
@$pid=$_REQUEST['pid'];
@$count=$_REQUEST['count'];
@$color=$_REQUEST['color'];
@$version=$_REQUEST['version'];
@$price=$_REQUEST['price'];


if (empty($user_name)||empty($uid)||empty($pid)||empty($count)||empty($color)||empty($version)||empty($price)) {
	echo '[]';
    return;
}

require('xiaomi_init.php');

$sql="INSERT INTO cart_detail VALUES (NULL,'$uid','$user_name','$pid','$count','$version','$color','$price')";
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