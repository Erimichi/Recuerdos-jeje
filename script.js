const empezar =
document.getElementById("empezar");

const memorias =
document.getElementById("memorias");

const cerrar =
document.getElementById("cerrar");

const menuPrincipal =
document.getElementById("menuPrincipal");

const pantallaMemorias =
document.getElementById("pantallaMemorias");

empezar.addEventListener("click",()=>{

menuPrincipal.style.display="none";

pantallaMemorias.style.display="block";

});

memorias.addEventListener("click",()=>{

alert("Aquí agregarás memorias nuevas");

});

cerrar.addEventListener("click",()=>{

if(confirm("¿Deseas salir?")){

window.close();

}

});