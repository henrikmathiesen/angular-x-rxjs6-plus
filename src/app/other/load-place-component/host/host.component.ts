import { Component, ViewChild } from '@angular/core';

import { HostAnchorDirective } from '../host-anchor.directive';
import { ComponentLoaderService } from '../component-loader.service';

@Component({
    templateUrl: './host.component.html'
})
export class HostComponent {
    // https://angular.io/guide/dynamic-component-loader
    // OBS: add the factored components to entryComponents:[] in other.module

    @ViewChild(HostAnchorDirective) hostAnchor: HostAnchorDirective;

    constructor(
        private componentLoaderService: ComponentLoaderService
    ) { }

    loadComponent(nr: number) {
        console.log(nr);

        const viewContainerRef = this.hostAnchor.viewContainerRef;
        viewContainerRef.clear();

        const componentFactored = this.componentLoaderService.getComponentForNr(nr);
        viewContainerRef.createComponent(componentFactored); // TODO: get to methods on component (use an interface)
    }
}
