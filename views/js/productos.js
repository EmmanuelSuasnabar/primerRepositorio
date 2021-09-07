

    fetch('./json/looks.json')
    .then(response => response.json())
    .then(data => {
      for(producto of data){
        console.log(producto)
        document.getElementById("contenedorFlexible").innerHTML += `
  
        <div class="card" style="width: 18rem;">
        <img src="../img/${producto.img}" class="card-img-top" alt="...">
        <div class="card-body">
        <p class="card-text">${producto.descripcion}</p>
        </div>
        </div>
        `
      }
    })
  
 

//  fetch('./json/looks.json')
//  .then(response => response.json())
//  .then(data => {
//    for(producto of data){
//      console.log(producto)
//      $("#contenedorFlexible").html += (`

//      <div class="card" style="width: 18rem;" id=${producto.id} >
//        <img src="../img/${producto.img}" class="card-img-top" alt="...">
//        <div class="card-body">
//          <h5 class="card-title">${producto.producto}</h5>
//          <p class="card-text">Stock:${producto.stock}</p>
//          <p class="card-text">Precio: <span class="precio">${producto.precio}</span></p>
//          <button class="btn btn-primary button">Comprar</button>
//        </div>
//      </div>

//      `)
//    }
 
 


// })