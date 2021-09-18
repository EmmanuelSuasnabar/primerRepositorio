
let contactoArray = [];

    fetch('./json/joyas.json')
    .then(response => response.json())
    .then(data => {
      for(joya of data){
        console.log(joya)
        document.getElementById("contenedorFlexible").innerHTML += `
  
        <div class="card" style="width: 18rem;" id=${joya.id} >
          <img src="../img/${joya.img}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${joya.producto}</h5>
            <p class="card-text">Stock:${joya.stock}</p>
            <p class="card-text">Precio: <span class="precio">${joya.precio}</span></p>
            <button onclick="setProduct(${joya.stock})" class="btn btn-info">Comprar</button>
          </div>
        </div>
  
        `
      }
    });

    
 

    

//fetch ('./tiendaMain.js/joyas.json').then((respuesta) => console.log(respuesta.text()));
//const Clickbutton = document.querySelectorAll('.button')
//let carrito = []
//clickButton.forEach(btn => {
 // btn.addEventListener('click',addToCarrito)
//})

//function addToCarrito(e){
// const button = e.target
// const item = button.closest('.card')
// const itemTitle = item.querySelector('.card-title').textcontent;
/// const itemPrecio = item.querySelector('.precio').textcontent;
 //const itemImg = item.querySelector('.card=img-top').src;


 //const newItem = {
  // title: itemTitle,
  // precio: itemPrecio,
 //  img: itemImg,
 ////  stock: 1

//}
 
// addItemCarrito(newItem) 

//}

//function addItemCarrito(newItem){
  
 // carrito.push(newItem)
 // ejecutarCarrito()

//}

//function ejecutarCarrito(){
 // console.log(carrito)
//}
//cargarProductos();


//$(document).ready(function() {


 // console.log('el DOM esta listo')


//});

//let divTienda = document.createElement("div");
//divTienda.id = divTienda;
//document.body.appendChild(divTienda);


//function userPass () {  
  //var usuario = prompt ('ingresa el usuario:');
  //var contraseña = parseInt(prompt ('ingresa la contraseña:'));
  

  //if(usuario == 'Emmanuel' && contraseña == '12345'){
  //alert ("Usted tiene acceso vip")
  //console.log("bienvenido Emmanuel");

 //}
 //}

 //userPass();

//$(".titulo2").click((e) => {
  //alert("Lee los pasos para comprar");
//});

//$("button#Cadenas").click((e) => {

  //alert("Seleccionaste Cadenas");
  //console.log("el usuario compro cadenas");
//});


  //function agregarSelect(){

    //var select = '<select><option value="Cadenas">Cadenas</option><option value="Pulseras">Pulseras</option><option value="Anillos">Anillos</option></select>';
    //document.getElementById('mySelect').innerHTML = select;
  
  
 // }
  


//Vanilla Script Onload  es la mejor opcion
//window.onload(alert("la pagina se cargo Vanilla Script"));

//inicializarJQUERY();


//$('button').hide('slow').slideDown('Slow'); //concatenado
//$('button').hide('slow').fadeIn('slow');
//$('button').css("color","Blue");
