//seleccionar los elementos con los que queremos trabajar desde su id
const h1 = document.querySelector('h1');
const form = document.querySelector('#form');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const pResult = document.querySelector('#result');
const btn = document.querySelector('#btnCalcular');














//A QUIÉN -    QUÉ ACCIÓN - CUAL FUNCION
//btn.addEventListener('click',btnOnClick);

//addeventilistener  con click y submit 

//SUBMIT CON FORMULARIOS CREANDO UNA FUNCION LLAMANDO LA DESDE EL HTML CON EL ID creando un evento y haciendo que la pagina no se recargue
/*form.addEventListener('submit', sumaInputs);
function sumaInputs(event)
 {  //console.log({event});
    event.preventDefault(); //esto sirve para que no se recargue la pagina
    const sumaInputs = input1.value + input2.value;
    pResult.innerHTML = "Resultado: " + sumaInputs;
}*/

//EVENTO CON CLICK 

//escuchador de eventos escucha cada vez que suceda cada evento y cada vez que pase ejecuta el codigo js
//btn.addEventListener('click', btnOnClick); //saber decual elemento html estan hablando y cual de todos los eventos
//queremos escuchar como click y cual es la funcion que debe mandar a llamar cuando se ejecute el evento de click
//eventos 
/*function btnOnClick(){
   const sumaInputs = input1.value + input2.value; //se crea una variable en el cual se van a guardar los resultados del
   //input1 y input2 llamamos la funcion innerText y decirle que quiere contatenar resultado + Suma Input 
   pResult.innerText ="Resultado: " + sumaInputs;
}*/