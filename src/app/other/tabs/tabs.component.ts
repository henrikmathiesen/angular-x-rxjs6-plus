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
        // Content Children ready in this hook
        this.tabComponents.forEach(v => console.log(v));
    }
}
