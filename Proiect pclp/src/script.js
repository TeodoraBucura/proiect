
let edge = document.getElementById("edge");

document.getElementById("hamburger").addEventListener("click", () => {
    let pos = edge.style.right;
    if(pos == "-400px") edge.style.right = "0px";
    else edge.style.right = "-400px";
})

document.addEventListener("scroll", () => edge.style.right = "-400px")