import { interval, fromEvent } from 'rxjs';
import { sample } from 'rxjs/operators';



const interval$ = interval(500);
const click$ = fromEvent(document, 'click');

interval$.pipe(
    //sample(observable): llama a otro observable y emite su valor actual, se termina cuando acaba el observable argumento
    sample(click$)
).subscribe(console.log);

