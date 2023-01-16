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

// Contact Section
const popup = document.querySelector(".popup");
const subscribeBtn = document.querySelector("#subscribe-btn");
const emailInput = document.querySelector(".email-input");
const emailError = document.querySelector("#email-error");
const pattern = /^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,5}$/;

// Show Popup by clicking subscribe btn
function openPopup() {
    if (emailInput.value.match(pattern)) {
        popup.classList.add("open-popup");
        emailInput.value = "";
    } else {
        emailError.innerHTML = "Please enter a valid email";
    }
}
// Close Popup by clicking OK btn
function closePopup() {
    popup.classList.remove("open-popup");
}

// Check validation of Email
function validateEmail() {

    if (!emailInput.value.match(pattern)) {
        emailInput.style.outlineColor = "red";
        emailError.innerHTML = "Please enter a valid email";
        emailError.style.color = "red";
        emailError.style.bottom = "-27px";
        return false;
    } else {
        emailError.innerHTML = "";
        emailInput.style.outlineColor = "green";
        emailError.innerHTML = "";
        emailError.style.bottom = "-20px";
        return true;
    }

}