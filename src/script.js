
//hamburger

let edge = document.getElementById("edge"); //punem in variabila meniul hamburger

//ia butonul hamburger si executa codul de mai jos cand e apasat
document.getElementById("hamburger").addEventListener("click", () => {
    //muta cu 400px meniul in stanga si dreapta la apasarea butonului facandu l sa apara si sa dispara
    let pos = edge.style.right;
    if(pos == "-400px") edge.style.right = "0px";
    else edge.style.right = "-400px";
})
//ia tot documentul pentru ca atunci cand se da scroll meniul hamburger sa fie inchis
document.addEventListener("scroll", () => edge.style.right = "-400px")