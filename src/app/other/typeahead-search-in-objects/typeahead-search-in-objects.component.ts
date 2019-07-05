import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';

import { AdressesService } from 'app/services';
import { AdressModel } from 'app/models';

@Component({
  templateUrl: './typeahead-search-in-objects.component.html'
})
export class TypeaheadSearchInObjectsComponent implements OnInit {

  model: string;
  adresses: AdressModel[] = [];

  constructor(
    private adressesService: AdressesService
  ) {
    this.search = this.search.bind(this);
  }

  ngOnInit() {
    this.adresses = this.adressesService.getAdresses();
  }

  // https://ng-bootstrap.github.io/#/components/typeahead/examples
  // https://ng-bootstrap.github.io/#/components/typeahead/api
  // Maybee delegate this to a service
  // If search would have fetched data from network call, use switchMap operator instead of map to save on http calls
  //  - https://www.learnrxjs.io/operators/transformation/switchmap.html
  //  - https://stackblitz.com/run?file=app/typeahead-http.ts
  //  - https://blog.angularindepth.com/when-to-use-switchmap-dfe84ac5a1ff
  search(text$: Observable<string>) {
    return text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      map((term: string) => {
        if (term.length < 2) {
          return [];
        }

        const matches = this.adresses.filter((adress) => {
          const cityMatch = adress.city.toLowerCase().indexOf(term.toLowerCase()) > -1;
          const streetMatch = adress.street.toLowerCase().indexOf(term.toLowerCase()) > -1;

          if (cityMatch || streetMatch) {
            return adress;
          }
        });

        return matches.slice(0, 10);
      })
    );
  }

  searchResultFormatter(result: AdressModel) {
    return `${result.street}, ${result.city}`;
  }

  checkModel() {
    console.log(this.model);
  }
}
