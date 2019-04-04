// jQuery 3.x-style ready event and locally scoped $
jQuery(function($) {
  $('html').removeClass('nojs');
  $('html').addClass('hasjs');
});

<script type="text/javascript">

function submit() {
         alert("form has been submitted!");

}
document.getElementById('submit').addEventListener('click', submit);

</script>
