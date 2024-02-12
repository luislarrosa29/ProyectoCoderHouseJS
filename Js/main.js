alert("Bienvenido a Tienda Charlotte");
let UsuarioGuardado= "Luis";
let PinGuardado= 2929;
let ingresar= false;
let opcion = prompt ("\n1 Iniciar Sesion. \n2 Consulta. \n Presione x para salir");
while (opcion != "x"){

    if(opcion == "1"){
//intentos de ingreso
        for (let i = 2; i >=0; i--){
            let IngresoU= prompt ("Ingrese su Usuario");
            
        if(IngresoU == UsuarioGuardado){       
                let IngresoP= prompt ("Ingrese su PIN") ; 
            if(IngresoP == PinGuardado){
                alert("Bienvinedo Cliente");
                ingresar=true;
                break;
            } else {
                alert ("PIN Incorrecto \nVuelva a Intentarlo");
            }
        } else {
            alert ("Usuario Incorrecto \nVuelva a Intentarlo");
        }
        
    }
    }
    if(ingresar){
        let Remeras="6000";
        let Pantalones="9300";
        let Gorras="4800";
        let cantidadg;
        let cantidadr;
        let cantidadp;
        let opcion2= prompt ("\n1 Lista de Precios \n2 Pagar \n Presiona x para finalizar");
            while(opcion2 != "x"){
                if(opcion2 == "1"){
                    let opcionL= prompt ("\n1 Remeras \n2 Pantalones \n3 Gorras \n Presiona x para finalizar")
                    while(opcionL != "x"){
                        if(opcionL== "1"){
                            alert("Precio Remeras $" + Remeras);
                            cantidadr = prompt("ingrese Cantidad");
                        }
                        if (opcionL=="2"){
                            alert("Precio Pantalones $" + Pantalones);
                            cantidadp = prompt("ingrese Cantidad");
                        }
                        if (opcionL=="3"){
                            alert("Precio Gorras $" + Gorras);
                            cantidadg = prompt("ingrese Cantidad");
                        }

                        opcionL= prompt ("\n1 Remeras \n2 Pantalones \n3 Gorras \n Presiona x para finalizar");

                        }
                }
                
                if(opcion2=="2"){
                        let totalr= Remeras*cantidadr;
                        let totalp= Pantalones*cantidadp;
                        let totalg= Gorras*cantidadg;
                        let Total= totalr+totalp+totalg;
                    alert ("\nRemeras: $"+totalr +"\nPantalones: $"+totalp +"\nGorras: $"+totalg + "\nSu total es: $" + Total);
                    break;
                }

                opcion2= prompt ("\n1 Lista de Precios \n2 Pagar \n Presiona x para finalizar");
            }
    }
    if(opcion == "2"){
        let correo = prompt("Ingrese su Correo");
        let Celular = prompt("Ingrese su Celular");
        let mensaje = prompt("Deajanos tu Mensaje y nos comunicaremos a la brevedad");
        alert("Muchas gracias. Pronto nos pondremos en contacto con Usted.");
    }
    opcion = prompt ("\n1 Iniciar Sesion. \n2 Consulta. \n Presione x para salir");
}









