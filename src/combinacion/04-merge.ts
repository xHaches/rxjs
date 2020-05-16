import { fromEvent, merge } from 'rxjs';//merge se importa de rx, el operador esta obsoleto
import { pluck } from 'rxjs/operators';



const keyup$ = fromEvent(document, 'keyup');
const click$ = fromEvent(document, 'click');

//merge(): se pueden enviar cualquier cantidad de observables que se necesiten, el orden de la salida va a ser el primero que emita un valor, en el caso de que emitan al mismo instante, seria el operador que está al principio el que tuviera la prioridad
merge( 
    keyup$.pipe(pluck('type')), 
    click$.pipe(pluck('type'))
).subscribe(console.log); 