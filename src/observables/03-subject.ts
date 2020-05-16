import { Observable, Observer, Subject } from 'rxjs';

const observer:Observer<any> = {
    next: value => console.log('next:', value),
    error: error => console.warn('error:', error),
    complete: () => console.info('completado')
};

const intervalo$ = new Observable<number>(subscriber => {
    
    const intervalID = setInterval( () =>  subscriber.next( Math.random() ), 3000);

    //La funcion se ejecuta cuando se desuscriben (.unsubscribe)
    return () => clearInterval( intervalID );
});


/*
*************Caracteristicas de los subjects
1-. Casteo Múltiple
2-. es un observable y tambien es un observer
3-. puede manejar next, error, complete
*/
const subject$ = new Subject()
const subscripcion = intervalo$.subscribe(subject$);



// const subs1 = intervalo$.subscribe( rnd => console.log('subs1', rnd));
// const subs2 = intervalo$.subscribe( rnd => console.log('subs2', rnd));

const subs1 = subject$.subscribe( observer );
const subs2 = subject$.subscribe( observer );

setTimeout(() => {
    subject$.next(10);

    subject$.complete(); 

    subscripcion.unsubscribe();

}, 3500);