import { fromEvent } from 'rxjs';
import { first, tap, map } from 'rxjs/operators';

interface Ejes {
    clientX: number,
    clientY: number
}

const click$ = fromEvent<MouseEvent>(document, 'click');



click$.pipe(
    tap<MouseEvent>(() => console.log('tap')),
    map(({ clientX, clientY }) => ({ clientY,clientX })),
    // first(): emite solo el primer elemento
    // first()
    // first(function): emite solo el primer elemento que cumpla una condicion
    first<Ejes>(event => event.clientY >= 150)
)
.subscribe({
    next: val => console.log('next:', val),
    complete: () => console.log('complete')
});