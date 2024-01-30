

function displays(value){
    document.getElementById("displayer").value += value;
}

function delDisplayed(){
    document.getElementById("displayer").value = '';
}

function delOneDisplayed(){
    document.getElementById("displayer").value = document.getElementById("displayer").value.toString().slice(0,-1);
}
onclick="displayer.value = eval(displayer.value)"
function calculate(){
    document.getElementById("displayer").value = eval(document.getElementById("displayer").value);
}

// for keyboard typed vals
function listener(event) { 
    if (event.key == '0' || event.key == '1' 
        || event.key == '2' || event.key == '3' 
        || event.key == '4' || event.key == '5' 
        || event.key == '6' || event.key == '7' 
        || event.key == '8' || event.key == '9' 
        || event.key == '+' || event.key == '-' 
        || event.key == '*' || event.key == '/') 
        document.getElementById("displayer").value += event.key; 
} 

var cal = document.getElementsByClassName("operational"); 
cal.onkeyup = function (event) { 
    if (event.keyCode === 13) { 
        console.log("Enter"); 
        let x = document.getElementById("displayer").value 
        console.log(x); 
        solve(); 
    } 
} 