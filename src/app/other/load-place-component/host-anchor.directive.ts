import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
    selector: '[host-anchor]',
})
export class HostAnchorDirective {
    constructor(public viewContainerRef: ViewContainerRef) { 
        
    }
}
