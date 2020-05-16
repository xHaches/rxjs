import { fromEvent, Observable } from 'rxjs';
import { debounceTime, map, pluck, mergeAll } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';
import { GithubUser } from '../interfaces/github-user.interface';
import { GithubUsersResponse } from '../interfaces/github-users.interface';



//Referencias
const body = document.querySelector('body');
const textInput = document.createElement('input');
const orderedList = document.createElement('ol');
body.append(textInput, orderedList);

//Helpers
const mostrarUsuarios = (usuarios: GithubUser[]) => {
    console.log(usuarios);
    orderedList.innerHTML = '';

    for( const usuario of usuarios){
        const li = document.createElement('li');
        const img = document.createElement('img');
        img.src = usuario.avatar_url;

        const anchor = document.createElement('a');
        anchor.href = usuario.html_url;
        anchor.text = 'Ver Página';
        anchor.target = '_blank';

        li.appendChild( img );
        li.append( usuario.login + ' ' );
        li.append( anchor );

        orderedList.append( li );

    }
}


//Streams
//Lo importante en los tipados es el inicio y el final
//inicio
const input$ = fromEvent<KeyboardEvent>(textInput, 'keyup');

input$.pipe(
    debounceTime<KeyboardEvent>(500),
    pluck<KeyboardEvent, string>('target', 'value'),
    map<string, Observable<GithubUsersResponse>>( texto => ajax.getJSON(
            `https://api.github.com/search/users?q=${ texto }`
        )),
        //mergeAll(): se suscribe al observable retornado y retornar un nuevo observable, aunque en realidad emite el valor producto de la suscripcion interna eso hacen los operadores de aplanamiento, y cuando se completen todos también se va a completar
        mergeAll<GithubUsersResponse>(),
        //final
        pluck<GithubUsersResponse, GithubUser[]>('items')
).subscribe( mostrarUsuarios );