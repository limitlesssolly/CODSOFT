function displays(value){
    document.getElementById("displayer").value += value;
}

function delDisplayed(){
    document.getElementById("displayer").value = '';
}

function delOneDisplayed(){
    document.getElementById("displayer").value = document.getElementById("displayer").value.toString().slice(0,-1)
}

function calculate(){

}