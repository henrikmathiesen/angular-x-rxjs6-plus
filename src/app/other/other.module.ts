import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { OtherRoutingModule } from './other-routing.module';
import { TypeaheadSearchInObjectsComponent } from './typeahead-search-in-objects/typeahead-search-in-objects.component';
import { PromiseAllInRxjsComponent } from './promise-all-in-rxjs/promise-all-in-rxjs.component';

@NgModule({
    declarations: [
        TypeaheadSearchInObjectsComponent,
        PromiseAllInRxjsComponent
    ],
    imports: [
        FormsModule,
        NgbModule,
        OtherRoutingModule
    ]
})
export class OtherModule { }
