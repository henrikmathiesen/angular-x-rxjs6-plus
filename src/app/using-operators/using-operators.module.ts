import { NgModule } from '@angular/core';

import { UsingOperatorsRoutingModule } from './using-operators-routing.module';
import { UsingOperatorsComponent } from './using-operators.component';

@NgModule({
    declarations: [
        UsingOperatorsComponent,
    ],
    imports: [
        UsingOperatorsRoutingModule
    ]
})
export class UsingOperatorsModule { }
