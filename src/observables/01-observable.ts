import { Observable, Observer } from 'rxjs';

const observer:Observer<any> = {
    next: value => console.log('next:', value),
    error: error => console.log('error:', error),
    complete: () => console.log('completado')
}

// const obs$ = Observable.create();
const obs$ = new Observable<string|number>(subscriber => {
    subscriber.next('hola');
    subscriber.next('mundo');
    subscriber.next('hola');
    subscriber.next(1);
    
    subscriber.complete();
    
    subscriber.next('hola');
    subscriber.next('mundo');
});

obs$.subscribe( observer );