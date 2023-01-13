const toggle = document.querySelector("#toggle");
const navbar = document.querySelector("#navbar");
const body = document.querySelector("body");

// Open and Close Navbar Menu by clicking Toggle Btn
toggle.onclick = function() {
    toggle.classList.toggle("active");

    navbar.classList.toggle("active");
    if (toggle.classList.contains("active")) {
        body.style.overflow = "hidden";
        document.querySelector(".logo").style.position = "fixed";
    } else {
        body.style.overflow = "auto";
        document.querySelector(".logo").style.position = "absolute";
    }
};

//Closing navbar by clicking outside or links
document.onclick = function(e) {
    if (e.target.id !== "navbar" && e.target.id !== "toggle") {
        toggle.classList.remove("active");
        navbar.classList.remove("active");
        body.style.overflow = "auto";
        document.querySelector(".logo").style.position = "absolute";
    }
};