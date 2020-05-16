import { ajax, AjaxError } from 'rxjs/ajax';
import { pluck, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

const url = 'https://api.github.com/users?per_page=5';

const atrapaError = (err: AjaxError) => {
    console.log('error en :>> ', err.message );
    return of([]);
}

//ajax(url): peticion ajax más facil de leer a comparacion de un fetch
ajax(url).pipe(
    pluck('response'),
    //catchError(function): retorna un observable, el ajax termina cuando el observable retornado termina
    catchError( atrapaError)
).subscribe(console.log);