import { of } from "rxjs";
import { ajax, AjaxError } from "rxjs/ajax";
import { catchError } from "rxjs/operators";



const url = 'https://httpbin.org/delay/1';

const manejaError = ( resp: AjaxError ) => {
    console.warn( 'error', resp.message );
    return of({
        ok: false,
        usuarios: []
    });
}

// const obs$ = ajax.getJSON( url).pipe(
//     catchError( manejaError )
// );
// const obs2$ = ajax( url).pipe(
//     catchError( manejaError )

const obs$ = ajax.getJSON( url);
const obs2$ = ajax( url);



obs$.pipe(
    catchError( manejaError )
).subscribe({
    next: val => console.log('val', val),
    error: err => console.log('error en subs', err),
    complete: () => console.log('complete')
});