class Programador {
    constructor(nombre, edad, ciudad) {
  
      this.nombre = nombre;
      this.edad = edad;
      this.ciudad = ciudad;
      this.presentacion = function () { console.log("Hola Soy el programador de esta pagina. Me llamo " + this.nombre + "tengo " + this.edad + "y vivo en " + this.ciudad); };
  
    }
  }

const programador1 = new Programador ("Emmanuel ", "32 años " , "La Plata ")
programador1.presentacion();



class Contacto {
    constructor (nombre, apellido, email, infosi, infono, escrituraCampo){
        this.nombre = nombre
        this.apellido = apellido
        this.email = email
        this.infosi = infosi
        this.infono = infono
        this.escrituraCampo = escrituraCampo
        


    }

};

class Pago {

  constructor (nombre,apellido,tarjeta){

    this.nombre = nombre
    this.apellido = apellido
    this.tarjeta = tarjeta


  }

};



//class UsuarioProducto {

//  constructor (){

//   this.joyas = [];
    
//  }


 // setProducto(joyaid) { 
 // let productoProductoLista = JSON.parse(localStorage.getItem('joyas'))
 // let productoActual = productoProductoLista.find ((joya) => joya.id === id);  
 // productoActual.stock -=1; 
//this.joyas.push(productoProductoLista)



////  let productoProductoLista = JSON.parse(localStorage.getItem('joyas'));}

//let contactoArray = [];
/*
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
   

});*/


