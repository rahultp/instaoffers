<script>
$("#subOffer").click(function(){
  var v = validateForm();
  if(v!= 0){
    $("#form1").submit();
  }
/*
    var form1Data = $("#form1").serializeArray();
    $.ajax({
      url: "/dashboard/offers/add",
      type: 'post',
      contentType: 'application/x-www-form-urlencoded',
      data: form1Data,
      success: function(){
        $("#form2").submit();
      }
    });
  }
*/
});
var ff;/*
$("#offerImg").change(function(){
  //alert("test change");
  //this.files[0].name = "vallapr.jpg";

  var reader = new FileReader();
  reader.onload = function (e) {
      //$('#previewImg').attr('src', e.target.result);
      alert(e);
      ff = e;
  }
  reader.readAsDataURL(this.files[0]);
});*/

var validateForm = function(){
  var retVal;
  var fileName = $("#offerImg").val();
  if(fileName.lastIndexOf("jpg")===fileName.length-3)
        retVal = 1;
    else
        retVal = 0;

  retVal = retVal * $("#offerPromoMsg").val().length * $("#offerProduct").val().length * $("#offerDiscount").val().length * $("#datepicker").val().length;

  var curDate = new Date();
  var r = $("#datepicker").val().split("/");
  var pubDate;
  var sHVal, eHVal;

  sHVal = $(".sHourTime").val();
  if($(".sMeridian").val() == "PM"){
    if ($(".sHourTime").val() !=  12)
      sHVal = Number($(".sHourTime").val()) + 12;
  }

  eHVal = $(".eHourTime").val();
  if($(".eMeridian").val() == "PM"){
    if ($(".eHourTime").val() !=  12)
      eHVal = Number($(".eHourTime").val()) + 12;
  }

  pubDate = new Date(r[2],r[0] - 1,r[1],sHVal,$(".sMinuteTime").val());
  var sTime = new Date(pubDate.getFullYear(),pubDate.getMonth(),pubDate.getDate(),sHVal,$(".sMinuteTime").val());
  var eTime = new Date(pubDate.getFullYear(),pubDate.getMonth(),pubDate.getDate(),eHVal,$(".eMinuteTime").val());

  if(sTime < eTime){
    retVal = retVal * 1;
    $(".sTT").val(sTime);
    $(".eTT").val(eTime);
    $(".pDD").val(pubDate);
  }

  if(pubDate < curDate)
    retVal = retVal * 0;

  if(retVal == 0)
    alert("Have to show the required field message - CODE INCOMPLETE");

  return retVal;
};
</script>
