import { from } from 'rxjs';
import { distinctUntilChanged, distinctUntilKeyChanged } from 'rxjs/operators';



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
        nombre: 'Luisin10'
    }
];

from( personajes ).pipe(
    //distinctUntilKeyChanged para objetos pero su codigo es más simple
    distinctUntilKeyChanged('nombre')
)
.subscribe(console.log);