import { Injectable, ComponentFactoryResolver, ComponentFactory } from '@angular/core';

import { FormItem100Component } from './form-item-100/form-item-100.component';
import { FormItem200Component } from './form-item-200/form-item-200.component';
import { FormItemInterface } from './form-item.interface';

@Injectable()
export class ComponentLoaderService {

    constructor(
        private componentFactoryResolver: ComponentFactoryResolver
    ) { }

    getComponentForNr(nr: number): ComponentFactory<FormItemInterface> {

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
