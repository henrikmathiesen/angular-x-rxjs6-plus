import { Component, OnInit } from '@angular/core';

@Component({
    templateUrl: './promise-all-in-rxjs.component.html'
})
export class PromiseAllInRxjsComponent implements OnInit {

    url1 = 'https://jsonplaceholder.typicode.com/todos/1';
    url2 = 'https://jsonplaceholder.typicode.com/todos/2';
    url3 = 'https://jsonplaceholder.typicode.com/todos/3';

    ngOnInit() { 
        
    }
}
