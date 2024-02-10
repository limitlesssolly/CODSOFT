window.onscroll = function () { myFunction() };

var navbar = document.getElementById("navs");
var sticky = navbar.offsetTop;

function myFunction() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("stickin")
    } else {
        navbar.classList.remove("stickin");
    }
}