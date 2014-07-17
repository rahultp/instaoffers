<script>
var renderPreview = function(){
  $(".productTitle p").text($("#offerProduct").val());
  $(".offerDesc p").text($("#offerPromoMsg").val());

  //$("#offerVal").text($("#offerDiscount").val());
  var promoType = "";
  if(document.getElementById("radioDollar").checked == true)
    promoType = "$";
  else
    promoType = "%";
  $("#offerVal").text($("#offerDiscount").val() + promoType);

  $(".sH").text($(".sHourTime").val());
  $(".sM").text($(".sMinuteTime").val());
  $(".sMD").text($(".sMeridian").val());
  $(".eH").text($(".eHourTime").val());
  $(".eM").text($(".eMinuteTime").val());
  $(".eMD").text($(".eMeridian").val());

  var d = new Date();
  d = $("#datepicker").datepicker('getDate');
  $(".offerD").text(d.getDate());

  var m = "";
  switch (d.getMonth()) {
    case 0:
        m = "Jan";
        break;
    case 1:
        m = "Feb";
        break;
    case 2:
        m = "Mar";
        break;
    case 3:
        m = "Apr";
        break;
    case 4:
        m = "May";
        break;
    case 5:
        m = "Jun";
        break;
    case 6:
        m = "Jul";
        break;
    case 7:
        m = "Aug";
        break;
    case 8:
        m = "Sep";
        break;
    case 9:
        m = "Oct";
        break;
    case 10:
        m = "Nov";
        break;
    case 11:
        m = "Dec";
        break;
  }
  $(".offerM").text(m);
}

var readURL = function(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $('#previewImg').attr('src', e.target.result);
        }

        reader.readAsDataURL(input.files[0]);
    }
}
$("#offerImg").change(function(){
    readURL(this);
});
</script>
