import { fromEvent } from 'rxjs';
import { map, tap } from 'rxjs/operators';

const texto = document.createElement('div');

texto.innerHTML = `
Voluptate mollit laboris Lorem ipsum anim veniam officia deserunt. Incididunt do do laborum anim ex aliqua cupidatat ad est aliquip. Laboris non cillum cillum aliqua duis consectetur sunt mollit deserunt. Ex consectetur mollit cupidatat occaecat et dolore minim nostrud. Fugiat nostrud in nisi laborum exercitation minim. Elit labore nulla proident fugiat laboris nulla sit aliqua tempor sint aliquip.
<br>
<br>
Voluptate mollit laboris Lorem ipsum anim veniam officia deserunt. Incididunt do do laborum anim ex aliqua cupidatat ad est aliquip. Laboris non cillum cillum aliqua duis consectetur sunt mollit deserunt. Ex consectetur mollit cupidatat occaecat et dolore minim nostrud. Fugiat nostrud in nisi laborum exercitation minim. Elit labore nulla proident fugiat laboris nulla sit aliqua tempor sint aliquip.
<br>
<br>
Voluptate mollit laboris Lorem ipsum anim veniam officia deserunt. Incididunt do do laborum anim ex aliqua cupidatat ad est aliquip. Laboris non cillum cillum aliqua duis consectetur sunt mollit deserunt. Ex consectetur mollit cupidatat occaecat et dolore minim nostrud. Fugiat nostrud in nisi laborum exercitation minim. Elit labore nulla proident fugiat laboris nulla sit aliqua tempor sint aliquip.
<br>
<br>
Voluptate mollit laboris Lorem ipsum anim veniam officia deserunt. Incididunt do do laborum anim ex aliqua cupidatat ad est aliquip. Laboris non cillum cillum aliqua duis consectetur sunt mollit deserunt. Ex consectetur mollit cupidatat occaecat et dolore minim nostrud. Fugiat nostrud in nisi laborum exercitation minim. Elit labore nulla proident fugiat laboris nulla sit aliqua tempor sint aliquip.
<br>
<br>
Voluptate mollit laboris Lorem ipsum anim veniam officia deserunt. Incididunt do do laborum anim ex aliqua cupidatat ad est aliquip. Laboris non cillum cillum aliqua duis consectetur sunt mollit deserunt. Ex consectetur mollit cupidatat occaecat et dolore minim nostrud. Fugiat nostrud in nisi laborum exercitation minim. Elit labore nulla proident fugiat laboris nulla sit aliqua tempor sint aliquip.
<br>
<br>
Voluptate mollit laboris Lorem ipsum anim veniam officia deserunt. Incididunt do do laborum anim ex aliqua cupidatat ad est aliquip. Laboris non cillum cillum aliqua duis consectetur sunt mollit deserunt. Ex consectetur mollit cupidatat occaecat et dolore minim nostrud. Fugiat nostrud in nisi laborum exercitation minim. Elit labore nulla proident fugiat laboris nulla sit aliqua tempor sint aliquip.
<br>
<br>
Voluptate mollit laboris Lorem ipsum anim veniam officia deserunt. Incididunt do do laborum anim ex aliqua cupidatat ad est aliquip. Laboris non cillum cillum aliqua duis consectetur sunt mollit deserunt. Ex consectetur mollit cupidatat occaecat et dolore minim nostrud. Fugiat nostrud in nisi laborum exercitation minim. Elit labore nulla proident fugiat laboris nulla sit aliqua tempor sint aliquip.
<br>
<br>
Voluptate mollit laboris Lorem ipsum anim veniam officia deserunt. Incididunt do do laborum anim ex aliqua cupidatat ad est aliquip. Laboris non cillum cillum aliqua duis consectetur sunt mollit deserunt. Ex consectetur mollit cupidatat occaecat et dolore minim nostrud. Fugiat nostrud in nisi laborum exercitation minim. Elit labore nulla proident fugiat laboris nulla sit aliqua tempor sint aliquip.
<br>
<br>
Voluptate mollit laboris Lorem ipsum anim veniam officia deserunt. Incididunt do do laborum anim ex aliqua cupidatat ad est aliquip. Laboris non cillum cillum aliqua duis consectetur sunt mollit deserunt. Ex consectetur mollit cupidatat occaecat et dolore minim nostrud. Fugiat nostrud in nisi laborum exercitation minim. Elit labore nulla proident fugiat laboris nulla sit aliqua tempor sint aliquip.
<br>
<br>
Voluptate mollit laboris Lorem ipsum anim veniam officia deserunt. Incididunt do do laborum anim ex aliqua cupidatat ad est aliquip. Laboris non cillum cillum aliqua duis consectetur sunt mollit deserunt. Ex consectetur mollit cupidatat occaecat et dolore minim nostrud. Fugiat nostrud in nisi laborum exercitation minim. Elit labore nulla proident fugiat laboris nulla sit aliqua tempor sint aliquip.
<br>
<br>
Voluptate mollit laboris Lorem ipsum anim veniam officia deserunt. Incididunt do do laborum anim ex aliqua cupidatat ad est aliquip. Laboris non cillum cillum aliqua duis consectetur sunt mollit deserunt. Ex consectetur mollit cupidatat occaecat et dolore minim nostrud. Fugiat nostrud in nisi laborum exercitation minim. Elit labore nulla proident fugiat laboris nulla sit aliqua tempor sint aliquip.
`;

const body = document.querySelector('body').appendChild(texto);

const progressbar = document.createElement('div');

progressbar.setAttribute('class', 'progress-bar');

body.appendChild(progressbar);

//Funcion que haga el calculo
const calcularPorcentajeScroll = (event) => {
    const { 
        scrollTop,
        scrollHeight,
        clientHeight
    } = event.target.documentElement;
    return (scrollTop / ( scrollHeight - clientHeight ) * 100);
}


//Streams
const scroll$ = fromEvent<MouseEvent>(document, 'scroll');

// scroll$.subscribe()

const progress$ = scroll$.pipe(
    // map( event => calcularPorcentajeScroll(event))
    map( calcularPorcentajeScroll ),
    tap(console.log)
);

progress$.subscribe( porcentaje => {
    progressbar.style.width = `${porcentaje}%`;
});