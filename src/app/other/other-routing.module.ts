import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TypeaheadSearchInObjectsComponent } from './typeahead-search-in-objects/typeahead-search-in-objects.component';

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
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class OtherRoutingModule { }
