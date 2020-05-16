import { ajax } from "rxjs/ajax";



const url =  'https://httpbin.org/delay/1';

ajax.get(url, {
    //configuracion de los headers
});
ajax.delete(url, {
    //configuracion de los headers
});
ajax.put(url, {
    //configuracion de los headers
});
ajax.post(url, {
    //cuerpo del envio
    id: 1,
    nombre: 'luisin'
}, {
    'mi-token': 'ABC123'
}).subscribe( console.log );


//peticiones ajax con dinamismo (saber que necesito hacer)
ajax({
    url,
    //Cambiar la palabra por un PUT o DELETE
    method: 'POST',
    headers: {
        'mi-token': 'ABC123'
    },
    body: {
        id: 1,
        nombre: 'luisin'
    }
}).subscribe(console.log);