import { Observable, Observer } from 'rxjs';

const observer:Observer<any> = {
    next: value => console.log('next:', value),
    error: error => console.warn('error:', error),
    complete: () => console.info('completado')
};

const intervalo$ = new Observable<number>(subscriber => {

    //Crear un contador 1,2,3,4.......
    let contador:number = 0;
    const intervalo = setInterval( () => {
        //Cada segundo
        subscriber.next(contador);
        contador+=1;
        console.log(contador);
    }, 1000);

    setTimeout(() =>{
        subscriber.complete();
    }, 2500);

    //Codigo que se ejecuta cuando se llama a unsubscribe
    return () => {
        clearInterval(intervalo);
        console.log('intervalo destruido');
    }
});

const subscription1 = intervalo$.subscribe(observer);
const subscription2 = intervalo$.subscribe(observer);
const subscription3 = intervalo$.subscribe(observer);

subscription1.add( subscription2 )
             .add( subscription3 );

setTimeout(() =>{
    subscription1.unsubscribe();
    // subscription2.unsubscribe();
    // subscription3.unsubscribe();
    console.log('Completado timeout');
}, 3000);