<script>
  var tmp = "";
  // someData is the data being sent from the server captured in Jade template (offers.jade)
  $.each(someData, function (index, value){
    tmp = tmp + '<div class="offerBag" style="padding:10px;border-bottom:solid 1px #e5e5e5;float:left">'
    +'<input type="hidden" value ="' + value._id + '" id="offerId" />'
    +'<div style="font-size:20px;width:300px;float:left;">' + value.Product + '</div>';
    if(value.DiscountType == "p11")
      tmp = tmp +'<div style="float:right;font-size:20px"> % </div>';
    else
      tmp = tmp +'<div style="float:right;font-size:20px"> $ </div>';
    tmp = tmp + '<div style="float:right;font-size:20px">' + value.Discount + '</div>';
    var pbD = new Date(value.PublishDate);
    tmp = tmp +'<div style="float:left;width:300px;font-weight:bold"> on ' + pbD.getDate() + "-" + (Number(pbD.getMonth()) + 1) + "-" + pbD.getFullYear() + '</div>'
		+'<div style="float:left;width:300px;font-weight:bold;color:#a2a2a2"> by ' + value.Author + '</div>';
    var crD = new Date(value.Created);
    tmp = tmp +'<div style="float:right;font-weight:bold;color:#a2a2a2">' + crD.getDate() + "-" + (Number(crD.getMonth()) + 1) + "-" + crD.getFullYear() + "  "  + crD.getHours() + ":" + crD.getMinutes() + ":" + crD.getSeconds() + '</div>'
		+'</div>';
    $(".offerContents").append(tmp);
    tmp = "";
  });
  var ttt ="";
  $(".offerBag").click(function(){
    $.ajax({
      type        : 'get',
      url         : '/dashboard/offers/' + $(this).find("input").val(),
      contentType : 'application/json',
      success     : function(data){
          ttt = data['offer'];
          var item = data['offer'];
	  $("#previewImg").attr('src','/routes/files/' + item['PromoImg']);
          $(".productTitle p").text(item['Product']);
          $(".offerDesc p").text(item['Promo']);
          if(item['DiscountType'] == 'p11')
            $("#offerVal").text(item['Discount'] + "%");
          else if(item['DiscountType'] == 'd11')
            $("#offerVal").text(item['Discount'] + "$");
          var tempP = new Date(item['PublishDate']);
          $(".offerDa").text(getDayName(tempP.getDay()).substring(0,3));
          $(".offerDt").text(tempP.getDate());
          $(".offerM").text(getMonthName(tempP.getMonth()).substring(0,3));
          tempS = new Date(item["StartTime"]);
          $(".sH").text(tempS.getHours());
          $(".sM").text(tempS.getMinutes());
          tempE = new Date(item["EndTime"]);
          $(".eH").text(tempE.getHours());
          $(".eM").text(tempE.getMinutes());
          var temp = new Date();
          var oneDay = 24*60*60*1000;
          var t =  Math.round(Math.abs((tempP.getTime() - temp.getTime())/(oneDay)));
          if(t == 0)
            $(".offerAlert").text("Today");
          else if(t == 1)
            $(".offerAlert").text("Tomorrow");
          else if(t > 1)
            $(".offerAlert").text(t + " days to go");
          else if(t < 0)
            $(".offerAlert").text("Offer Expired");
      }
    });
  });
</script>
