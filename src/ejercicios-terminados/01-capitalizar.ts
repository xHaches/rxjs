import { of, from } from 'rxjs';
import { map } from 'rxjs/operators';
/**
 * Ejercicio: 
 * El objetivo de es realizar la misma impresión, pero usando observables
 * Nota: NO hay que usar el ciclo "FOR OF", usar un observable y llamar la función capitalizar
 */

/**
 * Salida esperada:
 * Batman
 * Joker
 * Doble Cara
 * Pingüino
 * Hiedra Venenosa
 */
(() =>{


    const nombres = ['batman', 'joker', 'doble cara', 'pingüino', 'hiedra venenosa'];
  
    const capitalizar = (nombre: string) => nombre.replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
  
    // Cambiar este FOR OF, por un observable y capitalizar las emisiones
    for( let nombre of nombres ) {
        console.log( capitalizar(nombre), 'desde el for OF' )
    }


    //con from
    const nombresFrom$ = from(nombres);
    //con of
    const nombresOf$ = of(...nombres);

    nombresFrom$.pipe(
        map<string, string>( capitalizar )
    ).subscribe({
        next: nombre => console.log(nombre, 'Desde un observable')
    });
  
  
  
  
  
  
  
  })();
  
  