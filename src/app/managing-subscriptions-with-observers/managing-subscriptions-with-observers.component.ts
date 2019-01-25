import { Component, OnInit } from '@angular/core';
import { Observer, of, Observable } from 'rxjs';

@Component({
    templateUrl: './managing-subscriptions-with-observers.component.html'
})
export class ManagingSubscriptionsWithObserversComponent implements OnInit {

    ngOnInit() {
        // Observer basics
        this.observerObject();              // We can create an observer in 2 ways, 1
        this.observerCallback();            // We can create an observer in 2 ways, 2
        this.observerVsSubscriber();
    }

    // #region Observer basics

    private observerObject() {
        const myObserver: Observer<any> = {
            next: v => console.log(v),
            error: e => console.log(e),
            complete: () => console.log('complete')
        };

        const myObservable$ = of([1, 2, 3]);
        myObservable$.subscribe(myObserver);
    }

    private observerCallback() {
        // using this way, an observer object is created behind the scenes

        const myObservable$ = of([1, 2, 3]);
        myObservable$.subscribe(
            v => console.log(v),
            e => console.log(e),                // optional
            () => console.log('complete')       // optional
        );
    }

    private observerVsSubscriber() {
        // lets say we have an array of numbers that we want produced by an Observable
        const numbers = [1, 2, 3];

        // We can create Observables from scratch by passing a function to the Observable constructor
        // That function takes a subscriber as a parameter, it is an object that implements the Observer interface
        // and is used to push values to observers by calling next(), error() and complete()
        const numberObservable$ = new Observable((subscriber: Observer<any>) => {
            if (numbers.length === 0) {
                subscriber.error('No values');
            }

            for (const num of numbers) {
                subscriber.next(num);
            }

            subscriber.complete();
        });

        // So, the Observer interface is used in 2 ways
        // - above it is used to produce values from an Observable
        // - and when we subscribe to an Observable, it is used on an Observer to receive those values, bellow

        const theObserver: Observer<any> = {
            next: v => console.log(v),
            error: e => console.log(e),
            complete: () => console.log('complete')
        };

        numberObservable$.subscribe(theObserver);

        // OR observer callback

        numberObservable$.subscribe(
            v => console.log(v),
            e => console.log(e),                // optional
            () => console.log('complete')       // optional
        );
    }

    // #endregion
}
