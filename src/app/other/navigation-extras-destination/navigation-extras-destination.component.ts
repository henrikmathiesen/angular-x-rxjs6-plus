import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    templateUrl: './navigation-extras-destination.component.html'
})
export class NavigationExtrasDestinationComponent {

    constructor(
        private router: Router
    ) {
        this.model = this.router.getCurrentNavigation().extras && this.router.getCurrentNavigation().extras.state ? this.router.getCurrentNavigation().extras.state : null;
        console.log(this.model);
    }

    model: any;

}
