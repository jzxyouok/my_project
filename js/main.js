var fade_slider={
	MOVE:0, 
	WAIT:5000,
	$button:null,
	$left:null,
	$right:null,
 	autoChange() {
 		this.$button=$(".banner_button");
 		this.$left=$(".slider_button_left");
 		this.$right=$(".slider_button_right");
 		this.timer=setInterval(()=>{ 
		    if(this.MOVE < $(".banner_slider li").length-1){ 
			    this.MOVE ++; 
			}else{ 
			    this.MOVE = 0;
				}
	    	this.change(this.MOVE);
    	},this.WAIT);
	 	this.$button.on("click","li",e=>{
	      	if(!$(e.target).hasClass("banner_button_active")){
	        //停止一次性定时器
	        clearTimeout(this.timer); 
	        this.timer=null;
	        //获得当前li的内容保存在end
	        var end=$(e.target).index(".banner_button li");
	        //调用move,传入end-start
	        this.MOVE=end;
	        this.change(this.MOVE);
      		}
		});
		this.$right.on("click","a",e=>{
			e.preventDefault();
	      	if(!$(e.target).hasClass("banner_button_active")){
	        clearTimeout(this.timer); 
	        this.timer=null;
	        var start=
	        this.$button.children(".banner_button_active").index(".banner_button li");
	        this.MOVE=start+1;
	        if (this.MOVE===5) {
	        	this.MOVE=0;
	        }
	        this.change(this.MOVE);
      		}
		});
		this.$left.on("click","a",e=>{
			e.preventDefault();
	      	if(!$(e.target).hasClass("banner_button_active")){
	        clearTimeout(this.timer); 
	        this.timer=null;
	        var start=
	        this.$button.children(".banner_button_active").index(".banner_button li");
	        this.MOVE=start-1;
	        if (this.MOVE===5) {
	        	this.MOVE=0;
	        }
	        this.change(this.MOVE);
      		}
		});
	},
 	change(num){ 
	    $(".banner_slider").find("li").hide().removeClass(".banner_slider").eq(num).fadeIn(500).addClass(".banner_slider");
	    $(".banner_button").find("li").removeClass("banner_button_active").eq(num).addClass("banner_button_active");
  	},
}
fade_slider.autoChange();

// 导航侧边弹出显示
var nav_pump={
	$li:null,
	$item:null,
	// $n:null,
	int(){
		$(".shopping_nav_list_item").on('mouseenter',e=> {
			var n=$(e.target).parent().index();
 			$(".slider_button_left a").css("width",0);
			$(".shopping_nav_list_item").eq(n).children("div").addClass("active");//去掉banner左边的按钮  简直蛋疼
			$(".shopping_nav_list>li").eq(n).addClass('shopping_nav_list_hover');
		})
		$(".shopping_nav_list_item").on('mouseleave',e=> {
			var n=$(e.target).parent().index();
			$(".slider_button_left a").css("width",40);
			$(".shopping_nav_item").removeClass("active");
			$(".shopping_nav_list>li").removeClass('shopping_nav_list_hover');
		})
	},
	 

}
nav_pump.int();

var slider1={
	$length:null,
	$left:null,
	$right:null,
	n:0,
	int(){
		this.point();
		this.change();
	},
	change1(m){
		this.n=m-1;
	},
	change(m){
		this.$length=parseFloat($(".contant-item_slider").css("width"));
		this.$left=parseFloat($(".contant-item_slider>ul").css("margin-left"));
		this.$rt=$("#ddd1");
		this.$ul=$("#eee1");
		this.$rt.on("click",e=>{ 
				this.n++;
			    this.$ul.css("margin-left",this.$left-this.$length*(this.n));
			    if (this.n>2) {
			      this.n=2;
			      this.$ul.css("margin-left",this.$left-this.$length*2);
			    }
			    this.$point=$(".contant-item-pager1");
			    this.$point.removeClass('pager-active');
	 			$(`.contant-item-pager1:eq(${this.n})`).addClass('pager-active');
			});
			this.$lt=$("#ccc1"); 
			this.$lt.on("click",e=>{
			    this.n--;
			    this.$ul.css("margin-left",this.$left-this.$length*this.n);
			    if (this.n<0) {
			        this.n=0;
			        this.$ul.css("margin-left",0);
			    }
			    this.$point=$(".contant-item-pager1");
			    this.$point.removeClass('pager-active');
	 			$(`.contant-item-pager1:eq(${this.n})`).addClass('pager-active');
			});
	},
 	point(){
 		this.$point=$(".contant-item-pager1");
 		this.$point.on("click",'.dot',e=>{
 			var end=Number($(e.target).html());
  			this.$point.removeClass('pager-active');
 			$(e.target).parent().addClass('pager-active');
 			this.$ul.css("margin-left",-this.$length*(end-1));
 			this.change1(end);
		});
 	}
}
slider1.int();

var hover1={
	$li:null,
	$button:null,
	in(){
		this.$li=$(".contant-item>.bbb1");
		this.$button=$(".contant-item_slider_button.fff1");
			this.$li.hover(	
				e=> {
					this.$button.stop().animate(
					{opacity:1},200)
				},
				e=> {
					this.$button.stop().animate(
					{opacity:0},200)
				}
			)
	}, 
}
hover1.in();

var slider2={
	$length:null,
	$left:null,
	$right:null,
	n:0,
	int(){
		this.point();
		this.change();
	},
	change1(m){
		this.n=m-1;
	},
	change(m){
		this.$length=parseFloat($(".contant-item_slider").css("width"));
		this.$left=parseFloat($(".contant-item_slider>ul").css("margin-left"));
		this.$rt=$("#ddd2");
		this.$ul=$("#eee2");
		this.$rt.on("click",e=>{ 
				this.n++;
			    this.$ul.css("margin-left",this.$left-this.$length*(this.n));
			    if (this.n>3) {
			      this.n=3;
			      this.$ul.css("margin-left",this.$left-this.$length*3);
			    }
			    this.$point=$(".contant-item-pager2");
			    this.$point.removeClass('pager-active');
	 			$(`.contant-item-pager2:eq(${this.n})`).addClass('pager-active');
			});
			this.$lt=$("#ccc2"); 
			this.$lt.on("click",e=>{
			    this.n--;
			    this.$ul.css("margin-left",this.$left-this.$length*this.n);
			    if (this.n<0) {
			        this.n=0;
			        this.$ul.css("margin-left",0);
			    }
			    this.$point=$(".contant-item-pager2");
			    this.$point.removeClass('pager-active');
	 			$(`.contant-item-pager2:eq(${this.n})`).addClass('pager-active');
			});
	},
 	point(){
 		this.$point=$(".contant-item-pager2");
 		this.$point.on("click",'.dot',e=>{
 			var end=Number($(e.target).html());
  			this.$point.removeClass('pager-active');
 			$(e.target).parent().addClass('pager-active');
 			this.$ul.css("margin-left",-this.$length*(end-1));
 			this.change1(end);
		});
 	}
}
slider2.int();

var hover2={
	$li:null,
	$button:null,
	in(){
		this.$li=$(".contant-item>.bbb2");
		this.$button=$(".contant-item_slider_button.fff2");
			this.$li.hover(	
				e=> {
					this.$button.stop().animate(
					{opacity:1},200)
				},
				e=> {
					this.$button.stop().animate(
					{opacity:0},200)
				}
			)
	}, 
}
hover2.in();


var slider3={
	$length:null,
	$left:null,
	$right:null,
	n:0,
	int(){
		this.point();
		this.change();
	},
	change1(m){
		this.n=m-1;
	},
	change(m){
		this.$length=parseFloat($(".contant-item_slider").css("width"));
		this.$left=parseFloat($(".contant-item_slider>ul").css("margin-left"));
		this.$rt=$("#ddd3");
		this.$ul=$("#eee3");
		this.$rt.on("click",e=>{ 
				this.n++;
			    this.$ul.css("margin-left",this.$left-this.$length*(this.n));
			    if (this.n>3) {
			      this.n=3;
			      this.$ul.css("margin-left",this.$left-this.$length*3);
			    }
			    this.$point=$(".contant-item-pager3");
			    this.$point.removeClass('pager-active');
	 			$(`.contant-item-pager3:eq(${this.n})`).addClass('pager-active');
			});
			this.$lt=$("#ccc3"); 
			this.$lt.on("click",e=>{
			    this.n--;
			    this.$ul.css("margin-left",this.$left-this.$length*this.n);
			    if (this.n<0) {
			        this.n=0;
			        this.$ul.css("margin-left",0);
			    }
			    this.$point=$(".contant-item-pager3");
			    this.$point.removeClass('pager-active');
	 			$(`.contant-item-pager3:eq(${this.n})`).addClass('pager-active');
			});
	},
 	point(){
 		this.$point=$(".contant-item-pager3");
 		this.$point.on("click",'.dot',e=>{
 			var end=Number($(e.target).html());
  			this.$point.removeClass('pager-active');
 			$(e.target).parent().addClass('pager-active');
 			this.$ul.css("margin-left",-this.$length*(end-1));
 			this.change1(end);
		});
 	}
}
slider3.int();

var hover3={
	$li:null,
	$button:null,
	in(){
		this.$li=$(".contant-item>.bbb3");
		this.$button=$(".contant-item_slider_button.fff3");
			this.$li.hover(	
				e=> {
					this.$button.stop().animate(
					{opacity:1},200)
				},
				e=> {
					this.$button.stop().animate(
					{opacity:0},200)
				}
			)
	}, 
}
hover3.in();
// $(".contant-item>li")


// 明星商品的轮播
var star_product_slider={
	//$ul:null,
	// button:null,
	$left:null,
	$right:null,
	timer:null,
	WAIT:5000,
	MOVE:0,
	autoChange(){
		this.$right=$('.arrow_button a:first-child');
		this.$left=$('.arrow_button a:last-child');
		this.timer=setInterval(()=>{ 
		    if(this.MOVE <1){ 
			    this.MOVE ++;
			    this.$left.removeClass('active')
    			this.$right.addClass('active')
			}else{ 
			    this.MOVE = 0;
    			this.$left.addClass('active')
    			this.$right.removeClass('active') 
			}
	    	this.change(this.MOVE);
    	},this.WAIT);
    	this.$right.unbind("click").on("click",e=>{
    		e.preventDefault();
    		if (this.MOVE!=1) {
    			this.$left.removeClass('active')
				this.$right.addClass('active') 	
    		}	
			clearTimeout(this.timer);
			this.timer=null;
			this.MOVE=1;
	       	this.change(this.MOVE);
	       	this.autoChange();
    	});
    	this.$left.unbind("click").on("click",e=>{
    		if (this.MOVE!=0) {
    			this.$left.addClass('active')
				this.$right.removeClass('active') 	
    		} 
			e.preventDefault();
			clearTimeout(this.timer);
			this.timer=null;
			this.MOVE=0;
	       	this.change(this.MOVE);
	       	this.autoChange();
    	});
	},
	change(num){
		if (num===1) {
			$('.star_product>ul').addClass('star_product_active');
		}else{
			$('.star_product>ul').removeClass('star_product_active');
		}
	},
}
star_product_slider.autoChange();

//为您推荐的轮播
var recommend_product_slider={
	//$ul:null,
	// button:null,
	$left:null,
	$right:null,
	timer:null,
	WAIT:5000,
	MOVE:0,
	autoChange(){
		
		this.$right=$('.arrow_button2 a:first-child');
		this.$left=$('.arrow_button2 a:last-child');
    	this.$right.unbind("click").on("click",e=>{
    		e.preventDefault();
    			// clearTimeout(this.timer);
    			// this.timer=null;
    			this.MOVE++;
    			if (this.MOVE>5) {
    				this.MOVE=5;
    				return;
    			}
    			if (this.MOVE==5) {
    				this.$left.removeClass('active')
					this.$right.addClass('active') 
    			}else if(this.MOVE>=1){
    				this.$left.removeClass('active')
					this.$right.removeClass('active') 
    			}
		       	this.change1(this.MOVE);
		       	this.autoChange();
		        

    	});
    	this.$left.unbind("click").on("click",e=>{
    		e.preventDefault();
    			clearTimeout(this.timer);
    			this.timer=null;
    			this.MOVE--;
    			if (this.MOVE<0) {
    				this.MOVE=0;
    				return;
    			}
    			if (this.MOVE==0) {
    				this.$left.addClass('active')
					this.$right.removeClass('active') 
    			}else if(this.MOVE>=1){
    				this.$left.removeClass('active')
					this.$right.removeClass('active') 
    			}
		       	this.change2(this.MOVE);
		       	this.autoChange();
    	});
	},
	change1(num){
		$('#recommend').removeClass('recommend_product_slider'+(num-1)).addClass('recommend_product_slider'+num);
	},
	change2(num){
		$('#recommend').removeClass('recommend_product_slider'+(num+1)).addClass('recommend_product_slider'+num);
	}
}
recommend_product_slider.autoChange();


//  商品hover时上升评价
var hover_comment={
	$li:null,
	int(){
		this.$li=$('.right_product>ul>li');
		this.$li.on('mouseenter',function (e) {
		 	if ($(e.target).hasClass('comment')) {
				$(e.target).find('.hover_comment').addClass('active');
			}else if ($(e.target).hasClass('comment_ad')) {
		 			$(e.target).parent().parent('li').find('.hover_comment').addClass('active');
			}else{			
				$(e.target).parent('.comment').find('.hover_comment').addClass('active');
			}
		});
		this.$li.on('mouseleave',function (e) {
			$('.hover_comment').removeClass('active');
		})






	}
}

 


hover_comment.int();







// 视频弹出显示
var video_drop={
	$div:null,
	$timer:null,
	int(){
		$('.fuck').on('click',function (e) {
			e.preventDefault();
			this.$div=document.createElement('div');
			this.$div.className='video-drop';
			$('.site_info').after(this.$div);
			this.timer=setTimeout(function () {
				// 一次性定时器添加Class  ....真的醉了
				$('.video-drop').addClass('video-drop-active');
			},10);
		})
	}
}
video_drop.int();

var login_check={
	int(){
		var name=sessionStorage.getItem("name")
		if (name) {
			$('.user-name').addClass('active')
			$('.user-name').html(name)
			$('.log-out').addClass('active')
			$('.index-login').addClass('active')
			$('.index-register').addClass('active')
		}else{
			$('.user-name').removeClass('active')
			$('.log-out').removeClass('active')
			$('.index-login').removeClass('active')
			$('.index-register').removeClass('active')
		}
		$(".log-out").on('click',function(){
			sessionStorage.setItem("name",'')
			sessionStorage.setItem("uid",'')
			window.location.href="index.html"
		})
	}
}
login_check.int();


