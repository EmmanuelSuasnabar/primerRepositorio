
 $(() => {
    $("#idForm").submit(function(e){
        e.preventDefault();
        let formValues = new FormData (e.target);
        let nuevoContacto = new Contacto (formValues.get("nombre"),formValues.get("apellido"),formValues.get("email"),formValues.get("infosi"),formValues.get("infono"),formValues.get("escrituraCampo"));
        contactoArray.push(nuevoContacto);
        localStorage.setItem("Contacto", JSON.stringify(contactoArray));
        $('#idForm').trigger("reset");
        $("#idForm").slideToggle("slow");

        
         
        
      
     })

    
  })

  $("#idForm").validate({
   rules: {
   'FName': {
   required: true,
   minlength: 2
   },
   'LName': {
   required: true,
   minlength: 2
   },
   'Email':{
   required: true,
   email:true,
   },
   'Pwd':{
   required: true,
   },
   },
   messages: {
   'FName': "Please enter a valid First Name.",
   'LName': "Please enter a valid Last Name.",
   'Email': "Please enter Email in proper format.",
   'Pwd': "Please enter a Password",
   }
   });
   

 // $("#btnEnviar").click(()=> { 
 //  $("#idForm").slideToggle("fast");

 //});

  
