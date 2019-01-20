import { Component, OnInit } from '@angular/core';
import { Observable, Observer, of, from, fromEvent, concat } from 'rxjs';

import { allBooks, allReaders } from 'app/data';
import { BookModel } from 'app/models';

@Component({
    templateUrl: './understanding-and-creating-observables.component.html'
})
export class UnderstandingAndCreatingObservablesComponent implements OnInit {

    /*
        There are 3 primary ways to create Observables (the last 2 are the most common)
            - Observable constructor
            - Via a function to create an Observable from existing data, like an array or a promise
            - Calling a function that returns an Observable in a library we are using (not demoed here)

        We can also handle events (like click events)

        Side note
            - In version 6 there are fewer locations from where to import different parts of RXJS
    */

    ngOnInit() {
        this.usingTheObservableConstructor();
        this.createObservableFromExistingData();
        // TODO promise

        this.handleAnEvent();
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

    private createObservableFromExistingData() {
        // of() is very flexible, provide a comma seperated list of values

        const source01$ = of('hello', 10, true, allReaders[0].name);
        const source02$ = of(allReaders);

        source01$.subscribe(v => console.log(v));
        source02$.subscribe(v => console.log(v)); // will log the array

        // from() , similar to of but pass it an object than encapsulate a group of values
        // it could be another Observable, a promise or an array (it will produce the individual values from the array)

        const source03$ = from(allReaders);
        source03$.subscribe(v => console.log(v));

        // combine Observables
        // it accepts the same arguments as the from() function
        // we chain subscribe directly to the function, we can always do that to functions that return an Observable
        concat(source01$, source03$)
            .subscribe(v => console.log(v));
    }

    private handleAnEvent() {
        const button = document.getElementById('readersButton');
        const readers = document.getElementById('readers');

        // it returns an Observable
        fromEvent(button, 'click')
            .subscribe((event) => {
                console.log(event);

                for (const r of allReaders) {
                    readers.innerHTML += `<li>${r.name}</li>`;
                }
            });
    }

}
