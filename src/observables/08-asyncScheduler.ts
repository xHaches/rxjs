import { asyncScheduler } from 'rxjs';

//asyncScheduler es un SUSCRIPCION
//asyncScheduler: utiliza un setTimeout o un setInterval usando una suscripción


//Ejemplo como setTimeout
const saludar = () => console.log('Hola Mundo');
const saludar2 = nombre => console.log(`Hola ${nombre}`);
const saludar3 = ({nombre, apellido}) => console.log(`Hola ${nombre} ${apellido}`);

//El tercer argumento es el estado de la funcion del primer argumento
// asyncScheduler.schedule( saludar, 2000 );
// asyncScheduler.schedule( saludar2, 2000, 'Luisin' );
asyncScheduler.schedule( saludar3, 2000, {nombre: 'Luisin', apellido: 'Hernandezin'} );


//Ejemplo como setInterval

//No puede ser una funcion lambda, debe ser una normal
//El tercer argumento es el estado inicial de la funcion del primer argumento
const subs = asyncScheduler.schedule(function(state){

    console.log('state', state); 
    if(state === 10) {
        //Se puede desuscribir dentro o fuera del asynscheduler
        subs.unsubscribe();
    } 
    this.schedule(state+1, 1000);

}, 3000, 0);

// setTimeout(() => subs.unsubscribe(), 6000)

// asyncScheduler.schedule(() => subs.unsubscribe(), 6000);