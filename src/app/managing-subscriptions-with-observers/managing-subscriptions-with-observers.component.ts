import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observer, of, Observable, interval, Subscription } from 'rxjs';
// import { allBooks, allReaders } from '../data';

@Component({
    templateUrl: './managing-subscriptions-with-observers.component.html'
})
export class ManagingSubscriptionsWithObserversComponent implements OnInit, OnDestroy {

    timesSubscription: Subscription;

    ngOnInit() {
        // Observer basics
        this.observerObject();              // We can create an observer in 2 ways, 1
        this.observerCallback();            // We can create an observer in 2 ways, 2
        this.observerVsSubscriber();

        // Multiple Observers
        this.multipleObservers();

        // Canceling with Unsubscribe
        this.unsubscribe();
    }

    ngOnDestroy() {
        this.unSub();
    }

    // #region Observer Basics

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
        // this is the most common syntax

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

    // #region Multiple Observers

    private multipleObservers() {

        // we get better intellisence using this syntax VS Observable.create
        const currentTime$ = new Observable(subscriber => {
            const time = new Date().toLocaleTimeString(); // removes GMT info
            subscriber.next(time);
            subscriber.complete();
        });

        currentTime$.subscribe(t => console.log(`Observer 1: ${t}`));

        setTimeout(() => {
            currentTime$.subscribe(t => console.log(`Observer 2: ${t}`));
        }, 1000);

        setTimeout(() => {
            currentTime$.subscribe(t => console.log(`Observer 3: ${t}`));
        }, 2000);

        // We get different times (one second apart), which proves that its different executions
    }

    // #endregion

    // #region Canceling with Unsubscribe

    private unsubscribe() {
        const times$ = interval(2000);
        this.timesSubscription = times$.subscribe(
            v => console.log(v),
            null,
            () => console.log('all done')   // wont run when we call unsubscribe
        );

        // Side Note: if we do this, the call to unsibscribe bellow will cancel both. One extra line here, vs one extra line bellow...
        // this.timesSubscription.add(anotherSubscription);
    }

    unSub() {
        console.log('unsub');
        this.timesSubscription.unsubscribe();
    }

    // #endregion
}
