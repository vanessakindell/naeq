document.addEventListener('DOMContentLoaded', function() {
   toggleBoxes();
}, false);
function toggleBoxes() {
  var checkBox = document.getElementById("showipsos");
  var div = document.getElementById("ipsos");
  if (checkBox.checked == true){
    div.style.display = "block";
  } else {
    div.style.display = "none";
  }
  var checkBox = document.getElementById("showslba");
  var div = document.getElementById("slba");
  if (checkBox.checked == true){
    div.style.display = "block";
  } else {
    div.style.display = "none";
  }

  input.dispatchEvent(new Event('input'));
}
