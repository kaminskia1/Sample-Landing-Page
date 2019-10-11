// Initialize title and width as global variables
var title, width, animate, year = new Date().getFullYear();

$(document).ready(()=>{
//--------------Section 1------------------

// Title
    $("title").html(config.title);

// Copyright
    $(".copyright").html("&copy; " + year + " - " + config.copyright);

// CSS variable config
    $("#config_css").html("\
        :root {\
        --pl_bg: " + config.preload_background + "; \
        --home_bg: " + config.home_background + "; \
    }");

// Navbar name
    for (i=1;i<6;i++)
    {
		let s1 = $("a.nav-li-a.sticky")[(i-1)];
		let s2 = $("a.nav-li-a.static")[(i-1)];
		
        let val = eval("config.n" + i);
		let state = eval("config.n" + i + "state");
		let link = eval("config.n" + i + "link");

		if (!state)
		{
            s2.style.display ="none";
            s1.style.display ="none";
		}

        s2.innerHTML = val;
        s2.href = link;
        s1.innerHTML = val;
        s1.href = link;
    }

// Text animation
    title = [config.w1, config.w2, config.w3];
    width = [config.w1px, config.w2px, config.w3px];
    $(".home-switch").html(config.w1);
    $(".home-switch").css({width:config.w1px});


//---------------Cards------------------

// Card rebranding
    if ($("#n2 > .container > .header > a").length)
    {
        $("#n2 > .container > .header > a")[0].innerHTML = config.s2head1;
        $("#n2 > .container > .header > a")[1].innerHTML = config.s2head2;
        $("#n2 > .container > .header > a")[2].innerHTML = config.s2head3;

        $("#n2 > .container > .header > a")[0].href = config.s2link1;
        $("#n2 > .container > .header > a")[1].href = config.s2link2;
        $("#n2 > .container > .header > a")[2].href = config.s2link3;

        $("#n2 > .container > .card > .content")[0].innerHTML = config.s2content1;
        $("#n2 > .container > .card > .content")[1].innerHTML = config.s2content2;
        $("#n2 > .container > .card > .content")[2].innerHTML = config.s2content3;
    }


//---------------Portal------------------
    if ($("div#n3").length)
    {
        for (i=1;i<5;i++)
        {
            let hVal = eval("config.phead" + i);
            let dVal = eval("config.pdesc" + i);
            let iVal = eval("config.picon" + i);
            let lVal = eval("config.plink" + i);
            $($("div.list > section.item > div.text")[(i-1)]).html(hVal);
            $($("div.list > section.item > p")[(i-1)]).html(dVal);
            $($("div.list > section.item > a > i.fas")[(i-1)]).addClass(iVal);
            $($("div.list > section.item > a")[(i-1)]).attr("href", lVal);

        }
    }

});