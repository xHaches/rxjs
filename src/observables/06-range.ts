import { range, asyncScheduler } from 'rxjs';

//range es sincrono pero puede ser asincono con el asynScheduler

//range(inicio, valores concecutivos siguientes);
// const src$ = range(1,5);
//El valor de inicio por defecto es 0
// const src$ = range(5);
//El valor de inicio por defecto es 0
const src$ = range(0,5, asyncScheduler);

console.log('inicio');
src$.subscribe( console.log );
console.log('fin');