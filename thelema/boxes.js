document.addEventListener('DOMContentLoaded', function() {
   toggleBoxes();
}, false);
function toggleBoxes() {
  var checkBox = document.getElementById("showliberi");
  var div = document.getElementById("liberi");
  if (checkBox.checked == true){
    div.style.display = "block";
  } else {
    div.style.display = "none";
  }
  var checkBox = document.getElementById("showlibervii");
  var div = document.getElementById("libervii");
  if (checkBox.checked == true){
    div.style.display = "block";
  } else {
    div.style.display = "none";
  }
  var checkBox = document.getElementById("showliberx");
  var div = document.getElementById("liberx");
  if (checkBox.checked == true){
    div.style.display = "block";
  } else {
    div.style.display = "none";
  }
  var checkBox = document.getElementById("showliberxxvii");
  var div = document.getElementById("liberxxvii");
  if (checkBox.checked == true){
    div.style.display = "block";
  } else {
    div.style.display = "none";
  }
  var checkBox = document.getElementById("showliberlxv");
  var div = document.getElementById("liberlxv");
  if (checkBox.checked == true){
    div.style.display = "block";
  } else {
    div.style.display = "none";
  }
  var checkBox = document.getElementById("showliberlxvi");
  var div = document.getElementById("liberlxvi");
  if (checkBox.checked == true){
    div.style.display = "block";
  } else {
    div.style.display = "none";
  }
  var checkBox = document.getElementById("showliberxc");
  var div = document.getElementById("liberxc");
  if (checkBox.checked == true){
    div.style.display = "block";
  } else {
    div.style.display = "none";
  }
  var checkBox = document.getElementById("showliberclvi");
  var div = document.getElementById("liberclvi");
  if (checkBox.checked == true){
    div.style.display = "block";
  } else {
    div.style.display = "none";
  }
  var checkBox = document.getElementById("showliberccxx");
  var checkBoxE = document.getElementById("showenumeration");
  var div = document.getElementById("liberccxx");
  var divE = document.getElementById("enumeration");
  var divO = document.getElementById("ccxxcountoutput");
  var divEO = document.getElementById("enumerationcountoutput");
  if (checkBox.checked == true && checkBoxE.checked == false){
    div.style.display = "block";
    divO.style.display = "inline";
    divE.style.display = "none";
    divEO.style.display = "none";
  } else if (checkBox.checked == true && checkBoxE.checked == true){
    div.style.display = "none";
    divO.style.display = "none";
    divE.style.display = "block";
    divEO.style.display = "inline";
  } else {
    div.style.display = "none";
    divO.style.display = "inline";
    divE.style.display = "none";
    divEO.style.display = "none";
  }

  var checkBox = document.getElementById("showliberccclxx");
  var div = document.getElementById("liberccclxx");
  if (checkBox.checked == true){
    div.style.display = "block";
  } else {
    div.style.display = "none";
  }
  var checkBox = document.getElementById("showliberdlxx");
  var div = document.getElementById("liberdlxx");
  if (checkBox.checked == true){
    div.style.display = "block";
  } else {
    div.style.display = "none";
  }

  var checkBox = document.getElementById("showliberccccxviii");
  var div = document.getElementById("liberccccxviii");
  if (checkBox.checked == true){
    div.style.display = "block";
  } else {
    div.style.display = "none";
  }
  var checkBox = document.getElementById("showlibercdxv");
  var div = document.getElementById("libercdxv");
  if (checkBox.checked == true){
    div.style.display = "block";
  } else {
    div.style.display = "none";
  }

  var checkBox = document.getElementById("showliberdcccclxii");
  var div = document.getElementById("liberdcccclxii");
  if (checkBox.checked == true){
    div.style.display = "block";
  } else {
    div.style.display = "none";
  }

  var checkBox = document.getElementById("showliberlxi");
  var div = document.getElementById("liberlxi");
  if (checkBox.checked == true){
    div.style.display = "block";
  } else {
    div.style.display = "none";
  }

  input.dispatchEvent(new Event('input'));
}
