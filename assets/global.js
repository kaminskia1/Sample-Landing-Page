$(document).ready(()=>{

// Check if config loaded
if (typeof config == "undefined")
{
  alert("FATAL ERROR: Config file not loaded/found!");
}

// Initialize Animations
animate = new Animate({
  title: title,
  width: width,
  tracker: 1,
  init: [
    "navScroll",
    "homeParticles",
  ],
});

// Preloader timer if exists
if ($("div.preloader").length)
{
	setTimeout(()=>
	{
	  $("div.preloader").fadeTo(1500, 0, ()=>
	  {
		// Remove Preloader
		  $("div.preloader").remove();
		  $("style.preload").remove();

		// Load in hometext animation if exists
		 if ($("div.landing-text").length)
		 {
			$("div.landing-text").fadeTo(500, 1);
			$("div.landing-text").css({
			  margin:"0 0 0 0"
			});
		 }
		  
		// Initiate typing animation
		setTimeout(()=>
		{
		  animate.typeText();
		}, 2750);
	  });

	}, config.preload_time);
}
});