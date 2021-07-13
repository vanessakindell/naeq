function toggleBoxes() {
  var checkBox = document.getElementById("show1nephi");
  var div = document.getElementById("1Nephi");
  if (checkBox.checked == true){
    div.style.display = "block";
  } else {
    div.style.display = "none";
  }
  var checkBox = document.getElementById("show2nephi");
  var div = document.getElementById("2Nephi");
  if (checkBox.checked == true){
    div.style.display = "block";
  } else {
    div.style.display = "none";
  }
  var checkBox = document.getElementById("showjacob");
  var div = document.getElementById("Jacob");
  if (checkBox.checked == true){
    div.style.display = "block";
  } else {
    div.style.display = "none";
  }
  var checkBox = document.getElementById("showenos");
  var div = document.getElementById("Enos");
  if (checkBox.checked == true){
    div.style.display = "block";
  } else {
    div.style.display = "none";
  }
  var checkBox = document.getElementById("showjarom");
  var div = document.getElementById("Jarom");
  if (checkBox.checked == true){
    div.style.display = "block";
  } else {
    div.style.display = "none";
  }
  var checkBox = document.getElementById("showomni");
  var div = document.getElementById("Omni");
  if (checkBox.checked == true){
    div.style.display = "block";
  } else {
    div.style.display = "none";
  }
  var checkBox = document.getElementById("showwordsmormon");
  var div = document.getElementById("WordsMormon");
  if (checkBox.checked == true){
    div.style.display = "block";
  } else {
    div.style.display = "none";
  }
  var checkBox = document.getElementById("showmosiah");
  var div = document.getElementById("Mosiah");
  if (checkBox.checked == true){
    div.style.display = "block";
  } else {
    div.style.display = "none";
  }
  var checkBox = document.getElementById("showalma");
  var div = document.getElementById("Alma");
  if (checkBox.checked == true){
    div.style.display = "block";
  } else {
    div.style.display = "none";
  }
  var checkBox = document.getElementById("showhelaman");
  var div = document.getElementById("Helaman");
  if (checkBox.checked == true){
    div.style.display = "block";
  } else {
    div.style.display = "none";
  }
  var checkBox = document.getElementById("show3nephi");
  var div = document.getElementById("3Nephi");
  if (checkBox.checked == true){
    div.style.display = "block";
  } else {
    div.style.display = "none";
  }
  var checkBox = document.getElementById("show4nephi");
  var div = document.getElementById("4Nephi");
  if (checkBox.checked == true){
    div.style.display = "block";
  } else {
    div.style.display = "none";
  }
  var checkBox = document.getElementById("showmormon");
  var div = document.getElementById("Mormon");
  if (checkBox.checked == true){
    div.style.display = "block";
  } else {
    div.style.display = "none";
  }
  var checkBox = document.getElementById("showether");
  var div = document.getElementById("Ether");
  if (checkBox.checked == true){
    div.style.display = "block";
  } else {
    div.style.display = "none";
  }
  var checkBox = document.getElementById("showmoroni");
  var div = document.getElementById("Moroni");
  if (checkBox.checked == true){
    div.style.display = "block";
  } else {
    div.style.display = "none";
  }
  input.dispatchEvent(new Event('input'));
}
document.addEventListener('DOMContentLoaded', function() {
   toggleBoxes();
}, false);
