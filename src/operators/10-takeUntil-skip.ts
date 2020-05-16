import { interval, fromEvent } from 'rxjs';
import { takeUntil, skip, tap } from 'rxjs/operators';


const boton = document.createElement('button');

boton.innerText = 'detener timer';

document.querySelector('body').appendChild(boton);

const counter$ = interval(1000);
// const clickBtn$ = fromEvent( boton, 'click' );
const clickBtn$ = fromEvent( boton, 'click' ).pipe(
    tap(() => console.log('tap antes de skip')),
    //skip(numero): no emite la cantidad de elementos indicados por el numero
    skip(1),
    //El tap no se va a ejecutar la primera vez debido a que el skip interrumpe todo operador consecutivo a el
    tap(() => console.log('tap despues de skip')),
)

counter$.pipe(
    //takeUntil(observable): emite valores hasta que el observable enviado como argumento emita su primer valor
    takeUntil(clickBtn$)
)
.subscribe({
    next: val => console.log('next:', val),
    complete: () => console.log('complete')
})