import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TypeaheadSearchInObjectsComponent } from './typeahead-search-in-objects/typeahead-search-in-objects.component';
import { PromiseAllInRxjsComponent } from './promise-all-in-rxjs/promise-all-in-rxjs.component';
import { CatchPromiseComponent } from './catch-promise/catch-promise.component';
import { CatchErrorTryAgainComponent } from './catch-error-try-again/catch-error-try-again.component';
import { SwitchMapOperatorComponent } from './switch-map-operator/switch-map-operator.component';
import { HowToLoveRxjsComponent } from './how-to-love-rxjs/how-to-love-rxjs.component';

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
            },
            {
                path: 'switch-map-operator',
                component: SwitchMapOperatorComponent
            },
            {
                path: 'how-to-love-rxjs',
                component: HowToLoveRxjsComponent
            }
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class OtherRoutingModule { }
