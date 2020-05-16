import { range, from, fromEvent } from 'rxjs';
import { filter, map } from 'rxjs/operators';

range(1, 10).pipe(
    filter( (item, index) => {
        console.log('index', index);
        return item % 2 === 1;
    })
)//.subscribe(console.log);

interface Personaje {
    tipo: string,
    nombre: string
}

const personajes: Personaje[] = [
    {
        tipo: 'heroe',
        nombre: 'batman'
    },
    {
        tipo: 'heroe',
        nombre: 'robin'
    },
    {
        tipo: 'villano',
        nombre: 'guason'
    }
];

from( personajes ).pipe(
    filter( item => item.tipo  !==  'heroe' )
).subscribe(console.log);

const keyup$ = fromEvent<KeyboardEvent>(document, 'keyup').pipe(
    //Operadores encadenados: se ejecutan de arriba hacia abajo
    map( event => event.code ), //<KeyboardEvent, string>
    filter( key => key === 'Enter' )
);


keyup$.subscribe(console.log);