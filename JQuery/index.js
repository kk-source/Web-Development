$("h1").css("color", "red");
// console.log($("h1").css("color"));
$("button").html("<i>kartik</i>");

// console.log($("img").attr("src"));
// console.log($("button"));
$(document).keypress((evt)=>{
    // $("h1").css("color", "blue");
    // console.log(evt.key);
    // $("h1").text(evt.key);
    // $("h1").toggle();
    $("h1").animate({margin: "20px"});
    $("h1").animate({opacity: 1.5});

});