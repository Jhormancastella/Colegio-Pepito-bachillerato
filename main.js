const formAgregarEstudiante = document.querySelector("#formAgregarEstudiante");

formAgregarEstudiante.addEventListener("submit",function(event) {
    event.preventDefault();

    let datosFormulario = new FormData(formAgregarEstudiante);
    //checkear los datos del fomulario
    //console.log(datosFormulario.entries()).toArray());

    for(let [key, value] of datosFormulario.entries()){
        resultado.innerHTML += `<p><strong>${key.toUpperCase()}</strong> -${value}</p>`;
       // console.log(key,value)
    }
    telefono = pareseInt(datosFormulario.get("telefono"));
    console.log(telefono);
    //const fechaNacimento =2024 - parseInt(datosFormulario.get("edad"));
    //console.log(fechaNacimento);
});