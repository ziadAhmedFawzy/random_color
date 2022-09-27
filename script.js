// get inputs

let colorName = document.getElementById("colorName");

let changeColor = document.getElementById("changeColor");


// input the charcters

let charcters = "0123456789abcdef"

changeColor.onclick = function() {
    let first = Math.floor(charcters.length * Math.random())
    let second = Math.floor(charcters.length * Math.random())
    let third = Math.floor(charcters.length * Math.random())
    let fourh = Math.floor(charcters.length * Math.random())
    let fifth = Math.floor(charcters.length * Math.random())
    let sixth = Math.floor(charcters.length * Math.random())
    let x = colorName.innerHTML = "#" + charcters[first] + charcters[second] + charcters[third] + charcters[fourh] +charcters[fifth] +charcters[sixth]
    document.body.style.backgroundColor = x;
}