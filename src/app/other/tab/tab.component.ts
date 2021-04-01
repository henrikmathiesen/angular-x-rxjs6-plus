import { Component, Input, ViewChild, ElementRef } from '@angular/core';

@Component({
    selector: 'app-tab',
    templateUrl: './tab.component.html'
})
export class TabComponent {

    @ViewChild('tabHeader', { static: true }) tabHeader: ElementRef;
    @Input() header: string;

    id = '';
    ariaLabelledby = '';
    isVisible = false;

    setFocusOnTabHeader() {
        (this.tabHeader.nativeElement as HTMLElement).focus();
    }

}
