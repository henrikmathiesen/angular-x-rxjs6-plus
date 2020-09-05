import { AfterContentInit, Component, ContentChildren, Input, QueryList } from '@angular/core';

import { TabComponent } from '../tab/tab.component';

@Component({
    selector: 'app-tabs',
    templateUrl: './tabs.component.html',
    styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements AfterContentInit {

    @Input() id: string;
    @Input() ariaLabel: string;
    @ContentChildren(TabComponent) tabComponents!: QueryList<TabComponent>;

    ngAfterContentInit() {
        this.setIdentifierForContentChildren();
    }

    private setIdentifierForContentChildren() {
        this.tabComponents.forEach((tabC, i) => {
            tabC.id = this.getIdentifierTab(i);
            tabC.ariaLabelledby = this.getIdentifierButton(i);
        });
    }

    getIdentifierButton(i: number) {
        i += 1;
        return `tabs-${this.id}-tab-button-${i}`;
    }

    getIdentifierTab(i: number) {
        i += 1;
        return `tabs-${this.id}-tab-${i}`;
    }
}
