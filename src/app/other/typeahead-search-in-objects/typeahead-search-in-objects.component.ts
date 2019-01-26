import { Component } from '@angular/core';
import { AdressesService } from 'app/services';

@Component({
  templateUrl: './typeahead-search-in-objects.component.html'
})
export class TypeaheadSearchInObjectsComponent {

  constructor(
    private adressesService: AdressesService
  ) { }

}
