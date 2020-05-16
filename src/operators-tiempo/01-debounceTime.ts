import { fromEvent } from 'rxjs';
import { debounceTime, pluck, distinctUntilChanged } from 'rxjs/operators';


const click$ = fromEvent<MouseEvent>( document, 'click' );


click$.pipe(
    //debounceTime(milisegundos) retrasa la emision del dato en milisegundos, pasado ese tiempo solo sale la utima emision
    // Controla observables que emiten una gran cantidad de mensajes muy rapidamente
    debounceTime(3000)
)
.subscribe(console.log);


//Ejemplo2
const input = document.createElement('input');
document.querySelector('body').appendChild( input );

const input$ = fromEvent<InputEvent>(input, 'keyup').pipe(
    debounceTime(1000),
    //filtra el valor del input al momento de ejecutar el evento
    pluck<InputEvent, string>('target', 'value'),
    //evita que se mande un evento igual al anterior para eficientar el flujo
    distinctUntilChanged()
);

input$.subscribe(console.log);