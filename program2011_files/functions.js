/** BIFF: FUNCTIONS ******************************************************************************************************************************************/

$(document).ready(function(){

	
	//skjuler programslides
	$("ul.program li .info-slide").addClass("hidden");
	//programslides animasjon
	$('ul.program li').hover(function(){
		$(".info-slide.hidden", this).stop().animate({bottom:'0px'},{queue:false,duration:160});
	}, function() {
		$(".info-slide.hidden", this).stop().animate({bottom:'-27px'},{queue:false,duration:360});
	});
	
	
	//Oppsett filtrering
	$("ul.program").filterprojects({
		animationSpeed: 0,
		animationPulse: 0,
		show: { width: "show" },
		hide: { width: "hide" },
		filterTagSelector: [ '#filterdates a', '#filtercinemas a', '#filtercategories a' ]
	});
	
	//Datofiltrering
	$("#filterdates").click(function(){
		$('#filterdates .options').slideToggle('fast');
	});
	
	//Kinofiltrering
	$("#filtercinemas").click(function(){
		$('#filtercinemas .options').slideToggle('fast');
		//Skifter overskrift etter hvilken kino man velger
		$("#filtercinemas a").click(function(){
			var cinemaTxt = $(this).text();
			$('#filtercinemas h5').text(cinemaTxt);
		});
	});
	
	//Kategorifiltrering
	$("#filtercategories").click(function(){
		$('#filtercategories .options').slideToggle('fast');
		//Skifter overskrift etter hvilken kategori man velger
		$("#filtercategories a").click(function(){
			var categoriesTxt = $(this).text();
			$('#filtercategories h5').text(categoriesTxt);
		});
	});
	
	$('#filterdates, #filtercinemas, #filtercategories').click(function(e) { e.stopPropagation(); });
	$(document).click(function() { $('#filtercinemas .options, #filtercategories .options, #filterdates .options').hide(); });


	
});﻿