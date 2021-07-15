function userPass (){

    var usuario = prompt ('ingresa el usuario:')
    var contraseña = parseInt(prompt ('ingresa la contraseña:'))
   
    if(usuario == 'Emmanuel' && contraseña == '12345'){
   alert ('Emmanuel bienvenido')
   console.log('el usuario emmanuel ingreso a la tienda')
}
}
userPass();


const cambiarColor = () => {

document.getElementsByName("Cadenas").setAttribute("class", "blue");

document.getElementsByName("Pulceras").setAttribute("class", "blue");

document.getElementsByName("Anillos").setAttribute("class", "blue");
};