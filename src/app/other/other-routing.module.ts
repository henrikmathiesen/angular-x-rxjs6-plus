import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TypeaheadSearchInObjectsComponent } from './typeahead-search-in-objects/typeahead-search-in-objects.component';
import { PromiseAllInRxjsComponent } from './promise-all-in-rxjs/promise-all-in-rxjs.component';
import { CatchPromiseComponent } from './catch-promise/catch-promise.component';
import { CatchErrorTryAgainComponent } from './catch-error-try-again/catch-error-try-again.component';
import { SwitchMapOperatorComponent } from './switch-map-operator/switch-map-operator.component';
import { HowToLoveRxjsComponent } from './how-to-love-rxjs/how-to-love-rxjs.component';
import { HostComponent } from './load-place-component/host/host.component';
import { IndexIntoArrayObjectComponent } from './index-into-array-object/index-into-array-object.component';
import { TabsComponent } from './tabs/tabs.component';

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
            },
            {
                path: 'load-place-component',
                component: HostComponent
            },
            {
                path: 'index-into-array-object',
                component: IndexIntoArrayObjectComponent
            },
            {
                path: 'tabs',
                component: TabsComponent
            }
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class OtherRoutingModule { }
