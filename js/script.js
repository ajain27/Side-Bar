    $(document).ready(function() {
    	$('#downArrow').show();
    	$('.up').hide();
    });

    function openSlideMenu(){
      document.getElementById('side-menu').style.width = '250px';
      document.getElementById('side-menu').style.transition = '1s';
      document.getElementById('main').style.marginLeft = '250px';
      document.getElementById('main').style.transition = '1s';
    }

    function closeSlideMenu(){
      document.getElementById('side-menu').style.width = '0';
      document.getElementById('side-menu').style.transition = '1s';
      document.getElementById('main').style.marginLeft = '0';
      document.getElementById('main').style.transition = '1s';
    }

    function showSubMenu() {
    	// $('#trainingSubmenu').toggle('1000');
    	$('#trainingSubmenu').fadeToggle( "slow", "linear" );
    	$('#downArrow').toggle();
    	$('.up').toggle();
		
    }