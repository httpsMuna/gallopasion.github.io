/* sidebar js */
function mostrar() {
	if(screen.width<1100){
    document.getElementById("sidebar").style.width = "100%";
	}
	else{
		document.getElementById("sidebar").style.width = "20%";
	}
	document.getElementById("sidebar").style.height = "100%";
    document.getElementById("abrir").style.display = "none";
	document.getElementById("trans").style.width = "85%";
	document.getElementById("trans").style.height = "100%";
	document.getElementById("trans").style.marginLeft = "15%";
}
function mostrar2(){
	document.getElementById("ul2").style.height = "25%";
	document.getElementById("ul2").style.display = "inline";
	document.getElementById("bc2").style.display = "inline-block";
	document.getElementById("bc2").style.width = "32px";
}
function ocultar() {
    document.getElementById("sidebar").style.width = "0";
    document.getElementById("abrir").style.display = "inline";
	document.getElementById("trans").style.width = "0px";
	document.getElementById("trans").style.height = "0px";
	document.getElementById("trans").style.marginLeft = "0px";
}
function ocultar2(){
	document.getElementById("ul2").style.height = "0%";
	document.getElementById("ul2").style.display = "none";
	document.getElementById("bc2").style.display = "none";
}
/* sidebar js */

/* BackToTop button js */
$(document).ready(function(){ 
    $(window).scroll(function(){ 
        if ($(this).scrollTop() > 100) { 
            $('#scroll').fadeIn(); 
        } else { 
            $('#scroll').fadeOut(); 
        } 
    }); 
    $('#scroll').click(function(){ 
        $("html, body").animate({ scrollTop: 0 }, 600); 
        return false; 
    }); 
});
/* BackToTop button js */



