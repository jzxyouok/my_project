//var container_down={
//	$li:null,
//	init(){
//		this.$li=$('.nav-item');
// 		this.$li.on('mouseenter',e=> {
//
//		 	if ($(e.target).hasClass('nav-item-link')) {
//		 		var n=$(e.target).parent('li').index();
//
//		 	}else if ($(e.target).hasClass('nav-item')) {
//		 		var n=$(e.target).index();
//		 	}
//
//			$(".nav-item").eq(n).children("div").children(".container_item").addClass("collapsing");
//		})
//		this.$li.on('mouseleave',e=> {
//			if ($(e.target).hasClass('nav-item-link')||$(e.target).hasClass('nav-item')) {
//				// $(".container_item").removeClass("collapsing");
//
// 			}else{
//				$(".container_item").removeClass("collapsing");
//			}
//		})
//	}
//}
//container_down.init();
//
//