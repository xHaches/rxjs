import { of } from 'rxjs';
import { startWith, endWith } from 'rxjs/operators';


const numeros = of(1,2,3).pipe(
    //startWith(valor): envia al inicio de cada suscripcion el valor puesto como atributo
    startWith('a','b','c'),
    //endWith(valor): envia justo antes del complete el valor puesto como atributo
    endWith('x','y','z')
);

numeros.subscribe(console.log);
