import { Component } from '@angular/core';

@Component({
    templateUrl: './host.component.html'
})
export class HostComponent {
    // https://angular.io/guide/dynamic-component-loader

    loadComponent(nr: number) {
        console.log(nr);
    }
}
