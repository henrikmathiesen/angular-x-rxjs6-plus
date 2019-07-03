import { Component } from '@angular/core';
import { ajax } from 'rxjs/ajax';

@Component({
    templateUrl: './catch-error-try-again.component.html'
})
export class CatchErrorTryAgainComponent {

    countDown = 6;

    makeAjaxRequest() {
        const url = 'https://jsonplaceholder.typicode.comxxx/todos/1';

        ajax.getJSON(url)
            .subscribe(
                v => console.log(v),
                e => this.tryAgainAfterSec()
            )
        
    }

    private tryAgainAfterSec() {
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
