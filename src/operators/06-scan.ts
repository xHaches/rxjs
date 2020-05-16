import { from } from "rxjs";
import { reduce, scan, map } from 'rxjs/operators';


const numeros = [1,2,3,4,5];

const totalAcumulador = (acumulador: number, acutal: number) => acumulador + acutal;

//Reduce 
from(numeros).pipe(
    reduce(totalAcumulador)
).subscribe(console.log);

//scan
from(numeros).pipe(
    scan(totalAcumulador)
).subscribe(console.log);

//Implementacion de patron Redux 


interface Usuario {
    id?: string;
    autenticado?: boolean;
    token?: string;
    edad?: number;
}

//Estado
const user: Usuario[] = [
    { id: 'fher', autenticado: false, token: null },
    { id: 'fher', autenticado: true, token: 'ABC' },
    { id: 'fher', autenticado: true, token: 'ABC123'},
];

//Procesamiento
const state$ = from( user ).pipe(
    //scan: igual que reduce, pero scan emite en cada iteracion el acumulador
    scan<Usuario>( (acumulador, actual) => {
        return { ...acumulador, ...actual }
    }, {edad: 33}),
);

const id$ = state$.pipe(
    map( state => state.id )
);

//Salida
id$.subscribe(console.log)
