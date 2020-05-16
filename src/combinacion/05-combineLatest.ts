import { fromEvent, combineLatest } from 'rxjs';//merge se importa de rx, el operador esta obsoleto
import { pluck, retry } from 'rxjs/operators';



const keyup$ = fromEvent(document, 'keyup');
const click$ = fromEvent(document, 'click');

//combineLatest(observables): funcion, emite el último valor emitido por cada observable, para que combineLatest empiece a emitir valores, todos observables argumentos deben haber emitido por lo menos un valor, si se completa un observable combineLatest emitira la combinacion de los observables más el último valor emitido por el observable completado
combineLatest( 
    keyup$.pipe(pluck('type')), 
    click$.pipe(pluck('type'))
).subscribe(console.log); 


//Ejemplo2
const input1 = document.createElement('input'); 
const input2 = document.createElement('input'); 

input1.placeholder = 'email@email.com';

input2.placeholder = '******';
input2.type = 'password';

document.querySelector('body').append(input1, input2);

//Helper
const getInputStream = (elem : HTMLElement) => {
    return fromEvent<KeyboardEvent>(elem, 'keyup').pipe(
        pluck<KeyboardEvent, string>('target', 'value')
    )
}

combineLatest(
    getInputStream( input1 ),
    getInputStream( input2 )
).subscribe(console.log);

