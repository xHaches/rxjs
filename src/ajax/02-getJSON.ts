import { ajax } from "rxjs/ajax";



const url = 'https://httpbin.org/delay/1';

const obs$ = ajax.getJSON( url, {
    //HEADERS: configuracion de lo que quieres mandarle al servidor
    'Content-Type': 'application/json',
    'mi-token': 'ABC123'
} );

obs$.subscribe( data => console.log('data:', data) );