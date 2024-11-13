unction updateTime() {
    var d = new Date();
    var h = d.getHours();
    var m = d.getMinutes();
    var s = d.getSeconds();
    var time = h + ":" + m + ":" + s;
    document.getElementById("btn-time").textContent = time;
  }
 
  setInterval(updateTime, 1000);