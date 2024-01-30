function displays(value){
    document.getElementById("displayer").value += value;
}

function delDisplayed(){
    document.getElementById("displayer").value = '';
}

function delOneDisplayed(){
    document.getElementById("displayer").value = document.getElementById("displayer").value.toString().slice(0,-1);
}

function calculate(){
    document.getElementById("displayer").value = eval(document.getElementById("displayer").value);
}

document.addEventListener("keydown", function(event) { 
    if ((event.key >= '0' && event.key <= '9') || event.key == '+' || event.key == '-' || event.key == '*' || event.key == '/') {
        document.getElementById("displayer").value += event.key; 
        event.preventDefault();
    }
});

document.addEventListener("keydown", function(event) { 
    if (event.keyCode === 13) {
        event.preventDefault();
        calculate(); 
    } 
});
