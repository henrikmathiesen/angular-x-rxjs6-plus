import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { delay, switchMap } from 'rxjs/operators';

@Component({
    templateUrl: './switch-map-operator.component.html'
})
export class SwitchMapOperator implements OnInit {

    // https://blog.angular-university.io/rxjs-switchmap-operator/
    // https://medium.com/@w.dave.w/becoming-more-reactive-with-rxjs-flatmap-and-switchmap-ccd3fb7b67fa


    ngOnInit() {
        // this.testSimpleHttpCall();
        this.simulateSaveAndReload();

    }

    // "Let's simulate a request that saves some user data, 
    // and then reloads some other data that is impacted by that server-side modification."
    private simulateSaveAndReload() {
        const saveUser$ = this.simulateHttp("user saved", 1000);

        const httpResult$ = saveUser$.pipe(
            switchMap(sourceValue => {
                console.log(sourceValue);
                return this.simulateHttp("data reloaded", 2000);
            })
        );

        httpResult$.subscribe(
            console.log,
            console.error,
            () => console.log('completed httpResult$')
        );

        // "So as we can see the switchMap operator is a great way of doing one HTTP request 
        // using the output of an initial request here, so this is one common way that we can use it."

        // This is to avoid nested subscriptions
        // https://stackoverflow.com/questions/42888604/rxjs-observables-nested-subscriptions
    }

    private testSimpleHttpCall() {
        const http1$ = this.simulateHttp("1", 1000);
        const http2$ = this.simulateHttp("2", 1000);

        http1$.subscribe(
            console.log,
            console.error,
            () => console.log('http1$ completed')
        );

        http2$.subscribe(
            console.log,
            console.error,
            () => console.log('http2$ completed')
        );
    }

    private simulateHttp(val: string, delayMs: number) {
        return of(val).pipe(
            delay(delayMs)
        );
    }

}
