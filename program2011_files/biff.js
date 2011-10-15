// JavaScript Document

   var displayId = "still";
   function select(id)
   {
      document.getElementById(displayId).style.display = "none";
      document.getElementById(id).style.display = "block";
      displayId = id;
   }