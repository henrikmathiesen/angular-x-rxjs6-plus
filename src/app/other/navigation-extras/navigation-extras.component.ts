import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    templateUrl: './navigation-extras.component.html'
})
export class NavigationExtrasComponent implements OnInit {

    // https://medium.com/coding-in-depth/best-use-of-navigationextras-in-angular-7-plus-d5fb436e298e

    constructor(
        private router: Router,
        private activatedRoute: ActivatedRoute
    ) { }

    model: any;

    ngOnInit() { 
        this.model = { name: 'From Model', age: 20 };
    }

    goTo() {
        this.router.navigate(['../navigation-extras-destination'], { relativeTo: this.activatedRoute, state: this.model });
    }

}
