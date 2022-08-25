//constante (const): tipo que no puede cambiar una vez definida 
// esta constante quiero acceder a document........... queremos acceder al formulario 
const formulario = document.getElementById('formulario');


// crear otra constante para almacenar todos los inputs del formulario
// agregando el all de esta forma obtendremos un arreglo de todos los inputs Arreglo coleccion de elementos de cualquier tipo 
const inputs = document.querySelectorAll('#formulario');

const expresiones = {

	cliente: /^[a-zA-Z]{9,16}$/,
	identificacion: /^\d{8,10}$/,
	prenda: /^\d{4,6}$/,  
	telefono: /^\d{7,14}$/,
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	cantidad: /^\d{1,2}$/,
	costo: /^\d{4,8}$/ 
	
}
  
const campos ={

cliente:false, 
identificacion:false,  
prenda:false, 
telefono:false, 
correo:false, 
cantidad:false,
costo:false

}



const validarFormulario = (e) => {
switch(e.target.name){
// condicional de tipo if
// add:agregar 
// remover:remover
	case"cliente":
	// -----------expresion----------input-----campo
	validarCampo(expresiones.cliente,e.target,'cliente');
       
	break;

	case"identificacion":
    validarCampo(expresiones.identificacion,e.target,'identificacion');
	break;

	case"prenda":
    validarCampo(expresiones.prenda,e.target,'prenda');
	break;

	case"telefono":
      validarCampo(expresiones.telefono,e.target,'telefono');
	break;

	case"correo":
    validarCampo(expresiones.correo,e.target,'correo');
	break;

	case"cantidad":
    validarCampo(expresiones.cantidad,e.target,'cantidad');
	break;

	case"costo":
    validarCampo(expresiones.costo,e.target,'costo');
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

if (campos.cliente && campos.identificacion && campos.prenda && campos.costo && campos.telefono && campos.correo &&campos.cantidad  ){
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

