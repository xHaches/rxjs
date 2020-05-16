import { interval, concat, of } from 'rxjs'; //concat se importa de rx, el operador esta obsoleto
import { take } from 'rxjs/operators';


const interval$ = interval(1000);

//contat es una funcion: concatena síncronamente distintos obsevables, si no se completa el primero no se ejecuta el segundo y asi sucesivamente
concat(
    interval$.pipe( take(3) ),
    interval$.pipe( take(2) ),
    of(1)
).subscribe(console.log);