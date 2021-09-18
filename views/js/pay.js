let pagoArray = []
  
  $(() => {
       $("#finPago").submit(function(e){
          e.preventDefault();
          let formValues = new FormData (e.target);
          let nuevoPago = new Pago (formValues.get("nombre"),formValues.get("apellido"),formValues.get("tarjeta"));
          pagoArray.push(nuevoPago);
          localStorage.setItem("Pago", JSON.stringify(pagoArray));
          
          console.log(pagoArray)
       })
       
       
        })