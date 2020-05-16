import { fromEvent } from 'rxjs';
import { auditTime, tap, map } from 'rxjs/operators';




const click$ = fromEvent<MouseEvent>(document, 'click');



click$.pipe(
    map( ({ x }) => x),
    tap(val => console.log('tap', val)),
    //auditTime(miliseg): emite el ultimo valor recibido dentro del intervalo en milisegundos
    auditTime(5000)
).subscribe(console.log);



