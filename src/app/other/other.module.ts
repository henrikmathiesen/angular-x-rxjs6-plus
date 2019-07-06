import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { OtherRoutingModule } from './other-routing.module';
import { TypeaheadSearchInObjectsComponent } from './typeahead-search-in-objects/typeahead-search-in-objects.component';
import { PromiseAllInRxjsComponent } from './promise-all-in-rxjs/promise-all-in-rxjs.component';
import { CatchPromiseComponent } from './catch-promise/catch-promise.component';
import { CatchErrorTryAgainComponent } from './catch-error-try-again/catch-error-try-again.component';
import { HowToLoveRxjsComponent } from './how-to-love-rxjs/how-to-love-rxjs.component';

@NgModule({
    declarations: [
        TypeaheadSearchInObjectsComponent,
        PromiseAllInRxjsComponent,
        CatchPromiseComponent,
        CatchErrorTryAgainComponent,
        HowToLoveRxjsComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        NgbModule,
        OtherRoutingModule
    ]
})
export class OtherModule { }
