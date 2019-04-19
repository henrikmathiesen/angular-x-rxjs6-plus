import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { OtherRoutingModule } from './other-routing.module';
import { TypeaheadSearchInObjectsComponent } from './typeahead-search-in-objects/typeahead-search-in-objects.component';

@NgModule({
    declarations: [
        TypeaheadSearchInObjectsComponent
    ],
    imports: [
        FormsModule,
        NgbModule,
        OtherRoutingModule
    ]
})
export class OtherModule { }
