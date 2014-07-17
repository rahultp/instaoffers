var sTimePicker = function($pickerIcon,$type){
  $($pickerIcon).attr("disabled","disabled");
  var h =
  '<div id="sTimePicker" style="float:left;z-index:1;padding: 0px;border: solid 1px #e5e5e5;background-color: #fff;\
  box-shadow: 1px 2px 3px #d1d1d1">\
   <div style="float:left;width:200px" class="timeValue">\
     <div style="float:left;width:200px;padding:10px">\
       <div style="width:110px;float:left">\
       <div style="text-align:center;font-weight:bold;font-size:12px;width:90px">HOUR</div>\
         <ul style="text-align:center;list-style:none;float:left;margin:0px;padding:0px">\
           <li style="float:left;padding:5px;width:30px;" onclick="setStartHour(this)">1</li>\
           <li style="float:left;padding:5px;width:30px;" onclick="setStartHour(this)">2</li>\
           <li style="float:left;padding:5px;width:30px;" onclick="setStartHour(this)">3</li>\
         </ul>\
         <ul style="text-align:center;list-style:none;float:left;margin:0px;padding:0px">\
           <li style="float:left;padding:5px;width:30px;" onclick="setStartHour(this)">4</li>\
           <li style="float:left;padding:5px;width:30px;" onclick="setStartHour(this)">5</li>\
           <li style="float:left;padding:5px;width:30px;" onclick="setStartHour(this)">6</li>\
         </ul>\
         <ul style="text-align:center;list-style:none;float:left;margin:0px;padding:0px">\
           <li style="float:left;padding:5px;width:30px;" onclick="setStartHour(this)">7</li>\
           <li style="float:left;padding:5px;width:30px;" onclick="setStartHour(this)">8</li>\
           <li style="float:left;padding:5px;width:30px;" onclick="setStartHour(this)">9</li>\
         </ul>\
         <ul style="text-align:center;list-style:none;float:left;margin:0px;padding:0px">\
           <li style="float:left;padding:5px;width:30px;" onclick="setStartHour(this)">10</li>\
           <li style="float:left;padding:5px;width:30px;" onclick="setStartHour(this)">11</li>\
           <li style="float:left;padding:5px;width:30px;" onclick="setStartHour(this)">12</li>\
         </ul>\
     </div>\
       <div style="width:70px;float:left">\
       <div style="text-align:center;font-weight:bold;font-size:12px;">MINUTES</div>\
         <ul style="text-align:center;list-style:none;float:left;margin:0px;padding:0px">\
           <li style="float:left;padding:5px;width:54px;" onclick="setStartMinute(this)">00</li>\
         </ul>\
         <ul style="text-align:center;list-style:none;float:left;margin:0px;padding:0px">\
           <li style="float:left;padding:5px;width:54px;" onclick="setStartMinute(this)">15</li>\
         </ul>\
         <ul style="text-align:center;list-style:none;float:left;margin:0px;padding:0px">\
           <li style="float:left;padding:5px;width:54px;" onclick="setStartMinute(this)">30</li>\
         </ul>\
         <ul style="text-align:center;list-style:none;float:left;margin:0px;padding:0px">\
           <li style="float:left;padding:5px;width:54px;" onclick="setStartMinute(this)">45</li>\
         </ul>\
     </div>\
     </div>\
     <div style="float:left;width:200px;text-align:center;border-bottom:solid 1px #e5e5e5;padding:10px">\
       <div style="width:90px;float:left"><li style="list-style:none" onclick="setStartMeridian(this)">AM</li></div>\
       <div style="width:90px;float:left"><li style="list-style:none" onclick="setStartMeridian(this)">PM</li></div>\
     </div>\
     <div style="float:left;width:200px;text-align:center;padding:10px">\
       <div style="width:180px;float:left">\
         <input style="width:160px" type="button" class="btn btn-sm btn-warning" onclick="closeStartPicker()" value="Close"/></div>\
     </div>\
   </div>\
  </div>\
  ';
  $($pickerIcon).after(h);
};

var eTimePicker = function($pickerIcon){
  $($pickerIcon).attr("disabled","disabled");
  var h =
  '<div id="eTimePicker" style="float:left;z-index:1;padding: 0px;border: solid 1px #e5e5e5;background-color: #fff;\
  box-shadow: 1px 2px 3px #d1d1d1">\
   <div style="float:left;width:200px" class="timeValue">\
     <div style="float:left;width:200px;padding:10px">\
       <div style="width:110px;float:left">\
       <div style="text-align:center;font-weight:bold;font-size:12px;width:90px">HOUR</div>\
         <ul style="text-align:center;list-style:none;float:left;margin:0px;padding:0px">\
           <li style="float:left;padding:5px;width:30px;" onclick="setEndHour(this)">1</li>\
           <li style="float:left;padding:5px;width:30px;" onclick="setEndHour(this)">2</li>\
           <li style="float:left;padding:5px;width:30px;" onclick="setEndHour(this)">3</li>\
         </ul>\
         <ul style="text-align:center;list-style:none;float:left;margin:0px;padding:0px">\
           <li style="float:left;padding:5px;width:30px;" onclick="setEndHour(this)">4</li>\
           <li style="float:left;padding:5px;width:30px;" onclick="setEndHour(this)">5</li>\
           <li style="float:left;padding:5px;width:30px;" onclick="setEndHour(this)">6</li>\
         </ul>\
         <ul style="text-align:center;list-style:none;float:left;margin:0px;padding:0px">\
           <li style="float:left;padding:5px;width:30px;" onclick="setEndHour(this)">7</li>\
           <li style="float:left;padding:5px;width:30px;" onclick="setEndHour(this)">8</li>\
           <li style="float:left;padding:5px;width:30px;" onclick="setEndHour(this)">9</li>\
         </ul>\
         <ul style="text-align:center;list-style:none;float:left;margin:0px;padding:0px">\
           <li style="float:left;padding:5px;width:30px;" onclick="setEndHour(this)">10</li>\
           <li style="float:left;padding:5px;width:30px;" onclick="setEndHour(this)">11</li>\
           <li style="float:left;padding:5px;width:30px;" onclick="setEndHour(this)">12</li>\
         </ul>\
     </div>\
       <div style="width:70px;float:left">\
       <div style="text-align:center;font-weight:bold;font-size:12px;">MINUTES</div>\
         <ul style="text-align:center;list-style:none;float:left;margin:0px;padding:0px">\
           <li style="float:left;padding:5px;width:54px;" onclick="setEndMinute(this)">00</li>\
         </ul>\
         <ul style="text-align:center;list-style:none;float:left;margin:0px;padding:0px">\
           <li style="float:left;padding:5px;width:54px;" onclick="setEndMinute(this)">15</li>\
         </ul>\
         <ul style="text-align:center;list-style:none;float:left;margin:0px;padding:0px">\
           <li style="float:left;padding:5px;width:54px;" onclick="setEndMinute(this)">30</li>\
         </ul>\
         <ul style="text-align:center;list-style:none;float:left;margin:0px;padding:0px">\
           <li style="float:left;padding:5px;width:54px;" onclick="setEndMinute(this)">45</li>\
         </ul>\
     </div>\
     </div>\
     <div style="float:left;width:200px;text-align:center;border-bottom:solid 1px #e5e5e5;padding:10px">\
       <div style="width:90px;float:left"><li style="list-style:none" onclick="setEndMeridian(this)">AM</li></div>\
       <div style="width:90px;float:left"><li style="list-style:none" onclick="setEndMeridian(this)">PM</li></div>\
     </div>\
     <div style="float:left;width:200px;text-align:center;padding:10px">\
       <div style="width:180px;float:left">\
         <input style="width:160px" type="button" class="btn btn-sm btn-warning" onclick="closeEndPicker()" value="Close"/></div>\
     </div>\
   </div>\
  </div>\
  ';
  $($pickerIcon).before(h);
};

var closeStartPicker = function(){
  var node = document.getElementById("sTimePicker");
  node.parentNode.removeChild(node);
  $(".sTimePicker").removeAttr("disabled");
}

var closeEndPicker = function(){
  var node = document.getElementById("eTimePicker");
  node.parentNode.removeChild(node);
  $(".eTimePicker").removeAttr("disabled");
}

//********************************Start Time
var setStartHour = function(item){
  $(".sHourTime").val($(item).text());
}
var setStartMinute = function(item){
  $(".sMinuteTime").val($(item).text());
}
var setStartMeridian = function(item){
  $(".sMeridian").val($(item).text());
}

//********************************End Time
var setEndHour = function(item){
  $(".eHourTime").val($(item).text());
}
var setEndMinute = function(item){
  $(".eMinuteTime").val($(item).text());
}
var setEndMeridian = function(item){
  $(".eMeridian").val($(item).text());
}

//**************************************Day Convert
var getDayName = function(day){
  switch(day){
  case 0 : return "Sunday";
  case 1 : return "Monday";
  case 2 : return "Tuesday";
  case 3 : return "Wednesday";
  case 4 : return "Thursday";
  case 5 : return "Friday";
  case 6 : return "Saturday";
  }
}

var getMonthName = function(month){
  switch(month){
    case 0 : return "January";
    case 1 : return "February";
    case 2 : return "March";
    case 3 : return "April";
    case 4 : return "May";
    case 5 : return "June";
    case 6 : return "July";
    case 7 : return "August";
    case 8 : return "September";
    case 9 : return "October";
    case 10 : return "November";
    case 11 : return "December";
  }
}
