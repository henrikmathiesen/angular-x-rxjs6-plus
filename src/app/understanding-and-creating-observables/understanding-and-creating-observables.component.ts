import { Component, OnInit } from '@angular/core';
import { Observable, Observer } from 'rxjs';

import { allBooks } from 'app/data';
import { BookModel } from 'app/models/book.model';

@Component({
    templateUrl: './understanding-and-creating-observables.component.html'
})
export class UnderstandingAndCreatingObservablesComponent implements OnInit {

    /*
        There are 3 primary ways to create Observables (the last 2 are the most common)
            - Observable constructor
            - Via a function to create an Observable from an array or a promise
            - Calling a function that returns an Observable in a library we are using

        Side note
            - In version 6 there are fewer locations from where to import different parts of RXJS
    */

    ngOnInit() {
        this.usingTheObservableConstructor();
    }

    private usingTheObservableConstructor() {
        // Executing an Observable is really only executing this function
        // But an Observable is not executed until an object subscribes to it (important)
        const subscribe = (subscriber: Observer<BookModel>) => {
            for (const book of allBooks) {

                if (book.title === 'The Hobbit') {
                    // Once error or complete is called, no new values will be produced
                    // Dont need to call complete if error is called
                    // subscriber.error('Error: Book Title');
                    // return () => console.log('Tear down code that will run after complete or error is called');
                }

                subscriber.next(book);
            }

            subscriber.complete();
            return () => console.log('Tear down code that will run after complete or error is called');
        };

        // can also use Observable.create(subscribe)
        const allBooksObservable$ = new Observable(subscribe);

        // When executing subscribe here, we are really executing the subscribe function above
        // The function book => ... is passed the values produced by the Observable
        allBooksObservable$.subscribe(book => console.log(book));
    }

}
