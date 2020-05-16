import { interval, timer } from 'rxjs';

const observer = {
    next: val => console.log('next', val),
    complete: () => console.log('complete')
}

//interval y timer Asíncrono por naturaleza
//Por defecto inicia en 0 y va aumentando de 1 en 1
const intervalo$ = interval(1000);


const hoyEn5 = new Date(); //Ahora
hoyEn5.setSeconds( hoyEn5.getSeconds() +5);



// timer simple
// const timer$ = timer(2000);

// timer con intervalo, despues de 2000 ms empieza el intervalo de 1000 ms (sigue siendo asicrono)
// const timer$ = timer(2000, 1000);

//Se puede programar en que momento quiero que se emita el valor con base al timer y se complete el observable
const timer$ = timer(hoyEn5);


console.log('inicio');
// intervalo.subscribe(observer);
timer$.subscribe(observer);
console.log('fin');