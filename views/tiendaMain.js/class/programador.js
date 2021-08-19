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

