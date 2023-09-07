time();
var timer = setInterval(time, 1000);

function time() {

  var d = new Date();
  var year = d.getFullYear();
  var month = d.getMonth();
  month = month + 1;
  var date = d.getDate();
  var hours = d.getHours();
  var minutes = d.getMinutes();
  var seconds = d.getSeconds();
  var day = d.getDay();

  if (minutes < 10) {
    minutes = "0" + minutes;
  }

  switch (day) {
    case 1:
      day = "星期一";
      break;
    case 2:
      day = "星期二";
      break;
    case 3:
      day = "星期三";
      break;
    case 4:
      day = "星期四";
      break;
    case 5:
      day = "星期五";
      break;
    case 6:
      day = "星期六";
      break;
    case 0:
      day = "星期天";
      break;
    default:
      break;
  }

  document.getElementById("timer").innerHTML = year + "/" + month + "/" + date + " " + "&ensp;" + hours + ":" + minutes + " " + "&ensp;" + day;

}