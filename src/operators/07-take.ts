import { of } from 'rxjs';
import { take, tap } from 'rxjs/operators';

const numerosArr = [1,2,3,4,5]

const numeros$ = of(...numerosArr);

numeros$.pipe(
    tap(t => console.log('tap:', t)),
    //take: limita las emisiones hasta el numero indicado, en la ultima emision se ejecuta el complete
    take(3)
)


numeros$.subscribe({
    next: val => console.log('next:', val),
    complete: () => console.log('complete')
})