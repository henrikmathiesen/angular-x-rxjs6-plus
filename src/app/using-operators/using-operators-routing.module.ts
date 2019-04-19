import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsingOperatorsComponent } from './using-operators.component';

const routes: Routes = [
    {
        path: 'using-operators',
        component: UsingOperatorsComponent
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UsingOperatorsRoutingModule { }
