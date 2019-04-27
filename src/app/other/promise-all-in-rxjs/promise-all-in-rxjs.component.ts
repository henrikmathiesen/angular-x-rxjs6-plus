import { Component, OnInit } from '@angular/core';
import { concat, merge } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { concatMap } from 'rxjs/operators';

@Component({
    templateUrl: './promise-all-in-rxjs.component.html'
})
export class PromiseAllInRxjsComponent implements OnInit {

    url1 = 'https://jsonplaceholder.typicode.com/todos/1';
    url2 = 'https://jsonplaceholder.typicode.com/todos/2';
    url3 = 'https://jsonplaceholder.typicode.com/todos/3';

    ngOnInit() {
        // this.tryingConcat();
        // this.tryingConcatMap();
        // this.tryingConcatWithLoop();
    }

    private tryingConcat() {
        const source1$ = ajax.getJSON(this.url1);
        const source2$ = ajax.getJSON(this.url2);

        concat(source1$, source2$).subscribe(console.log);

        // The ajax calls run one after another, in order. Subscribe callback runs 2 times.
    }

    private tryingConcatMap() {
        const source1$ = ajax.getJSON(this.url1);
        const source2$ = ajax.getJSON(this.url2);

        source1$.pipe(
            concatMap((v) => {
                console.log(v);
                return source2$
            })
        )
            .subscribe(console.log);

        // The ajax calls run one after another, in order. We get result 1 and result 2 in different callbacks.
    }

    private tryingConcatWithLoop() {
        const images = ['1', '2', '3'];
        const sources = [];

        for (const i of images) {
            sources.push(ajax.getJSON(`https://jsonplaceholder.typicode.com/todos/${i}`));
        }

        concat(...sources).subscribe(console.log);

    }
}
