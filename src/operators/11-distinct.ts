import { of, from } from 'rxjs';
import { distinct } from 'rxjs/operators';


const numeros$ = of<number | string>(1,'1',1,1,3,3,2,2,4,4,5,3,1);

numeros$.pipe(
    //distinct(): solo dejara pasar las emisiones cuyos valores no han sido previamente emitidos
    distinct() // utiliza el === por lo tanto 1 != '1'
)
.subscribe(console.log);

interface Personaje {
    nombre: string;
}

const personajes: Personaje[] = [ 
    {
        nombre: 'Luisin'
    },
    {
        nombre: 'Luisin1'
    },
    {
        nombre: 'Luisin2'
    },
    {
        nombre: 'Luisin'
    },
    {
        nombre: 'Luisin4'
    },
    {
        nombre: 'Luisin'
    },
    {
        nombre: 'Luisin6'
    },
    {
        nombre: 'Luisin'
    },
    {
        nombre: 'Luisin8'
    },
    {
        nombre: 'Luisin'
    },
    {
        nombre: 'Luisin10'
    },
    {
        nombre: 'Luisin'
    }
];

from( personajes ).pipe(
    //Para objetos
    distinct( p => p.nombre )
)
.subscribe(console.log);