let contactoArray = []

 $(() => {
    $("#formContact").submit(function(e){
        e.preventDefault();
        let formValues = new FormData (e.target);
        let nuevoContacto = new Contacto (formValues.get("nombre"),formValues.get("apellido"),formValues.get("email"),formValues.get("infosi"),formValues.get("infono"),formValues.get("escrituraCampo"));
        contactoArray.push(nuevoContacto);
        localStorage.setItem("Contacto", JSON.stringify(contactoArray));
        $('#idForm').trigger("reset");
        $("#idForm").slideToggle("slow");

        
         
        
      
     })

    
  })

  $("#formContact").validate({
   rules: {
   'nombre': {
   required: true,
   minlength: 2
   },
   'apellido': {
   required: true,
   minlength: 2
   },
   'email':{
   required: true,
   email:true,
   },
   },
   messages: {
   'nombre': "Por favor ingrese un nombre valido.",
   'apellido': "Por favor ingrese un apellido valido.",
   'email': "Por favor ingrese un email valido."
   }
   });
   
  

 // $("#btnEnviar").click(()=> { 
 //  $("#idForm").slideToggle("fast");

 //});

  
