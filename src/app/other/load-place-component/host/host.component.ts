import { Component, ViewChild } from '@angular/core';

import { HostAnchorDirective } from '../host-anchor.directive';
import { ComponentLoaderService } from '../component-loader.service';

@Component({
    templateUrl: './host.component.html'
})
export class HostComponent {
    // https://blog.angular-university.io/angular-ng-template-ng-container-ngtemplateoutlet/
    // https://angular.io/guide/dynamic-component-loader
    // OBS: add the factored components to entryComponents:[] in other.module

    @ViewChild(HostAnchorDirective, { static: true }) hostAnchor: HostAnchorDirective;

    constructor(
        private componentLoaderService: ComponentLoaderService
    ) { }

    loadComponent(nr: number) {
        console.log(nr);

        const viewContainerRef = this.hostAnchor.viewContainerRef;
        viewContainerRef.clear();

        const componentFactored = this.componentLoaderService.getComponentForNr(nr);
        const comp = viewContainerRef.createComponent(componentFactored);               // This is enough to place the component. But we store it in a reference for further testing.

        comp.instance.sayHi();                                                          // Like running a method on the placed component
    }
}
