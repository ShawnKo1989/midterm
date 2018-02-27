var t1 = document.getElementById("bgtxt1");
var t2 = document.getElementById("bgtxt2");
var t3 = document.getElementById("bgtxt3");
var t4 = document.getElementById("bgtxt4");

var p1 = document.getElementById("headpic");
var p2 = document.getElementById("bodypic");
var p3 = document.getElementById("legpic");
var p4 = document.getElementById("footpic");


document.getElementById("downImg").addEventListener("click", function() {
    document.getElementById("menu").style.top = 0 + "px";
});

document.getElementById("bg1").addEventListener("click", function() {
    document.getElementById("main").style.display = "block";
    t1.style.display = "block";
    p1.style.display = "block";
});

document.getElementById("bg2").addEventListener("click", function() {
    document.getElementById("main").style.display = "block";
    t2.style.display = "block";
    p2.style.display = "block";
});

document.getElementById("bg3").addEventListener("click", function() {
    document.getElementById("main").style.display = "block";
    t3.style.display = "block";
    p3.style.display = "block";
});

document.getElementById("bg4").addEventListener("click", function() {
    document.getElementById("main").style.display = "block";
    t4.style.display = "block";
    p4.style.display = "block";
});
