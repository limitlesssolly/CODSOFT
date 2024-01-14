var items = document.getElementById("navi-items");
var burgerDisplay = document.getElementById("burger");

function navigational() {
    var computedBurger = window.getComputedStyle(burgerDisplay);
    var burgerValue = computedBurger.getPropertyValue('display');

    if (window.innerWidth <= 600 && burgerValue === "flex") {
        if (items.className === "navi-items") {
            open();
        } else {
            close();
        }
    }
}

function open() {
    items.className += "-responsive";
}

function close() {
    items.className = "navi-items";
}

window.addEventListener('resize', function () {
    if (window.innerWidth > 600) {
        items.className = "navi-items";
    }
});

window.addEventListener('load', function () {
    if (window.innerWidth > 600) {
        items.className = "navi-items";
    }
});
