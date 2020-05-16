import { fromEvent } from 'rxjs';
import { map, sampleTime } from 'rxjs/operators';


const click$ = fromEvent<MouseEvent>(document, 'click');

click$.pipe(
    //sampleTime(miliseg): Emite el ultimo valor recibido dentro del intervalo en milisegundos
    //Es mejor primero poner el operador sampleTime, de esta forma, los siguientes operadores solo van a manejar los datos correctos y lo hace màs eficiente
    sampleTime(2000),
    map( ({ x, y}) => ({ x, y }) )
).subscribe(console.log);