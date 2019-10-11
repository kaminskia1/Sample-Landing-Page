$.getJSON("data.json", (data)=>
{
    data = JSON.parse(data);
    for (i=0;i<count(data);i++)
    {
        faqData.push((data, i)=>
        {
            return "<li class='question'><div class='keywords'>" + data[i].keywords + "</div><div class='header'><i class='fas fa-caret-right'></i><div class='word'> " + data[i].question + "</div></div><div class='answer'>" + data[i].answer + "</div></li>";
        });
    }
    faqData = faqData.join();
    console.log(faqData);
    //$("ul.holder").html()
    for(i=0;i<$("ul.holder > li").length;i++)
    {
        $("ul.holder > li")[i].classList.add("shown");
    }

});


/* Temp solution for displaying offline, as local getJSON is blocked by CORS
    var faqData = [],
    data = [
            {
                "question": "Lorem",
                "answer": "Ipsum",
                "keyword": [
                    "Lorem334",
                    "Ipsum45",
                    "Dolor65"
                ]
            },
            {
                "question": "Lorem",
                "answer": "Ipsum",
                "keyword": [
                    "Lorem44",
                    "Ipsum92",
                    "Dolor12"
                ]
            },
            {
                "question": "Lorem",
                "answer": "Ipsum",
                "keyword": [
                    "Lorem12",
                    "Ipsum23",
                    "Dolor36"
                ]
            }, 
            {
                "question": "Lorem2",
                "answer": "Ipsum2",
                "keyword": [
                    "Lorem74",
                    "Ipsum2",
                    "Dolor2"
                ]
            }
        ];
    for (i=0;i<data.length;i++)
    {
        faqData.push("<li class='question'><div class='keywords'>" + JSON.stringify(data[i].keyword) + "</div><div class='header'><i class='fas fa-caret-right'></i><div class='word'> " + data[i].question + "</div></div><div class='answer'>" + data[i].answer + "</div></li>");
        $("ul.holder").append(faqData[i]);
        $("ul.holder > li")[i].classList.add("shown");
    }
    $("span.output").html($("ul.holder > li.question.shown").length);
*/

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