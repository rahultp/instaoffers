<script>
$(document).ready(function(){
placeHint('.place','/location','locations','Name');

$(".itemShare").click(function(){
	$(".itemEnquireBox").css('display','none');
	$(".itemEnquire").removeClass('selected');
	$(".itemEnquire").addClass('removed');
	$(".itemEnquire a").css('color','#999');
	$(".itemEnquire").css('font-weight','normal');
	if($(".itemShareBox").css('display') == 'none'){
		$(".itemShareBox").css('display','block');
		$(".itemFunc").css('border-bottom','solid 1px #e5e5e5');
		$(".itemShare a").css('color','#729fcf');
		$(".itemShare").addClass('selected');
		$(".itemShare").css('font-weight','bold');
	}
	else{
		$(".itemShareBox").css('display','none');
		$(".itemFunc").css('border-bottom','none');
		$(".itemShare a").css('color','#999');
		$(".itemShare").removeClass('selected');
		$(".itemShare").addClass('removed');
		$(".itemShare").css('font-weight','normal');
	}
});

$(".itemEnquire").click(function(){
	$(".itemShareBox").css('display','none');
	$(".itemShare").removeClass('selected');
	$(".itemShare").addClass('removed');
	$(".itemShare a").css('color','#999');
	$(".itemShare").css('font-weight','normal');
	if($(".itemEnquireBox").css('display') == 'none'){
		$(".itemEnquireBox").css('display','block');
		$(".itemFunc").css('border-bottom','solid 1px #e5e5e5');
		$(".itemEnquire a").css('color','#729fcf');
		$(".itemEnquire").addClass('selected');
		$(".itemEnquire").css('font-weight','bold');
	}
	else{
		$(".itemEnquireBox").css('display','none');
		$(".itemFunc").css('border-bottom','none');
		$(".itemEnquire a").css('color','#999');
		$(".itemEnquire").removeClass('selected');
		$(".itemEnquire").addClass('removed');
		$(".itemEnquire").css('font-weight','normal');
	}

});

$(".loc").hover(
function(){
},
function(){}
);

$(".iconLoc").click(function(){
if($(".locWrapper").css('display') == 'none'){
//alert("test");
//alert($(".moreWrapper").css('display'));
 $(".iconLoc").removeClass('left');
 $(".iconLoc").addClass('clicked');
 $(".locWrapper").css('display','block');
}
else{
 $(".locWrapper").css('display','none');
 $(".iconLoc").removeClass('clicked');
 $(".iconLoc").addClass('left');
}

});





});






</script>
