import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TypeaheadSearchInObjectsComponent } from './typeahead-search-in-objects/typeahead-search-in-objects.component';
import { PromiseAllInRxjsComponent } from './promise-all-in-rxjs/promise-all-in-rxjs.component';
import { CatchPromiseComponent } from './catch-promise/catch-promise.component';
import { CatchErrorTryAgainComponent } from './catch-error-try-again/catch-error-try-again.component';

const routes: Routes = [
    {
        path: 'other',
        children: [
            {
                path: '',
                redirectTo: 'typeahead-search-in-objects',
                pathMatch: 'full',
            },
            {
                path: 'typeahead-search-in-objects',
                component: TypeaheadSearchInObjectsComponent
            },
            {
                path: 'promise-all-in-rxjs',
                component: PromiseAllInRxjsComponent
            },
            {
                path: 'catch-in-promise',
                component: CatchPromiseComponent
            },
            {
                path: 'catch-error-try-again',
                component: CatchErrorTryAgainComponent
            }
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class OtherRoutingModule { }
