var main = function() {
    var x = 0;
    var num = 0;
    var y = 0;
    
    $(".display").text("0");
    
    function appendNum(num){
        x = x * 10 + num;
        return x;
    }

    function display(x) {
        $(".display").text(x);
    }
    
    $(".plus").click(function() {
        y += x;
        x = 0;
        display(y);
    });
    
    $(".minus").click(function() {

    });
    
    $(".posneg").click(function() {
        x = -x;
        display(x);
    });

    $(".equals").click(function() {
        $(".display").text(x+y);
    });
    
    $(".CE").click(function() {
        $(".display").text("0");
        x = 0;
        y = 0;
    });

    // number buttons
    $(".one").click(function() {
        appendNum(1);
        display(x);
    });
    $(".two").click(function() {
        appendNum(2);
        display(x);
    });
    $(".three").click(function() {
        appendNum(3);
        display(x);
    });
    $(".four").click(function() {
        appendNum(4);
        display(x);
    }); 
    $(".five").click(function() {
        appendNum(5);
        display(x);
    });
    $(".six").click(function() {
        appendNum(6);
        display(x);
    });
    $(".seven").click(function() {
        appendNum(7);
        display(x);
    }); 
    $(".eight").click(function() {
        appendNum(8);
        display(x);
    });
    $(".nine").click(function() {
        appendNum(9);
        display(x);
    });
    $(".zero").click(function() {
        appendNum(0);
        display(x);
    });
};

$(document).ready(main);