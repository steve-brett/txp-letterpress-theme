window.onload = function () {
     document.getElementById("comments-head").style.display = "none";
     document.getElementById("comments-form").style.display = "none";
};

function toggle_visibility(id) {
   var e = document.getElementById(id);
   if(e.style.display == '')
      e.style.display = 'none';
   else
      e.style.display = '';
}
