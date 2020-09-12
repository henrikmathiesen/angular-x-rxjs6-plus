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

    activeTab = 0;

    ngAfterContentInit() {
        this.setIdentifierForContentChildren();
        this.setActiveTabForContentChildren();
    }

    private setIdentifierForContentChildren() {
        this.tabComponents.forEach((tabC, i) => {
            tabC.id = this.getIdentifierTab(i);
            tabC.ariaLabelledby = this.getIdentifierButton(i);
        });
    }

    private setActiveTabForContentChildren() {
        this.tabComponents.forEach(tabC => tabC.isVisible = false);
        this.tabComponents.toArray()[this.activeTab].isVisible = true;
    }

    private setFocusOnActiveTabHeader() {
        // const activeTabId = this.getIdentifierTab(this.activeTab);
        // const $selector = document.querySelector(`#${activeTabId} h3`);

        setTimeout(() => {
            // ($selector as any).focus();
            this.tabComponents.toArray()[this.activeTab].setFocusOnTabHeader();
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

    setActiveTab(i: number) {
        this.activeTab = i;
        this.setActiveTabForContentChildren();
        this.setFocusOnActiveTabHeader();
    }
}
