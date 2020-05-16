import { interval, fromEvent } from 'rxjs';
import { take, concatMap } from 'rxjs/operators';



const interval$ = interval(500).pipe(take(3));
const click$ = fromEvent(document, 'click');

click$.pipe(
    //concatMap() Crea una cola de emisiones, cuando el primer observable se complete, emitira los de su siguiente obeservable y asi sucesivamente, operador de aplanamiento
    concatMap( () => interval$ )
).subscribe( console.log );
