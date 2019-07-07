import { Component } from '@angular/core';
import { Subject, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
    templateUrl: './how-to-love-rxjs.component.html'
})
export class HowToLoveRxjsComponent {

    // https://medium.com/@m3po22/how-to-love-reactive-programming-and-not-hate-it-aed9d73db6ab

    // Build a search on input change

    // Normal old code
    // 1) Listen for an event, like keyup or change
    // 2) Do a search with the search term fetched from the event
    // 3) Render search result

    // RXJS: Think backwards
    // 1) Async pipe wants data to render
    // 2) The source of data needs a search term
    // 3) The search term comes from an event

    searchTermModel = '';

    // 2)
    private searchTerm$ = new Subject();

    // 1)
    data$ = this.searchTerm$.pipe(
        switchMap(
            term => of(term) // switch off from searchTerm$ and on to of()
        )
    );

    // 3)
    changeSearchTerm = term => this.searchTerm$.next(term);
}
