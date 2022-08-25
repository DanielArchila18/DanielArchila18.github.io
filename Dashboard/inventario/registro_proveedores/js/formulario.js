//constante (const): tipo que no puede cambiar una vez definida 
// esta constante quiero acceder a document........... queremos acceder al formulario 
const formulario = document.getElementById('formulario');


// crear otra constante para almacenar todos los inputs del formulario
// agregando el all de esta forma obtendremos un arreglo de todos los inputs Arreglo coleccion de elementos de cualquier tipo 
const inputs = document.querySelectorAll('#formulario');

const expresiones = {
	empresa: /^[a-zA-Z0-9\_\-]{4,26}$/, // Letras, numeros, guion y guion_bajo
	representante: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos
	proveedor:/^\d{3,10}$/,
  direccion: /^[a-zA-Z0-9\s\_\-]{4,26}$/,
   telefono: /^\d{7,14}$/ // 7 a 14 numeros.
	
	
}
  
const campos ={


	empresa:false, 
representante:false, 
proveedor:false, 
 direccion:false, 
  telefono:false

}



const validarFormulario = (e) => {
switch(e.target.name){
// condicional de tipo if
// add:agregar 
// remover:remover
	case"empresa":
	// -----------expresion----------input-----campo
	validarCampo(expresiones.empresa,e.target,'empresa');
       
	break;

	case"representante":
    validarCampo(expresiones.representante,e.target,'representante');
	break;

	case"proveedor":
    validarCampo(expresiones.proveedor,e.target,'proveedor');
	break;

	case"direccion":
    validarCampo(expresiones.direccion,e.target,'direccion');
	break;

	case"telefono":
    validarCampo(expresiones.telefono,e.target,'telefono');
	break;

	
}

}

const validarCampo = (expresion,input,campo) => {
// queremos acceder al input y q lo compruebe con la expresion 
if(expresion.test(input.value)){
   document.getElementById(`grupo__${campo}`).classList.remove( 'formulario__grupo-incorrecto');
       document.getElementById(`grupo__${campo}`).classList.add( 'formulario__grupo-correcto');
       // acceder ala clase y cambiar el icono por el chulo 
       // querySelector a uno solo elemento y no all que es un grupo de elementos
       document.querySelector(`#grupo__${campo} i`).classList.add('fa-circle-check');
       document.querySelector(`#grupo__${campo} i`).classList.remove('fa-circle-xmark');
       document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo');
       campos[campo] = true;


       } else {
       	document.getElementById(`grupo__${campo}`).classList.add( 'formulario__grupo-incorrecto');
       	document.getElementById(`grupo__${campo}`).classList.remove( 'formulario__grupo-correcto'); 
        document.querySelector(`#grupo__${campo} i`).classList.add('fa-circle-xmark');
       	document.querySelector(`#grupo__${campo} i`).classList.remove('fa-circle-check');
       	document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add('formulario__input-error-activo');
        campos[campo] = false;
       }

}


// quiero q por cada input me generes un codigo 
 inputs.forEach((input) => {
 input.addEventListener('keyup',validarFormulario );
 input.addEventListener('blur',validarFormulario );
  
 } );


//  BOTON DE ENVIAR :esto signfica que cuando el usuario presione el boton tenga un default
// parametro (e) = evento
// preventDefault =al momento de presionar enviar el formulario NO envie los datos ...de los contrario si no lo pongo se enviarian 
formulario.addEventListener('submit', (e) =>{
   e.preventDefault();

if (campos.empresa && campos.representante && campos.proveedor && campos.direccion && campos.telefono  ){
 // reiniciar todos los campos del formulario (reset)
	formulario.reset();
  // acceder ala lista de clases classlist
	document.getElementById('formulario__mensaje-exito').classList.add('formulario__mensaje-exito-activo');

    // setTimeout(() => para remover el mensaje de enviado exitosamente ......}, 5000); luego se le pone una coma despues de las llaves para ponerle el tiempo para desaparecer el mensaje luego de enviarlo
    setTimeout(() => {
    document.getElementById('formulario__mensaje-exito').classList.remove('formulario__mensaje-exito-activo');

    }, 4000);
     // remover los iconos q queden luego de darle al boton de enviar

     document.querySelectorAll('.formulario__grupo-correcto').forEach((icono) => {
       icono.classList.remove('formulario__grupo-correcto');

   });
     document.getElementById('formulario__mensaje').classList.remove('formulario__mensaje-activo');

} else {

	document.getElementById('formulario__mensaje').classList.add('formulario__mensaje-activo');
}


});

