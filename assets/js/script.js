
let precio = 875000
let cantidad = document.querySelector("#inCantidad")
let colorSeleccionado = document.querySelector("#inColor")
let button = document.querySelector("#calcularTotal")



button.addEventListener("click", () =>{
    document.querySelector("#resumenTotal").innerHTML= cantidad.value * precio;
    document.querySelector("#resumenCantidad").innerHTML= cantidad.value;
    document.querySelector("#resumenColor").style.backgroundColor= colorSeleccionado.value;


})


let limpiar = document.querySelector("#limpiar")

limpiar.addEventListener("click", () =>{document.querySelector("#resumenTotal").innerHTML= 0;
document.querySelector("#resumenCantidad").innerHTML= 0;
document.querySelector("#resumenColor").style.backgroundColor= "black";
document.querySelector("#inColor").value= "";
document.querySelector("#inCantidad").value= "";

    


})



