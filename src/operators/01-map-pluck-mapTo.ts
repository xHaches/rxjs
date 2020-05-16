import { range, fromEvent } from 'rxjs';
import { map, pluck, mapTo } from 'rxjs/operators';

// range(1.5).pipe(
//     map<number, string>( val => (val*10).toString() )
// )
// .subscribe();

const keyup$ = fromEvent<KeyboardEvent>(document, 'keyup');
//map
const keyupkey$ = keyup$.pipe(
    map<KeyboardEvent, string>(val => val.code)
    );
    
//pluck
const keyupPluck$ = keyup$.pipe(
    pluck<KeyboardEvent, string>('target')//en el string va el nombre de la propiedad que quieres retornar
    );
    
//pluck en objetos anidados
const keyupPluckAnidado$ = keyup$.pipe(
    pluck<KeyboardEvent, string>('target', 'baseURI')//en el caso de objetos anidados en vez de usar notacion . es con ,
    );
    
//mapTo
const keyupmapto$ = keyup$.pipe(
    mapTo<KeyboardEvent, string>('Tecla presionada')//recibe un dato y lo transforma a lo que este dentro del parentesis,puede ser cualquier dato
);

keyup$.subscribe( console.log );
keyupkey$.subscribe( val => console.log('map', val));
keyupPluck$.subscribe( val => console.log('pluck', val));
keyupPluckAnidado$.subscribe( val => console.log('key dentro de key', val));
keyupmapto$.subscribe( val => console.log('mapTo', val));