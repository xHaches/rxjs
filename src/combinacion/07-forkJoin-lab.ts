import { of, interval, forkJoin } from 'rxjs';
import { take, delay } from 'rxjs/operators';



const numeros$ = of(1,2,3,4);
const intervalo$ = interval(1000).pipe(take(3));
const letras$ = of('a','b','c').pipe( delay(3500) );
//forkJoin(observables): en el instante que se completen los observables atributos, forkJoin va a emitir el valor de los observables como un arreglo, pero con una pequeña transformacion se puede hacer un objeto

//como arreglo
forkJoin(
    numeros$,
    intervalo$,
    letras$
).subscribe(console.log);

//como objeto
forkJoin({
    //Con llaves personalizadas
    numeros$, //es6 llave = valor
    int: intervalo$,
    let: letras$
}).subscribe( console.log);
