import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { OtherRoutingModule } from './other-routing.module';
import { TypeaheadSearchInObjectsComponent } from './typeahead-search-in-objects/typeahead-search-in-objects.component';
import { PromiseAllInRxjsComponent } from './promise-all-in-rxjs/promise-all-in-rxjs.component';
import { CatchPromiseComponent } from './catch-promise/catch-promise.component';
import { CatchErrorTryAgainComponent } from './catch-error-try-again/catch-error-try-again.component';
import { SwitchMapOperatorComponent } from './switch-map-operator/switch-map-operator.component';
import { HowToLoveRxjsComponent } from './how-to-love-rxjs/how-to-love-rxjs.component';

import { HostComponent } from './load-place-component/host/host.component';
import { FormItem100Component } from './load-place-component/form-item-100/form-item-100.component';
import { FormItem200Component } from './load-place-component/form-item-200/form-item-200.component';
import { HostAnchorDirective } from './load-place-component/host-anchor.directive';
import { ComponentLoaderService } from './load-place-component/component-loader.service';

import { IndexIntoArrayObjectComponent } from './index-into-array-object/index-into-array-object.component';
import { TabsComponent } from './tabs/tabs.component';

@NgModule({
    declarations: [
        TypeaheadSearchInObjectsComponent,
        PromiseAllInRxjsComponent,
        CatchPromiseComponent,
        CatchErrorTryAgainComponent,
        SwitchMapOperatorComponent,
        HowToLoveRxjsComponent,

        FormItem100Component,
        FormItem200Component,
        HostComponent,
        HostAnchorDirective,

        IndexIntoArrayObjectComponent,
        TabsComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        NgbModule,
        OtherRoutingModule
    ],
    providers: [
        ComponentLoaderService
    ],
    entryComponents: [                  // <--- OBS
        FormItem100Component,
        FormItem200Component
    ]
})
export class OtherModule { }
