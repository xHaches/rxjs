import { interval, fromEvent } from 'rxjs';
import { take, exhaustMap } from 'rxjs/operators';



const interval$ = interval(500).pipe(take(3));
const click$ = fromEvent(document, 'click');

click$.pipe(
    //exhaustMap() emite un observable(su valor), una suscripcion a la vez, si en medio de la emision de un observable llega otro, este nuevo será ignorado completamente, operador de aplanamiento
    //Util para elementos que lanzan muchos eventos rapidamente y que nosotros podemos ignorar, por ejemplo un formulario y que se envie con un boton y la persona presiona el boton varias veces, exhaustMap evitaria problemas de doble submit
    exhaustMap( () => interval$ )
).subscribe( console.log );
