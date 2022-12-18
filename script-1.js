function trenutnoVrijeme(){
  var datum = new Date();
  var h = datum.getHours(); 
  var m = datum.getMinutes(); 
  var s = datum.getSeconds(); 
  var ampm = "AM";
  
  if(h == 0){
      h = 12;
  }
  
  if(h > 12){
      h = h - 12;
      ampm = "PM";
  }
  
  h = (h < 10) ? "0" + h : h;
  m = (m < 10) ? "0" + m : m;
  s = (s < 10) ? "0" + s : s;
  
  var vrijeme = h + ":" + m + ":" + s + " " + ampm;
  document.getElementById("satid").innerText = vrijeme;
  document.getElementById("satid").textContent = vrijeme;
  
  setTimeout(trenutnoVrijeme, 1000);
  
}

trenutnoVrijeme();