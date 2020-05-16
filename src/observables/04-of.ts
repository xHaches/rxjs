import { of } from 'rxjs';

//of es sincrono pero puede ser asincono con el asynScheduler
// const obs$ = of(1,2,3,4,5,6);
// const obs$ = of<number>(...[1,2,3,4,5,6]);
const obs$ = of([1,2], {a:1, b:2}, function(){}, true, Promise.resolve(true));


//Demostracion de que of es síncrono
console.log('Inicio del obs');
obs$.subscribe( 
    next => console.log('next:', next),
    null,
    () => console.log('terminamos la secuencia')
);
console.log('Fin del obs');