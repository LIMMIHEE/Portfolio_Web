
<script >
	$(document).ready(function(){
		$('#nav ul.menu_sub').hide();
		$('#nav ul.menu li').click(function(){
			$("ul",this).slideToggle("fast");
		});
	});
</script>