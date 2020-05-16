import { fromEvent, asyncScheduler } from 'rxjs';
import { throttleTime, pluck, distinctUntilChanged } from 'rxjs/operators';


const click$ = fromEvent<MouseEvent>( document, 'click' );


click$.pipe(
    //debounceTime(milisegundos) retrasa la emision del dato en milisegundos, pasado ese tiempo solo sale la utima emision
    // Controla observables que emiten una gran cantidad de mensajes muy rapidamente
    throttleTime(3000)
)
//.subscribe(console.log);


//Ejemplo2
const input = document.createElement('input');
document.querySelector('body').appendChild( input );

const input$ = fromEvent<InputEvent>(input, 'keyup');

input$.pipe(
    throttleTime(1000, asyncScheduler, {
        //Si leading esta en false funcionara como un debounceTime
        //leading: quieres el primer elemento? true o false
        leading: true,
        //leading: quieres el ultimo elemento? true o false
        trailing: true
    }),
    //filtra el valor del input al momento de ejecutar el evento
    pluck('target', 'value'),
    //evita que se mande un evento igual al anterior para eficientar el flujo
    distinctUntilChanged()
).subscribe(console.log);