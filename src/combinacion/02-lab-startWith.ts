import { ajax } from "rxjs/ajax";
import { startWith } from "rxjs/operators";


//Referencias
const loadingDiv = document.createElement('div');
loadingDiv.classList.add('loading');
loadingDiv.innerText = 'Cargando...';

const body = document.querySelector('body');

//Stream
ajax.getJSON('https://reqres.in/api/userts/2?delay=3').pipe(
    startWith(true)
).subscribe(resp => {
    if( resp === true ){
        body.appendChild( loadingDiv );
    }else{
        document.querySelector('.loading').remove();
    }
    console.log(resp);
});