//参数的弹出显示
var app=angular.module('myApp',['ng'])



app.controller('header', function ($scope) {
    if(sessionStorage.getItem("name")){
        $scope.user_name=sessionStorage.getItem("name")
        $scope.loginShow=1
    }else{
        $scope.loginShow=0
    }
    $scope.cart= function () {
        window.location.href="cart.html";
    }
    $scope.logOut= function () {
        sessionStorage.setItem("name",'')
        sessionStorage.setItem("uid",'')
        location.reload()
    }
    $scope.register= function () {
        window.location.href="login.html#/register";
    }
    $scope.login= function () {
        window.location.href="login.html#/login";
    }
})



app.controller('choose5s',['$scope','$http',
    function ($scope,$http) {
    $scope.version='3GB内存+64GB容量'
    $scope.color='哑光金色'
    $scope.focus1 = 0
    $scope.focus2 = 0
    $scope.price='1999'
    $scope.img='//c1.mifile.cn/f/i/15/item/buyphone/mi5s-jin!600x600.jpg'
    $scope.li_click1 = function (i) {
        $scope.focus1 = i;
        $scope.version=$scope.versions[i].version
        if(i==0){
            $scope.price='1999'
        }else{
            $scope.price='2299'
        }
    };
    $scope.li_click2 = function (i) {
        $scope.focus2 = i;
        $scope.imgs=[
            {img:'//c1.mifile.cn/f/i/15/item/buyphone/mi5s-jin!600x600.jpg'},
            {img:'//c1.mifile.cn/f/i/15/item/buyphone/xiaomi5s-yinse!600x600.jpg'},
            {img:'//c1.mifile.cn/f/i/15/item/buyphone/xiaomi5s-meiguijin!600x600.jpg'},
            {img:'//c1.mifile.cn/f/i/15/item/buyphone/mi5s-shenhui!600x600.jpg'}
        ]
        console.log($scope.imgs[i].img)
        $scope.img=$scope.imgs[i].img
        $scope.color=$scope.colors[i].color
    };
    $scope.versions=[
        {version:'3GB内存+64GB容量'},
        {version:'4GB内存+128GB容量'}
    ]
    $scope.colors = [
        {img:"note3-icon-jin.png",color:"哑光金色"},
        {img:"icon-yin.jpg",color:"哑光银白"},
        {img:"minote-icon-fen.png",color:"玫瑰金"},
        {img:"icon-qianhui.jpg",color:"哑光深灰"}
    ];

    $scope.buy= function () {
        var uid=sessionStorage.getItem("uid")
        var name=sessionStorage.getItem("name")
        $scope.user={
            'uid':uid,
            'name':name,
            'pid':4,
            'count':1,
            'version': $scope.version,
            'color':$scope.color,
            'price':$scope.price
        }
        var params=$.param($scope.user)
        console.log(params)
        //大量数据传递
        $http.post("data/cart_add.php?"+params)
            .success(function (data) {
                var result=data[0]
                if(result==null){
                    sessionStorage.setItem("phone","5s")
                    window.location.href="login.html";
                }else if(result.msg==='succ'){
                    $scope.succMsg="成功"
                    window.location.href="cart.html";
                }else{
                    $scope.errMsg="失败"
                    window.location.href="error.html";
                }
            })
    }
}]);
app.controller('choose5c',['$scope','$http',
    function ($scope,$http) {
        $scope.version='3GB内存+64GB容量'
        $scope.color='玫瑰金'
        $scope.focus1 = 0
        $scope.focus2 = 0
        $scope.price='1499'
        $scope.img='//c1.mifile.cn/f/i/15/item/buyphone/5c-meiguijin!600x600.jpg'
        $scope.li_click1 = function (i) {
            $scope.focus1 = i;
            $scope.version=$scope.versions[i].version
        };
        $scope.li_click2 = function (i) {
            $scope.focus2 = i;
            $scope.imgs=[
                {img:'//c1.mifile.cn/f/i/15/item/buyphone/5c-meiguijin!600x600.jpg'},
                {img:'//c1.mifile.cn/f/i/15/item/buyphone/5c-jinsea!600x600.jpg'},
                {img:'//c1.mifile.cn/f/i/15/item/buyphone/5c-heise!600x600.jpg'}
            ]
            console.log($scope.imgs[i].img)
            $scope.img=$scope.imgs[i].img
            $scope.color=$scope.colors[i].color
        };
        $scope.versions=[
            {version:'3GB内存+64GB容量'},
        ]
        $scope.colors = [
            {img:"minote-icon-fen.png",color:"玫瑰金"},
            {img:"note3-icon-jin.png",color:"金色"},
            {img:"5c-heise.png",color:"黑色"}
        ];

        $scope.buy= function () {
            var uid=sessionStorage.getItem("uid")
            var name=sessionStorage.getItem("name")
            $scope.user={
                'uid':uid,
                'name':name,
                'pid':1,
                'count':1,
                'version': $scope.version,
                'color':$scope.color,
                'price':$scope.price
            }
            var params=$.param($scope.user)
            //大量数据传递
            $http.post("data/cart_add.php?"+params)
                .success(function (data) {
                    var result=data[0]
                    if(result==null){
                        sessionStorage.setItem("phone","5c")
                        window.location.href="login.html";
                    }else if(result.msg==='succ'){
                        $scope.succMsg="成功"
                        window.location.href="cart.html";
                    }else{
                        $scope.errMsg="失败"
                        window.location.href="error.html";
                    }
                })
        }
    }]);
app.controller('chooseMix',['$scope','$http',
    function ($scope,$http) {
        $scope.version='标准版 4GB内存+128GB容量'
        $scope.color=' 黑色'
        $scope.focus1 = 0
        $scope.focus2 = 0
        $scope.price='1999'
        $scope.img='//c1.mifile.cn/f/i/15/item/buyphone/MIX-heise!600x600.jpg'
        $scope.li_click1 = function (i) {
            $scope.focus1 = i;
            $scope.version=$scope.versions[i].version
            if(i==0){
                $scope.price='3499'
            }else{
                $scope.price='3999'
            }
        };
        $scope.li_click2 = function (i) {
            $scope.focus2 = i;
            $scope.imgs=[
                {img:'//c1.mifile.cn/f/i/15/item/buyphone/MIX-heise!600x600.jpg'},
                {img:'//i8.mifile.cn/v1/a1/0a4a26dd-7f05-1dae-1b91-b9835f4f029c!600x600.png'}
            ]
            console.log($scope.imgs[i].img)
            $scope.img=$scope.imgs[i].img
            $scope.color=$scope.colors[i].color
        };
        $scope.versions=[
            {version:'标准版 4GB内存+128GB容量'},
            {version:'尊享版 6GB内存+256GB容量'}
        ]
        $scope.colors = [
            {img:"mi4-icon-hei.png",color:"黑色"},
            {img:"50d49d74-9d83-e686-73ca-98914744cdc1.png",color:"皓月白"}
        ];

        $scope.buy= function () {
            var uid=sessionStorage.getItem("uid")
            var name=sessionStorage.getItem("name")
            $scope.user={
                'uid':uid,
                'name':name,
                'pid':2,
                'count':1,
                'version': $scope.version,
                'color':$scope.color,
                'price':$scope.price
            }
            var params=$.param($scope.user)
            //大量数据传递
            $http.post("data/cart_add.php?"+params)
                .success(function (data) {
                    var result=data[0]
                    if(result==null){
                        sessionStorage.setItem("phone","mix")
                        window.location.href="login.html";
                    }else if(result.msg==='succ'){
                        $scope.succMsg="成功"
                        window.location.href="cart.html";
                    }else{
                        $scope.errMsg="失败"
                        window.location.href="error.html";
                    }
                })
        }
    }]);
app.controller('chooseNote2',['$scope','$http',
    function ($scope,$http) {
        $scope.version='标准版 4GB内存+64GB容量'
        $scope.color='亮银黑'
        $scope.focus1 = 0
        $scope.focus2 = 0
        $scope.price='2799'
        $scope.img='//c1.mifile.cn/f/i/15/item/buyphone/note2-liangyinhei!600x600.jpg'
        $scope.li_click1 = function (i) {
            $scope.focus1 = i;
            $scope.version=$scope.versions[i].version
            if(i==0){
                $scope.price='2799'
            }else if(i==1){
                $scope.price='3299'
            }else{
                $scope.price='3499'
            }
        };
        $scope.li_click2 = function (i) {
            $scope.focus2 = i;
            $scope.imgs=[
                {img:'//c1.mifile.cn/f/i/15/item/buyphone/note2-liangyinhei!600x600.jpg'},
                {img:'//c1.mifile.cn/f/i/15/item/buyphone/note2-heise!600x600.png'},
                {img:'//c1.mifile.cn/f/i/15/item/buyphone/note2-yin!600x600.png'}
            ]
            console.log($scope.imgs[i].img)
            $scope.img=$scope.imgs[i].img
            $scope.color=$scope.colors[i].color
        };
        $scope.versions=[
            {version:'标准版 4GB内存+64GB容量'},
            {version:'高配版 6GB内存+128GB容量'},
            {version:'全球版 6GB内存+128GB容量'}
        ]
        $scope.colors = [
            {img:"icon-qianhui.jpg",color:"亮银黑"},
            {img:"5c-heise.png",color:"亮黑色"},
            {img:"icon-yin.jpg",color:"冰川银"}
        ];

        $scope.buy= function () {
            var uid=sessionStorage.getItem("uid")
            var name=sessionStorage.getItem("name")
            $scope.user={
                'uid':uid,
                'name':name,
                'pid':3,
                'count':1,
                'version': $scope.version,
                'color':$scope.color,
                'price':$scope.price
            }
            var params=$.param($scope.user)
            //大量数据传递
            $http.post("data/cart_add.php?"+params)
                .success(function (data) {
                    var result=data[0]
                    if(result==null){
                        sessionStorage.setItem("phone","note2")
                        window.location.href="login.html";
                    }else if(result.msg==='succ'){
                        $scope.succMsg="成功"
                        window.location.href="cart.html";
                    }else{
                        $scope.errMsg="失败"
                        window.location.href="error.html";
                    }
                })
        }
    }]);


app.controller('detail', function ($scope) {
    $scope.click_show=1
    $scope.clickShow= function () {
        if ($scope.click_show===1) {
            $scope.click_show=0
        }else{
            $scope.click_show=1
        }
    }
})








