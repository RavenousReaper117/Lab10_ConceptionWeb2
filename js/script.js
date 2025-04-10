document.querySelector(".LirePlus").addEventListener("click", modale);
document.querySelector(".fermer-modale").addEventListener("click", fermer);


function modale(){
    document.querySelector(".modale").classList.add("visible");
}

function fermer(){
    document.querySelector(".modale").classList.remove("visible");
}