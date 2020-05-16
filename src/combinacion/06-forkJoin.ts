import { forkJoin, of } from "rxjs";
import { ajax } from "rxjs/ajax";
import { catchError } from 'rxjs/operators';


//Caso mas comun de forkJoin(): hacer peticiones ajas simultaneas
const GITHUB_API_URL = 'https://api.github.com/users';
const GITHUB_USER = 'xhaches';

forkJoin({
    usuario: ajax.getJSON(
        `${GITHUB_API_URL}/${GITHUB_USER}`
    ),
    repos: ajax.getJSON(
        `${GITHUB_API_URL}/${GITHUB_USER}/ilegallink`
    ).pipe(
        catchError( err => of([]))
    ),
    gists: ajax.getJSON(
        `${GITHUB_API_URL}/${GITHUB_USER}`
    )
}).pipe(
    catchError( err => of(err.message))
).subscribe(console.log);



