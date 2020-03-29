import { Injectable, ComponentFactoryResolver } from '@angular/core';

import { FormItem100Component } from './form-item-100/form-item-100.component';
import { FormItem200Component } from './form-item-200/form-item-200.component';

@Injectable()
export class ComponentLoaderService {

    constructor(
        private componentFactoryResolver: ComponentFactoryResolver
    ) { }

    getComponentForNr(nr: number) {

        switch (nr) {
            case 100: {
                return this.componentFactoryResolver.resolveComponentFactory(FormItem100Component);
            }
            case 200: {
                return this.componentFactoryResolver.resolveComponentFactory(FormItem200Component);
            }
        }

    }

}
