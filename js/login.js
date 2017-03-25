var app = angular.module('xiaomi', ['ng','ngRoute']);
app.config(function ($routeProvider) {
    $routeProvider
        .when("/login",{
            controller:'login',
            templateUrl:'tpl/login.html'
        })
        .when("/register",{
            controller:'register',
            templateUrl:'tpl/register.html'
        })
        .otherwise({
            redirectTo:'/login'
        })
})
//注册验证
app.controller('register',['$scope','$http',
    function ($scope,$http) {
        $scope.submitUser= function () {
            var name=$scope.name
            var pwd=$scope.pwd
            $scope.user={
                'name':name,
                'pwd':pwd
            }
            var params=$.param($scope.user)
            // //大量数据传递
            if ($scope.name_repeat==0) {
                $http.post("data/register.php?"+params)
               .success(function (data) {
                    var result=data[0]
                    //可以再用一次下边的checkId
                    if(result.msg==='succ'){
                        $scope.succMsg="成功"
                        swal({
                                title: "注册成功!",
                                text: "您已成功注册账号!",
                                type: "success",
                                showCancelButton: false,
                                confirmButtonColor: "#86CCEB",
                                confirmButtonText: "OK",
                                closeOnConfirm: false
                            },
                            function(isConfirm){
                                if(isConfirm){
                                    window.location.href="login.html";
                                }
                            })
                    }else{
                       $scope.errMsg="失败"
                    }
                })
            }
            
        }

        //密码查重
        $scope.$watch("pwd2",function(){
            if (($scope.pwd==$scope.pwd2)&&(!($scope.pwd==null))) {
                $scope.pwd_repeat=0
            }else if(!($scope.pwd==null)){
                $scope.pwd_repeat=1
            }
        },true)

        //实时名字查重
        $scope.$watch("name",function () {
            if (!($scope.name==null)) {
            //查找用户名
            $http.get('data/checkId.php?user_name='+$scope.name)
                .success(function (data) {
                    if(data==''){
                        $scope.name_repeat=0
                        //不重复
                    }else{
                        //重复
                        $scope.name_repeat=1
                    }
                })    
            }
        })
    }])

//登陆
app.controller('login',['$scope','$http',
    function ($scope,$http) {
        $scope.submitLogin= function () {

            var name=$scope.name
            var pwd=$scope.pwd
            $scope.user={
                'name':name,
                'pwd':pwd
            }
            var params=$.param($scope.user)
            // 大量数据传递
            $http.post("data/login.php?"+params)
               .success(function (data) {
                    var result=data[0]
                    console.log(result)
                    // console.log(data)
                    if(!(result==null)){
                       $scope.succMsg="成功"
                       //登陆成功
                       sessionStorage.setItem("uid",result.uid)
                       sessionStorage.setItem("name",result.user)
                       if (sessionStorage.getItem("phone")) {
                            sessionStorage.setItem("phone",'')
                            // console.log(sessionStorage.getItem("phone"))
                            window.location.href="product_5s.html";
                       }else{
                            window.location.href="index.html";
                       }
                    }else{
                        $scope.errMsg="失败"
                        //登陆失败
                    }
                })
        }
    }])