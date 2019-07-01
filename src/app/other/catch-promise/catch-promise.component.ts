import { Component, OnInit } from '@angular/core';

@Component({
    templateUrl: './catch-promise.component.html'
})
export class CatchPromiseComponent implements OnInit {

    url1 = 'https://jsonplaceholder.typicode.com/todos/1';
    url2 = 'https://jsonplaceholder.typicode.com/todos/2';
    url3 = 'https://jsonplaceholder.typicode.com/todos/3';

    // Heads up, 404 counts as success when using fetch. We use reject instead.

    ngOnInit() {
        this.usingCatch();

        // this.catchInLastPlaceOfPromiseChain();
    }

    private usingCatch() {
        const p = Promise.reject();

        p
            // .then(() => {
            //     console.log('SUCCESS CALLBACK')
            // }, () => {
            //     console.log('ERROR CALLBACK');
            //     throw 'err'
            // })
            .then(() => {
                console.log('SUCCESS CALLBACK');
            })
            // .catch(() => {
            //     // This will not run if ERROR CALLBACK -- unless we throw
            //     console.log('CATCH');
            //     throw 'error';
            // })
            .then(() => {
                // If error, this will not run
                // If error and error callback, this will run
                // If error, error callback and catch, this will run
                // If catch and throw it will not run

                // This will run even if error and no catch
                // If catch it still runs, but with throw it doesnt
                return fetch(this.url1);
            })
            .catch((e) => {
                // This will not run if ERROR CALLBACK
                // console.log('CATCH');

                console.log('CALL SERVICE, LOG TO DB');
                throw e; // stops then() chain
            })
            .catch(() => {
                console.log('REDIRECT TO ERROR PAGE');
                // https://hackernoon.com/promises-and-error-handling-4a11af37cb0e
            })
            .finally(() => {
                // Will always run
                console.log('FINALLY');
            });
    }

}
