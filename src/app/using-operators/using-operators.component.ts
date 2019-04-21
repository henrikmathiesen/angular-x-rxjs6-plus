import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { map, filter, tap, mergeMap } from 'rxjs/operators';

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
        this.usingPipes();                                              // Much easier syntax
        this.usingCommonOperators();
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
}
