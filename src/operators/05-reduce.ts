import { interval } from "rxjs";
import { take, reduce, tap } from 'rxjs/operators';

const numeros = [1,2,3,4,5];

const totalReducer = (acumulador: number, valorActual: number) => acumulador + valorActual;

const total = numeros.reduce( totalReducer , 0);

console.log('Total arr', total);


interval(1000).pipe(
    take(3),
    tap(console.log),
    //reduce: emite el acumulador hasta el final de todas las iteraciones
    reduce(totalReducer)
).subscribe({
    next: val => console.log('next:', val),
    complete: () => console.log('complete')
});
