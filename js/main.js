window.onload = function () {
     document.getElementById("comments-area").style.display = "none";
};

function toggle_visibility(id) {
   var e = document.getElementById(id);
   if(e.style.display == '')
      e.style.display = 'none';
   else
      e.style.display = '';
}
