document.addEventListener('DOMContentLoaded', function() {
   toggleBoxes();
}, false);
function toggleBoxes() {
  var checkBox = document.getElementById("showliberxlix");
  var div = document.getElementById("liberxlix");
  if (checkBox.checked == true){
    div.style.display = "block";
  } else {
    div.style.display = "none";
  }
  var checkBox = document.getElementById("showfortitude");
  var div = document.getElementById("fortitude");
  if (checkBox.checked == true){
    div.style.display = "block";
  } else {
    div.style.display = "none";
  }

  input.dispatchEvent(new Event('input'));
}
