import { fromEvent } from 'rxjs';
import { map, takeWhile } from 'rxjs/operators';



const click$ = fromEvent<MouseEvent>(document, 'click');


click$.pipe(
    map(({x, y}) => ({x, y})),
    //takeWhile(): emite el valor mientras se cumpla una condicion
    // takeWhile(({ y }) => y <= 150),
    //el segundo argumento es para emitir el valor que hizo que se rompiera la condicion o no.
    takeWhile(({ y }) => y <= 150, true),
)
.subscribe({
    next: val => console.log('next:', val),
    complete: () => console.log('complete')
});