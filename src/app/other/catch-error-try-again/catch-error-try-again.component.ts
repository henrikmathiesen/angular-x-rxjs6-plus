import { Component } from '@angular/core';
import { of } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { catchError } from 'rxjs/operators';

@Component({
    templateUrl: './catch-error-try-again.component.html'
})
export class CatchErrorTryAgainComponent {

    countDown = 6;

    makeAjaxRequest() {
        const url = 'https://jsonplaceholder.typicode.comxxx/todos/1';

        // This works. But it could be the case that a custom globalErrorHandler will handle the error
        // making the error callback NOT run (need to test that of course)

        // ajax.getJSON(url)
        //     .subscribe(
        //         v => console.log('success', v),
        //         e => this.tryAgainAfterCountDown()
        //     );

        // For the reasons above, we are going to catch it here instead, so globalErrorHandler is NOT run

        ajax.getJSON(url)
            .pipe(
                catchError(() => {
                    this.tryAgainAfterCountDown();
                    return of(null);
                })
            )
            .subscribe(
                v => console.log('success', v)
            );

        // Also, RXJS has an interval function, see managing-subscriptions-with-observers.component
    }

    private tryAgainAfterCountDown() {
        const interval = setInterval(() => {
            if (this.countDown === 0) {
                clearInterval(interval);
                this.countDown = 6;
                this.makeAjaxRequest();
                return;
            }

            this.countDown -= 1;
        }, 1000);
    }

}
