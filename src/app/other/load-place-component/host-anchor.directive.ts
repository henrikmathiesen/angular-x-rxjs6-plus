import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
    selector: '[appHostAnchor]',
})
export class HostAnchorDirective {
    constructor(
        public viewContainerRef: ViewContainerRef   // OBS public, we use from code in host.component
    ) { }
}
