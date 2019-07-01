import { Component, OnInit } from '@angular/core';
import { of, throwError, Observable } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { map, filter, tap, mergeMap, catchError, take } from 'rxjs/operators'; // takeUntil

@Component({
    templateUrl: './using-operators.component.html'
})
export class UsingOperatorsComponent implements OnInit {

    /*
        Operators are functions that takes some configuration information and return functions
        The function returned takes an Observable as a parameter and returns a new Observable
    */

    ngOnInit() {
        this.manuallyApplyingOperators();
        this.usingPipes();                                              // Much easier syntax than manually applying
        this.usingCommonOperators();
        this.errorHandling();
        this.controllingTheNumberOfValues();
    }

    private manuallyApplyingOperators() {
        const source$ = of(1, 2, 3, 4, 5);

        // map operator takes a function that will be applied to each value produces by the source Observable
        // The function basicly configures how the map operator will behave
        // The map operator will return a new function, captured here in the doubler variable
        // The doubler function takes an Observable and returns a new Observable
        const doubler = map((v: number) => v * 2);
        const doubled$ = doubler(source$);
        doubled$.subscribe(v => console.log(v));

        //
        // Lets see if we can write it in a more compact way

        const theSources$ = of(10, 20);
        map((v: number) => v * 2)(theSources$).subscribe(v => console.log(v));

        //
        // Teacher says that in actuall uses you dont want to apply operators this way
        // It is better to use .pipe(), it is more compact and chainable
    }

    private usingPipes() {
        /*
            Old syntax before RXJS 5.5

            const source$ = of(1, 2, 3, 4, 5);

            source$
                .map(v => v * 2)
                .anotherOperator(...)
                .subscribe(v => console.log(v));
        */


        // New syntax

        const source$ = of(1, 2, 3, 4, 5);

        source$.pipe(
            map(v => v * 2),
            filter(v => v >= 5)
        )
            .subscribe(v => console.log('using pipes: ' + v)); // 6, 8, 10 (first values are doubled, then filtered)
    }

    private usingCommonOperators() {
        const url = 'https://jsonplaceholder.typicode.com/todos';

        ajax(url)
            .pipe(
                mergeMap(v => v.response),
                tap((v: any) => console.log(v.completed)),
                filter((v: any) => v.completed === true),
                // map(({ title, completed }) => ({ title, completed })) , untyped
                map((v: { title: string, completed: boolean }) => ({ title: v.title, completed: v.completed })), // typed
            )
            .subscribe(v => console.log(v));

        // mergeMap flattens the response
        // We could have used ajax.getJSON (see understanding-and-creating-observables) to get directly to the response object
        // Also flatMap is an alias for mergeMap

        // tap is usefull for listening on the values, before and after transformations...

        /*
            For several xxxMap operators there is a xxx operator, for example mergeMap and merge
            These are deprecated in favour for the static versions, which are imported from 'rxjs'
            import { merge } from 'rxjs';
            import { mergeMap } from 'rxjs/operators';

            I dont know what the differences are ...
            But xxxMap seams to be operators that transforms/manipulate in some way
        */
    }

    private errorHandling() {
        const url = 'https://jsonplaceholder.typicode.com/todos';

        ajax(url)
            .pipe(
                catchError((e, caught) => {
                    // caught is the Observable causing the error, if we return caught, the logic will try again (could be handy?)

                    console.log('CATCH ERROR: ' + e, caught);

                    // This is a recover and will make the success callback run
                    // return of({ response: [ { title: 'foo' } ] });

                    // Can throw error with vanilla javascript, this will make the error callback run
                    // throw 'Something bad happened: ' + e;

                    // Behaves the same as throw
                    return throwError(e);
                })
            )
            .subscribe(
                v => console.log('SUCCESS CALLBACK: ' + v.response[0].title),
                e => console.log('ERROR CALLBACK: ' + e)
            );

        /*

            Workflow (perhaps):
                - Can log to database in error callback / redirect to error page / show error panel
                - Or log to database in catchError and return some form of data that the success callback can process

            With Angular Global Error Handler
                - Log to database in it and redirect to error page
                - No need for catchError nor error callback here

            With Angular Global Error Handler and wanting to display a special message panel for one specific error
                - catchError, run logic for displaying message panel, then return of(null) or something similar to not trigger Global Error Handler

        */
    }

    private controllingTheNumberOfValues() {
        const timer$ = new Observable(subscriber => {
            let i = 0;

            const intervalId = setInterval(() => {
                subscriber.next(i++);
            }, 1000);

            return () => {
                console.log('CLEARING INTERVAL');
                clearInterval(intervalId);
            };
        });

        const sub = timer$
            .pipe(
                take(2)
                // takeUntil() , can send in for example fromEvent(selector, 'click')
            )
            .subscribe(
                v => console.log('TIMER: ' + v),
                null,
                () => console.log('all done')
            );

        // This will unsubscribe AND clearing the interval, but done callback will NOT run
        // setTimeout(() => {
        //     sub.unsubscribe();
        // }, 5000);

        // take() will take an ammount of values, clearing interval AND done callback will run
    }
}
