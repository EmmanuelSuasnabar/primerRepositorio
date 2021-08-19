

var contactoArray = [];

document.getElementById('formContact').addEventListener('submit', function(e) {
    e.preventDefault();
    let nombre = document.getElementById('nombre').value;
    let apellido = document.getElementById('apellido').value;
    let email = document.getElementById('email').value;
    let si = document.querySelector('#infosi').value;
    let no = document.querySelector('#infono').value;
    let escrituraCampo = document.querySelector('#escrituraCampo').value;
    
    let formValues = new FormData (e.target);
    let nuevoContacto = new Contacto (formValues.get("nombre"),formValues.get("apellido"),formValues.get("email"),formValues.get("infosi"),formValues.get("infono"),formValues.get("escrituraCampo"));
    formContact.reset();
    contactoArray.push(nuevoContacto);
    localStorage.setItem("Contacto", JSON.stringify(contactoArray));
    
    console.log(nombre);
    console.log(apellido);
    console.log(email);
    console.log(contactoArray);
   

});

