import { ErrorHandler, Injectable } from '@angular/core';

/* 
import { ErrorHandler, Injectable, Injector, NgZone } from '@angular/core';
import { Router } from '@angular/router';
*/

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {

  /* 
    constructor(
        private injector: Injector
    ) { }

    handleError(error: Error) {
        const router = this.injector.get(Router);
        const ngZone = this.injector.get(NgZone);

        // and logging perhaps

        ngZone.run(() => {
            router.navigate(['/my-error-view']);
        });
    }
  */

  handleError() {
    console.log('GLOBAL ERROR HANDLER');
  }

}
