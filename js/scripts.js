
function selectMenu(){
  document.getElementById("drop").classList.toggle("show");
}
function selectSize(){
  document.getElementById("size").classList.toggle("show");
}
function selectRace(){
  document.getElementById("race").classList.toggle("show");
}
function selectGender(){
  document.getElementById("gender").classList.toggle("show");
}
function selectFeedback(){
  document.getElementById("feedback").classList.toggle("show");
}

window.onclick = function(event) {
  if(!event.target.matches('.dropbtn'))//if clicked something other than dropdown button
  {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for(i = 0; i < dropdowns.length;i++){
      var openDropdown = dropdowns[i];
      if(openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
