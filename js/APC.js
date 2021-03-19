function goToSocialMedia(){
	$('#profile').css('z-index','-1');
}
function goToSocialProfile(){
	$('#profile').css('z-index','1');
}
function socialMediaHideShow(){
	var x = document.getElementById('socialMediaDesktop');
	if (x.style.display === "none"){
		x.style.display = "flex";
	} else {
		x.style.display = "none";
	}
}