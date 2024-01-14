var items = document.getElementById("navi-items");

function navigational() {
    if (items.className === "navi-items") {
        open()
    } else {
        close()
    }
}

function open() {
    items.className += "-responsive";
}
function close() {
    items.className = "navi-items";
}