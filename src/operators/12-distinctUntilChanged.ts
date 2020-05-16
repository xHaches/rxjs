import { of, from } from 'rxjs';
import { distinct, distinctUntilChanged } from 'rxjs/operators';


const numeros$ = of<number | string>(1,'1',1,1,3,3,2,2,4,4,5,3,1);

numeros$.pipe(
    //distinctUntilChanged(): solo deja pasar si su valor anterior es distinto al actual
    distinctUntilChanged() // utiliza el === por lo tanto 1 != '1'
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
        nombre: 'Luisin10'
    }
];

from( personajes ).pipe(
    //Para objetos
    distinctUntilChanged( (ant, actual) => ant.nombre === actual.nombre )
)
.subscribe(console.log);