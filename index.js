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