/* 
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar()
{	var nombre;
	var mensaje;
 
 	nombre=prompt("Ingresa su nombre", "Nicolas Ornatowski");
	
 	mensaje="su nombre es: "+nombre;

 	document.getElementById('txtIdNombre').value=nombre;

}

