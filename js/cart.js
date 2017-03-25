var app=angular.module('myApp',['ng'])
app.controller('cart',
    ['$scope','$http',
        function ($scope,$http) {
            $scope.total_all=0
            var uid=sessionStorage.getItem("uid")
            $http.get('data/cartById.php?uid='+uid)
                .success(function (data) {
                    var obj=[];
                    var color=[];
                    var name=[];
                    var version=[];
                    $scope.cart=data
                    console.log($scope.cart)
                    if($scope.cart!=''){
                        for (var i = 0; i <data[0].length ; i++) {
                            obj.push(data[0][i].pid)
                            $scope.color=data[0][i].color
                            $scope.version=data[0][i].version
                            color.push($scope.color)
                            version.push($scope.version)
                        }
                        if(obj.length===data[0].length){
                            for(var j=0;j<obj.length;j++){
                                $http.get('data/productById.php?id='+obj[j])
                                    .success(function (data) {
                                        name.push(data[0])
                                        $scope.product=name
                                        console.log(data)
                                        if($scope.product.length===obj.length){
                                            for(var l=0;l<$scope.product.length;l++){
                                                $scope.product[l].color=color[l]
                                                $scope.product[l].version=version[l]
                                                $scope.product[l].count=$scope.cart[0][l].count
                                                $scope.product[l].price=$scope.cart[0][l].price
                                                $scope.total_all+=parseFloat($scope.cart[0][l].price)
                                                $scope.product[l].total=$scope.cart[0][l].price
                                            }
                                        }
                                    })
                            }
                        }
                    }else{
                        window.location.href="error2.html";
                    }
                })
            $scope.add= function (i) {
                $scope.product[i].count++
                $scope.product[i].total= $scope.product[i].count*$scope.product[i].price
                $scope.total_all+=parseFloat($scope.cart[0][i].price)
            }
            $scope.remove= function (i) {
                if($scope.product[i].count>1){
                    $scope.product[i].count--
                    $scope.product[i].total= $scope.product[i].count*$scope.product[i].price
                    $scope.total_all-=parseFloat($scope.cart[0][i].price)
                }
            }
            $scope.delete=function(i){
                $scope.total_all-=parseFloat($scope.cart[0][i].price)*$scope.product[i].count
                $scope.product.splice(i,1)
                if($scope.total_all==0){
                    window.location.href="error2.html";
                }
            }
            $scope.end= function () {
                $http.get('data/deleteCartById.php?uid='+sessionStorage.getItem("uid"))
                    .success(function (data) {
                        swal({
                                title: "购买成功!",
                                text: "您已成功购买所有商品!",
                                type: "success",
                                showCancelButton: false,
                                confirmButtonColor: "#86CCEB",
                                confirmButtonText: "OK",
                                closeOnConfirm: false
                            },
                            function(isConfirm){
                                if(isConfirm){
                                    window.location.href="error2.html";
                                }
                            })
                    })
            }
        }
])









