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
        emailError.innerHTML = "Please fill in the E-mail input field";
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

// Animation On Scroll

AOS.init({
    // Global settings:
    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: "DOMContentLoaded", // name of the event dispatched on the document, that AOS should initialize on
    initClassName: "aos-init", // class applied after initialization
    animatedClassName: "aos-animate", // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 100, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 400, // values from 0 to 3000, with step 50ms
    easing: "ease", // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
});