var x = 0;
var y = 0;
var operation = "";

$(".display").text("0");

function appendNum(num, modifiedVar) {
    modifiedVar = modifiedVar * 10 + num;
    return modifiedVar;
}

function minus(num) {

}

function display(x) {
    $(".display").text(x);
}

$(".plus").click(function() {
    operation = "+";
    display(x);
});

$(".minus").click(function() {

    display(x);
});

$(".posneg").click(function() {
    x = -x;
    display(x);
});

$(".equals").click(function() {
    if (operation === "+")
    {
        x += y;
        $(".display").text(x);
        operation = "";
    }
});

$(".CE").click(function() {
    $(".display").text("0");
    x = 0;
    y = 0;
    operation = "";
});

// number buttons
$(".one").click(function() {
    if (operation === "")
    {
        x = appendNum(1, x);
        display(x);
    }
    else
    {
        y = appendNum(1,y);
        display(y);
    }


});
$(".two").click(function() {
    if (operation === "")
    {
        x = appendNum(2, x);
        display(x);
    }
    else
    {
        y = appendNum(2,y);
        display(y);
    }


});
$(".three").click(function() {
    if (operation === "")
    {
        x = appendNum(3, x);
        display(x);
    }
    else
    {
        y = appendNum(3,y);
        display(y);
    }


});
$(".four").click(function() {
    if (operation === "")
    {
        x = appendNum(4, x);
        display(x);
    }
    else
    {
        y = appendNum(4,y);
        display(y);
    }


}); 
$(".five").click(function() {
    if (operation === "")
    {
        x = appendNum(5, x);
        display(x);
    }
    else
    {
        y = appendNum(5,y);
        display(y);
    }


});
$(".six").click(function() {
    if (operation === "")
    {
        x = appendNum(6, x);
        display(x);
    }
    else
    {
        y = appendNum(6,y);
        display(y);
    }


});
$(".seven").click(function() {
    if (operation === "")
    {
        x = appendNum(7, x);
        display(x);
    }
    else
    {
        y = appendNum(7,y);
        display(y);
    }


}); 
$(".eight").click(function() {
    if (operation === "")
    {
        x = appendNum(8, x);
        display(x);
    }
    else
    {
        y = appendNum(8,y);
        display(y);
    }


});
$(".nine").click(function() {
    if (operation === "")
    {
        x = appendNum(9, x);
        display(x);
    }
    else
    {
        y = appendNum(9,y);
        display(y);
    }


});
$(".zero").click(function() {
    if (operation === "")
    {
        x = appendNum(0, x);
        display(x);
    }
    else
    {
        y = appendNum(0,y);
        display(y);
    }


});