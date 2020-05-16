import { fromEvent } from 'rxjs';
import { pluck, switchMap } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';



//Referencias
const body = document.querySelector('body');
const textInput = document.createElement('input');
body.append(textInput);

//Streams
const input$ = fromEvent<KeyboardEvent>(textInput, 'keyup');


const url = 'https://httpbin.org/delay/1?arg=';// + nombre

input$.pipe(
    pluck('target', 'value'),
    //retorna un observable y al momento de que el imput emite otro valor se termina el anterior, util para cancelar peticiones ajax y solo ejecutar la ultima, operador de aplanamiento
    switchMap( texto => ajax.getJSON(url + texto))
).subscribe(console.log);