// Grab and list questions
$.getJSON("data.json", (data)=>
{
    var faqData = []; 
    for (i=0;i<data.length;i++) {
        faqData.push("<li class='question'><div class='keywords'>" + JSON.stringify(data[i].keyword) + "</div><div class='header'><i class='fas fa-caret-right'></i><div class='word'> " + data[i].question + "</div></div><div class='answer'>" + data[i].answer + "</div></li>");
        $("ul.holder").append(faqData[i]);
        $("ul.holder > li")[i].classList.add("shown");
    }
    $("span.output").html($("ul.holder > li.question.shown").length);

    // Popout / Collapse function
    $("ul.holder > li.question.shown > div.header").click((a)=>
    {
        var ele = a.currentTarget, tri = $(ele).children().first(), ans = $(ele).siblings().last();
    
        if (ans.hasClass("visible"))
        {
            ans.removeClass("visible");
            tri.css({
                transform: "rotate(0deg)",
            });
        } else {
            ans.addClass("visible");
            tri.css({
                transform: "rotate(90deg)",
            });
        }
    });
    
});

// Search function
$("input.search").keyup(()=>
{
    var res = 0, filter = $("input.search").val().toLowerCase(), ele = $("ul.holder > li.question");;

    for (i=0;i<$("ul.holder > li.question").length;i++)
    {
        var hd = $("ul.holder > li.question > div.header > div.word")[i].innerHTML.toLowerCase(), kw = JSON.parse($("ul.holder > li.question > div.keywords")[i].innerHTML);

        for (d=0;d<kw.length;d++)
        {
            kw[d] = kw[d].toLowerCase();
        }

        if ((kwCheck(ele, kw, filter)) || (hd.indexOf(filter) > -1))
        {
            res++
            ele[i].classList.add("shown")
        } else {
            ele[i].classList.remove("shown")
        }

    }

    $("span.output").html(res);

});

// Check keyword to search
function kwCheck(ele, kw, filter)
{
    var t = false;
    for(f=0;f<kw.length;f++)
    {
        if (kw[f].indexOf(filter) > -1) {
            t = true;
        }
    }
    return t;
}
