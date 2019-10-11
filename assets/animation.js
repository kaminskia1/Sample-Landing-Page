
class Animate {

    // Initialize the class with the provided data object
    constructor(data = {})
    {
        this.data = data;
        this.init();
    }

    init()
    {
        if (typeof this.data.init != "undefined")
        {
            for (i=0;i<this.data.init.length;i++)
            {
                eval("this." + this.data.init[i] + "();");
            }
        }
    }

    async navScroll()
    {
        setTimeout(()=>
        {
            $(document).scroll(()=>
            {

                let d = document.body.scrollTop;

                if (d > 0) {
                    $("div.sticky-nav").addClass("shown");
                    
                } else {
                    $("div.sticky-nav").removeClass("shown");
                }
        
                if (d > 0) {
                    $("div.landing-text").addClass("rotate");
                    let oc = 1 - (d / 250);
                    if (oc < 0) {
                        oc = 0;
                    }
                    if (d > window.innerHeight) d = window.innerHeight;
                    $("div.landing-text").css({
                        opacity: oc,
                        margin: "-" + d + " 0 0 0",
                    });
                } else {
                    $(".landing-text").removeClass("rotate");
                    $("div.landing-text").css({
                        background: "rgba(0,0,0,0)",
                        margin: "0",
                        opacity: 1
                    });
                }
        
            });
        }, 1500);
    }

    typeText()
    {
        if ((typeof this.data.title[this.data.tracker] == 'undefined'))
        {
            this.data.tracker = 0;
        }

        // Text Animation
        $("div.home-switch").css({width:0});
        setTimeout(()=>
        {
            $("div.home-switch").html("");
            setTimeout(()=>
            {
                $("div.home-switch").width(this.data.width[this.data.tracker]);
                $("div.home-switch").html(this.data.title[this.data.tracker]);
                setTimeout(()=>
                {
                    $("div.home-switch").html(this.data.title[this.data.tracker]);
                    setTimeout(()=>
                    {
                        this.data.tracker++;
                        this.typeText();

                    }, 4000);

                }, 40);

            }, 200);

        }, 560);

    }

    async homeParticles()
    {
        particlesJS('particles', 
        {
            particles: {
                number: {
                    value: 80,
                    density: {
                        enable: !0,
                        value_area: 800
                    }
                },
                color: {
                    value: "#ffffff"
                },
                shape: {
                    type: "circle",
                    stroke: {
                        width: 0,
                        color: "#000000"
                    },
                    polygon: {
                        nb_sides: 5
                    }
                },
                opacity: {
                    value: .5,
                    random: !1,
                    anim: {
                        enable: !1,
                        speed: 1,
                        opacity_min: .1,
                        sync: !1
                    }
                },
                size: {
                    value: 3,
                    random: !0,
                    anim: {
                        enable: !1,
                        speed: 40,
                        size_min: .1,
                        sync: !1
                    }
                },
                line_linked: {
                    enable: !0,
                    distance: 150,
                    color: "#ffffff",
                    opacity: .4,
                    width: 1.3
                },
                move: {
                    enable: !0,
                    speed: 3,
                    direction: "top",
                    random: !1,
                    straight: !1,
                    out_mode: "out",
                    bounce: !1,
                    attract: {
                        enable: !1,
                        rotateX: 600,
                        rotateY: 1200
                    }
                }
            },
            retina_detect: 1
        });
    }
}