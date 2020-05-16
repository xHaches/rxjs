import { of, interval, fromEvent } from 'rxjs';
import { mergeMap, take, map, takeUntil } from 'rxjs/operators';



const letras$ = of('a', 'b', 'c');

letras$.pipe(
    //mergeMap(): recive el valor emitido de nuestro observable y va a retornar un nuevo observable, aunque en realidad emite el valor producto de la suscripcion interna, eso hacen los operadores de aplanamiento, no tiene limite limite de suscripciones internas, y todas pueden estar activas simultaneamente
    //En pocas palabras cada dato entrante se convierte en un observable con suscripcion y cada emision de cada observable creado se emitira por el observable padre, en este caso letras$
    mergeMap( (letra) => interval(1000).pipe(
        map( i => letra + i ),
        take(3)
        ))
        )
        // .subscribe({
            //     next: val => console.log('next:', val),
            //     complete: () => console.log('Complete')
            // })
            
            const mousedown$ = fromEvent(document, 'mousedown');
            const mouseup$   = fromEvent(document, 'mouseup');
            const interval$  = interval();
            
mousedown$.pipe(
    //mergeMap(): recive el valor emitido de nuestro observable y va a retornar un nuevo observable, aunque en realidad emite el valor producto de la suscripcion interna, eso hacen los operadores de aplanamiento, no tiene limite limite de suscripciones internas, y todas pueden estar activas simultaneamente
    //En pocas palabras cada dato entrante se convierte en un observable con suscripcion y cada emision de cada observable creado se emitira por el observable padre, en este caso letras$
    mergeMap( () => interval$.pipe(
        takeUntil( mouseup$ )
    ))
).subscribe(console.log)