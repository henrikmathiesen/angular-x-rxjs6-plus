import { Component, OnInit } from '@angular/core';
import { concat, merge, forkJoin } from 'rxjs';
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

        // this.tryingMerge();
        // this.tryingMergeWithLoop();

        // The problem with the above is that I want to run a callback when ALL is done
        // We can however use the complete callback (it will NOT run if error)

        // this.tryingForkJoin();
        this.tryingForkJoinWithLoop();
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

    private tryingMerge() {
        const source1$ = ajax.getJSON(this.url1);
        const source2$ = ajax.getJSON(this.url2);

        merge(source1$, source2$)
            .subscribe(
                console.log,
                e => console.log(e),
                () => console.log('complete')
            );

        // The ajax calls run in parallell. Subscribe callback runs 2 times. Order can be mixed.
        // can send in an argument that limits how many calls can run in parallell: https://rxjs-dev.firebaseapp.com/api/index/function/merge
    }

    private tryingMergeWithLoop() {
        const images = ['1', '2', '3'];
        const sources = [];

        for (const i of images) {
            sources.push(ajax.getJSON(`https://jsonplaceholder.typicode.com/todos/${i}`));
        }

        merge(...sources).subscribe(
            null,
            null,
            () => console.log('complete successfully, navigate...')
        );

        // Could be something...
    }

    private tryingForkJoin() {
        // It is like Promise.all , https://www.learnrxjs.io/operators/combination/forkjoin.html

        const source1$ = ajax.getJSON(this.url1);
        const source2$ = ajax.getJSON(this.url2);

        forkJoin(source1$, source2$)
            .subscribe(
                console.log
            )

        // Think we use this one :)
    }

    private tryingForkJoinWithLoop() {
        const images = ['1', '2', '3'];
        const sources = [];

        for (const i of images) {
            sources.push(ajax.getJSON(`https://jsonplaceholder.typicode.com/todos/${i}`));
        }

        forkJoin(...sources)
            .subscribe(
                (v) => {
                    console.log(v)
                    console.log('complete successfully, navigate...')
                }
            )

        // This will do
    }
}
