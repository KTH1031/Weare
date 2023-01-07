var nombre = document.getElementById("nombre");
var correo = document.getElementById("correo");
var numero = document.getElementById("numero");
var producto = document.getElementById("producto");
var mensaje = document.getElementById("mensaje")
function validacion(){
    
dato = document.getElementById("nombre").value;
if(dato==null || dato.length==0 || /^\s+$/.test(dato)){
alert ("por favor ingrese su nombre");
return false;
} 
//dato = document.getElementById("numero").value;
//if( !(/^\d{10}$/.test(valor)) ) { alert("ingrese un numero de telefono"); return false;}
    
producto = document.getElementById("producto");
if (producto.value == ""){ alert("seleccione un producto"); return false; }
    
dato = document.getElementById("correo").value;    
if(!/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(dato)) {alert ("correo no valido"); return false; }
    
dato = document.getElementById("mensaje").value; 
if(dato == null || dato.length ==0||/^\s+$/.test(dato)){
    alert("Favor de ingresar un mensaje"); return false;
}
}