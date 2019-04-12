// jQuery 3.x-style ready event and locally scoped $
jQuery(function($) {
  $('html').removeClass('nojs');
  $('html').addClass('hasjs');
});

<script>

function submit() {
         alert("form has been submitted!");

}


</script>

<script>
function validateForm() {
  var x = document.forms["myForm"]["firstname"].value;
  if (x == "") {
  alert("First Name must be filled out");}
var y = document.forms["myForm"]["lastname"].value;
  if (y == "") {
  alert("Last Name must be filled out");}
var z = document.forms["myForm"]["Birthday"].value;
  if (z == "") {
  alert("Birthday must be filled out");}
var w = document.forms["myForm"]["Email"].value;
  if (w == "") {
  alert("Email must be filled out");}
	 return false;
	 document.getElementById('submit').addEventListener('click', submit);
   
  }
  

</script>