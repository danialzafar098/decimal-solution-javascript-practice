let colour = 0;

const x = document.getElementById("colour")

function updatecolour() {
    x.textContent = colour;
}

function increase () {
    colour++;
    updatecolour();
}

function decrease () {
    colour--;
    updatecolour();
}

function reset () {
    colour = 0;
    updatecolour();
}

function savecolour() {
    localStorage.setItem("savecolour",colour);
    alert("coloursaved")

}

function loadcounter(){
    let savedvalue = localStorage.getItem("savecolour");

    if (savedvalue !== 0) {
        colour = parseInt(savedvalue);
        updatecolour();
        alert("colour loaded");
        
    } else {
        alert("no value found");
    }

}