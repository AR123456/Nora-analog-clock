var HOURHAND = document.querySelector("#hour");
var MINUTEHAND = document.querySelector("#minute");
var SECONDHAND = document.querySelector("#second");

function runTheClock() {
  var date = new Date();
  //   console.log(date);
  var hr = date.getHours();
  var min = date.getMinutes();
  var sec = date.getSeconds();
  //   console.log("Hour: " + hr + " Minute: " + min + " Second: " + sec);

  var hrPosition = (hr * 360) / 12 + (min * (360 / 60)) / 12;
  var minPosition = (min * 360) / 60 + (sec * (360 / 60)) / 60;
  var secPosition = (sec * 360) / 60;

  HOURHAND.style.transform = "rotate(" + hrPosition + "deg)";
  MINUTEHAND.style.transform = "rotate(" + minPosition + "deg)";
  SECONDHAND.style.transform = "rotate(" + secPosition + "deg)";

  //   console.log(date.getHours());
}

var interval = setInterval(runTheClock, 1000);

function updateBackground() {
  var hr = new Date().getHours(),
    body = document.body,
    bstyle = body.style,
    // hello = document.querySelector(".hello");
    bed = document.querySelector(".bed");
  if (hr < 5) {
    bstyle.backgroundColor = "pink";
    bstyle.color = "black";
    // hello.innerText = "Not time yet";
    $(".bed").show();
    $(".cat").hide();
  } else if (hr < 20) {
    bstyle.backgroundColor = "#90EE90";
    bstyle.color = "white";
    // hello.innerText = "Have a good day Nora !";
    $(".bed").hide();
    $(".cat").show();
  } else {
    bstyle.backgroundColor = "pink";
    bstyle.color = "black";
    // hello.innerText = "Not time yet";
    $(".bed").show();
  }
}

setInterval(updateBackground, 1000 * 60);
updateBackground();
