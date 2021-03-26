$(document).ready(function () {
  function dateTime() {
    var format = "";
    var ndate = new Date();
    var hr = ndate.getHours();
    var h = hr % 12;

    if (hr >= 5 && hr < 8) {
      greet = "Good Morning!🌄";
      format = "AM";
    } else if (hr >= 8 && hr < 12) {
      greet = "Good Morning!☀️";
      format = "AM";
    } else if (hr >= 12 && hr < 16) {
      greet = "Good Afternoon!☀️";
      format = "PM";
    } else if (hr >= 16 && hr < 18) {
      greet = "Good Afternoon!🌇";
      format = "PM";
    } else if (hr >= 18 && hr < 20) {
      greet = "Good Evening!🌆";
      format = "PM";
    } else if (hr >= 20 && hr < 21) {
      greet = "Good Evening!🌙";
      format = "PM";
    } else {
      greet = "Good Night!🌙";
      format = "PM";
    }

    var m = ndate.getMinutes().toString();
    var s = ndate.getSeconds().toString();

    if (h < 9) {
      h = "0" + h;
      $("h3.day-message").html(greet);
    } else if (h < 18) {
      $("h3.day-message").html(greet);
    } else {
      $("h3.day-message").html(greet);
    }

    if (s < 10) {
      s = "0" + s;
    }

    if (m < 10) {
      m = "0" + m;
    }

    $(".date").html(h + ":" + m + ":" + s + " " + format);
  }

  setInterval(dateTime, 1000);
});
