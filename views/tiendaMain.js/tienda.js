//function userPass (){

  //  var usuario = prompt ('ingresa el usuario:')
   // var contraseña = parseInt(prompt ('ingresa la contraseña:'))
   
   // if(usuario == 'Emmanuel' && contraseña == '12345'){
  // alert ('Emmanuel bienvenido')
  // console.log('el usuario emmanuel ingreso a la tienda')
//}
//}
//userPass();


const listaDeJoyas = [
    {
      nombre: "Cadenas",
      cantidad: 80,
      precio: 100 ,
    },
    {
      nombre: "Pulseras",
      cantidad: 110,
      precio: 80,
    },
    {
      nombre: "Anillos",
      cantidad: 100,
      precio: 50,
    },
  ];
 
  function agregarSelect() {
    var select = '<select><option value="Cadenas">Cadenas</option><option value="Pulseras">Pulseras</option><option value="Anillos">Anillos</option></select>';
    document.getElementById('mySelect').innerHTML = select;


  }